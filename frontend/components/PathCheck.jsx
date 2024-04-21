'use client'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { usePathname } from 'next/navigation'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PathCheck({ children }) {
    const pathname = usePathname();
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        setIsAdmin(pathname.includes('/admin/') ? true : false)
    }, [pathname])
    return (
        <div className='flex flex-col min-h-screen bg-white'>
            <Navbar />
            <div className="flex-1 flex">
                {children}
            </div>
            {!isAdmin && <Footer />}
            <ToastContainer
            position="top-center"
            />
        </div>
    )
}
