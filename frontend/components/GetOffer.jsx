import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function GetOffer() {
    return (
        <div className="bg-mazzanti-gray">
            <div className="max-w-[1440px] mx-auto py-5 px-4 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="col-span-1 md:col-span-2">
                        <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center">Sell Your House in Probate - Get an Offer in 10 minutes or Less</p>
                    </div>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder='First Name' className='col-span-2 lg:col-span-1 outline-none px-2 py-1 placeholder:text-gray-500 lg:me-2' />
                        <input type="text" placeholder='Last Name' className='col-span-2 lg:col-span-1 outline-none px-2 py-1 placeholder:text-gray-500 lg:ms-2' />
                        <input type="email" placeholder='Email Address' className='col-span-2 lg:col-span-1 outline-none px-2 py-1 placeholder:text-gray-500 lg:me-2' />
                        <input type="tel" placeholder='Phone Number' className='col-span-2 lg:col-span-1 outline-none px-2 py-1 placeholder:text-gray-500 lg:ms-2' />
                        <input type="text" placeholder='Address To Sell' className='outline-none px-2 py-1 placeholder:text-gray-500 col-span-2' />
                    </form>
                    <div className="flex justify-center md:justify-start items-center relative py-10">
                        <div className="absolute bottom-0 right-0">
                            <div className="flex gap-3 items-center">
                                <Image src='/assets/icons/phone.svg' height={15} width={15} alt='' className='w-5 h-auto' />
                                <Link href="tel:8895959595">call this number 889-5959595</Link>
                            </div>
                        </div>
                        <button className="bg-mazzanti-darksky hover:bg-mazzanti-darksky/80 rounded-sm font-bold py-2 px-5 h-fit">Get Your Free offer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
