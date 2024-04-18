import GetOffer from '@/components/GetOffer'
import Hero from '@/components/Hero'
import Image from 'next/image'
import React from 'react'

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

export default function page() {
    return (
        <main className="flex-1 bg-mazzanti-black text-white text-center">
            <Hero title={`Stop Foreclosure`} />
            <GetOffer />
            <div className="max-w-[1440px] mx-auto pt-5 pb-20 px-4 space-y-8">
                <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center">Sell Your Home in Foreclosure - The ibuyhomes team knows how to stop foreclosure.</p>
                <div className="space-y-2">
                    <p className='text-sm md:text-base'>Homeowners facing foreclosure often feel powerless and overwhelmed, but the ibuyhomes team is here to help. We’re experienced in purchasing homes in foreclosure from people just like you. ibuyhomes can help save your credit by buying your home, taking over your mortgage payments or splitting ownership. We’ll even set you up with a credit repair counselor to help you get your financial life back under control. ibuyhomes gives you three options to stop the stressful process of foreclosure: Option 1: Sell Your House in Foreclosure If your property is worth less than the balance on your mortgage, we’ll initiate a short sale. Lenders often agree to a short sale because it spares them the time, money, and effort involved in foreclosing a home. Even if your bank has not been willing to working with you, they may postpone the foreclosure sale and allow us to buy your home. Option 2: Transfer the Mortgage in Foreclosure If you’re behind on your mortgage, you can turn over the house to us and we’ll assume the payments moving forward. In return we’ll give you a financial incentive of $500-$1000. Don’t let foreclosure jeopardize your financial future. The ibuyhomes team can help you avoid the expenses and stress of foreclosure. Get in touch today at 866-989-1746 or fill out our online form to explore your options. If you decide to work with us, we move quickly to have a contract in your hands within 36 hours.</p>
                </div>
            </div>
        </main>
    )
}
