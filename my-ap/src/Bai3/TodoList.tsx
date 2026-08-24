import React, { useState } from 'react';

interface Todo {
  id: string;
  title: string;
}

export const TodoList: React.FC = () => {
  const [todos] = useState<Todo[]>([
    { id: '1', title: 'Học TypeScript' },
    { id: '2', title: 'Thực hành React State' },
    { id: '3', title: 'Làm bài tập Lab 1' },
  ]);

  return (
    <div>
      <h4>Danh sách việc cần làm:</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
