"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VideoSection() {
  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-24 z-20 relative flex justify-center">
      <div className="w-full max-w-7xl relative">
        
        {/* Fake Video Player Background */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-black/60 relative border border-white/10 shadow-[0_0_50px_rgba(0,240,255,0.05)] group cursor-pointer flex items-center justify-center"
        >
          {/* Real Autoplaying Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src="/images/sharmeenvideo.mp4" type="video/mp4" />
          </video>
          {/* Technical overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-electric/20 via-transparent to-electric/10 pointer-events-none mix-blend-overlay"></div>
          
        </motion.div>

        {/* Overlay Glass Div (Centered/Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-[-80px] md:mt-[-120px] relative z-20 mx-auto w-full max-w-4xl glass-panel bg-black/80 border border-t-white/10 border-b-electric/30 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-white">
            <span className="text-electric">Watch the</span> creative process behind our digital works.
          </h2>
          
          <p className="text-white/60 font-light text-sm md:text-base max-w-2xl leading-relaxed">
            At Code Breck lab, our commitment to quality and excellence goes beyond expectations. From the initial architecture and brainstorming session to massive scale deployments.
          </p>
          
          <Link href="/contact" className="group mt-2 px-8 py-3 rounded-full border border-white/10 bg-transparent hover:border-electric text-white text-sm font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
            Book a call
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
