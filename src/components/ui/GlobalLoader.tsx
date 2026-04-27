"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1.5s polished aesthetic hold 
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="global-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center">
            {/* Minimalist Electric Pulse Spinner */}
            <div className="w-16 h-16 relative flex items-center justify-center">
              <span className="absolute inset-0 border-2 border-electric rounded-tl-xl rounded-br-xl animate-spin" style={{ animationDuration: '3s' }}></span>
              <span className="relative z-10 text-electric font-black text-2xl tracking-tighter">B</span>
            </div>
            
            {/* Loading text */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 flex flex-col items-center"
            >
              <div className="text-electric text-sm font-bold tracking-[0.3em] uppercase">Code Breck Lab</div>
              <div className="text-white/40 text-xs tracking-widest mt-1 uppercase">Initializing Environments</div>
            </motion.div>

            {/* Micro Progress Bar */}
            <div className="w-32 h-[2px] bg-white/10 mt-6 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: "0%" }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 1.2, ease: "easeInOut" }}
                 className="h-full bg-electric rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]"
               />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
