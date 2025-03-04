import React from 'react';
import { TextInput, StyleSheet, TextInputProps, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { formatPhoneNumber, unformatPhoneNumber } from '../../lib/format/phone';

interface PhoneInputProps extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  value: string;
  onChangeText: (value: string) => void;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChangeText, style, ...props }) => {
  // Форматированное значение для отображения
  const displayValue = value ? formatPhoneNumber(value) : '';

  const handleChangeText = (text: string) => {
    // Получаем только цифры без форматирования
    const unformatted = unformatPhoneNumber(text);
    
    // Ограничиваем длину до 10 цифр
    if (unformatted.length <= 10) {
      onChangeText(unformatted);
    }
  };

  // Запрещаем ввод букв и других символов
  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (!/^\d$/.test(e.nativeEvent.key) && e.nativeEvent.key !== 'Backspace') {
      e.preventDefault();
    }
  };

  return (
    <TextInput
      {...props}
      value={displayValue}
      onChangeText={handleChangeText}
      onKeyPress={handleKeyPress}
      keyboardType="numeric"
      placeholder="+7 (999) 999-99-99"
      style={[styles.input, style]}
      maxLength={18} // +7 (XXX) XXX-XX-XX
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
}); 