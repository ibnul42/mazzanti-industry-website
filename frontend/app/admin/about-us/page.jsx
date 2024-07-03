import React from 'react'
import AboutUsItem from './AboutUsItem';

export const metadata = {
  title: {
    default: 'About Us',
  },
};

export default function AboutUsPage() {
  return (
    <div className='flex flex-col gap-2 w-full h-full'>
      <h1 className='text-2xl font-semibold'>About Us</h1>
      <AboutUsItem />
    </div>
  )
}
