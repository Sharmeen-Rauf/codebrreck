"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useSceneContext } from "@/context/SceneContext";

export default function IndustriesPage() {
  const { setSection } = useSceneContext();

  // Trigger the GlobeEnvironment (Wireframe Globe)
  useEffect(() => {
    setSection(3);
  }, [setSection]);

  const industries = [
    { title: "FinTech & Banking", desc: "Secure ledgers, high-frequency trading platforms, and mobile banking." },
    { title: "Healthcare & Pharma", desc: "HIPAA-compliant data pipelines and patient management systems." },
    { title: "Public Sector", desc: "Modernizing government infrastructure with resilient cloud architectures." },
    { title: "Gaming & XR", desc: "Immersive multiplayer backends and AR/VR spatial applications." }
  ];

  return (
    <div className="container mx-auto px-6 md:px-24 mb-32 z-10 relative">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl pt-12 pb-20"
      >
        <span className="text-electric font-semibold tracking-widest uppercase text-sm mb-4 block">Industries We Serve</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
          IMPACT ACROSS <br/> DOMAINS.
        </h1>
        <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl">
          Leveraging deep domain expertise to pioneer digital transformation for world-class brands across diverse sectors.
        </p>
      </motion.div>

      <div className="space-y-6">
        {industries.map((ind, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.7 }}
            className="w-full glass-panel p-10 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center group border border-white/5 hover:border-electric/50 transition-all"
          >
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-3">{ind.title}</h3>
              <p className="text-white/60 text-lg">{ind.desc}</p>
            </div>
            <div className="mt-6 md:mt-0 text-electric font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform cursor-pointer">
              Read Case Study <span className="text-2xl">→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
