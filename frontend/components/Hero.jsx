import Image from 'next/image'
import React from 'react'

export default function Hero({ title="Title", bgImage = '/assets/hero.png' }) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.9)]">
        <p className='text-2xl md:text-3xl lg:text-4xl font-bold'>{title}</p>
      </div>
      <div className="w-full h-auto max-h-[350px] overflow-hidden">
        <Image src={bgImage} height={500} width={500} alt='' className='w-full h-full object-cover' />
      </div>
    </div>
  )
}
