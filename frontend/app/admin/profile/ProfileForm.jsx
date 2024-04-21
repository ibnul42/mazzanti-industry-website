'use client'
import { getUser, updateUser } from '@/app/helpers/auth'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function ProfileForm() {
    const queryClient = useQueryClient()
    const { data } = useQuery({ queryKey: ['auth'], queryFn: getUser })



    const [isEdit, setIsEdit] = useState(false)
    const [inputValue, setInputValue] = useState({
        id: data?.id,
        name: data?.name,
        email: data?.email,
        password: data?.password,
        newPassword: "",

    })

    const { name, email, password, newPassword } = inputValue

    const { mutate, isError } = useMutation({
        mutationFn: async () => updateUser(inputValue),
        onSuccess: (data) => {
            toast.success('Profile updated successfully')
            queryClient.invalidateQueries({ queryKey: ['auth'] })
            setIsEdit(false)
            localStorage.setItem('user', JSON.stringify(data.data))
        },
        onError: () => {
            toast.error('Error updating profile, Please try again')
        }
    })

    const onChange = (e) => {
        const { name, value } = e.target
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const onEditHandler = (e) => {
        e.preventDefault()
        if (isEdit) {
            setInputValue((prev) => ({
                ...prev,
                name: data.name,
                email: data.email,
                password: data.password,
                newPassword: "",
            }))
            setIsEdit(false)
        } else {
            setIsEdit(true)
        }

    }

    const onUpdateUser = (e) => {
        e.preventDefault()
        mutate(inputValue)
    }
    return (
        <div className='flex-1 flex justify-center items-center'>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-10 max-w-sm w-full mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input
                        disabled={!isEdit}
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        disabled={!isEdit}
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                {isEdit &&
                    <div className="mb-4"><label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input
                            disabled={!isEdit}
                            id="password"
                            name="password"
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>}
                {isEdit &&
                    <div className="mb-6"><label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">New Password</label>
                        <input
                            disabled={!isEdit}
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            placeholder="********"
                            value={newPassword}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>}
                <div className={`flex items-center ${isEdit ? 'justify-between' : 'justify-center'}`}>
                    {!isEdit &&
                        <button
                            onClick={onEditHandler}
                            className="bg-primary border hover:bg-slate-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Edit
                        </button>}
                    {isEdit &&
                        <button
                            onClick={onEditHandler}
                            className="bg-primary border hover:bg-slate-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Cancel
                        </button>}
                    {isEdit &&
                        <button
                            onClick={onUpdateUser}
                            className="bg-primary border hover:bg-slate-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Done
                        </button>}
                </div>
            </form>
        </div>
    )
}
