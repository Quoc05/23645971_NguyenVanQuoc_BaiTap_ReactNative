import React, { useState } from 'react';
import { View, ActivityIndicator, Text, Pressable, StyleSheet } from 'react-native';

type LoadingType = {
  isLoading: boolean;
  children?: React.ReactNode;
};

const LoadingWrapper = ({ isLoading, children }: LoadingType) => {
  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.text}>Đang tải...</Text>
      </View>
    );
  }

  return <>{children}</>;
};

const Test = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={() => setLoading(!loading)}>
        <Text style={styles.btnText}>Toggle Loading ({loading ? 'Đang load' : 'Xong'})</Text>
      </Pressable>

      <LoadingWrapper isLoading={loading}>
        <Text style={styles.content}>Nội dung đã tải xong!</Text>
      </LoadingWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  center: {
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    marginTop: 8,
    fontSize: 16,
  },
  content: {
    fontSize: 18,
    marginTop: 20,
    color: 'green',
  },
  btn: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    maxWidth: 240,
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default Test;
