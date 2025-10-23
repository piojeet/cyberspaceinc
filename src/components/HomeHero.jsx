import { Sparkles } from 'lucide-react'
import React from 'react'
import BG from '../assets/images/68ce59f0bf72d4300ecee108_hbi-654-p-500.jpg'
import Icon from '../assets/images/68304ad41e2a74b90f207eda_icon-input-white.svg'
import RippleGrid from './RippleGrid'

export default function HomeHero() {
    return (
        <section className='pt-[200px] relative bg-black pb-[100px]'>
            <div className='max-w-[1440px] w-full mx-auto lg:px-8 px-4 grid grid-cols-2 gap-16 relative z-10 pointer-events-none'>
                <div className='space-y-4 content-center'>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366f1]/20 border border-[#6366f1]/20">
                        <Sparkles className="h-4 w-4 text-white" />
                        <span className="text-sm text-white font-manrope">AI-Powered Innovation</span>
                    </div>
                    <h1 className='text-7xl font-manrope font-bold leading-tight text-white'>
                        EXPLORE INNOVATIONS HERE
                    </h1>
                    <div className='text-2xl font-manrope text-white'>
                        Welcome to Cyber Space Technologies
                    </div>
                    <p className='font-manrope leading-snug text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maxime excepturi dolore quam, sed inventore deserunt rem numquam vel aliquam?</p>
                </div>

                <div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='rounded-lg overflow-hidden'>
                            <img src={BG} alt="image" className='w-full' />
                        </div>

                        <div className='bg-white/30 p-4 flex flex-col justify-between rounded-lg'>
                            <div className='font-manrope text-3xl'>
                                <div className='text-white'>30%+ Faster</div>
                                <div className='text-white/60'>Time-to-up</div>
                            </div>

                            <p className='font-manrope text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos qui reprehenderit est eius vitae molestiae, magni distinctio. Hic, ducimus obcaecati.</p>
                        </div>
                    </div>

                    <div className='mt-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-8 flex items-center justify-center rounded-lg'>
                        <div className='bg-black/10 flex items-center gap-2 p-4 py-3 rounded-lg'>
                            <img src={Icon} alt="" className='h-8' />
                            <div className='leading-none font-manrope font-medium text-white'>Automate complex enterprise workflows</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-0 left-0 w-full h-full'>
                <RippleGrid
                    enableRainbow={false}
                    gridColor="#ffffff"
                    rippleIntensity={0.05}
                    gridSize={10}
                    gridThickness={15}
                    mouseInteraction={true}
                    mouseInteractionRadius={1.2}
                    opacity={0.8}
                />
            </div>
        </section>
    )
}
