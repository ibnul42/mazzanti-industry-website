import React from 'react'

export default function ItemChips({ selectedItem, setSelectedItem, items }) {
    return (
        <div className="border px-2 py-4 flex flex-wrap gap-3">
            {items.map((item, i) => (
                <button key={i} onClick={() => setSelectedItem(item)} className={`${selectedItem === item ? 'bg-mazzanti-darksky/70 text-white' : 'bg-mazzanti-darksky/30 text-black'} border rounded-lg px-3 py-2`}>{item}</button>
            ))}
        </div>
    )
}
