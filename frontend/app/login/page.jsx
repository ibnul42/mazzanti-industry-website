import React from 'react'
import LoginForm from './LoginForm'

export const metadata = {
    title: {
        default: 'Login',
    },
};

export default function Loginpage() {
    return (
        <div className='w-full flex justify-center py-20'>
            <LoginForm />
        </div>
    )
}

