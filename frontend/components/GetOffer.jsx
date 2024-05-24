'use client'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function GetOffer() {
    const [inputValue, setInputValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
    })
    const { firstName, lastName, email, phoneNumber, address } = inputValue;

    const handleChange = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.NEXT_PUBLIC_API}/admin/offer/create-offer`, inputValue)
        .then(res => {
            if(res?.status === 201){
                toast.success(res.data.message)
                setInputValue({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    address: '',
                })
            }
        })
        .catch(err => {
            if(err.response.status === 404)
                toast.error(err.response.data.message)
        })
    }

    return (
        <div className="bg-mazzanti-gray">
            <div className="max-w-[1440px] mx-auto py-5 px-4 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="col-span-1 md:col-span-2">
                        <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center">Sell Your House in Probate - Get an Offer in 10 minutes or Less</p>
                    </div>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                        <input name='firstName' value={firstName} onChange={handleChange} type="text" placeholder='First Name' className='col-span-2 lg:col-span-1 outline-none px-2 py-1 placeholder:text-gray-500 lg:me-2' />
                        <input name='lastName' value={lastName} onChange={handleChange} type="text" placeholder='Last Name' className='col-span-2 lg:col-span-1 outline-none px-2 py-1 placeholder:text-gray-500 lg:ms-2' />
                        <input name='email' value={email} onChange={handleChange} type="email" placeholder='Email Address' className='col-span-2 lg:col-span-1 outline-none px-2 py-1 placeholder:text-gray-500 lg:me-2' />
                        <input name='phoneNumber' value={phoneNumber} onChange={handleChange} type="tel" placeholder='Phone Number' className='col-span-2 lg:col-span-1 outline-none px-2 py-1 placeholder:text-gray-500 lg:ms-2' />
                        <input name='address' value={address} onChange={handleChange} type="text" placeholder='Address To Sell' className='outline-none px-2 py-1 placeholder:text-gray-500 col-span-2' />
                    </form>
                    <div className="flex justify-center md:justify-start items-center relative py-10">
                        <div className="absolute bottom-0 right-0">
                            <div className="flex gap-3 items-center">
                                <Image src='/assets/icons/phone.svg' height={15} width={15} alt='' className='w-5 h-auto' />
                                <Link href="tel:8895959595">call this number 889-5959595</Link>
                            </div>
                        </div>
                        <button onClick={handleSubmit} className="bg-mazzanti-darksky hover:bg-mazzanti-darksky/80 rounded-sm font-bold py-2 px-5 h-fit">Get Your Free offer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
