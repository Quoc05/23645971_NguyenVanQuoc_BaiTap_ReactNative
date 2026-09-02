import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

interface myType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const NewsFeed = () => {
  const [news, setNews] = useState<myType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        setNews(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>
              ID: {item.id} - {item.title}
            </Text>
            <Text>User ID: {item.userId}</Text>
            <Text>Completed: {item.completed ? 'true' : 'false'}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default NewsFeed;
