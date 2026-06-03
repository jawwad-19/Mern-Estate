import React from 'react'
import { useSelector } from 'react-redux'
export default function Profile() {
  const user = useSelector((state) => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center font-semibold my-7 text-3xl'>Profile</h1>
      <form className='flex flex-col items-center gap-4'>
        <img src={user.currentUser.avatar} alt="Profile"
        className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>
        <input id= "username" type="text" placeholder='username' className='border p-3 rounded-lg w-full' />
        <input id="email" type="text" placeholder='email' className='border p-3 rounded-lg w-full' />
        <input id="password" type="text" placeholder='password' className='border p-3 rounded-lg w-full' />
        <button className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-90 uppercase w-full'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-500 cursor-pointer hover:underline'>Delete Account</span>
        <span className='text-blue-500 cursor-pointer hover:underline'>Sign Out</span>
      </div>
    </div>
  )
}
