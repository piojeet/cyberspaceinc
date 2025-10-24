import React from "react";
import Marquee from "react-fast-marquee";
import Latter1 from '../assets/images/6836c4e26f9a8f1e9b6f8f52_Group 1707490645.svg'
import Latter2 from '../assets/images/6836c4bb4d58153c9fa128d6_Group 1707490644.svg'
import Latter3 from '../assets/images/6836c4795ac8a6ca60385888_Group 1707490643 (1).svg'

export default function Features() {
    return (
        <section className="md:pt-[100px] pt-[50px]">
            <div className="bg-black py-8 overflow-x-auto select-none">
                <Marquee behavior="scroll" direction="left" autoFill={true} speed={60} pauseOnHover={true}>
                    <div className="flex items-center gap-4 mr-8">
                        <div className="bg-[linear-gradient(90deg,hsla(221,45%,73%,1)_0%,hsla(220,78%,29%,1)_100%)] rounded-lg">
                            <img src={Latter1} alt="img" className="lg:h-20 md:h-16 h-14 object-contain" />
                        </div>
                        <div className="lg:text-5xl md:text-4xl text-2xl text-white">Think Strategically</div>
                    </div>
                    <div className="flex items-center gap-4 mr-8">
                        <div className="bg-[linear-gradient(90deg,hsla(221,45%,73%,1)_0%,hsla(220,78%,29%,1)_100%)] rounded-lg">
                            <img src={Latter2} alt="img" className="lg:h-20 md:h-16 h-14 object-contain" />
                        </div>
                        <div className="lg:text-5xl md:text-4xl text-2xl text-white">Act with AI</div>
                    </div>
                    <div className="flex items-center gap-4 mr-8">
                        <div className="bg-[linear-gradient(90deg,hsla(221,45%,73%,1)_0%,hsla(220,78%,29%,1)_100%)] rounded-lg">
                            <img src={Latter3} alt="img" className="lg:h-20 md:h-16 h-14 object-contain" />
                        </div>
                        <div className="lg:text-5xl md:text-4xl text-2xl text-white">Scale Intelligently</div>
                    </div>
                </Marquee>
            </div>
        </section>
    );
}
