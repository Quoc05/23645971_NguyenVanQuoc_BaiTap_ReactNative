import React, { useState } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h4>Giá trị: {count}</h4>
      <button onClick={handleIncrement}>Tăng</button>
      <button onClick={handleDecrement} disabled={count === 0}>
        Giảm
      </button>
    </div>
  );
};

export default Counter;
