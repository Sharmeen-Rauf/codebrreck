"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Headset } from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-24 z-20 relative flex justify-center bg-transparent">
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-16 lg:gap-24 items-center relative">
        
        {/* Left Content: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full relative rounded-[2rem] overflow-hidden element-glow aspect-[4/3] border border-white/5 shadow-[0_20px_60px_rgba(0,240,255,0.1)]"
        >
          <Image
            src="/images/why-choose.png"
            alt="Abstract 3D Waves"
            fill
            className="object-cover transition-transform duration-1000 animate-[pulse_10s_ease-in-out_infinite]"
          />
        </motion.div>

        {/* Right Content: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-electric font-bold text-xl tracking-wider">Why Choose Code Breck lab?</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.1]">
              Proven Success Over 15+ Years
            </h2>
          </div>

          <p className="text-white/60 text-lg leading-relaxed font-light mt-4 mb-4">
            Our software engineering agency has helped companies & businesses such as yours reach better positions, increase digital traffic, positive returns like (ROI) and brand building through our cutting-edge development services. Our tech company is certified in areas like AI, Cloud Architecture, UX/UI Design, Full-Stack Development & Data Science. We bring 15+ years of experience to the table and use proven architectures to help your business succeed safely and reliably.
          </p>

          <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-black/40 flex items-center justify-center relative hover:border-electric transition-colors group cursor-default">
                <ShieldCheck className="w-5 h-5 text-electric drop-shadow-[0_0_10px_rgba(0,240,255,1)]" />
                <div className="absolute inset-0 rounded-full border border-electric scale-[1.2] opacity-0 group-hover:opacity-30 group-hover:scale-100 transition-all duration-300"></div>
              </div>
              <h4 className="text-lg font-bold text-white tracking-wide">Quality Assurance</h4>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-black/40 flex items-center justify-center relative hover:border-electric transition-colors group cursor-default">
                <Headset className="w-5 h-5 text-electric drop-shadow-[0_0_10px_rgba(0,240,255,1)]" />
                <div className="absolute inset-0 rounded-full border border-electric scale-[1.2] opacity-0 group-hover:opacity-30 group-hover:scale-100 transition-all duration-300"></div>
              </div>
              <h4 className="text-lg font-bold text-white tracking-wide">Professional Support</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
