import getUser from '@/app/lib/getUser'
import React from 'react'
import UserPosts from './components/UserPosts'
import getAllUsers from '@/app/lib/getAllUsers';

export const revalidate = 60;

type Params = {
   params : {
      userId : string
   }
}
export default async function page({params}:Params) {
   const userData:User = await getUser(params.userId)

   
  return (
    <div>
      <h2>{userData.name}</h2>
      <UserPosts userId={params.userId}/>
    </div>
  )
}

export async function generateStaticParams(){
   const userData:User[] = await getAllUsers()
   return userData.map(user=>({userId:user.id.toString()}))

}