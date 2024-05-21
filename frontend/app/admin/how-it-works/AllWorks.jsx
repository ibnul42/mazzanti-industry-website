import { createWork, deleteWork, editWork } from '@/app/helpers/api';
import { toolbarOptions } from '@/app/helpers/helper';
import RenderText from '@/components/RenderText';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import ReactQuill from 'react-quill';
import { toast } from 'react-toastify';

export default function AllWorks() {
    const [works, setWorks] = useState([]);
    const [currentState, setCurrentState] = useState('view');
    const [inputData, setInputData] = useState({
        title: "",
        desc: "",
    })
    const { title, desc } = inputData;
    const [selectedData, setSelectedData] = useState(null)

    useEffect(() => {
        const getData = () => {
            axios.get(`${process.env.NEXT_PUBLIC_API}/admin/work/all-works`)
                .then(res => {
                    setWorks(res.data.reverse());
                })
        }
        getData();
    }, []);

    const refreshData = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API}/admin/work/all-works`)
            .then(res => {
                setWorks(res.data.reverse());
                setInputData({
                    title: "",
                    desc: "",
                })
            })
            .then(() => setCurrentState('view'))
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value })
    }

    const onQuillChange = (value) => {
        setInputData({ ...inputData, desc: value });
    }

    const onAddData = (e) => {
        e.preventDefault();
        createWork(inputData)
            .then(res => {
                toast.success(res.message);
                refreshData();
            })
            .catch(err => {
                toast.error(err.response.data.message);
            })
    }

    const editBtnHandler = (data) => {
        setSelectedData(data);
        setCurrentState('edit');
        setInputData({
            title: data.title,
            desc: data.desc,
        });
    }

    const onEditData = (e) => {
        e.preventDefault();
        editWork({ id: selectedData._id, data: inputData })
            .then(res => {
                toast.success(res.message);
                refreshData();
            })
            .catch(err => {
                toast.error(err.response.data.message);
            })
    }

    const onDeleteData = (id) => {
        if (confirm("Are you sure you want to delete?")) {
            deleteWork(id)
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
                <h1 className="text-lg font-bold">All Works</h1>
                <button
                    onClick={() => setCurrentState('add')}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add New Work</button>
            </div>
            {currentState === 'view' &&
                <table
                    className="table-auto border my-5 border-primary"
                    style={{
                        width: "100%",
                    }}
                >
                    <thead className="border-b">
                        <tr className="bg-primary grid grid-cols-12">
                            <th className="px-4 py-2 col-span-1 border-r">
                                Sl
                            </th>
                            <th className="px-4 py-2 col-span-4 border-r">
                                Title
                            </th>
                            <th className="px-4 py-2 col-span-5 border-r">
                                Description
                            </th>
                            <th className="px-4 py-2 col-span-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {works && works.length > 0 ? (
                            works.map((item, index) => (
                                <tr key={index} className="even:bg-[#84BFB5] grid grid-cols-12">
                                    <td className="px-4 py-2 col-span-1 border-r border-primary flex items-center justify-center">
                                        {index + 1}
                                    </td>
                                    <td className="px-4 py-2 col-span-4 border-r border-primary flex items-center justify-center">
                                        <p>{item.title}</p>
                                    </td>
                                    <td className="px-0 py-2 col-span-5 border-r border-primary flex items-center justify-center">
                                        <p className='px-4 h-24 overflow-x-hidden overflow-y-auto w-full'>{<RenderText htmlContent={item.desc} />}</p>
                                    </td>
                                    <td className="px-4 py-2 col-span-2 flex justify-center items-center gap-3">
                                        <button
                                            onClick={() => editBtnHandler(item)}
                                            className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                        ><AiFillEdit /></button>
                                        <button
                                            onClick={() => onDeleteData(item._id)}
                                            className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                        ><MdDelete /></button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="odd:bg-gray-100 grid grid-cols-3">
                                <td className="px-4 py-2 col-span-3 border-r border-primary text-center">
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>}
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
