import React, { useEffect, useState } from 'react';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const UserProfileDetail: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((data: User) => {
        setUser(data);
      });
  }, []);

  if (!user) {
    return null; // Trạng thái màn hình trống khi chưa có dữ liệu
  }

  return (
    <div>
      <h4>Chi tiết người dùng:</h4>
      <p>Họ tên: {user?.name}</p>
      <p>Username: {user?.username}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default UserProfileDetail;
