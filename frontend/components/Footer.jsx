import { navItems } from '@/app/utils/helpers'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='relative'>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40 z-10"></div>
            <div className="absolute -top-12 md:-top-11 left-0 w-full flex justify-center">
                <div className="bg-mazzanti-darksky px-2 py-2 w-full max-w-2xl space-y-3">
                    <p className='text-2xl font-bold text-center text-white'>Subscribe to our News</p>
                    <p className='text-xs md:text-sm text-white'>Get the latest real estate offers by subscribing to our newsletter so you don&apos;t miss a thing!</p>
                    <div className="flex justify-center">
                        <form action="" className='bg-white p-0.5 flex w-full max-w-72'>
                            <input type="text" placeholder='@email' className='flex-1 bg-white outline-none text-sm placeholder:text-sm px-2 py-1' />
                            <button className='bg-mazzanti-green/80 hover:bg-mazzanti-green text-sm px-4 text-black/70'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-mazzanti-gray px-4 pt-24 pb-3 grid grid-cols-12 text-white">
                <div className={`col-span-12 md:col-span-5 lg:col-span-6 flex-1 py-3 px-2 w-full h-full flex flex-col transition-all duration-200`}>
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.link} className='py-3 hover:text-mazzanti-green'>{item.title}</Link>
                    ))}
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-6 px-3 grid grid-cols-1 md:grid-cols-2 gap-5 relative">
                    <div className={`hidden md:block absolute top-0 left-0 h-full w-0.5 py-5`}>
                        <div className="w-full h-full bg-gray-300"></div>
                    </div>
                    <div className="flex flex-col gap-5 justify-center">
                        <p className='font-semibold text-lg'>Opening hours</p>
                        <div className="text-sm max-w-[250px] space-y-4">
                            <p>Monday to Friday from 8.30 to 12.30 and from 13.30 to 18.00</p>
                            <p>Saturday by appointment only</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 justify-center">
                        <p className='font-semibold text-lg'>Property Investment City</p>
                        <div className="text-sm">
                            <p>10 Boulevard Royal</p>
                            <p>L-2449 Luxembourg</p>
                            <div className="flex gap-2">
                                <p>Phone: </p>
                                <a href="tel:+35226787837">(+352) 26 78 78 37</a>
                            </div>
                            <div className="flex gap-2">
                                <p>Email:</p>
                                <a href="mailto:info@propertyinvest.lu">info@propertyinvest.lu</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-mazzanti-darksky py-5">
                <p className='text-center'>2024 Mazzanti.</p>
            </div>
        </div>
    )
}
