import React, { useState } from 'react';

export const LiveInput: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập văn bản..."
        style={{ padding: '6px', width: '250px' }}
      />
      <p>Số ký tự đang gõ: <strong>{text.length}</strong></p>
    </div>
  );
};

export default LiveInput;
