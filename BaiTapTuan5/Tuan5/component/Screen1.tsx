import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Screen1({ navigation, route }: any) {
  const phone = route.params?.phone || {
    name: 'xanh',
    img: 'BaiTapTuan5/anhmau/fae2fb74dfc5e3d8ad7457739c07b2ee59e42744.png',
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Image source={{ uri: phone.img }} style={styles.mainImage} resizeMode="contain" />

        <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

        <View style={styles.row}>
          <Text style={styles.stars}>★★★★★</Text>
          <Text style={styles.reviewText}>(Xem 828 đánh giá)</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>1.790.000 đ</Text>
          <Text style={styles.oldPrice}>1.790.000 đ</Text>
        </View>

        <Text style={styles.refund}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN <Text style={styles.questionMark}>?</Text>
        </Text>

        <TouchableOpacity
          style={styles.btnSelectColor}
          onPress={() => navigation.navigate('Screen2', { currentPhone: phone })}
        >
          <Text style={styles.btnSelectText}>4 MÀU-CHỌN MÀU</Text>
          <Text style={styles.arrow}>&gt;</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btnBuy}>
        <Text style={styles.btnBuyText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: 20,
  },
  topSection: {
    width: '100%',
  },
  mainImage: {
    width: '100%',
    height: 300,
    marginBottom: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stars: {
    color: '#E0E41A',
    fontSize: 18,
    marginRight: 15,
    letterSpacing: 2,
  },
  reviewText: {
    fontSize: 14,
    color: '#000',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  oldPrice: {
    fontSize: 15,
    color: '#666',
    textDecorationLine: 'line-through',
  },
  refund: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FA0000',
    marginBottom: 15,
  },
  questionMark: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 4,
    fontSize: 11,
    color: '#000',
  },
  btnSelectColor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  btnSelectText: {
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  arrow: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnBuy: {
    backgroundColor: '#EE0A0A',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  btnBuyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});