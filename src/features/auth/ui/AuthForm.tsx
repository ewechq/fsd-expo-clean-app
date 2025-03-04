import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Button } from '../../../shared/ui/Button/Button';
import { PhoneInput } from '../../../shared/ui/Input/PhoneInput';
import { CodeInput } from '../../../shared/ui/Input/CodeInput';
import { useAuth } from '../model/useAuth';

export const AuthForm: React.FC = () => {
  const {
    phone,
    setPhone,
    code,
    setCode,
    isCodeSent,
    isLoading,
    handleSendCode,
    handleLogin,
  } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isCodeSent
          ? 'Введите код отправленный вам по смс'
          : 'Введите свой номер телефона чтобы войти:'}
      </Text>

      {!isCodeSent ? (
        <PhoneInput
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          editable={!isLoading}
        />
      ) : (
        <CodeInput
          value={code}
          onChangeText={setCode}
          style={styles.input}
          editable={!isLoading}
        />
      )}

      <Button
        title={isCodeSent ? 'Войти' : 'Получить код'}
        onPress={isCodeSent ? handleLogin : handleSendCode}
        disabled={isLoading}
      />

      {isLoading && (
        <ActivityIndicator style={styles.loader} size="large" color="#007AFF" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
}); 