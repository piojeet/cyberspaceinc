import { ChevronRight, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react'
import React from 'react'
import AnimatedButton from './ui/AnimatedButton'

export default function FooterContactForm() {
  return (
    <div>

      {/* Get In Touch Section */}
      <section className="relative md:py-14 pt-10 px-6 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full blur-3xl opacity-50"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white rotate-45"></div>
          <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-white"></div>
        </div>

        <div className="relative max-w-[1000px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white backdrop-blur-sm rounded-full border border-white/10 mb-6">
              <MessageSquare className="w-4 h-4 text-black" />
              <span className="text-sm text-black font-manrope">Contact Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-manrope text-center font-bold">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black">Touch</span>
            </h2>
            
            <p className="font-manrope text-lg text-gray-600 text-center mt-4 max-w-[700px] mx-auto">
              Reach out to the world's most reliable IT services.
            </p>
          </div>

          {/* Contact Form */}
          <div className="relative">
            {/* Form Container with Glass Effect */}
            <div className="relative bg-gradient-to-br from-white/90 to-white/100 backdrop-blur-xl rounded-3xl md:p-12 p-6 border border-black/20 shadow-2xl">
              {/* Decorative Corner Elements */}
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-black/20 rounded-tl-3xl"></div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-black/20 rounded-br-3xl"></div>

              <form className="md:space-y-8 space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="group relative">
                    <input
                      type="text"
                      placeholder="Name *"
                      className="w-full px-6 py-4 bg-black/5 border-2 border-black/10 rounded-xl text-black placeholder-gray-400 focus:border-black/30 focus:bg-black/10 transition-all duration-300 outline-none font-manrope"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>

                  {/* Email Input */}
                  <div className="group relative">
                    <input
                      type="email"
                      placeholder="Email *"
                      className="w-full px-6 py-4 bg-black/5 border-2 border-black/10 rounded-xl text-black placeholder-gray-400 focus:border-black/30 focus:bg-black/10 transition-all duration-300 outline-none font-manrope"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>

                {/* Inquiry Dropdown */}
                <div className="group relative">
                  <select className="w-full px-6 py-4 bg-black/5 border-2 border-black/10 rounded-xl text-black appearance-none focus:border-black/30 focus:bg-black/10 transition-all duration-300 outline-none cursor-pointer font-manrope">
                    <option value="" className="bg-gray-900 text-white">Your Inquiry About</option>
                    <option value="data-engineering" className="bg-gray-900 text-white">Data Engineering</option>
                    <option value="analytics" className="bg-gray-900 text-white">Analytics</option>
                    <option value="cloud-services" className="bg-gray-900 text-white">Cloud Services</option>
                    <option value="app-services" className="bg-gray-900 text-white">App Services</option>
                    <option value="it-services" className="bg-gray-900 text-white">IT Services</option>
                    <option value="salesforce" className="bg-gray-900 text-white">Salesforce & AppExchange</option>
                    <option value="other" className="bg-gray-900 text-white">Other</option>
                  </select>
                  <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 w-5 h-5 text-gray-400 pointer-events-none" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>

                {/* Message Textarea */}
                <div className="group relative">
                  <textarea
                    rows={6}
                    placeholder="Please describe what you need..."
                    className="w-full px-6 py-4 bg-black/5 border-2 border-black/10 rounded-xl text-black placeholder-gray-400 focus:border-black/30 focus:bg-black/10 transition-all duration-300 outline-none resize-none font-manrope"
                  ></textarea>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-end">
                <AnimatedButton 
                    label="Get a free consultation"
                    to="/"
                    className="px-8 py-4 rounded-full font-manrope font-medium text-sm bg-black text-white"
                    />

                  {/* <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>+1 732-625-6009</span>
                    </div>
                    <div className="hidden sm:block w-px h-6 bg-white/10"></div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>info@cyberspace.com</span>
                    </div>
                  </div> */}
                </div>
              </form>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-black/10 to-black/5 rounded-2xl rotate-12 backdrop-blur-sm border border-black/10"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-black/10 to-black/5 rounded-full backdrop-blur-sm border border-black/10"></div>
            </div>

            {/* Additional Floating Card - Support Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative bg-white backdrop-blur-sm rounded-2xl p-6 border border-black/10 hover:bg-black/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center mb-4 group-hover:bg-black/40 transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-black mb-2 font-manrope">Call Us</h3>
                <p className="text-sm text-gray-400 font-manrope">+1 732-625-6009</p>
              </div>

              <div className="group relative bg-white backdrop-blur-sm rounded-2xl p-6 border border-black/10 hover:bg-black/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center mb-4 group-hover:bg-black/40 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-black mb-2 font-manrope">Email Us</h3>
                <p className="text-sm text-gray-400 font-manrope">info@cyberspace.com</p>
              </div>

              <div className="group relative bg-white backdrop-blur-sm rounded-2xl p-6 border border-black/10 hover:bg-black/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center mb-4 group-hover:bg-black/40 transition-colors">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-black mb-2 font-manrope">Visit Us</h3>
                <p className="text-sm text-gray-400 font-manrope">Edison, NJ 08837, USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
