import React from 'react';
import getAllUsers from '../lib/getAllUsers';
import Link from 'next/link';

export const revalidate = 60;

export default async function page() {
  const data: Promise<User[]> = getAllUsers();

  const users = await data;

  return (
    <div>
      <Link href={'/'} className="underline">
        Go back to home
      </Link>
      {users.map((item) => (
        <h2 key={item.id}>
          <Link href={`/users/${item.id}`}>{item.name}</Link>
        </h2>
      ))}
    </div>
  );
}
