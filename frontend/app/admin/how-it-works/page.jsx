import React from 'react'
import WorkItem from './WorkItem';

export const metadata = {
  title: {
    default: 'How It Works',
  },
};

export default function page() {
  return (
      <div className='flex flex-col gap-2 w-full h-full'>
          <h1 className='text-2xl font-semibold'>Home</h1>
          <WorkItem />
      </div>
  )
}
