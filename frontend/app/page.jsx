import Hero from "@/components/Hero";
import RenderText from "@/components/RenderText";
import Image from "next/image";

const assets = [
  {
    title: 'buyings',
    buttonText: 'SEE ALL PROPERTIES FOR SALE',
    desc: `At Property Invest – We know that a rewarding real estate search means relating with your goals and accomplishing what you have aimed for. When you choose us, our first ambition is to connect with you and understand your needs. Our international and entrepreneurial team of dynamic real estate professionals reacts quick and advises you through all your questions related to the luxembourgish real estate market.`,
    source: '/assets/Image-02.png'
  },
  {
    title: 'rentals',
    buttonText: 'SEE ALL PROPERTIES FOR SALE',
    desc: `At Property Invest – We know that a rewarding real estate search means relating with your goals and accomplishing what you have aimed for. When you choose us, our first ambition is to connect with you and understand your needs. Our international and entrepreneurial team of dynamic real estate professionals reacts quick and advises you through all your questions related to the luxembourgish real estate market.`,
    source: '/assets/Image-03.png'
  },
  {
    title: 'projects',
    buttonText: 'see all projects',
    desc: `At Property Invest – We know that a rewarding real estate search means relating with your goals and accomplishing what you have aimed for. When you choose us, our first ambition is to connect with you and understand your needs. Our international and entrepreneurial team of dynamic real estate professionals reacts quick and advises you through all your questions related to the luxembourgish real estate market.`,
    source: '/assets/Image-04.png'
  }
]

const services = [
  {
    title: 'we pay top dollar',
    desc: `Because we’re a national company that understands
    the real estate market, we can offer a PREMIUM price due
    to our long term buy and hold strategy.`,
    source: '/assets/icons/dollar_click.svg'
  },
  {
    title: 'you pay no fees or commissions',
    desc: `Save your money! We will pay ALL traditional closing
    costs which will save you thousands of dollars PLUS you
    will not have to pay any real estate commissions and you
    won’t have to be nickeled and dimed with repairs. We
    buy in ‘’AS IS’’ condition.`,
    source: '/assets/icons/no_fee.svg'
  },
  {
    title: 'we can close in 7 days or less',
    desc: `we are backed by some very deep pockets which allows
    us to offer a FAST closing. As soon at the title company
    provides the closing documents we can fund the
    transaction and you can get your proceeds.`,
    source: '/assets/icons/clock.svg'
  },
  {
    title: 'no repairs needed! we buy “as is’’',
    desc: `You’ll save thousands of dollars and a ton of headaches
    by NOT fixing anything on the property. We’ll buy your
    property in ‘’AS IS’’ condition. You  don’t even have to get a
    cleaning crew.`,
    source: '/assets/icons/repair.svg'
  },
]

const how_it_works = [
  {
    title: `GIVE US A CALL`,
    desc: `As soon as we receive your request, we will get started on your offer right away!`,
    source: '/assets/Image-05.png'
  },
  {
    title: `RECEIVE YOUR CASH OFFER`,
    desc: `We will do a quick evalution of your property and we will give you a fair and fast cash offer for your immediate review.`,
    source: '/assets/Image-06.png'
  },
  {
    title: `PICK YOUR MOVE OUT DATE`,
    desc: `When you accept our offer, you get to pick out your moving date and how to spend your equity.`,
    source: '/assets/Image-07.png'
  }
]

const selling_to_us = [
  { title: `No commissions` },
  {
    title: `Closing costs negotiated between
  buyer and seller`},
  { title: `NO financing contingency` },
  { title: `NO appraisal needed` },
  { title: `Immediate CASH offer` },
  { title: `Closing date of your choice` },
  { title: `We pay for ALL the repairs` },
]

const selling_to_agent = [
  {
    title: `6% of commissions/fees on average is paid
  by you, the seller`},
  {
    title: `2% of closing costs on average is paid by
  you, the seller`},
  {
    title: `Up to 15% of sales fall through due to
  financing and inspection contingency`},
  { title: `Sale is often subject to appraisal` },
  { title: `+/- 91 days until sold` },
  {
    title: `Closing date 30-60 +/- days after accepting
  buyer’s offer`},
  {
    title: `Payment of repairs negotiated during
  inspection period`},
]

const type_of_house = [
  {
    title: `Late Payments`,
    desc: `Struggling with your mortgage payments? 
    Unburden yourself.`,
    source: '/assets/icons/late_payment.svg'
  },
  {
    title: `Relocation`,
    desc: `House where the owner needs to relocate
    and does not have time to list their house
    properly with an agent.`,
    source: '/assets/icons/relocation.svg'
  },
  {
    title: `Retirement`,
    desc: `Houses where the owner has retired and
    can no longer afford the payments
    associated with it.`,
    source: '/assets/icons/retirement.svg'
  },
  {
    title: `Liens`,
    desc: `Houses that have been seized by a lien and need
    to be paid off immediately for debts against the
    house.`,
    source: '/assets/icons/liens.svg'
  },
  {
    title: `Owe Taxes`,
    desc: `Houses that owe taxes or have high taxes
    and the owner is no longer able to afford the
    payments.`,
    source: '/assets/icons/owe_taxes.svg'
  },
  {
    title: `Costly Repairs`,
    desc: `Houses that were damaged by natural disasters
    and the owner cannot afford to repair the house.`,
    source: '/assets/icons/costly_repairs.svg'
  },
]

export const metadata = {
  title: {
    default: 'Home - Mazzanti',
  },
};

async function getAllGoals() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/admin/home/all-goals`, {
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

export default async function Home() {
  let goals = [];
  try {
    goals = await getAllGoals();
  } catch (error) {
    console.error(error);
    goals = [];
  }
  return (
    <main className="flex-1 bg-mazzanti-black text-white">
      <Hero title={`We Buy Houses Any Condition`} />
      <div className="bg-mazzanti-gray">
        {goals?.map((item, index) => (
          <div key={index} className="max-w-[1440px] mx-auto py-20 px-4 space-y-10">
            <p className="font-bold text-xl md:text-2xl lg:text-4xl text-center">{item.title}</p>
            <div className="text-sm md:text-base"><RenderText htmlContent={item.desc} /></div>
          </div>
        ))}
        <div className=" flex justify-center">
          <button className="bg-mazzanti-darksky hover:bg-mazzanti-darksky/80 rounded-sm font-bold py-2 px-5">Find Out More</button>
        </div>
      </div>
      <div className="">
        {assets.map((item, index) => (
          <div key={index} className={`${index % 2 !== 0 ? 'bg-mazzanti-gray' : ''} border-b border-b-gray-500`}>
            <div className="max-w-[1440px] mx-auto px-4">
              <div className={`grid grid-cols-1 md:grid-cols-2`}>
                <div className={`py-7 ${index % 2 === 0 ? 'order-1 md:border-r-4' : 'order-1 md:order-2'}`}>
                  <Image src={item.source} height={500} width={500} alt="" className="w-full h-auto" />
                </div>
                <div className={`flex flex-col items-center justify-center gap-5 px-2 py-2 ${index % 2 === 0 ? 'order-2' : 'order-2 md:order-1 md:border-r-4'}`}>
                  <p className="py-2 px-5 bg-mazzanti-darksky uppercase font-bold rounded-sm">{item.title}</p>
                  <button className="px-6 py-2 border hover:bg-white hover:text-mazzanti-darksky hover:font-bold transition-all">{item.buttonText}</button>
                  <p className="max-w-2xl">{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <div className="max-w-[1440px] mx-auto py-20 px-4 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {services.map((item, index) => (
              <div key={index} className="">
                <div className="flex gap-4">
                  <div className="py-2">
                    <Image src={item.source} height={20} width={20} alt="" className="w-9 md:w-12 lg:w-14 h-auto" />
                  </div>
                  <div className="max-w-lg">
                    <p className="py-2 capitalize font-bold line-clamp-1 text-md">{item.title}</p>
                    <p className="line-clamp-4">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-mazzanti-gray py-2">
        <div className="max-w-[1440px] mx-auto py-20 px-4 space-y-10">
          <p className="text-center flex flex-col">
            <span className="text-3xl font-bold">How it works</span>
            <span className="text-lg font-semibold">Discover Hassle free selling</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {how_it_works.map((item, index) => (
              <div key={index} className="space-y-2">
                <p className="uppercase">{item.title}</p>
                <Image src={item.source} width={500} height={500} alt="" />
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="max-w-[1440px] mx-auto px-4 border grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-5 md:space-y-10 px-3 md:px-5 py-16">
            {selling_to_us.map((item, index) => (
              <div key={index} className="flex gap-2 md:gap-5">
                <Image src='/assets/icons/tick.svg' width={15} height={15} alt='' className="w-5 h-auto" />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <div className="space-y-5 md:space-y-10 px-3 md:px-5 py-16 md:border-l">
            {selling_to_agent.map((item, index) => (
              <div key={index} className="flex gap-2 md:gap-5">
                <Image src='/assets/icons/cancel.svg' width={15} height={15} alt='' className="w-5 h-auto" />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-mazzanti-gray py-2">
        <div className="max-w-[1440px] mx-auto pt-10 py-20 px-4 space-y-10">
          <p className="text-center flex flex-col">
            <span className="text-3xl font-bold">TYPE OF HOUSES WE BUY</span>
            <span className="text-lg font-semibold">Take a look at some of the reasons why customers come to us.</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {type_of_house.map((item, index) => (
              <div key={index} className="space-y-2 flex flex-col justify-center items-center">
                <Image src={item.source} width={15} height={15} alt="" className="w-5 h-auto" />
                <p className="uppercase font-bold">{item.title}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
