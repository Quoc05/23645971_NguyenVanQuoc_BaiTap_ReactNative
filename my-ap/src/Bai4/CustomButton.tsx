import React from 'react';

interface MyButtonProps {
  label: string;
  onPress: () => void;
  color?: string;
}

export const MyButton: React.FC<MyButtonProps> = ({
  label,
  onPress,
  color = 'blue',
}) => {
  return (
    <button onClick={onPress} style={{ backgroundColor: color, color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
      {label}
    </button>
  );
};

export default MyButton;
