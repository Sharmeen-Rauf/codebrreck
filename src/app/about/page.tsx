"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useSceneContext } from "@/context/SceneContext";

export default function AboutPage() {
  const { setSection } = useSceneContext();

  // Trigger the Particles (Hero Environment)
  useEffect(() => {
    setSection(0);
  }, [setSection]);

  const leaders = [
    { name: "Sikander Breck", role: "Chief Executive Officer" },
    { name: "Aria Sterling", role: "Head of AI Engineering" },
    { name: "Marcus Thorne", role: "VP of Global Infrastructure" },
  ];

  const stats = [
    { value: "3,000+", label: "Elite Engineers" },
    { value: "250+", label: "Enterprise Clients" },
    { value: "20+", label: "Years Experience" },
    { value: "15+", label: "Global Offices" }
  ];

  return (
    <div className="container mx-auto px-6 md:px-24 mb-32 z-10 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl pt-12 pb-16"
      >
        <span className="text-electric font-semibold tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
          HUMAN-FIRST <br/> <span className="text-white/40">DIGITAL.</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl leading-relaxed">
          Technology is only as powerful as the minds behind it. We combine deep technical rigor with a profound commitment to humanity—building software that accelerates progress without overlooking the people it serves.
        </p>
      </motion.div>

      {/* Stats Counter Matrix */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className="p-8 border border-white/10 glass-panel rounded-3xl flex flex-col items-center justify-center text-center group hover:border-electric transition-colors"
          >
            <span className="text-4xl md:text-6xl font-black text-glow mb-2 group-hover:scale-110 transition-transform">{stat.value}</span>
            <span className="text-sm uppercase tracking-widest text-white/50 font-bold">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Leadership Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-8">Global Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map((leader, idx) => (
            <div key={idx} className="p-6 bg-black/40 border-l-4 border-electric rounded-r-xl glass-panel">
              <h3 className="text-xl font-bold">{leader.name}</h3>
              <p className="text-white/60 text-sm mt-1">{leader.role}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
