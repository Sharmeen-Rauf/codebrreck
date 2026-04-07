"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tag, User, Crown } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      icon: <Tag className="w-5 h-5 text-black" />,
      title: "Competitive Pricing",
      desc: "Delivering top-notch engineering services without breaking scalable enterprise budgets."
    },
    {
      icon: <User className="w-5 h-5 text-black" />,
      title: "Customer-centric Focus",
      desc: "Ensuring every architecture and solution profoundly impacts and resonates with your business audience."
    },
    {
      icon: <Crown className="w-5 h-5 text-black" />,
      title: "Tailor-made Strategies",
      desc: "No one-size-fits-all approach; we adapt deeply to your long-term infrastructure goals."
    }
  ];

  return (
    <section className="w-full py-20 px-4 md:px-12 lg:px-24 z-20 relative flex justify-center bg-[#050505]">
      <div className="w-full max-w-[1400px] grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] group bg-black"
        >
          {/* Will use the newly generated image here */}
          <Image 
            src="/images/about_values.png" 
            alt="Our Values Artifact"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
          />
        </motion.div>

        {/* Right: Values Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 rounded-[2rem] border border-white/10 p-10 md:p-12 hover:border-electric/30 transition-colors shadow-[0_0_30px_rgba(0,240,255,0.05)] bg-[#0a0a0a]"
        >
          {values.map((val, idx) => (
            <div key={idx} className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-electric/90 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-transform">
                {val.icon}
              </div>
              <div className="flex flex-col gap-1 mt-1">
                <h4 className="text-xl font-bold text-white tracking-wide">{val.title}</h4>
                <p className="text-white/60 font-light text-sm">{val.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
