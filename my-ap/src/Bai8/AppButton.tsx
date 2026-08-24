import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

interface AppButtonProps {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: { backgroundColor: '#007bff', color: '#fff', border: 'none' },
  secondary: { backgroundColor: '#6c757d', color: '#fff', border: 'none' },
  outline: { backgroundColor: 'transparent', color: '#007bff', border: '1px solid #007bff' },
  danger: { backgroundColor: '#dc3545', color: '#fff', border: 'none' },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  small: { padding: '4px 8px', fontSize: '12px' },
  medium: { padding: '8px 16px', fontSize: '14px' },
  large: { padding: '12px 24px', fontSize: '16px' },
};

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  onPress,
  disabled = false,
  loading = false,
  icon,
}) => {
  const style: React.CSSProperties = {
    ...variantStyles[variant],
    ...sizeStyles[size],
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    borderRadius: '4px',
  };

  return (
    <button onClick={onPress} disabled={disabled || loading} style={style}>
      {loading ? (
        'ActivityIndicator...'
      ) : (
        <>
          {icon && <span style={{ marginRight: '4px' }}>{icon}</span>}
          {title}
        </>
      )}
    </button>
  );
};

export default AppButton;
