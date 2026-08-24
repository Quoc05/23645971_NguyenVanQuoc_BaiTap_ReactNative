import React, { useState } from 'react';

import { UserCard } from './Bai1/UserCard';
import { Counter } from './Bai2/Counter';
import { TodoList } from './Bai3/TodoList';
import { MyButton } from './Bai4/CustomButton';
import { LiveInput } from './Bai5/LiveInput';
import { LoadingContainer } from './Bai6/LoadingWrapper';
import { GenderSelector } from './Bai7/GenderSelector';
import { AppButton } from './Bai8/AppButton';
import { NewsFeed } from './Bai9/NewsFeed';
import { UserProfileDetail } from './Bai10/UserProfileDetail';

export const App: React.FC = () => {
  const [tab, setTab] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>


      {/* Nút chọn các bài tập */}
      <div style={{ display: 'flex', gap: '5px', marginBottom: '20px' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button
            key={num}
            onClick={() => setTab(num)}
            style={{
              padding: '6px 12px',
              fontWeight: tab === num ? 'bold' : 'normal',
            }}
          >
            Bài {num}
          </button>
        ))}
      </div>

      <hr />

      {/* Hiển thị bài tập được chọn */}
      <div style={{ marginTop: '20px' }}>
        {tab === 1 && (
          <div>
            <h3>Bài 1: Thẻ thông tin thành viên (UserCard)</h3>
            <UserCard name="Nguyễn Văn Quốc" age={21} isAdmin={true} />
            <UserCard name="Trần Thị Mai" age={20} isAdmin={false} />
          </div>
        )}

        {tab === 2 && (
          <div>
            <h3>Bài 2: Bộ đếm số tăng giảm (Counter)</h3>
            <Counter />
          </div>
        )}

        {tab === 3 && (
          <div>
            <h3>Bài 3: Danh sách việc cần làm đơn giản (Todo Basic)</h3>
            <TodoList />
          </div>
        )}

        {tab === 4 && (
          <div>
            <h3>Bài 4: Nút bấm tùy biến (Custom Button)</h3>
            <MyButton label="Nút mặc định" onPress={() => alert('Đã bấm nút!')} />
            <br /><br />
            <MyButton label="Nút màu đỏ" color="red" onPress={() => alert('Đã bấm nút đỏ!')} />
          </div>
        )}

        {tab === 5 && (
          <div>
            <h3>Bài 5: Ô nhập text phản hồi (Live Input)</h3>
            <LiveInput />
          </div>
        )}

        {tab === 6 && (
          <div>
            <h3>Bài 6: Trạng thái tải trang (Loading Wrapper)</h3>
            <button onClick={() => setIsLoading(!isLoading)}>
              Chuyển isLoading (Hiện tại: {isLoading ? 'true' : 'false'})
            </button>
            <br /><br />
            <LoadingContainer isLoading={isLoading}>
              <p>Nội dung này được hiển thị khi isLoading = false!</p>
            </LoadingContainer>
          </div>
        )}

        {tab === 7 && (
          <div>
            <h3>Bài 7: Chọn giới tính (Gender Selector)</h3>
            <GenderSelector />
          </div>
        )}

        {tab === 8 && (
          <div>
            <h3>Bài 8: AppButton (BookStore)</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <AppButton title="Thêm vào giỏ hàng" variant="primary" size="medium" onPress={() => alert('Thêm giỏ hàng')} />
              <AppButton title="Xem chi tiết" variant="outline" size="medium" onPress={() => alert('Xem chi tiết')} />
              <AppButton title="Xóa sách" variant="danger" size="medium" onPress={() => alert('Xóa sách')} />
            </div>
          </div>
        )}

        {tab === 9 && (
          <div>
            <h3>Bài 9: Danh sách tin tức (News Feed)</h3>
            <NewsFeed />
          </div>
        )}

        {tab === 10 && (
          <div>
            <h3>Bài 10: Chi tiết người dùng (User Profile Detail)</h3>
            <UserProfileDetail />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
