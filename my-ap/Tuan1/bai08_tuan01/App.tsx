import React from 'react';
import { View, StyleSheet, Pressable, ActivityIndicator, Text } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface myType {
  title: string;
  variant: ButtonVariant;
  size: ButtonSize;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const AppButton = ({
  title,
  variant,
  size,
  onPress,
  disabled = false,
  loading = false,
  icon,
}: myType) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'outline' && styles.outline,
        variant === 'danger' && styles.danger,
        size === 'small' && styles.small,
        size === 'medium' && styles.medium,
        size === 'large' && styles.large,
        disabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? 'green' : '#fff'} />
      ) : (
        <Text style={[styles.text, variant === 'outline' && styles.outlineText]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

const BookStore = () => {
  return (
    <View style={styles.container}>
      <AppButton
        title="Thêm vào giỏ hàng"
        variant="primary"
        size="small"
        onPress={() => console.log('Thêm vào giỏ hàng')}
      />
      <AppButton
        title="Xem chi tiết"
        variant="outline"
        size="medium"
        onPress={() => console.log('Xem chi tiết')}
      />
      <AppButton
        title="Xóa sách"
        variant="danger"
        size="large"
        onPress={() => console.log('Xóa sách')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
  },
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal: 15,
  },
  primary: { backgroundColor: 'blue' },
  secondary: { backgroundColor: 'gray' },
  outline: { backgroundColor: 'transparent', borderWidth: 1, borderColor: 'green' },
  danger: { backgroundColor: 'red' },
  small: { height: 36 },
  medium: { height: 48 },
  large: { height: 56 },
  disabled: { opacity: 0.6 },
  text: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  outlineText: { color: 'green' },
});

export default BookStore;
