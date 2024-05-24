import React from 'react'
import ForeclosureItems from './ForeclosureItems';

export const metadata = {
    title: {
        default: 'Stop Foreclosure',
    },
  };

export default function StopForeclosurePage() {
  return (
    <div className='flex flex-col gap-2 w-full h-full'>
          <h1 className='text-2xl font-semibold'>Foreclosures</h1>
          <ForeclosureItems />
      </div>
  )
}
