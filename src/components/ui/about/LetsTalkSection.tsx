"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LetsTalkSection() {
  return (
    <section className="w-full py-20 px-4 md:px-12 lg:px-24 z-20 relative flex justify-center bg-[#050505] border-y border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center gap-10"
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white">
          <span className="text-white/70">Lets</span> talk
        </h2>

        <Link 
          href="/contact" 
          className="group px-8 py-3 rounded-full border border-electric bg-transparent hover:bg-electric/10 text-white transition-all font-bold flex items-center gap-3 shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
        >
          Book a call
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:text-electric transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}
