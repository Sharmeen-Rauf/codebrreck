"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Olivia James",
      text: "We now have a fantastic website that perfectly encapsulates the essence of our company thanks to them. Their service exceeded all of our expectations.",
      initials: "OJ",
      color: "bg-purple-600"
    },
    {
      name: "Daniel Lee",
      text: "They understood our brand perfectly. The design is stunning and the user experience is flawless. Highly recommended!",
      initials: "DL",
      color: "bg-blue-600"
    },
    {
      name: "Emily Tran",
      text: "Incredibly impressed. Their team was professional, creative, and fast. They really care about delivering quality.",
      initials: "ET",
      color: "bg-emerald-600"
    }
  ];

  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-24 z-20 relative flex justify-center bg-transparent overflow-hidden">
      <div className="w-full max-w-[1400px] flex flex-col items-center gap-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center gap-4"
        >
          <h3 className="text-electric font-semibold text-lg tracking-wider">Our Testimonials</h3>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Our success, echoed <br /> by <span className="text-white/50">our Clients</span>
          </h2>
          
          <div className="mt-4 flex flex-col items-center gap-1">
            <span className="text-3xl font-black tracking-tighter">5.00</span>
            <span className="text-white/50 text-sm">57 reviews</span>
            <div className="flex gap-1 mt-1 text-electric">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
          </div>
        </motion.div>

        {/* Carousel Sim Grid */}
        <div className="w-full flex items-center justify-between gap-4 mt-8 relative">
          
          {/* Left Arrow */}
          <button className="hidden md:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center text-white/50 hover:text-electric hover:border-electric transition-all shrink-0">
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className="flex-1 grid md:grid-cols-3 gap-6 items-center">
            {testimonials.map((t, idx) => {
              const isCenter = idx === 1;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: isCenter ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`relative p-8 rounded-2xl flex flex-col items-center text-center gap-6 transition-all duration-500
                    ${isCenter 
                      ? "glass-panel bg-white/10 md:scale-110 z-10 border-electric/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
                      : "bg-[#111] border border-white/5 opacity-80 md:scale-95"
                    }`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold ${t.color} text-white shadow-lg`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{t.name}</h4>
                  </div>
                  <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                    &quot;{t.text}&quot;
                  </p>
                  <div className="flex gap-1 text-electric">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right Arrow */}
          <button className="hidden md:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center text-white/50 hover:text-electric hover:border-electric transition-all shrink-0">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <Link href="/about" className="group px-8 py-3 rounded-full border border-white/10 bg-[#111] hover:bg-[#1a1a1a] hover:border-white/30 transition-all text-sm font-bold text-white flex items-center gap-3">
            See more testimonials
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
