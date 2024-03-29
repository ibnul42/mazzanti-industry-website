import Image from 'next/image'
import React from 'react'
// import bg from '/assets/hero.png'

export default function Hero({title}) {
  return (
    <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.9)]">
            <p className='text-2xl font-bold'>{title}</p>
        </div>
      <Image src='/assets/hero.png' height={500} width={500} alt='' className='w-full h-auto object-contain' />
    </div>
  )
}
