"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GlobalImpactSection() {
  return (
    <section className="w-full py-40 z-20 relative flex justify-center items-center overflow-hidden bg-black min-h-[70vh]">
      
      {/* Background Generated Map */}
      <div className="absolute inset-0 w-full h-full opacity-60">
        <Image
          src="/images/world-map.png"
          alt="World Map Graphic"
          fill
          className="object-cover object-center pointer-events-none mix-blend-screen"
        />
        {/* Radial fade out so edges disappear smoothly */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#000000_80%)] pointer-events-none"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-4xl text-center px-4 flex flex-col gap-6"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] leading-[1.1]">
          Growing Businesses Across <br />
          <span className="text-electric">United States</span>
        </h2>
        <p className="text-white/80 text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(0,0,0,1)]">
          We&apos;ve been helping businesses turn challenges into opportunities and grow secure, scalable brands across the globe.
        </p>
      </motion.div>

    </section>
  );
}
