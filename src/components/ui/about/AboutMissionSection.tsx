"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMissionSection() {
  const services = [
    "Enterprise Software Architecture",
    "LLM Fine-Tuning & RAG Pipelines",
    "Kubernetes Cloud Deployments",
    "Web3 & Distributed Systems",
    "Performance Tracking & Analytics",
    "15+ Years of Industry Experience"
  ];

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-12 lg:px-24 z-20 relative flex justify-center bg-transparent">
      <div className="w-full max-w-[1400px] grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-electric font-black text-2xl md:text-3xl tracking-tight">Our Mission</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              What We do
            </h2>
          </div>

          <p className="text-white/70 text-lg font-light leading-relaxed">
            We offer complete digital solutions designed to help businesses scale effectively, including:
          </p>

          <ul className="flex flex-col gap-4 text-white/80 font-medium">
            {services.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-electric shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-white/70 text-lg font-light leading-relaxed pt-4 border-t border-white/5">
            Each strategy is customized to match your business objectives, audience, and competitive landscape in the United States and across the globe.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,240,255,0.1)] group bg-black"
        >
          <Image 
            src="/images/about_mission.png" 
            alt="Our Mission Graphic"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
          />
        </motion.div>

      </div>
    </section>
  );
}
