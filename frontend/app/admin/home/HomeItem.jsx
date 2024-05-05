"use client"
import React, { useState } from 'react'

const items = ['Hero', 'Goals']

export default function HomeItem() {
    const [selectedItem, setSelectedItem] = useState(items[0]);
    return (
        <div className='flex-1 flex flex-col gap-2'>
            <div className="border px-2 py-4 flex flex-wrap gap-3">
                {items.map((item, i) => (
                    <button key={i} onClick={() => setSelectedItem(item)} className={`${selectedItem === item ? 'bg-mazzanti-darksky/70 text-white':'bg-mazzanti-darksky/30 text-black'} border rounded-lg px-3 py-2`}>{item}</button>
                ))}
            </div>
            {selectedItem === 'Hero' && (
                <div className="">HERO</div>
            )}
            {selectedItem === 'Goals' && (
                <div className="">Goals</div>
            )}
        </div>
    )
}
