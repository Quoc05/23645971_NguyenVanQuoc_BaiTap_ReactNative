import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface userType {
  name: string;
  age: number;
  isAdmin: boolean;
}

const UserCard = ({ name, age, isAdmin }: userType) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Họ tên: {name}</Text>
      <Text style={styles.text}>Tuổi: {age}</Text>
      <Text style={styles.text}>Vai trò: {isAdmin ? 'admin' : 'user'}</Text>
    </View>
  );
};

const Test = () => {
  return (
    <View style={styles.container}>
      <UserCard name="Quốc" age={21} isAdmin={true} />
      <UserCard name="Huy" age={21} isAdmin={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Test;
