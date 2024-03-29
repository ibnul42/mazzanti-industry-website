'use client'
import { navItems } from '@/app/utils/helpers'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  console.log(pathname)
  return (
    <div className='text-white'>
      <div className="lg:hidden flex flex-col gap-2 relative">
        <div className="bg-mazzanti-black py-3 px-2 flex justify-between items-center">
          <div className="">
            <Image src='/assets/logo.svg' height={15} width={15} alt='' className='w-12 h-auto' />
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`h-12 w-12 flex flex-col justify-between items-center rounded cursor-pointer lg:hidden border ${isOpen ? "p-2" : "p-3"
              } z-50`} >
            <div
              className={`w-full h-1 rounded-2xl bg-white transition-all duration-200 ease-in ${isOpen ? "rotate-45 mt-4 block" : ""
                }`}
            ></div>
            <div
              className={`w-full h-1 rounded-2xl bg-white transition-all duration-200 ease-in ${isOpen ? "hidden mb-5" : ""
                }`}
            ></div>
            <div
              className={`w-full h-1 rounded-2xl bg-white transition-all duration-200 ease-in ${isOpen ? "-rotate-45 mb-3 inline-block" : ""
                }`}
            ></div>
          </div>
        </div>
        <div className={`absolute top-20 bg-mazzanti-black py-3 px-2 w-full h-screen flex flex-col transition-all duration-200 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-20'}`}>
          {navItems.map((item, index) => (
            <Link key={index} href={item.link} className='py-3 hover:bg-mazzanti-black/70 hover:text-mazzanti-green'>{item.title}</Link>
          ))}
        </div>
      </div>
      <div className="hidden lg:block bg-mazzanti-black py-0.5 px-4">
        <div className="max-w-[1440px] mx-auto flex gap-10 items-center">
          <div className="">
            <Image src='/assets/logo.svg' height={15} width={15} alt='' className='w-20 h-auto' />
          </div>
          <div className="flex-1 flex justify-center gap-10">
            {navItems.map((item, index) => (
              <Link key={index} href={item.link} className={`py-3 hover:bg-mazzanti-black/70 hover:text-mazzanti-green ${pathname === item.link ? 'text-mazzanti-green':''}`}>{item.title}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar