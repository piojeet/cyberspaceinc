import React from "react";
import Marquee from "react-fast-marquee";
import Latter from '../assets/images/6836c4e26f9a8f1e9b6f8f52_Group 1707490645.svg'

export default function Features() {
    return (
        <section className="pt-[100px]">
            <div className="bg-black py-8 overflow-x-auto select-none">
                <Marquee behavior="scroll" direction="left" autoFill={true} speed={60} pauseOnHover={true}>
                    <div className="flex items-center gap-4 mr-8">
                        <div className="bg-[linear-gradient(90deg,hsla(221,45%,73%,1)_0%,hsla(220,78%,29%,1)_100%)] rounded-lg">
                            <img src={Latter} alt="img" className="h-20 object-contain" />
                        </div>
                        <div className="text-3xl text-white">Think Strategically</div>
                    </div>
                </Marquee>
            </div>
        </section>
    );
}
