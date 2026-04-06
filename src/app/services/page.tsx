"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useSceneContext } from "@/context/SceneContext";

export default function ServicesPage() {
  const { setSection } = useSceneContext();

  // Trigger the SolutionsEnvironment (Nodes)
  useEffect(() => {
    setSection(1);
  }, [setSection]);

  const services = [
    { title: "Generative AI & LLMs", desc: "Fine-tuning models and building intelligent agents for enterprise workflows." },
    { title: "Cloud Native Architecture", desc: "Highly available, auto-scaling Kubernetes deployments across AWS and Azure." },
    { title: "SaaS Platforms", desc: "Building massive multi-tenant architectures from scratch to market scale." },
    { title: "Web3 & Blockchain", desc: "Smart contract development, auditing, and decentralized applications." },
    { title: "Custom Enterprise Software", desc: "Robust full-stack systems tailored to complex business operations." },
    { title: "Staff Augmentation", desc: "Rapidly scaling your team with vetted, elite global engineering talent." }
  ];

  return (
    <div className="container mx-auto px-6 md:px-24 mb-32 z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl pt-12 pb-20"
      >
        <span className="text-electric font-semibold tracking-widest uppercase text-sm mb-4 block">Our Solutions</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
          ENGINEERED FOR <br/> <span className="text-glow">SCALE.</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl">
          We transform ambitious visions into resilient, high-performance software. From cognitive AI systems to globally distributed cloud applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl group hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-electric/20 text-electric flex items-center justify-center mb-6 text-xl">
              {"0" + (idx + 1)}
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-electric transition-colors">{service.title}</h3>
            <p className="text-white/60 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
