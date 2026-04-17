"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function LogoSlider() {
  const brands = [
    { name: "Clutch", stars: true },
    { name: "hashnode", icon: "⬡" },
    { name: "DESIGNRUSH", icon: "❖" },
    { name: "Stripe", icon: "S" },
    { name: "Trustpilot", icon: "★" },
    { name: "zoominfo", icon: "Z" },
    { name: "Clutch", stars: true },
  ];

  // We duplicate the array to create a seamless infinite loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="w-full relative overflow-hidden py-12 border-y border-white/5 bg-black/40 backdrop-blur-sm z-10">
      
      {/* Left/Right fading gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

      {/* Marquee Track */}
      <motion.div
        className="flex gap-16 md:gap-24 w-max items-center"
        animate={{
          x: ["0%", "-33.333333%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedBrands.map((brand, idx) => (
          <div key={idx} className="flex items-center gap-3 shrink-0 group">
            {brand.icon && <span className="text-3xl text-white/40 group-hover:text-electric transition-colors">{brand.icon}</span>}
            <span className="text-2xl font-bold tracking-wider text-white/50 group-hover:text-white transition-colors">{brand.name}</span>
            {brand.stars && (
              <div className="flex gap-[2px] mt-1 text-white/30 group-hover:text-electric transition-colors">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
