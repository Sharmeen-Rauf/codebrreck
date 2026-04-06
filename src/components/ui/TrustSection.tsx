"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function TrustSection() {
  const brands = [
    { name: "Zoominfo", icon: "◩" },
    { name: "Clutch", stars: true },
    { name: "Stripe", icon: "S" },
    { name: "Trustpilot", icon: "★" },
    { name: "DESIGNRUSH", icon: "❖" },
    { name: "Clutch", stars: true },
    { name: "Shopify", icon: "S" },
    { name: "Trustpilot", icon: "★" },
    { name: "DESIGNRUSH", icon: "❖" }
  ];

  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-24 z-20 relative flex justify-center">
      <div className="w-full max-w-7xl grid lg:grid-cols-[1fr_2fr] gap-16 items-center">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1]">
            They <br/> Trust Us
          </h2>
          
          <Link href="/contact" className="group mt-4 px-8 py-3 rounded-full border border-white/20 bg-black/40 hover:bg-electric/10 hover:border-electric transition-all w-fit flex items-center gap-3 text-sm font-bold text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            Let&apos;s Talk
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Right: Grid of Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="px-6 py-8 rounded-2xl border border-white/5 bg-[#111] hover:bg-[#1a1a1a] flex flex-col items-center justify-center gap-2 group transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center gap-3">
                {brand.icon && <span className="text-2xl text-white/50 group-hover:text-electric transition-colors">{brand.icon}</span>}
                <span className="text-xl font-bold tracking-wider text-white/80 group-hover:text-white transition-colors">{brand.name}</span>
              </div>
              {brand.stars && (
                <div className="flex gap-1 mt-1 text-white/30 group-hover:text-electric transition-colors">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
