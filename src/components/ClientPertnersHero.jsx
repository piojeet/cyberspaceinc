import { ChevronRight, Globe } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ClientPertnersHero() {
    return (
        <section className="relative py-24 px-6 overflow-hidden bg-button-linear mt-[60px]">
            {/* Animated Background Elements */}
            {/* <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div> */}

            {/* Grid Pattern Overlay */}
            {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div> */}

            <div className="relative max-w-[1400px] mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                    <Globe className="w-4 h-4 text-cyan-100" />
                    <span className="text-sm text-white font-manrope">Trusted by Industry Leaders</span>
                </div>

                <h1 className="lg:text-7xl md:text-5xl text-4xl font-manrope font-bold leading-tight text-white mb-6">
                    Clients & Partners
                </h1>

                <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 font-manrope">
                    Collaborating with global innovators to deliver exceptional technology solutions and drive digital transformation worldwide.
                </p>

                {/* Breadcrumb */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300 font-manrope">
                    <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-white">Clients & Partners</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto font-manrope">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="text-4xl text-white mb-2">200+</div>
                        <div className="text-sm text-gray-200">Global Clients</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="text-4xl text-white mb-2">50+</div>
                        <div className="text-sm text-gray-200">Strategic Partners</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="text-4xl text-white mb-2">15+</div>
                        <div className="text-sm text-gray-200">Years of Excellence</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
