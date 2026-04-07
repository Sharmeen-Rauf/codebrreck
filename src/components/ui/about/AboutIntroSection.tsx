"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutIntroSection() {
  return (
    <section className="w-full pt-32 md:pt-48 pb-20 px-4 md:px-12 lg:px-24 z-20 relative flex justify-center bg-transparent">
      <div className="w-full max-w-[1400px] grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1]">
            <span className="text-electric">About Us -</span> <br className="hidden md:block"/>
            Code Breck <span className="text-white/60">Lab</span>
          </h1>
          
          <div className="flex flex-col gap-6 mt-4 text-white/70 text-lg font-light leading-relaxed">
            <p>
              Code Breck Lab is a results driven digital engineering agency helping businesses across the United States grow their online presence, generate quality leads, and increase revenue through strategic digital solutions.
            </p>
            <p>
              We specialize in delivering end to end enterprise software services that are data-backed, transparent, and tailored to each client&apos;s unique goals. Our focus is simple: measurable growth, long term success, and real business impact.
            </p>
          </div>

          <Link href="/contact" className="group mt-6 px-10 py-3.5 rounded-full border border-white/20 bg-transparent hover:bg-electric/10 hover:border-electric transition-all w-fit flex items-center justify-center gap-3 text-sm font-bold text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            Book a call
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:text-electric transition-transform" />
          </Link>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,240,255,0.1)] group"
        >
          <Image 
            src="/images/about_intro.png" 
            alt="About Code Breck"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
        </motion.div>

      </div>
    </section>
  );
}
