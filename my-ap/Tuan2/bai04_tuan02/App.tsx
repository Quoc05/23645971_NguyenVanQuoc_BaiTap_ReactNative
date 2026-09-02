import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

type CustomError = {
  message: string;
};

const fetchProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/productssss');
    if (!response.ok) {
      throw new Error('Không thể lấy dữ liệu sản phẩm');
    }
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    const customError = error as CustomError;
    alert('Lỗi: ' + customError.message);
  }
};

const APIErrorHandling = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={fetchProducts}>
        <Text style={styles.btnText}>Call API (Thử nghiệm lỗi)</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'flex-start',
  },
  btn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default APIErrorHandling;
