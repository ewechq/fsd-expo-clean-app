import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../../../shared/ui/Button/Button';

export const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FSD App</Text>
      <Button 
        title="Example Button" 
        onPress={() => console.log('Button pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
}); 