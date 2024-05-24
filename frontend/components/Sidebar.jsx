'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const menuItems = [
    { title: 'Profile', path: '/admin/profile' },
    { title: 'Home', path: '/admin/home' },
    { title: 'How it works', path: '/admin/how-it-works' },
    { title: 'Probate', path: '/admin/probate' },
    { title: 'Stop foreclosure', path: '/admin/stop-foreclosure' },
    { title: 'Investor sign up', path: '/admin/investor-sign' },
    { title: 'Offers', path: '/admin/offer' },
    { title: 'About us', path: '/admin/about-us' },
]
export default function Sidebar() {
    const pathname = usePathname()
    const router = useRouter()
    return (
        <div className='w-40 h-full flex flex-col justify-between border-r'>
            <div className="flex flex-col">
                {menuItems.map((menu, i) => (
                    <Link href={menu.path} key={i} className={`py-2 px-2 transition-all duration-200 ${pathname.includes(menu.path) ? 'bg-mazzanti-darksky text-white' : 'bg-mazzanti-darksky/30 hover:bg-mazzanti-darksky/50'} border-b`}>
                        {menu.title}
                    </Link>
                ))}
            </div>
            <button onClick={(e) =>{
                e.preventDefault()
                localStorage.removeItem('user')
                router.push('/login')
            }} 
            className={`py-2 px-2 transition-all duration-200 bg-red-600 text-white border-b`}>Logout</button>
        </div>
    )
}
