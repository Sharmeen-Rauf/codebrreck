"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    "WEBSITE DESIGN & DEVELOPMENT",
    "SEARCH ENGINE OPTIMIZATION",
    "PERFORMANCE MARKETING",
    "LOGO DESIGN & BRANDING",
    "SOCIAL MEDIA MARKETING & MANAGEMENT",
    "CONTENT MARKETING"
  ];

  return (
    <section id="new-services" className="w-full px-4 md:px-12 lg:px-24 py-32 z-20 relative flex justify-center bg-black/40 overflow-hidden">
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-20 items-center relative">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-electric font-bold text-xl tracking-wider uppercase">Our Services</h3>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Exp Website <br /> Development & <br /> Design Solutions
            </h2>
          </div>

          <Link href="/services" className="group mt-4 px-8 py-3.5 border border-white/20 bg-black hover:bg-electric/10 rounded-full font-medium text-white hover:text-electric transition-all w-fit flex items-center gap-3 hover:border-electric/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            See All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Right Content */}
        <div className="relative w-full h-[600px] flex items-center justify-center">
          
          {/* Animated Background Flower Icon */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30"
          >
            <svg viewBox="0 0 400 400" className="w-[150%] h-[150%] max-w-none text-electric drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]">
              {/* Generate multiple offset paths simulating a geometric flower/spirograph */}
              {[...Array(12)].map((_, i) => (
                <motion.g key={i} transform={`rotate(${i * 30} 200 200)`}>
                  <path 
                    d="M 200 50 C 250 150 350 200 200 350 C 50 200 150 150 200 50 Z" 
                    fill="transparent" 
                    stroke="currentColor" 
                    strokeWidth="1"
                  />
                  <path 
                    d="M 200 20 L 250 100 L 200 380 L 150 100 Z" 
                    fill="transparent" 
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity="0.5"
                  />
                </motion.g>
              ))}
              <circle cx="200" cy="200" r="40" fill="transparent" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="200" cy="200" r="120" fill="transparent" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </motion.div>

          {/* Services List stacked */}
          <div className="relative z-10 w-full flex flex-col gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 1.1, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="w-full pb-4 border-b border-white/10"
              >
                <h3 className="text-xl md:text-2xl font-bold tracking-widest text-white hover:text-electric transition-colors cursor-pointer w-fit">
                  {service}
                </h3>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
