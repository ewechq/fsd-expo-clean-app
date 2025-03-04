import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AuthForm } from '../../../features/auth/ui/AuthForm';

export const AuthPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <AuthForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
}); 