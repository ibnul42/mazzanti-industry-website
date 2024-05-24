import React from 'react'
import ProbateItem from './ProbateItem';

export const metadata = {
  title: {
    default: 'Probate',
  },
};

export default function ProbatePage() {
  return (
    <div className='flex flex-col gap-2 w-full h-full'>
      <h1 className='text-2xl font-semibold'>Probate</h1>
      <ProbateItem />
    </div>
  )
}
