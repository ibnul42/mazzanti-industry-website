import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function HeroSection({ type }) {
    const [dataChanging, setDataChanging] = useState(false)
    const [currentState, setCurrentState] = useState('view');
    const [selectedData, setSelectedData] = useState();
    const [file, setFile] = useState();
    const [inputValue, setInputValue] = useState({
        title: '',
    })

    const { title } = inputValue

    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        const getData = () => {
            axios.get(`${process.env.NEXT_PUBLIC_API}/admin/hero/single-hero/${type}`)
                .then(res => {
                    setSelectedData(res.data)
                    setInputValue({
                        title: res.data.title,
                    })
                    setSelectedImage(res.data.source)
                    console.log(res)
                })
                .catch(err => {
                    console.log("ERROR: " + err)
                })
        }
        getData();
    }, [])

    const onChange = (e) => {
        const { name, value } = e.target
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleImageChange = (e) => {
        setFile(e.target.files[0])
        const file = e.target.files[0]
        if (file) {
            setSelectedImage(URL.createObjectURL(file))
        }
    }

    const refreshData = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API}/admin/hero/single-hero/${type}`)
            .then(res => {
                setSelectedData(res.data)
                setInputValue({
                    title: res.data.title,
                })
                setSelectedImage(res.data.source)
                setFile()
                setCurrentState('view')
                setDataChanging(false)
            })
            .then(() => { })
    }

    const addData = async (data) => {
        const token = JSON.parse(localStorage.getItem('user'))['token']
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.post(`${process.env.NEXT_PUBLIC_API}/admin/hero/create-hero`, data, config)
            .then(res => {
                console.log("ADDED", res)
                toast.success(res.data.message)
                refreshData();
            })
            .catch(err => {
                toast.error(err.response.data.message)
            })
    }

    const uploadHandler = (e) => {
        e.preventDefault()
        if (!title) {
            toast.error('Please fill the title')
        } else {
            setDataChanging(true)
            if (file) {
                const formData = new FormData()
                formData.append('file', file)
                formData.append('upload_preset', 'tnimizyq')
                axios.post(`https://api.cloudinary.com/v1_1/dk5mn64w4/image/upload`, formData)
                    .then(res => {
                        const data = {
                            title,
                            type,
                            source: res.data.secure_url
                        }
                        addData(data)
                    })
                    .catch(err => {
                        toast.error(err.response.data.error.message)
                    })
            } else {
                const data = {
                    title,
                    type,
                    source: selectedImage
                }
                addData(data)
            }
        }
    }

    return (
        <div className='flex-1 flex flex-col'>
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold">Hero Section</h1>
                <button
                    onClick={() => setCurrentState('change')}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{selectedData ? 'Edit' : 'Add'} Item</button>
            </div>
            <div className={`${!selectedData && currentState === 'view' ? 'hidden' : 'flex-1'}`}>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-10 max-w-sm w-full mx-auto">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
                        <input
                            disabled={currentState === 'view'}
                            id="title"
                            name="title"
                            type="text"
                            placeholder="John Doe"
                            value={title}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Photo</label>
                        {currentState === 'change' &&
                            <input
                                name="email"
                                type="file"
                                placeholder="Email"
                                onChange={handleImageChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />}
                        <div className="flex justify-center my-4">
                            {selectedImage && <Image src={selectedImage} height={500} width={500} className='w-full h-auto' alt='Selected Image' />}
                        </div>
                    </div>

                    <div className={`${currentState === 'change' ? 'flex' : 'hidden'} items-center justify-between`}>
                        <button
                            disabled={dataChanging}
                            onClick={(e) => {
                                e.preventDefault()
                                setInputValue({
                                    title: selectedData.title,
                                })
                                setSelectedImage(selectedData.source)
                                setFile()
                                setCurrentState('view')
                            }}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Cancel
                        </button>
                        <button
                            disabled={dataChanging}
                            onClick={uploadHandler}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
