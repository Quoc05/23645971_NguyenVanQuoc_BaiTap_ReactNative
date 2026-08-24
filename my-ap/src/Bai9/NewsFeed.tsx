import React, { useEffect, useState } from 'react';

export interface Post {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const NewsFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data as Post[]);
      });
  }, []);

  return (
    <div>
      <h4>Danh sách bài viết (API todos):</h4>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
