import React from 'react'
import Img1 from '../assets/images/68c2aa68ca27f3e13ab46f22_Multi Agent Orchestration (2)-p-2000.png'
import Img2 from '../assets/images/68c2aa3984f793bc1b545820_AI Agents Management-p-2000.png'
import Img3 from '../assets/images/68c2aab8041f0f83288c1456_Enterprise Intelligence Dashboard-p-2000.png'
import Img4 from '../assets/images/68c2aafc25b371feed9fcc83_Automated Backend Control Entities (1)-p-2000.png'
import Img5 from '../assets/images/68c2ab25a23cda3fb10db769_Autonomous Process Operators-p-2000.png'
import Img6 from '../assets/images/68c2ab678ac29e90180b40a0_AI Capability Blueprint & Maturity Assessment (1)-p-2000.png'
import AnimatedButton from './ui/AnimatedButton';

const cardData = [
    {
        title: 'AI Agent Management',
        desc: 'Reduced 40% customer query handling time.',
        img: Img2
    },
    {
        title: 'Predictive Supply Chain',
        desc: 'Cut inventory cost by 25%.',
        img: Img1
    },
    {
        title: 'Automated Compliance Monitoring',
        desc: 'Real-time risk detection.',
        img: Img3
    },
    {
        title: 'Generative AI for Marketing',
        desc: '10x faster content creation.',
        img: Img4
    },
    {
        title: 'AI-Powered Fraud Detection',
        desc: '99.8% accuracy.',
        img: Img5
    },
    {
        title: 'Smart Customer Support',
        desc: '24/7 multilingual AI bots.',
        img: Img6
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
                <div className='font-manrope text-gray-600 text-sm lg:text-base'>{desc}</div>
            </div>

        </div>
    );
}

export default function HomeAction() {
  return (
    <section className='pt-[60px]'>
            <div className='max-w-[1440px] w-full lg:p-8 p-4 mx-auto'>

                <h2 className='lg:text-5xl md:text-4xl text-3xl font-manrope text-center font-bold'>Accelerated Business Use Cases AI in Action</h2>
                <p className='font-manrope lg:text-lg text-gray-700 text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur in quod facilis esse eos sequi possimus veritatis quam id.</p>

                <div className='grid md:grid-cols-3 gap-6 mt-10'>
                    {cardData.map((card, idx) => (
                        <ActionCard key={idx} {...card} />
                    ))}
                </div>

                <div className='text-center pt-8'>
                    <AnimatedButton 
                    label='View All'
                    to="/"
                    className="py-2 px-6 rounded-full font-manrope font-medium bg-gradient-to-br from-cyan-400 to-blue-600 text-white"
                    />
                </div>
            </div>
        </section>
  )
}
