export default async function getAllPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!res.ok) {
    return <h2>Error</h2>;
  }
  return res.json();
}
