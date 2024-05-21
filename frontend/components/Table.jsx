import React from 'react'
import RenderText from './RenderText'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'

export default function Table({ data, onEdit, onDelete}) {
    return (
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
                {data && data.length > 0 ? (
                    data.map((item, index) => (
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
                                    onClick={() => onEdit(item)}
                                    className="px-4 py-1 rounded-full border border-primary hover:bg-primary text-primary font-medium cursor-pointer h-max"
                                ><AiFillEdit /></button>
                                <button
                                    onClick={() => onDelete(item._id)}
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
        </table>
    )
}
