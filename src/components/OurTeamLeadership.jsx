import React, { useLayoutEffect, useRef } from "react";
import { motion as _motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Award, Briefcase, Linkedin, Mail, Quote } from "lucide-react";
import { teamMembers } from "../data/teamData";

export default function OurTeamLeadership() {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });


  const x = useTransform(scrollYProgress, (v) => {
    const el = scrollerRef.current;
    if (!el) return 0;
    const totalScroll = el.scrollWidth - el.clientWidth;
    return -totalScroll * v;
  });

  useLayoutEffect(() => {
    const updateHeight = () => {
      const container = containerRef.current;
      const scroller = scrollerRef.current;
      if (!container || !scroller) return;

      const totalScroll = scroller.scrollWidth - scroller.clientWidth;
      const requiredHeight = totalScroll + window.innerHeight;
      container.style.height = `${requiredHeight}px`;
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

 
  const smoothX = useSpring(x, {
    stiffness: 100,
    damping: 20,
    mass: 0.3,
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-b from-white to-gray-50"
    >
      <div className="sticky lg:top-20 top-0 h-screen lg:h-fit left-0 w-full flex flex-col justify-center overflow-hidden py-14">
        
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600">Our Experience Experts</span>
          </div>

          <h2 className="lg:text-5xl md:text-4xl text-3xl font-manrope font-bold text-center">
            Leadership{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Excellence
            </span>
          </h2>

          <p className="font-manrope lg:text-lg text-gray-700 text-center mt-4 max-w-3xl mx-auto">
            A diverse team of industry veterans committed to innovation,
            excellence, and your success.
          </p>
        </div>

        
        <div className="lg:px-8 px-4">
           <_motion.div ref={scrollerRef} style={{ x: smoothX }} className="flex md:gap-6 gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl border-2 border-gray-100 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 lg:min-w-[400px] sm:min-w-[300px] min-w-[250px] max-w-[400px] overflow-hidden"
              >
                
                <div className="relative sm:h-80 h-44 overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

               
                <div className="relative lg:p-6 p-4 z-20">
                  <div className="mb-4 group-hover:text-white transition-colors duration-300">
                    <h3 className="sm:text-xl text-blue-600 mb-1 font-manrope">{member.name}</h3>
                    <p className="sm:text-sm text-xs text-gray-600 font-manrope">{member.title}</p>
                  </div>

                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 rounded-full sm:text-xs text-[10px] text-blue-600 mb-4 font-manrope">
                    <Briefcase className="w-3 h-3" />
                    {member.specialization}
                  </div>

                  <p className="sm:text-sm text-xs text-gray-600 leading-relaxed mb-4 overflow-hidden">
                    {member.bio}
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href={member.linkedin}
                      className="sm:size-10 size-8 rounded-lg bg-button-linear backdrop-blur-sm flex items-center justify-center text-white"
                    >
                      <Linkedin className="sn:size-5 size-4" />
                    </a>
                    <a
                      href="#"
                      className="sm:size-10 size-8 rounded-lg bg-button-linear backdrop-blur-sm flex items-center justify-center text-white"
                    >
                      <Mail className="sm:size-5 size-4" />
                    </a>
                  </div>
                </div>

                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20"></div>
              </div>
            ))}
          </_motion.div>
        </div>
      </div>
    </section>
  );
}
