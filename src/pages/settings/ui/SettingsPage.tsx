import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../../../shared/ui/Button/Button';
import { tokenService } from '../../../shared/lib/token/tokenService';
import { router } from 'expo-router';

export const SettingsPage: React.FC = () => {
  const handleLogout = async () => {
    await tokenService.removeToken();
    router.replace('/(auth)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Настройки</Text>
      <Button title="Выйти" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
}); 