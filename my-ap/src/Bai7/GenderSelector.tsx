import React, { useState } from 'react';

export type Gender = 'male' | 'female' | 'other';

export const GenderSelector: React.FC = () => {
  const [gender, setGender] = useState<Gender>('male');

  return (
    <div>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={() => setGender('male')}
        />
        Male
      </label>
      <label style={{ marginLeft: '10px' }}>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={() => setGender('female')}
        />
        Female
      </label>
      <label style={{ marginLeft: '10px' }}>
        <input
          type="radio"
          name="gender"
          value="other"
          checked={gender === 'other'}
          onChange={() => setGender('other')}
        />
        Other
      </label>

      <p>Giới tính đã chọn: <strong>{gender}</strong></p>
    </div>
  );
};

export default GenderSelector;
