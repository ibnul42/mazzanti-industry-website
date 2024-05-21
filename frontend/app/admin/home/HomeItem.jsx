"use client"
import ItemChips from '@/components/ItemChips';
import React, { useState } from 'react'
import AllGoals from './AllGoals';

const items = ['Hero', 'Goals']

export default function HomeItem() {
    const [selectedItem, setSelectedItem] = useState(items[0]);
    return (
        <div className='flex-1 flex flex-col gap-2'>
            <ItemChips selectedItem={selectedItem} setSelectedItem={setSelectedItem} items={items} />
            {selectedItem === 'Hero' && (
                <div className="">HERO</div>
            )}
            {selectedItem === 'Goals' && (
                <AllGoals />
            )}
        </div>
    )
}
