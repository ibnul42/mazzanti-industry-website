"use client"
import ItemChips from '@/components/ItemChips';
import React, { useState } from 'react'
import AllWorks from './AllWorks';

const items = ['All Works']

export default function WorkItem() {
    const [selectedItem, setSelectedItem] = useState(items[0]);
    return (
        <div className='flex-1 flex flex-col gap-2'>
            <ItemChips selectedItem={selectedItem} setSelectedItem={setSelectedItem} items={items} />
            {selectedItem === 'All Works' && (
                <AllWorks />
            )}
        </div>
    )
}
