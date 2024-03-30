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

export default function page() {
    return (
        <main className="flex-1 bg-mazzanti-black text-white text-center">
            <Hero title={`How it Works`} />
            <GetOffer />
            <div className="max-w-[1440px] mx-auto pt-5 pb-20 px-4 space-y-8">
                <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center">Sell Your House Fast!</p>
                <div className="space-y-2">
                    <div className="flex justify-center">
                        <p className="font-bold text-lg md:text-xl lg:text-3xl text-center max-w-4xl">Our Simple Mission: Provide the Easiest and Quickest
                            Way to Sell Your Home for Cash</p>
                    </div>
                    <p className='text-sm md:text-base'>There are many reasons to sell your home fast. Divorce, loss of income, health issues or a death in the family, to name a few. Some homeowners may want to eliminate the hassle of realtor fees, showings and open houses. The IBuyHomes team understands that selling a home is stressful even under the best of circumstances. Our representatives walk you through the entire process. We respect your privacy and will never sell your information to outside vendors. In just a few steps, IBuyHomes evaluates your property, prepares an offer, completes an inspection, and closes the sale if you agree to it. Here’s how to get started:</p>
                </div>
                <div className="space-y-2">
                    <p className="font-bold text-lg md:text-xl lg:text-3xl text-center">Step 1: Get in Touch</p>
                    <p className='text-sm md:text-base'>Fill out our secure online form or call us at 000-000-0000 to begin the application process. We keep your information private and you are under no obligation to move forward with a contract.
                    </p>
                </div>
                <div className="space-y-2">
                    <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center py-3">Step 2: Get an Evaluation</p>
                    <p className='text-sm md:text-base'>One of our representatives will contact you for more details about your home, such as its address, age, condition, and whether any repairs or renovations were done. We rely on your candid, open answers so we can evaluate the home based on our buying criteria. We will use the information you provide to create a quote for your property. You’re free to accept the offer or not. Remember, our team looks at the location and potential value—not just structural condition—when deciding on properties. We will inspect every property as part of our due diligence. You won’t need to repaint, repair or renovate your home just to impress us.</p>
                </div>
                <div className="space-y-2">
                    <p className="font-bold text-lg md:text-xl lg:text-3xl text-center">Step 3: Get Paid</p>
                    <p className='text-sm md:text-base'>IBuyHomes can close quickly on your home because we don’t use banks or mortgage companies. From inspection to closing, our team controls and manages the entire process. After we present you with an offer, you’ll decide how you want to proceed with the purchase:
                        All-Cash: We can’t offer full retail value on your property, but we can close the deal much faster
                        Owner Financing: We can offer much more on your property, but financial paperwork may prolong            the purchase timeline
                        For your convenience, we close quickly and give you a check for the payment. If you can’t be there in person, we’ll overnight the paperwork to you. Questions? Call us at 866-989-1746 for more information.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-5">
                        <p className='font-bold text-lg md:text-xl lg:text-3xl'>How The Multiple Offers Process Works</p>
                        <ul className='space-y-2 ps-5'>
                            <li className='list-item list-disc  text-start'>Tell us about your property —Quick, Easy & Free!</li>
                            <li className='list-item list-disc text-start'>If it meets our criteria, we will contact you to set up a quick appointment. </li>
                            <li className='list-item list-disc text-start'>We’ll present you with multiple offers on your property including a cash offer from us. You choose the terms and price that work best for you! We offer you more for your house and you sell on your terms.</li>
                            <li className='list-item list-disc text-start'>We close at a local reputable title company,  and get cash in your hands in as little as 7 days.</li>
                        </ul>
                    </div>
                    <div className="space-y-5">
                        <p className='font-bold text-lg md:text-xl lg:text-3xl'>Selling To Minnesota Home Guys vs. Listing With A Local Agent</p>
                        <p className='text-sm md:text-base'>Even in a sellers market like Minnesota, it’s smart to look at your options and see what will actually help you best reach your
                            goals with the sale of your house. While you may be able to get a higher “top line” sales price listing with a local Minneapolis
                            agent, that doesn’t always boil down to more money in your pocket or less headache. Dive into the details below to compare
                            your options. </p>
                    </div>
                </div>
                <div className="space-y-5 overflow-hidden">
                    <p className='font-bold text-lg md:text-xl lg:text-3xl text-start'>Compare Minnesota Home Guys vs. Realtor Listing</p>
                    <table class="w-full max-w-7xl mx-auto overflow-x-scroll border">
                        <thead>
                            <tr className='grid grid-cols-12'>
                                <th className='col-span-2 border px-2 py-2'></th>
                                <th className='col-span-5 border px-2 py-2'>SOLD To Minnesota Home Guys</th>
                                <th className='col-span-5 border px-2 py-2'>Selling w/ An Agent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((item, index) => (
                                <tr key={index} className='grid grid-cols-12'>
                                    <td className='col-span-2 border px-2 py-2'>{item.title}</td>
                                    <td className='col-span-5 border px-2 py-2 flex gap-3 items-center text-left'>
                                        <Image src='/assets/icons/cancel_red.svg' height={15} width={15} alt='' className='w-3 h-auto' />
                                        <span>{item.sold}</span>
                                    </td>
                                    <td className='col-span-5 border px-2 py-2 flex gap-3 items-center text-left'>
                                        <Image src='/assets/icons/tick_green.svg' height={15} width={15} alt='' className='w-3 h-auto' />
                                        <span>{item.selling}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="space-y-2">
                    <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center py-3">Is it for you?</p>
                    <p className='text-sm md:text-base'>Work The Numbers And See Which Way Helps You Get There…</p>
                    <p className='text-sm md:text-base'>When you really work the numbers you start to see the real benefits of working with Minnesota Home Guys. We may not be able to offer you full retail value for your house… but we also offer other benefits that going the traditional house sale route  can’t offer.</p>
                </div>
                <div className="space-y-2">
                    <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center py-3">From offer to close and cash in your hand in as little as 7 days</p>
                    <p className='text-sm md:text-base'>You can get rid of the headache of that property fast and avoid paying any more utility payments, tax payments, insurance payments, mortgage payments, you get the drill. If you list your house and wait 90+ days to close… you have to figure in all of  the costs of holding that property during the time you have that property listed and are waiting for the property to close.</p>
                </div>
                <div className="space-y-2">
                    <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center py-3">Don’t worry about fixing anything up or cleaning your house again and again for buyer after buyer</p>
                    <p className='text-sm md:text-base'>We don’t care how dirty your house is (we’ve seen worse!) or how many repairs are needed (a complete fixer? great! we love  projects)... we’d like to make an offer on your house. This saves you time and money that you can keep in your pocket.</p>
                </div>
                <div className="space-y-2">
                    <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center py-3">Don’t worry about paying those pesky closing fees (we’ve got you covered)</p>
                    <p className='text-sm md:text-base'>Because we are a full-service professional home buyer here in Minnesota, we make it easy for you. We pay for all of the  closing costs. What we offer you is what you get (of course minus any mortgage payoff or other encumbrances on the  property). Pretty refreshing eh?</p>
                    <p className='text-sm md:text-base py-3'>So when you add up the time you could save by working with Minnesota Home Guys, the no-hassle experience, and the  money you’ll save on commissions, fees, and holding costs while you wait to sell the traditional route… for many area home  cowners selling to a professional house buyer is the best viable option. </p>
                </div>
            </div>
        </main>
    )
}
