"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-20 z-20 relative flex justify-center bg-black/20">
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-electric font-semibold text-lg tracking-wider uppercase">About us</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">Who we are<span className="text-electric">?</span></h2>
          </div>
          
          <div className="flex flex-col gap-6 text-white/70 text-lg leading-relaxed font-light">
            <p>
              We are a team of experienced software engineers, cloud architects, designers, and AI specialists passionate about building digital platforms that redefine the future. With a deep understanding of enterprise architecture and global scale, we help businesses stand out in highly competitive tech landscapes.
            </p>
            <p>
              At Code Breck, we believe software engineering is not about shortcuts or guesswork, it&apos;s about rigorous strategy, precision execution, and continuous optimization.
            </p>
          </div>

          <Link href="/about" className="group mt-4 px-8 py-3.5 border border-white/20 bg-white/5 hover:bg-electric/10 rounded-full font-medium text-white hover:text-electric transition-all w-fit flex items-center gap-3 hover:border-electric/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full relative rounded-3xl overflow-hidden glass-panel aspect-square md:aspect-auto md:h-[600px] border-white/10"
        >
          <Image
            src="/images/about-abstract.png"
            alt="Abstract AI Swirl"
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
            priority
          />
          {/* Subtle gradient overlay to merge with dark theme smoothly */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
