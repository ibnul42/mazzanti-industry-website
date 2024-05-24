"use client"
import ItemChips from '@/components/ItemChips';
import React, { useState } from 'react'
import AllOffers from './Alloffers';

const items = ['All offers']

export default function OfferItem() {
    const [selectedItem, setSelectedItem] = useState(items[0]);
    return (
        <div className='flex-1 flex flex-col gap-2'>
            <ItemChips selectedItem={selectedItem} setSelectedItem={setSelectedItem} items={items} />
            {selectedItem === 'All offers' && (
                <AllOffers />
            )}
        </div>
    )
}
