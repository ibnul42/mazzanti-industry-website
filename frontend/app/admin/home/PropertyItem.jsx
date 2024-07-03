import { createProperty, deleteProperty, editProperty } from '@/app/helpers/api';
import { toolbarOptions } from '@/app/helpers/helper';
import Table from '@/components/Table';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import { toast } from 'react-toastify';

export default function PropertyItem() {
    const [items, setItems] = useState([]);
    const [currentState, setCurrentState] = useState('view');
    const [inputData, setInputData] = useState({
        title: "",
        desc: "",
        source: "",
    });
    const { title, desc, source } = inputData;
    const [selectedData, setSelectedData] = useState(null);
    const [file, setFile] = useState();
    const [selectedImage, setSelectedImage] = useState('');
    const [sourceChanged, setSourceChanged] = useState(false);

    useEffect(() => {
        const getData = () => {
            axios.get(`${process.env.NEXT_PUBLIC_API}/admin/property/all-property`)
                .then(res => {
                    setItems(res.data);
                })
        }
        getData();
    }, []);

    const refreshData = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API}/admin/property/all-property`)
            .then(res => {
                setItems(res.data);
                setInputData({
                    title: "",
                    desc: "",
                    source: "",
                })
                setSelectedImage("")
                setFile()
            })
            .then(() => setCurrentState('view'))
    }

    const onQuillChange = (value) => {
        setInputData({ ...inputData, desc: value });
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value })
    }

    const handleImageChange = (e) => {
        setFile(e.target.files[0])
        const file = e.target.files[0]
        if (file) {
            setSelectedImage(URL.createObjectURL(file))
        }
        setSourceChanged(true);
    }

    const onEditData = (e) => {
        e.preventDefault();

        if (sourceChanged) {
            const formData = new FormData()
            formData.append('file', file)
            formData.append('upload_preset', 'tnimizyq')
            axios.post(`https://api.cloudinary.com/v1_1/dk5mn64w4/image/upload`, formData)
                .then(res => {
                    const data = {
                        title,
                        desc,
                        source: res.data.secure_url
                    }
                    editProperty({ id: selectedData?._id, data })
                        .then(res => {
                            toast.success(res.message);
                            refreshData();
                        })
                })
                .catch(err => {
                    toast.error(err.response.data.error.message || "Unable to edit property")
                })
        } else {
            const data = {
                title,
                desc,
                source: selectedData.source
            }
            editProperty({ id: selectedData?._id, data })
                .then(res => {
                    toast.success(res.message);
                    refreshData();
                })
                .catch(err => {
                    toast.error(err.response.data.error.message || "Unable to edit property")
                })
        }


    }

    const editBtnHandler = (data) => {
        setSelectedData(data);
        setCurrentState('edit');
        setInputData({
            title: data.title,
            desc: data.desc,
            source: data.source,
        });
        setSourceChanged(false);
    }
    
    const onAddData = (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'tnimizyq')
        axios.post(`https://api.cloudinary.com/v1_1/dk5mn64w4/image/upload`, formData)
            .then(res => {
                const data = {
                    title,
                    desc,
                    source: res.data.secure_url
                }
                createProperty(data)
                    .then(res => {
                        toast.success(res.message);
                        refreshData();
                    })
            })
            .catch(err => {
                toast.error(err.response.data.error.message)
            })
    }

    const onDeleteData = (id) => {
        if (confirm("Are you sure you want to delete?")) {
            deleteProperty(id)
                .then((res) => {
                    toast.success(res.message);
                    refreshData();
                })
                .catch(err => {
                    toast.error(err.response.data.message);
                })
        } else {
            // user clicked Cancel
        }
    }

    return (
        <div className='flex-1 flex flex-col'>
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold">All Properties</h1>
                <button
                    onClick={() => setCurrentState('add')}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add New Item</button>
            </div>
            {currentState === 'view' &&
                <Table data={items} onEdit={editBtnHandler} onDelete={onDeleteData} />}
            {currentState === 'add' &&
                <div className='flex-1 flex justify-center items-center'>
                    <div className="p-2 w-full">
                        <form
                            onSubmit={onAddData} className="bg-white space-y-5 shadow-md rounded px-8 pt-6 pb-8 my-10 w-full max-w-xl mx-auto">
                            <div className="">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="title"
                                >
                                    Title
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder="Title"
                                    value={title}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="desc"
                                >
                                    Description
                                </label>
                                <div className="">
                                    <ReactQuill
                                        theme="snow"
                                        value={desc}
                                        onChange={onQuillChange}
                                        modules={{ toolbar: toolbarOptions }}
                                        className="w-full focus-within:outline-none border"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">Photo</label>
                                {currentState === 'add' &&
                                    <input
                                        name="photo"
                                        type="file"
                                        placeholder="photo"
                                        onChange={handleImageChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />}
                                <div className="flex justify-center my-4">
                                    {selectedImage && <Image src={selectedImage} height={500} width={500} className='w-full h-auto' alt='Selected Image' />}
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => setCurrentState('view')}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>}

            {currentState === 'edit' &&
                <div className='flex-1 flex justify-center items-center'>
                    <div className="p-2 w-full">
                        <form
                            onSubmit={onEditData} className="bg-white space-y-5 shadow-md rounded px-8 pt-6 pb-8 my-10 w-full max-w-xl mx-auto">
                            <div className="">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="title"
                                >
                                    Title
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder="Title"
                                    value={title}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="desc"
                                >
                                    Description
                                </label>
                                <div className="">
                                    <ReactQuill
                                        theme="snow"
                                        value={desc}
                                        onChange={onQuillChange}
                                        modules={{ toolbar: toolbarOptions }}
                                        className="w-full focus-within:outline-none border"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Photo</label>
                                {currentState === 'edit' &&
                                    <input
                                        name="image"
                                        type="file"
                                        placeholder="image"
                                        onChange={handleImageChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />}
                                <div className="flex justify-center my-4">
                                    <Image src={selectedImage || selectedData?.source} height={500} width={500} className='w-full h-auto' alt='Selected Image' />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => setCurrentState('view')}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Edit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>}
        </div>
    )
}
