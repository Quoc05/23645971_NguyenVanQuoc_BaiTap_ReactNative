import React from 'react';

interface UserCardProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

export const UserCard: React.FC<UserCardProps> = ({ name, age, isAdmin }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h4>{name} {isAdmin && '(Admin)'}</h4>
      <p>Tuổi: {age}</p>
      <p>Vai trò: {isAdmin ? 'Quản trị viên' : 'Thành viên'}</p>
    </div>
  );
};

export default UserCard;
