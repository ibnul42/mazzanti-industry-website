"use client"
import ItemChips from '@/components/ItemChips';
import React, { useState } from 'react'
import AllGoals from './AllGoals';
import HeroSection from '@/components/HeroSection';
import PropertyItem from './PropertyItem';

const items = ['Hero', 'Goals', 'Properties']

export default function HomeItem() {
    const [selectedItem, setSelectedItem] = useState(items[0]);
    return (
        <div className='flex-1 flex flex-col gap-2'>
            <ItemChips selectedItem={selectedItem} setSelectedItem={setSelectedItem} items={items} />
            {selectedItem === 'Hero' && (
                <HeroSection type="home" />
            )}
            {selectedItem === 'Properties' && (
                <PropertyItem />
            )}
            {selectedItem === 'Goals' && (
                <AllGoals />
            )}
        </div>
    )
}
