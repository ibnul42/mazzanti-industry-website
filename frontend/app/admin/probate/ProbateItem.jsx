"use client"
import ItemChips from '@/components/ItemChips';
import React, { useState } from 'react';
import AllProbates from './AllProbates';

const items = ['All Probates']

export default function ProbateItem() {
    const [selectedItem, setSelectedItem] = useState(items[0]);
    return (
        <div className='flex-1 flex flex-col gap-2'>
            <ItemChips selectedItem={selectedItem} setSelectedItem={setSelectedItem} items={items} />
            {selectedItem === 'All Probates' && (
                <AllProbates />
            )}
        </div>
    )
}