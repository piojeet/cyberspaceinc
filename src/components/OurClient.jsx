import { ArrowRight, Award } from 'lucide-react';
import React from 'react'
import AnimatedButton from './ui/AnimatedButton';
import Img1 from '../assets/images/clients/imgi_2_johnson.jpg'
import Img2 from '../assets/images/clients/imgi_3_2-Logo.png'
import Img3 from '../assets/images/clients/imgi_4_3-Logo.png'
import Img4 from '../assets/images/clients/imgi_5_idexx.jpg'
import Img5 from '../assets/images/clients/imgi_6_5-Logo.png'
import Img6 from '../assets/images/clients/imgi_7_newell.jpg'
import Img7 from '../assets/images/clients/imgi_8_verisk.png'

export default function OurClient() {

    const clients = [
        { name: 'Johnson & Johnson', industry: 'Healthcare', projects: '12+', img: Img1 },
        { name: 'kenvue', industry: 'Healthcare', projects: '8+', img: Img2 },
        { name: 'Legend Biotech', industry: 'Biotechnology', projects: '15+', img: Img3 },
        { name: 'idexx', industry: 'Animal Veterinary', projects: '18+', img: Img4 },
        { name: 'Merck', industry: 'Pharmaceuticals', projects: '20+', img: Img5 },
        { name: 'Newell Brands', industry: 'Consumer Goods', projects: '10+', img: Img6 },
        { name: 'Verisk Analytics', industry: 'Insurance', projects: '18+', img: Img7 }
    ];

    return (
        <section className="bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-[1440px] mx-auto lg:px-8 px-4 py-[60px]">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6 font-manrope">
                        <Award className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-blue-600">Our Valued Clients</span>
                    </div>

                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-manrope text-center font-bold">
                        OUR <span className="text-transparent bg-clip-text bg-button-linear">CLIENTS</span>
                    </h2>

                    <p className="font-manrope lg:text-lg text-gray-700 text-center mt-4">
                        Trusted by Fortune 500 companies and innovative startups across diverse industries
                    </p>
                </div>

                {/* Clients Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
                        >
                            {/* Gradient Background on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Logo Placeholder */}
                                <div className='w-fit h-fit border-2 border-gray-200 mx-auto rounded-xl bg-white'>
                                    <img src={client.img} alt="" className='size-[120px] object-contain p-4 mix-blend-multiply' />
                                </div>
                                <div className="w-full flex items-center mb-4 mt-2 transition-colors duration-300 justify-center font-manrope">
                                    <span className="text-2xl text-gray-900">{client.name}</span>
                                </div>

                                {/* Info */}
                                <div className="space-y-3 font-manrope">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">Industry</span>
                                        <span className="text-sm text-gray-900">{client.industry}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">Projects</span>
                                        <span className="text-sm text-blue-600">{client.projects}</span>
                                    </div>
                                </div>

                                {/* Hover Action */}
                                {/* <button className="mt-6 w-full py-3 bg-blue-600 text-white rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2">
                                    View Case Study
                                    <ArrowRight className="w-4 h-4" />
                                </button> */}

                                <AnimatedButton
                                    label="View Case Study"
                                    to="/"
                                    className="px-8 py-4 mt-4 rounded-full font-manrope font-medium text-sm text-white transition-all duration-300 bg-button-linear w-full"
                                />
                            </div>

                            {/* Corner Accent */}
                            {/* <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gray-100 group-hover:border-blue-600 rounded-tr-2xl group-hover:opacity-100 transition-opacity duration-300"></div> */}
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-10">
                    
                    <AnimatedButton
                        label="View All Clients"
                        to="/"
                        className="px-8 py-4 rounded-full font-manrope font-medium text-sm text-white bg-button-linear"
                    />
                </div>
            </div>
        </section>
    )
}
