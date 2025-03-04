import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface CodeInputProps extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  value: string;
  onChangeText: (value: string) => void;
}

export const CodeInput: React.FC<CodeInputProps> = ({ value, onChangeText, ...props }) => {
  const handleChangeText = (text: string) => {
    // Оставляем только цифры
    const numbers = text.replace(/\D/g, '');
    
    // Ограничиваем длину до 6 цифр
    if (numbers.length <= 6) {
      onChangeText(numbers);
    }
  };

  return (
    <TextInput
      {...props}
      value={value}
      onChangeText={handleChangeText}
      keyboardType="numeric"
      maxLength={6}
      style={[styles.input, props.style]}
      placeholder="XXXXXX"
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
    textAlign: 'center',
  },
}); 