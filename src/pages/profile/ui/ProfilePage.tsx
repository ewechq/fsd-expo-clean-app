import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ProfilePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Профиль</Text>
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