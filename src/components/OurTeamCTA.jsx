import { ChevronRight, GraduationCap } from 'lucide-react'
import React from 'react'

export default function OurTeamCTA() {
  return (
    <section>
         <div className="max-w-[1440px] mx-auto lg:px-8 md:px-4 py-14 relative">
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 md:rounded-3xl p-4 py-10 md:p-16 text-center overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
              
              {/* Glow Effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-white">Join Our Team</span>
                </div>

                <h2 className="lg:text-5xl md:text-4xl text-3xl font-manrope font-bold text-center text-white mb-6">
                  Want to Work With Us?
                </h2>

                <p className="font-manrope lg:text-lg text-white text-center max-w-3xl mx-auto mb-6">
                  We're always looking for talented individuals who are passionate about technology and innovation. Explore exciting career opportunities.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  {/* <a
                    href="#"
                    className="px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 flex items-center gap-2"
                  >
                    View Open Positions
                    <ChevronRight className="w-5 h-5" />
                  </a> */}
                  <a
                    href="#contact"
                    className="px-8 py-4 bg-white backdrop-blur-sm text-black border-2 border-white/20 rounded-xl hover:bg-white/80 transition-all duration-300 font-manrope"
                  >
                    Contact HR Team
                  </a>
                </div>
              </div>
            </div>
          </div>
    </section>
  )
}
