import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface todoType {
  id: string;
  title: string;
}

const Todo = () => {
  const [todo, setTodo] = useState<todoType[]>([
    { id: '01', title: 'nau com' },
    { id: '02', title: 'rua chen' },
    { id: '03', title: 'an com' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Danh sách việc cần làm:</Text>
      {todo.map((x) => {
        return (
          <Text key={x.id} style={styles.item}>
            Viec {x.id} - {x.title}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    paddingVertical: 4,
  },
});

export default Todo;
