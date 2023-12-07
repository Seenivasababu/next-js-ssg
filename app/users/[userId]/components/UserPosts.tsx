import getAllPosts from '@/app/lib/getAllPosts';
import React from 'react';

export default async function  UserPosts({ userId }: { userId: string }) {
  const posts: Post[] = await getAllPosts(userId);
  if (!posts) {
    return;
  }
  return (
    <div>
      <h2>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h2 className='font-semibold'>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </h2>
    </div>
  );
}
