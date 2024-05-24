import { createWork, deleteWork, editWork } from '@/app/helpers/api';
import { toolbarOptions } from '@/app/helpers/helper';
import Table from '@/components/Table';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';
import ReactQuill from 'react-quill';
import { toast } from 'react-toastify';

export default function AllOffers() {
    const [items, setItems] = useState([]);
    const [currentState, setCurrentState] = useState('view');
    const [inputData, setInputData] = useState({
        title: "",
        desc: "",
    })
    const { title, desc } = inputData;
    const [selectedData, setSelectedData] = useState(null)

    useEffect(() => {
        const getData = () => {
            axios.get(`${process.env.NEXT_PUBLIC_API}/admin/offer/all-offers`)
                .then(res => {
                    setItems(res.data.reverse());
                })
        }
        getData();
    }, []);

    const refreshData = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API}/admin/offer/all-offers`)
            .then(res => {
                setItems(res.data.reverse());
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

        const userToken = JSON.parse(localStorage.getItem('user'))?.token;

        if (!userToken) {
            toast.error("Not authorized");
            return;
        }

        const config = {
            headers: { Authorization: `Bearer ${userToken}` }
        };
        if (confirm("Are you sure you want to delete?")) {
            axios.delete(`${process.env.NEXT_PUBLIC_API}/admin/offer/${id}`, config)
                .then(res => res.data)
                .then((data) => {
                    console.log(data)
                    toast.success(data.message);
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
                <h1 className="text-lg font-bold">All Offer</h1>
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
                                Name
                            </th>
                            <th className="px-4 py-2 col-span-3 border-r">
                                Email
                            </th>
                            <th className="px-4 py-2 col-span-3 border-r">
                                Phone
                            </th>
                            <th className="px-4 py-2 col-span-1">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items && items.length > 0 ? (
                            items.map((item, index) => (
                                <tr key={index} className="even:bg-[#84BFB5] grid grid-cols-12">
                                    <td className="px-4 py-2 col-span-1 border-r border-primary flex items-center justify-center">
                                        {index + 1}
                                    </td>
                                    <td className="px-4 py-2 col-span-4 border-r border-primary flex items-center justify-center text-wrap break-all">
                                        <p>{`${item.firstName} ${item.lastName}`}</p>
                                    </td>
                                    <td className="px-4 py-2 col-span-3 border-r border-primary flex items-center justify-center text-wrap break-all">
                                        <p>{item.email}</p>
                                    </td>
                                    <td className="px-4 py-2 col-span-3 border-r border-primary flex items-center justify-center text-wrap break-all">
                                        <p>{item.phoneNumber}</p>
                                    </td>
                                    <td className="px-4 py-2 col-span-1 flex justify-center items-center gap-3">
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
        </div>
    )
}
