import React from 'react'
import Img1 from '../assets/images/68c2aa68ca27f3e13ab46f22_Multi Agent Orchestration (2)-p-2000.png'
import AnimatedButton from './ui/AnimatedButton';

const cardData = [
    {
        title: 'AI Agent Management',
        desc: 'Plan, govern, and de risk enterprise AI adoption.',
        img: Img1
    },
    {
        title: 'AI Agent Management',
        desc: 'Plan, govern, and de risk enterprise AI adoption.',
        img: Img1
    },
    {
        title: 'AI Agent Management',
        desc: 'Plan, govern, and de risk enterprise AI adoption.',
        img: Img1
    },
    {
        title: 'AI Agent Management',
        desc: 'Plan, govern, and de risk enterprise AI adoption.',
        img: Img1
    },
    {
        title: 'AI Agent Management',
        desc: 'Plan, govern, and de risk enterprise AI adoption.',
        img: Img1
    },
    {
        title: 'AI Agent Management',
        desc: 'Plan, govern, and de risk enterprise AI adoption.',
        img: Img1
    },
];

function ActionCard({ title, desc, img }) {
    return (
        <div className='flex flex-col justify-between gap-4 group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group'>
            <div className='text-white flex items-center justify-center text-5xl bg-blue-color/10 relative overflow-hidden'>
            <span className='absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,hsla(221,45%,73%,1)_0%,hsla(220,78%,29%,1)_100%)] opacity-0 group-hover:opacity-100 transition-all duration-500'></span>
                <img src={img} alt="img" className='relative z-10 scale-95 transition-all duration-500 group-hover:scale-105 rounded-lg' />
            </div>
            <div className='space-y-2 p-4 pt-0'>
                <div className='font-manrope text-black text-xl'>{title}</div>
                <div className='font-manrope text-gray-600'>{desc}</div>
            </div>

        </div>
    );
}

export default function HomeAction() {
  return (
    <section className='pt-[60px]'>
            <div className='max-w-[1440px] w-full lg:p-8 p-4 mx-auto'>

                <h2 className='text-5xl font-manrope text-center font-bold'>Accelerated Business Use Cases AI in Action</h2>
                <p className='font-manrope text-lg text-gray-700 text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur in quod facilis esse eos sequi possimus veritatis quam id.</p>

                <div className='grid grid-cols-3 gap-6 mt-10'>
                    {cardData.map((card, idx) => (
                        <ActionCard key={idx} {...card} />
                    ))}
                </div>

                <div className='text-center pt-8'>
                    <AnimatedButton 
                    label='View All'
                    to="/"
                    className="py-2 px-6 border border-black rounded-full font-manrope font-medium bg-black text-white"
                    />
                </div>
            </div>
        </section>
  )
}
