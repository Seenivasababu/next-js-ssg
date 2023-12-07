import Image from 'next/image';
import getAllUsers from './lib/getAllUsers';
import Link from 'next/link';

export default async function Home() {
  return (
    <Link href={'/users'} className="underline">
      Users
    </Link>
  );
}
