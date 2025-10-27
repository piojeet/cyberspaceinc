import { Users } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { motion as _motion, useAnimation, useInView } from "framer-motion";

export default function OurTeamHero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });
  const controls = useAnimation();


  const stats = [
    { value: 50, suffix: "+", label: "Team Members" },
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 200, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
  ];

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
    >
    
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

 
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

 
      <div className="relative max-w-[1400px] mx-auto text-center">

        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
          <Users className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-white font-manrope">
            Meet Our Leadership Team
          </span>
        </div>


        <h1 className="lg:text-7xl md:text-5xl text-4xl font-manrope font-bold leading-tight text-white mb-6">
          Our Team
        </h1>

        <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 font-manrope">
          Meet the brilliant minds behind Cyber Space Technologies. Our team of
          experienced experts is dedicated to delivering innovative solutions
          that drive success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto font-manrope">
          {stats.map((stat, i) => (
            <_motion.div
              key={i}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: i * 0.2 },
                },
              }}
            >
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                isActive={isInView}
              />
              <div className="text-sm text-gray-400">{stat.label}</div>
            </_motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function AnimatedCounter({ target, suffix, isActive }) {
  const controls = useAnimation();
  const ref = useRef(0);

  useEffect(() => {
    if (!isActive) return;

    controls.start({
      value: target,
      transition: { duration: 2, ease: "easeOut" },
    });
  }, [isActive, target, controls]);

  return (
    <_motion.div
      initial={{ value: 0 }}
      animate={controls}
      onUpdate={(latest) => {
        if (ref.current) ref.current.textContent = Math.floor(latest.value);
      }}
      className="text-4xl text-white mb-2 font-semibold"
    >
      <span ref={ref}>0</span>
      {suffix}
    </_motion.div>
  );
}
