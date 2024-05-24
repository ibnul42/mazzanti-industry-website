import React from 'react'
import OfferItem from './OfferItem';

export const metadata = {
  title: {
    default: 'Offers',
  },
};

export default function page() {
  return (
      <div className='flex flex-col gap-2 w-full h-full'>
          <h1 className='text-2xl font-semibold'>Offers</h1>
          <OfferItem />
      </div>
  )
}
