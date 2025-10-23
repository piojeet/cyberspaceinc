import React from 'react'
import { Check, HandFist } from 'lucide-react'
import AnimatedButton from './ui/AnimatedButton'

const cardData = [
    {
        title: 'AI Strategy & Governance',
        desc: 'Plan, govern, and de risk enterprise AI adoption.',
        points: [
            'AI Strategy & Roadmap',
            'AI Strategy & Roadmap',
            'AI Strategy & Roadmap',
        ],
    },
    {
        title: 'AI Strategy & Governance',
        desc: 'Plan, govern, and de risk enterprise AI adoption.',
        points: [
            'AI Strategy & Roadmap',
            'AI Strategy & Roadmap',
            'AI Strategy & Roadmap',
        ],
    },
    {
        title: 'AI Strategy & Governance',
        desc: 'Plan, govern, and de risk enterprise AI adoption.',
        points: [
            'AI Strategy & Roadmap',
            'AI Strategy & Roadmap',
            'AI Strategy & Roadmap',
        ],
    },
    {
        title: 'AI Strategy & Governance',
        desc: 'Plan, govern, and de risk enterprise AI adoption.',
        points: [
            'AI Strategy & Roadmap',
            'AI Strategy & Roadmap',
            'AI Strategy & Roadmap',
        ],
    },
    {
        title: 'AI Strategy & Governance',
        desc: 'Plan, govern, and de risk enterprise AI adoption.',
        points: [
            'AI Strategy & Roadmap',
            'AI Strategy & Roadmap',
            'AI Strategy & Roadmap',
        ],
    },
    {
        title: 'AI Strategy & Governance',
        desc: 'Plan, govern, and de risk enterprise AI adoption.',
        points: [
            'AI Strategy & Roadmap',
            'AI Strategy & Roadmap',
            'AI Strategy & Roadmap',
        ],
    },
];

function ServiceCard({ title, desc, points }) {
    return (
        <div className='flex flex-col justify-between gap-8 group relative overflow-hidden rounded-2xl bg-card border border-border p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
            <div className='bg-[linear-gradient(90deg,hsla(221,45%,73%,1)_0%,hsla(220,78%,29%,1)_100%)] text-white size-16 flex items-center justify-center text-5xl rounded-lg'>
                <HandFist size={38} strokeWidth={1} />
            </div>
            <div className='space-y-2'>
                <div className='font-manrope text-black text-xl'>{title}</div>
                <div className='font-manrope text-gray-600'>{desc}</div>
                <div className='space-y-2'>
                    {points.map((pt, i) => (
                        <div key={i} className='flex items-center gap-2'>
                            <Check strokeWidth={2} className='size-5 text-gray-500' />
                            <span className='font-manrope text-gray-600'>{pt}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <AnimatedButton
                    label="Explore More"
                    to="/contact"
                    className="py-2 px-6 border border-black rounded-full font-manrope font-medium text-sm hover:bg-black text-black hover:text-white transition-colors duration-200"
                />
            </div>
        </div>
    );
}

export default function HomeServices() {
    return (
        <section className='pt-[60px]'>
            <div className='max-w-[1440px] w-full lg:p-8 p-4 mx-auto'>

                <h2 className='text-5xl font-manrope text-center'>Our core AI Transformation services</h2>
                <p className='font-manrope text-lg text-gray-700 text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur in quod facilis esse eos sequi possimus veritatis quam id.</p>

                <div className='grid grid-cols-3 gap-6 mt-10'>
                    {cardData.map((card, idx) => (
                        <ServiceCard key={idx} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
