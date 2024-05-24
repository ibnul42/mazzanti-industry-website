"use client"
import ItemChips from '@/components/ItemChips';
import React, { useState } from 'react'
import AllForeclosures from './AllForeclosures';

const items = ['All Foreclosures']

export default function ForeclosureItems() {
    const [selectedItem, setSelectedItem] = useState(items[0]);
    return (
        <div className='flex-1 flex flex-col gap-2'>
            <ItemChips selectedItem={selectedItem} setSelectedItem={setSelectedItem} items={items} />
            {selectedItem === 'All Foreclosures' && (
                <AllForeclosures />
            )}
        </div>
    )
}