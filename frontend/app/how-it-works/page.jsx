import GetOffer from '@/components/GetOffer'
import Hero from '@/components/Hero'
import RenderText from '@/components/RenderText'
import React from 'react'

export const metadata = {
    title: {
        default: 'How It Works',
    },
};

async function getAllWorks() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/admin/work/all-works`, {
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Page() {
    let works = [];
    try {
        works = await getAllWorks();
    } catch (error) {
        console.error(error);
        works = [];
    }

    return (
        <main className="flex-1 bg-mazzanti-black text-white text-center">
            <Hero title={`How it Works`} />
            <GetOffer />
            <div className="max-w-[1440px] mx-auto pt-5 pb-20 px-4 space-y-8">
                {works?.map((item, index) => (
                    <div key={index} className="space-y-2">
                        <p className="font-bold text-lg md:text-xl lg:text-3xl text-center">{item.title}</p>
                        <div className='text-sm md:text-base text-white'>
                            <RenderText htmlContent={item.desc} />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
