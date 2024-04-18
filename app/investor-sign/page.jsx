import React from 'react'

export const metadata = {
    title: {
        default: 'Investor Sign',
    },
};

export default function page() {
    return (
        <main className="flex-1 bg-mazzanti-black text-white">
            <div className="max-w-[1440px] mx-auto pt-5 pb-20 px-4 space-y-8">
                <div className="flex justify-center">
                    <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center max-w-7xl">Sign Up to be included in our Investor Database to receive new opportunities</p>
                </div>
                <div className="space-y-2 py-5">
                    <p>&quot;*&quot; indicates required fields</p>
                    <form action="" className='space-y-3'>
                        <div className="grid grid-cols-2 gap-3">
                            <p className='col-span-2'>Name*</p>
                            <div className="col-span-2 md:col-span-1 space-y-1">
                                <input type="text" required className='w-full text-black outline-none px-2 py-1 placeholder:text-gray-500 lg:me-2' />
                                <p className='text-sm'>First</p>
                            </div>
                            <div className="col-span-2 md:col-span-1 space-y-1">
                                <input type="text" required className='w-full text-black outline-none px-2 py-1 placeholder:text-gray-500 lg:me-2' />
                                <p className='text-sm'>Last</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <p className='col-span-2'>Email*</p>
                            <input type="email" required className='col-span-2 w-full text-black outline-none px-2 py-1 placeholder:text-gray-500 lg:me-2' />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <p className='col-span-2'>Phone*</p>
                            <input type="tel" required className='col-span-2 w-full text-black outline-none px-2 py-1 placeholder:text-gray-500 lg:me-2' />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <p className='col-span-2'>Message</p>
                            <textarea className='col-span-2 h-24 md:h-28 lg:h-36 w-full text-black outline-none px-2 py-1 placeholder:text-gray-500 lg:me-2' />
                        </div>
                        <div className="">
                            <button type='submit' className='bg-mazzanti-darksky hover:bg-mazzanti-darksky/80 text-sm px-5 py-2 text-white'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
