import { useState } from 'react';
import { Alert } from 'react-native';
import { authApi } from '../../../shared/api/auth/auth';
import { router } from 'expo-router';
import { isValidPhoneNumber } from '../../../shared/lib/format/phone';
import { tokenService } from '../../../shared/lib/token/tokenService';

export const useAuth = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = async () => {
    if (!isValidPhoneNumber(phone)) {
      Alert.alert('Ошибка', 'Введите корректный номер телефона');
      return;
    }

    try {
      setIsLoading(true);
      await authApi.getCode(phone);
      setIsCodeSent(true);
    } catch (error) {
      Alert.alert('Ошибка', 'Не удалось отправить код');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    if (code.length !== 6) {
      Alert.alert('Ошибка', 'Введите корректный код');
      return;
    }

    try {
      setIsLoading(true);
      const response = await authApi.login(phone, code);
      await tokenService.saveToken(response.access_token);
      router.replace('/(tabs)');
    } catch (error) {
      Alert.alert('Ошибка', 'Неверный код');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    phone,
    setPhone,
    code,
    setCode,
    isCodeSent,
    isLoading,
    handleSendCode,
    handleLogin,
  };
}; 