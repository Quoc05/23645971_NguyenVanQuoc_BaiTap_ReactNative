import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type Gender = 'male' | 'female' | 'other';

const GenderSelector = () => {
  const [gender, setGender] = useState<Gender>('male');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn giới tính:</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => setGender('male')}>
          <Text style={styles.btnText}>Nam</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setGender('female')}>
          <Text style={styles.btnText}>Nữ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setGender('other')}>
          <Text style={styles.btnText}>Khác</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>Giới tính đã chọn: {gender}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  result: {
    fontSize: 16,
  },
});

export default GenderSelector;
