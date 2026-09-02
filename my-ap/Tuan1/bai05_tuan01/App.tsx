import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const LiveInput = () => {
  const [text, setText] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Số ký tự: {text.length}</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(value: string) => {
          setText(value);
        }}
        placeholder="Nhập nội dung..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  counter: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    fontSize: 16,
  },
});

export default LiveInput;
