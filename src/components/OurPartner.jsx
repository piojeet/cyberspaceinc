import { Award, Globe, Handshake, TrendingUp } from 'lucide-react';
import React from 'react'
import Img1 from '../assets/images/partners/imgi_9_deloitte.jpg'
import Img2 from '../assets/images/partners/imgi_10_mphasis.jpg'
import Img3 from '../assets/images/partners/imgi_11_atos.jpg'
import Img4 from '../assets/images/partners/imgi_12_tech-mahindra.jpg'
import Img5 from '../assets/images/partners/imgi_13_virtusa.jpg'
import Img6 from '../assets/images/partners/imgi_14_wipro.jpg'
import Img7 from '../assets/images/partners/imgi_15_tavant.jpg'
import Img8 from '../assets/images/partners/imgi_16_apexon.jpg'
import Img9 from '../assets/images/partners/imgi_17_crisil.jpg'
import Img10 from '../assets/images/partners/imgi_18_P11-Logo.png'
import Img11 from '../assets/images/partners/imgi_19_U-.1.png'

export default function OurPartner() {

    const partners = [
        { name: 'Deloitte', type: 'Strategic Partner', since: '2018', img: Img1 },
        { name: 'Mphasis', type: 'Technology Partner', since: '2019', img: Img2 },
        { name: 'Atos Syntel', type: 'Solutions Partner', since: '2020', img: Img3 },
        { name: 'Tech Mahindra', type: 'Innovation Partner', since: '2017', img: Img4 },
        { name: 'Virtusa', type: 'Digital Partner', since: '2021', img: Img5 },
        { name: 'Wipro', type: 'Technology Partner', since: '2016', img: Img6 },
        { name: 'Tavant', type: 'Solutions Partner', since: '2019', img: Img7 },
        { name: 'Apexon', type: 'Cloud Partner', since: '2020', img: Img8 },
        { name: 'Crisil', type: 'Analytics Partner', since: '2018', img: Img9 },
        { name: 'Indium', type: 'Digital Partner', since: '2022', img: Img10 },
        { name: 'UST', type: 'Strategic Partner', since: '2017', img: Img11 }
    ];

    return (
        <section className="">
            <div className="max-w-[1440px] mx-auto lg:px-8 px-4 py-[60px]">
                {/* Header */}
                <div className="text-center mb-16">

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6 font-manrope">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-blue-600">Strategic Partnerships</span>
                    </div>

                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-manrope text-center font-bold">
                        OUR <span className="text-transparent bg-clip-text bg-button-linear">PARTNERS</span>
                    </h2>

                    <p className="font-manrope lg:text-lg text-gray-700 text-center mt-4">
                        Collaborating with industry leaders to deliver cutting-edge solutions and innovative services
                    </p>
                </div>

                {/* Partners Grid - Masonry Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl p-1 border border-gray-100 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Animated Border */}
                            <div className="absolute inset-0 rounded-xl bg-button-linear opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm"></div>

                            {/* Content */}
                            <div className="relative bg-white rounded-xl p-4">
                            <div className='w-fit h-fit border-2 border-gray-200 mx-auto rounded-xl bg-white'>
                                    <img src={partner.img} alt="" className='size-[120px] object-contain p-4 mix-blend-multiply' />
                                </div>
                                <div className="w-full flex items-center mb-4 mt-2 transition-colors duration-300 justify-center font-manrope">
                                    <span className="text-2xl text-gray-900">{partner.name}</span>
                                </div>

                                {/* Badge */}
                                <div className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs mb-3">
                                    <Handshake className="w-3 h-3" />
                                    {partner.type}
                                </div>

                                {/* Since */}
                                <p className="text-xs text-gray-500">Partner since {partner.since}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Partnership Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-button-linear flex items-center justify-center mx-auto">
                            <Globe className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl text-gray-900">Global Reach</h3>
                        <p className="text-sm text-gray-600">Extensive network spanning across continents and industries</p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-button-linear flex items-center justify-center mx-auto">
                            <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl text-gray-900">Shared Growth</h3>
                        <p className="text-sm text-gray-600">Mutual success through innovative collaboration</p>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-button-linear flex items-center justify-center mx-auto">
                            <Award className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl text-gray-900">Excellence</h3>
                        <p className="text-sm text-gray-600">Commitment to delivering world-class solutions</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
