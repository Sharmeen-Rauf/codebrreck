"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutVisionSection() {
  const points = [
    { title: "Customized Architectures", desc: "No one-size fits all solutions" },
    { title: "Data-Driven Decisions", desc: "Every move backed by analytics" },
    { title: "Transparent Reporting", desc: "Clear insights, real numbers" },
    { title: "Ethical Engineering", desc: "Scalable, sustainable architecture" },
    { title: "Client-First Approach", desc: "Your success is our priority" },
    { title: "Beyond The Basics", desc: "We don't just write code - we build digital systems." }
  ];

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-12 lg:px-24 z-20 relative flex justify-center bg-transparent">
      <div className="w-full max-w-[1400px] grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] group order-2 lg:order-1 bg-black"
        >
          <Image 
            src="/images/about_vision.png" 
            alt="Our Vision Graphic"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 order-1 lg:order-2"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-electric font-black text-2xl md:text-3xl tracking-tight">Our Vision</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Why choose <br/> Code Breck Lab
            </h2>
          </div>

          <p className="text-white/70 text-lg font-light leading-relaxed">
            What sets us apart is our commitment to clarity, performance, and partnership.
          </p>

          <ul className="flex flex-col gap-4 text-white/80 font-light">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-electric shadow-[0_0_10px_rgba(0,240,255,0.8)] mt-2 shrink-0"></div>
                <p>
                  <span className="font-semibold text-white">{point.title}</span> - {point.desc}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
