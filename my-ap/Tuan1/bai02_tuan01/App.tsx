import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Giá trị: {count}</Text>
      <View style={styles.btnRow}>
        <Pressable style={styles.btn} onPress={() => setCount(count + 1)}>
          <Text style={styles.btnText}>Increase</Text>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => {
            if (count > 0) setCount(count - 1);
          }}
        >
          <Text style={styles.btnText}>Decrease</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
  },
  btnRow: {
    flexDirection: 'row',
    gap: 10,
  },
  btn: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Counter;
