import React from "react";
import Marquee from "react-fast-marquee";
import Latter from '../assets/images/6836c4e26f9a8f1e9b6f8f52_Group 1707490645.svg';
import { Brain, Zap, Target, Sparkles, Rocket, Globe, Lightbulb } from "lucide-react";

export default function CreativeMarquee() {
    const marqueeItems = [
        {
            icon: <Lightbulb className="md:w-14 md:h-14 size-8" />,
            text: "Think Strategically",
            gradient: "from-cyan-400 to-blue-600",
            glow: "shadow-cyan-500/50"
        },
        {
            icon: <Brain className="md:w-14 md:h-14 size-8" />,
            text: "Act with AI",
            gradient: "from-purple-500 to-pink-600",
            glow: "shadow-purple-500/60"
        },
        {
            icon: <Zap className="md:w-14 md:h-14 size-8" />,
            text: "Scale Fast",
            gradient: "from-yellow-400 to-orange-600",
            glow: "shadow-yellow-400/70"
        },
        {
            icon: <Target className="md:w-14 md:h-14 size-8" />,
            text: "Win with Data",
            gradient: "from-emerald-400 to-teal-600",
            glow: "shadow-emerald-400/60"
        },
        {
            icon: <Sparkles className="md:w-14 md:h-14 size-8" />,
            text: "Innovate Daily",
            gradient: "from-indigo-500 to-purple-700",
            glow: "shadow-indigo-500/60"
        },
        {
            icon: <Rocket className="md:w-14 md:h-14 size-8" />,
            text: "Launch AI Now",
            gradient: "from-rose-500 to-red-600",
            glow: "shadow-rose-500/70"
        },
    ];

    return (
        <section className="relative overflow-hidden bg-dark-color lg:py-16 md:py-10 py-8">

            <div className="relative z-10">
                <Marquee 
                    speed={50} 
                    pauseOnHover={true} 
                    gradient={false}
                    className="select-none"
                >
                    {marqueeItems.concat(marqueeItems).map((item, index) => (
                        <div 
                            key={index}
                            className="group lg:mx-10 md:mx-8 mx-2 flex items-center gap-6 cursor-pointer transform transition-all duration-300 hover:scale-105 py-4 px-4 overflow-hidden"
                        >
                            {/* Icon Card with 3D Glow */}
                            <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-2xl transform-gpu transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                                <div className={`absolute inset-0 rounded-2xl bg-white/20 blur-xl ${item.glow} animate-ping`}></div>
                                <div className="relative text-white">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Text with Animated Underline */}
                            <div className="relative">
                                <span className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                                    {item.text}
                                </span>
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white to-transparent transition-all duration-500 group-hover:w-full"></div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>

        </section>
    );
}