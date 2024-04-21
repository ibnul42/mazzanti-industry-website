'use client'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { getUser } from '../helpers/auth'
import { useRouter } from 'next/navigation'

export default function AdminProvider({ children }) {
    const router = useRouter()
    const { data, isLoading } = useQuery({ queryKey: ['auth'], queryFn: getUser })

    if (isLoading) {
        return <div className="flex-1 flex justify-center items-center">
            <p>Loading...</p>
        </div>
    } else if (!data) {
        router.push('/login')
    } else {
        return (
            <div className='flex-1 flex'>
                {children}
            </div>
        )
    }
}
