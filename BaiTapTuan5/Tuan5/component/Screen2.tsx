import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
const COLOR_OPTIONS = [
  {
    id: 1,
    name: 'bạc',
    colorCode: '#C5F1FB',
    img: 'BaiTapTuan5/anhmau/542e5500dae29e1a09612c48758646292d3a22a2.png',
  },
  {
    id: 2,
    name: 'đỏ',
    colorCode: '#F30D0D',
    img: 'BaiTapTuan5/anhmau/cc489fb738f608fb6fb887912e810af3b91e12c1.png',
  },
  {
    id: 3,
    name: 'đen',
    colorCode: '#000000',
    img: 'BaiTapTuan5/anhmau/542e5500dae29e1a09612c48758646292d3a22a2.png',
  },
  {
    id: 4,
    name: 'xanh',
    colorCode: '#234896',
    img: 'https://cdn.tgdd.vn/Products/Images/42/214909/vsmart-joy-3-xanh-600x600.jpg',
  },
];

export default function Screen2({ navigation, route }: any) {
  const [selected, setSelected] = useState(route.params?.currentPhone || COLOR_OPTIONS[3]);

  const handleFinish = () => {
    navigation.navigate('Screen1', { phone: selected });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: selected.img }} style={styles.previewImage} resizeMode="contain" />
        <View style={styles.headerInfo}>
          <Text style={styles.productName}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.productName}>Hàng chính hãng</Text>
          <Text style={styles.infoText}>Màu: <Text style={styles.bold}>{selected.name}</Text></Text>
          <Text style={styles.infoText}>Cung cấp bởi <Text style={styles.bold}>Tiki Tradding</Text></Text>
          <Text style={styles.price}>1.790.000 đ</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.guideText}>Chọn một màu bên dưới:</Text>

        <View style={styles.colorPalette}>
          {COLOR_OPTIONS.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.colorBox,
                { backgroundColor: item.colorCode },
                selected.name === item.name && styles.activeBox,
              ]}
              onPress={() => setSelected(item)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.btnDone} onPress={handleFinish}>
          <Text style={styles.btnDoneText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    gap: 15,
  },
  previewImage: {
    width: 90,
    height: 120,
  },
  headerInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 15,
    color: '#000',
  },
  infoText: {
    fontSize: 14,
    color: '#000',
  },
  bold: {
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  body: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    padding: 15,
    justifyContent: 'space-between',
  },
  guideText: {
    fontSize: 16,
    color: '#000',
  },
  colorPalette: {
    alignItems: 'center',
    gap: 12,
  },
  colorBox: {
    width: 80,
    height: 75,
  },
  activeBox: {
    borderWidth: 2,
    borderColor: '#fff',
  },
  btnDone: {
    backgroundColor: 'rgba(25, 82, 226, 0.9)',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  btnDoneText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});