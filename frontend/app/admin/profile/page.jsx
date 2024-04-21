import React from 'react'
import ProfileForm from './ProfileForm';

export const metadata = {
    title: {
        default: 'Profile',
    },
};

export default function page() {
  return (
    <div className='flex flex-col gap-2 w-full h-full'>
      <h1 className='text-2xl font-semibold'>Profile</h1>
      <ProfileForm />
    </div>
  )
}
