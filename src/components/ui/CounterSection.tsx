"use client";

import { motion } from "framer-motion";

export default function CounterSection() {
  const stats = [
    { value: "596", label: "Happy Customers" },
    { value: "1,890+", label: "Issues Solved" },
    { value: "250", label: "Finished Projects" },
    { value: "04+", label: "Awards Winning" },
  ];

  return (
    <section className="w-full px-4 md:px-12 lg:px-24 pb-20 pt-10 z-20 relative flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-6xl glass-panel relative rounded-[2rem] md:rounded-full bg-black/40 border border-t-white/10 border-b-electric/40 shadow-[0_20px_50px_rgba(0,240,255,0.06)] overflow-hidden"
      >
        {/* Subtle internal gradient matching the Code Breck cyan theme */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-electric/10 to-transparent pointer-events-none"></div>

        <div className="flex flex-col md:flex-row justify-between items-center py-10 px-8 lg:px-16 gap-10 md:gap-4 relative z-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center">
              <h3 className="text-4xl md:text-5xl font-black mb-3 tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-white/50 font-medium tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
