import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

type Product = {
  id: number;
  name: string;
  price: number;
};

type User = {
  id: number;
  name: string;
  age: number;
};

const filterByName = <T extends { name: string }>(data: T[], keyword: string) => {
  return data.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
};

const FilteredListGeneric = () => {
  const products: Product[] = [
    { id: 1, name: 'iPhone 15', price: 1000 },
    { id: 2, name: 'Samsung Galaxy', price: 800 },
    { id: 3, name: 'iPhone 14', price: 700 },
  ];
  const users: User[] = [
    { id: 1, name: 'Khanh', age: 21 },
    { id: 2, name: 'Khoa', age: 22 },
    { id: 3, name: 'Quốc', age: 20 },
  ];

  const result = filterByName(products, 'iPhone');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kết quả tìm được (Lọc 'iPhone'):</Text>
      <FlatList
        data={result}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>
              {item.name} - ${item.price}
            </Text>
          </View>
        )}
      />
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
  item: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    fontSize: 16,
  },
});

export default FilteredListGeneric;
