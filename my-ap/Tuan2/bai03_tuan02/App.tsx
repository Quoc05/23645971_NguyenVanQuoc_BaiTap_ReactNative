import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList, StyleSheet } from 'react-native';

type ProductType = {
  id: number;
  title: string;
  price: number;
};

const fetchProducts = async (keyword: string, limit: number) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${keyword}&limit=${limit}`
  );
  const data = await response.json();
  return data.products;
};

const ProductSearchAPI = () => {
  const [keyword, setKeyword] = useState('');
  const [products, setProducts] = useState<ProductType[]>([]);

  const searchProducts = async () => {
    const result = await fetchProducts(keyword, 10);
    setProducts(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tìm sản phẩm</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập từ khóa"
        value={keyword}
        onChangeText={setKeyword}
      />
      <Pressable style={styles.btn} onPress={searchProducts}>
        <Text style={styles.btnText}>Tìm kiếm</Text>
      </Pressable>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  item: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 16,
    flex: 1,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductSearchAPI;
