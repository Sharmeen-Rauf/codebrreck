"use client";

import { motion } from "framer-motion";

export default function AboutWhoSection() {
  return (
    <section className="w-full py-20 px-4 md:px-12 lg:px-24 z-20 relative flex justify-center bg-[#050505] border-y border-white/5">
      <div className="w-full max-w-[1400px] grid md:grid-cols-2 gap-12 lg:gap-32 items-start py-10">
        
        {/* Left: Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-2"
        >
          <h3 className="text-electric font-black text-xl md:text-2xl tracking-tight">About us</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Who we are
          </h2>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8 text-white/70 text-lg leading-relaxed font-light mt-2"
        >
          <p>
            We are a team of experienced cloud architects, AI engineers, designers, and growth specialists passionate about building enterprise systems in the digital space. With a deep understanding of standard architectures and autonomous behaviors, we help businesses stand out in competitive industries.
          </p>
          <p>
            At Code Breck Lab, we believe digital engineering is not about shortcuts or guesswork, it&apos;s about strategy, execution, and continuous optimization.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
