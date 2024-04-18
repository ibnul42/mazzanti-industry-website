import GetOffer from '@/components/GetOffer'
import Hero from '@/components/Hero'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: {
    default: 'Probate',
  },
};

export default function page() {
  return (
    <main className="flex-1 bg-mazzanti-black text-white text-center">
      <Hero title={`Probate`} />
      <GetOffer />
      <div className="max-w-[1440px] mx-auto pt-5 pb-20 px-4 space-y-8">
        <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center">Help Me Sell My House in Probate...Fast!</p>
        <div className="space-y-2">
          <p className="font-bold text-lg md:text-xl lg:text-3xl text-center">Sell your house in probate today for cash</p>
          <p className='text-sm md:text-base'>I buy homes in any condition. Personal representatives or heirs please call 866-989-1746 to get a quote on the home in your loved ones estate. We are not realtors, just house buyers who will pay cash and close fast on your house in probate. You don’t have to make repairs, move anything or paint and clean to sell your probate house or home to us.</p>
        </div>
        <div className="space-y-2">
          <p className="font-bold text-lg md:text-xl lg:text-3xl text-center">Get cash today for a probate home.</p>
          <p className='text-sm md:text-base'>Probate is the court supervised process of transferring property at death pursuant to the terms of the will. This is official definition of probate. In simple terms probate is settling an estate and selling property after someone has died.
          </p>
          <p className='text-sm md:text-base'>As a real estate investor, I have bought many properties that have come out of probate. We may even be able to buy the property before it clears probate.

          </p>
          <p className='text-sm md:text-base'>If you are new to probate there are some crazy words you need to learn like: beneficiary, intestate, revocable trusts, power of attorney, executor, personal representative, debts, assets, expenses, bequests, closing the estate, trustee, administration, distribution of property, codicit, joint tenants with rights of survivorship, tenants in common. If you have no idea about these terms we can recommend an attorney or lawyer that specializes in probate and estates.

          </p>
          <p className='text-sm md:text-base'>I am not an attorney, realtor or estate planner, but I do know how to buy your home in probate fast for cash without paying a realtor or commission.
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center py-3">Got a House in Probate?</p>
          <p className='text-sm md:text-base'>Should a loved one suddenly die, you may unexpectedly find yourself as the heir to their property. Unfortunately, sometimes, these properties are more burden than blessing. iBuyHomes.com can show you how to sell your house in probate.</p>
        </div>
        <div className="space-y-2">
          <p className="font-bold text-lg md:text-xl lg:text-3xl text-center">What to know about selling a home in probate</p>
          <p className='text-sm md:text-base'>Probate courts typically want to sell a house for as much money as possible to benefit the heirs. However, the sad truth is many homes in probate have fallen into disrepair, so it’s hard to find a buyer who’s willing to pay top dollar. </p>
          <p className='text-sm md:text-base'>Here’s where we comes in. We are property investors who buy homes even if they’re in bad condition. Even better, we’ll pay you in cash!</p>
          <p className='text-sm md:text-base'>As long as the probate court approves the purchase, we can close on your property in days—not weeks. If you’ve ever listed a property on the open market, then you know that we move quickly!</p>
          <p className='text-sm md:text-base'>In our two decades of operations, we’ve bought hundreds of homes that have come out of probate. In some cases, we are even able to buy properties before the probate closes.</p>
        </div>
        <div className="space-y-5">
          <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center">Who Can We Help?</p>

          <div className="space-y-2">
            <p className='text-sm md:text-base'>We helps people who want to sell homes in probate as soon as possible. </p>
            <p className='text-sm md:text-base'>Whether it’s because they can’t afford extensive repairs or they need money ASAP to pay the deceased person’s creditors, IBuyHomes will help out any heir looking for a guaranteed buyer so they can close the probate process quickly. </p>
          </div>

          <div className="space-y-2">
            <p className="font-bold text-lg md:text-xl lg:text-3xl text-center">Benefits of selling your probate home to an investor</p>
            <p className='text-sm md:text-base'>Working with us makes divesting your inherited property much easier: </p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg md:text-xl lg:text-3xl text-center">No sales commissions</p>
            <p className='text-sm md:text-base'>When you list your home with a realtor, you pay a commission when it’s sold. If your property isn’t
              worth much to begin with, there’s even less money for you to pocket. </p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg md:text-xl lg:text-3xl text-center">No need to repair</p>
            <p className='text-sm md:text-base'>Renovating a run-down home might cost even more than the property itself. Luckily, we buy probate
              homes in any condition. </p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg md:text-xl lg:text-3xl text-center">Close probate fast</p>
            <p className='text-sm md:text-base'>Why wait for months to get an offer from a buyer when we can close on your property in just a few days? </p>
            <p className='text-sm md:text-base'>If you want to know more about selling your house in probate, call us at 000-000-0000 or fill up this
              signup form. </p>
          </div>
        </div>
      </div>
    </main>
  )
}
