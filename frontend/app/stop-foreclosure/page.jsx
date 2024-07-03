import GetOffer from '@/components/GetOffer'
import Hero from '@/components/Hero'
import RenderText from '@/components/RenderText'
import Image from 'next/image'
import React from 'react'
import { getHero } from '../utils/helpers'

const table = [
    {
        title: `Commissions / Fees:`,
        sold: `NONE`,
        selling: `6-7% on average is paid by you, the seller`
    },
    {
        title: `Who Pays Closing Costs?:`,
        sold: `NONE – We pay all costs`,
        selling: `3-4% on average is paid by you, the seller`
    },
    {
        title: `Inspection & Financing
        Contingency*:`,
        sold: `NONE`,
        selling: `Yes, up to 15% of sales fall through`
    },
    {
        title: `Appraisal Needed:`,
        sold: `NONE – We make cash offers`,
        selling: `Yes, sale is often subject to appraisal`
    },
    {
        title: `Average Days Until Sold:`,
        sold: `IMMEDIATE CASH OFFER`,
        selling: `+/- 91 Days`
    },
    {
        title: `Number of Showings:`,
        sold: `1 (Just Us)`,
        selling: `10-40`
    },
    {
        title: `Closing Date:`,
        sold: `The Date Of YOUR CHOICE`,
        selling: `30-60 +/- days after accepting buyers offer`
    },
    {
        title: `Who Pays For Repairs?:`,
        sold: `NONE – We pay for all repairs`,
        selling: `Seller generally covers most repairs`
    },
    {
        title: `Holding Costs?:`,
        sold: `NONE – We close in 7 days`,
        selling: `Seller covers Taxes, Mortgage, Insurance, Utilities, maintenance, lawn/snow, association dues (if any) for 4-5 months`
    },
    {
        title: `Total Costs to Sell:`,
        sold: `NONE – We close in 7 days, pay closing costs and have Zero fees`,
        selling: `Seller pays commission, closing costs, holding costs,repairs adding up to 10-20% of sale price.`
    },

]

export const metadata = {
    title: {
        default: 'Stop Foreclosure',
    },
};

async function getAllItems() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/admin/foreclosure/all-foreclosures`, {
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

export default async function page() {
    let items = [];
    let heroSection = {};
    try {
        items = await getAllItems();
        heroSection = await getHero('foreclosure');
    } catch (error) {
        console.error(error);
        items = [];
    }
    return (
        <main className="flex-1 bg-mazzanti-black text-white text-center">
            <Hero title={heroSection.title} bgImage={heroSection.source} />
            <GetOffer />
            <div className="max-w-[1440px] mx-auto pt-5 pb-20 px-4 space-y-8">
                {items?.map((item, index) => (
                    <div className="space-y-5">
                        <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center">{item.title}</p>
                        <div className='text-sm md:text-base'><RenderText htmlContent={item.desc} /></div>
                    </div>
                ))}
            </div>
        </main>
    )
}
