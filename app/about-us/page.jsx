import GetOffer from '@/components/GetOffer'
import Hero from '@/components/Hero'
import Image from 'next/image'
import React from 'react'
import hero from '@/public/assets/about/Image-01.png'

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

const assets = [
    {
        name: 'reza sabaii, esq.',
        position: 'principal broker',
        source: '/assets/about/Image-02.png'
    },
    {
        name: 'mani milan, mps',
        position: 'senior vice president',
        source: '/assets/about/Image-03.png'
    },
    {
        name: 'David krucoff',
        position: 'vice president',
        source: '/assets/about/Image-04.png'
    },
    {
        name: 'cristina davies',
        position: 'project development',
        source: '/assets/about/Image-05.png'
    },
    {
        name: 'davis lawrence',
        position: 'real estate associate',
        source: '/assets/about/Image-06.png'
    },
]

export const metadata = {
    title: {
        default: 'About Us',
    },
};

export default function page() {
    return (
        <main className="flex-1 bg-mazzanti-black text-white text-center">
            <Hero bgImage={hero} title={`About Us`} />
            <GetOffer />
            <div className="bg-mazzanti-gray">
                <div className="max-w-[1440px] mx-auto pt-5 pb-20 px-4 space-y-8">
                    {/* <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center">Sell Your Home in Foreclosure - The ibuyhomes team knows how to stop foreclosure.</p> */}
                    <div className="space-y-2">
                        <p className='text-sm md:text-base'>the agency that meets your expectations.</p>
                        <p className='text-sm md:text-base'>Our team is all about strategic-minded and experienced teamwork. We bring you buying, rental and sales expertise, as well as investment management services.</p>
                        <p className='text-sm md:text-base'>The aim is on the best Luxembourg has to offer, from high-end houses to quality apartments.With access to a complete range across the luxembourgish real estate market, Property Invest has the needed expertise to guide you in your real estate decisions.</p>
                    </div>
                </div>
            </div>
            <div className="pt-5 pb-20 space-y-8">
                <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center">MEET THE TEAM</p>
                <div className="relative">
                    <div className="hidden md:absolute top-0 left-0 w-full h-full py-24 md:flex justify-center items-center">
                        <div className="h-full w-1 bg-gray-100"></div>
                    </div>
                    {assets.map((item, index) => (
                        <div key={index} className={`${index % 2 !== 0 ? 'bg-mazzanti-gray' : ''}`}>
                            <div className="max-w-[1440px] mx-auto px-4">
                                <div className={`grid grid-cols-1 md:grid-cols-2`}>
                                    <div className={`py-7 flex justify-center ${index % 2 === 0 ? 'order-1 ' : 'order-1 md:order-2'}`}>
                                        <Image src={item.source} height={500} width={500} alt="" className="w-full max-w-64 h-auto rounded-lg" />
                                    </div>
                                    <div className={`flex flex-col items-center justify-center gap-5 px-2 py-2 ${index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}`}>
                                        <p className="py-2 px-5 bg-mazzanti-darksky uppercase font-bold rounded-sm">{item.name}</p>
                                        <p className="py-2 px-5 border uppercase font-bold rounded-sm">{item.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
