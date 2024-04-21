"use client";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function LoginForm() {
    const router = useRouter();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    })

    const { email, password } = inputValue;

    const { mutate, isError } = useMutation({
        mutationFn: async () => await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/users/login`, inputValue),
        onSuccess: (data) => {
            toast.success('Login successful')
            localStorage.setItem('user', JSON.stringify(data.data))
            router.push('/admin/profile')
        },
        onError: (err) => {
            toast.error(err.response.data.message)
        }
    })

    const onChange = (e) => {
        const { name, value } = e.target
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        mutate()
        // dispatch(login(inputValue))
    }

    return (
        <form
            onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-10 max-w-sm w-full mx-auto">
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                >
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                />
            </div>
            <div className="mb-6">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="******************"
                    value={password}
                    onChange={onChange}
                />
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="bg-primary border hover:bg-slate-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Sign In
                </button>
                {/* <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a> */}
            </div>
        </form>
    )
}
