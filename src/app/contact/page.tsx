"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSceneContext } from "@/context/SceneContext";

export default function ContactPage() {
  const { setSection } = useSceneContext();
  const [submitted, setSubmitted] = useState(false);

  // Trigger the AI Nodes Environment
  useEffect(() => {
    setSection(1);
  }, [setSection]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-6 md:px-24 mb-32 z-10 relative min-h-screen flex items-center justify-center pt-24">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none text-glow">
            LET&apos;S <br/> COLLABORATE.
          </h1>
          <p className="text-xl text-white/60 font-light mb-10 max-w-md">
            Whether you&apos;re scaling a startup or modernizing enterprise legacy systems, our global engineering force is ready to architect your future.
          </p>
          <div className="space-y-4">
            <div className="glass-panel p-6 rounded-2xl border-l-[3px] border-electric">
              <span className="text-sm font-bold tracking-widest text-electric block mb-1">HQ</span>
              <p className="font-semibold">One World Trade Center, Suite 84</p>
              <p className="text-white/60 text-sm">New York, NY 10007</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel p-10 rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
        >
          {/* Subtle neon glow absolute div behind form */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-electric rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
          
          {submitted ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-electric text-black rounded-full flex items-center justify-center font-bold text-3xl mx-auto mb-6">✓</div>
              <h2 className="text-3xl font-bold mb-4">Transmission Received</h2>
              <p className="text-white/60">Our principal architects will be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-white/50 mb-2">Name</label>
                <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-electric transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-white/50 mb-2">Company email</label>
                <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-electric transition-colors" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-white/50 mb-2">Project Scope</label>
                <textarea required rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-electric transition-colors resize-none" placeholder="Briefly describe your challenge..."></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-electric hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
                Initiate Sequence
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  );
}
