import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

interface ButtonType {
  label: string;
  onPress: () => void;
  color?: string;
}

const MyButton = ({ label, onPress, color = 'blue' }: ButtonType) => {
  return (
    <Pressable onPress={onPress} style={[styles.btn, { backgroundColor: color }]}>
      <Text style={styles.btnText}>{label}</Text>
    </Pressable>
  );
};

const Test = () => {
  return (
    <View style={styles.container}>
      <MyButton label="OnPress (Default Blue)" onPress={() => alert('Hello')} />
      <MyButton label="OnPress (Custom Red)" onPress={() => alert('Button Red')} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
    alignItems: 'flex-start',
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Test;
