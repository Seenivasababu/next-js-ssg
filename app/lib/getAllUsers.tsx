

export default async function getAllUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  
  if(!res.ok){
   return <h2>Error</h2>
  }
  return res.json();
}
