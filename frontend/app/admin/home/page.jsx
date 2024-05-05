import React from 'react'
import HomeItem from './HomeItem';

export const metadata = {
    title: {
        default: 'Home',
    },
};

export default function page() {
    return (
        <div className='flex flex-col gap-2 w-full h-full'>
            <h1 className='text-2xl font-semibold'>Home</h1>
            <HomeItem />
        </div>
    )
}
