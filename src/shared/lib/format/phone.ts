export const formatPhoneNumber = (value: string): string => {
  // Очищаем от всего кроме цифр
  const numbers = value.replace(/\D/g, '');
  
  // Если пустая строка или только 7, возвращаем +7
  if (!numbers || numbers === '7') {
    return '+7';
  }

  // Убираем 7 в начале если есть
  const cleaned = numbers.startsWith('7') ? numbers.slice(1) : numbers;

  // Форматируем остальные цифры
  let formatted = '+7';
  if (cleaned.length > 0) {
    formatted += ' (' + cleaned.slice(0, 3);
  }
  if (cleaned.length > 3) {
    formatted += ') ' + cleaned.slice(3, 6);
  }
  if (cleaned.length > 6) {
    formatted += '-' + cleaned.slice(6, 8);
  }
  if (cleaned.length > 8) {
    formatted += '-' + cleaned.slice(8, 10);
  }

  return formatted;
};

export const unformatPhoneNumber = (formatted: string): string => {
  // Очищаем от всего кроме цифр
  const numbers = formatted.replace(/\D/g, '');
  
  // Убираем 7 в начале если есть
  return numbers.startsWith('7') ? numbers.slice(1) : numbers;
};

export const isValidPhoneNumber = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 10;
}; 