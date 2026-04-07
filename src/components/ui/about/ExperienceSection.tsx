"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="w-full py-20 px-4 md:px-12 lg:px-24 z-20 relative flex justify-center bg-[#050505]">
      <div className="w-full max-w-[1400px] grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-electric font-black text-xl md:text-2xl tracking-tight">Experience & Expertise</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]">
              Our Experience & <br className="hidden md:block"/> Expertise
            </h2>
          </div>
          
          <div className="flex flex-col gap-6 mt-4 text-white/70 text-lg font-light leading-relaxed">
            <p>
              Our team brings years of combined experience working with startups, small businesses, and growing brands across multiple industries. We are skilled in industry-leading tools and platforms including modern AI frameworks, cloud infrastructures, and high-performance engineering stacks.
            </p>
            <p>
              This expertise allows us to adapt quickly, stay ahead of trends, and deliver consistent, scalable results for our clients globally.
            </p>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,240,255,0.05)] group bg-black"
        >
          <Image 
            src="/images/about_mission.png" // Reusing mission image as an abstract fluid element matching the red flow
            alt="Experience Abstract"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80"
          />
        </motion.div>

      </div>
    </section>
  );
}
