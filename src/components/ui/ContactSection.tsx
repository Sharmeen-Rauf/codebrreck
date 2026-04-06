"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-24 z-20 relative flex justify-center bg-transparent">
      <div className="w-full max-w-7xl grid lg:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-start">
        
        {/* Left: Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#111] border border-white/5 shadow-[0_0_50px_rgba(0,240,255,0.05)] rounded-[2rem] p-10 md:p-16 flex flex-col gap-10"
        >
          <div className="flex border border-electric/40 rounded-xl w-16 h-16 items-center justify-center bg-white/5 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            {/* Minimalist document icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-electric">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M8 13h8M8 17h8M8 9h2" />
            </svg>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-[1.1]">
              We&apos;d love to hear <br /> about your brand.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed font-light">
              Tell us where you see yourself, and we&apos;ll map out the smartest strategies to take you there.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-4 text-white/80 group">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-electric transition-colors bg-white/5 text-electric">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm tracking-widest">+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center gap-4 text-white/80 group">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-electric transition-colors bg-white/5 text-electric">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm tracking-widest">hello@codebreck.com</span>
            </div>
            <div className="flex items-center gap-4 text-white/80 group">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-electric transition-colors bg-white/5 text-electric">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-sm tracking-widest leading-relaxed">Code Breck Lab, San Francisco, CA</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full py-10 lg:pl-10 h-full flex flex-col justify-center"
        >
          <form className="flex flex-col gap-10 w-full" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="w-full border-b border-white/20 pb-4 relative group">
                <input type="text" placeholder="First Name" className="w-full bg-transparent outline-none text-white placeholder-white/40 font-light" />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-electric transition-all duration-300 group-focus-within:w-full"></span>
              </div>
              <div className="w-full border-b border-white/20 pb-4 relative group">
                <input type="text" placeholder="Last Name" className="w-full bg-transparent outline-none text-white placeholder-white/40 font-light" />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-electric transition-all duration-300 group-focus-within:w-full"></span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="w-full border-b border-white/20 pb-4 relative group">
                <input type="email" placeholder="Email" className="w-full bg-transparent outline-none text-white placeholder-white/40 font-light" />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-electric transition-all duration-300 group-focus-within:w-full"></span>
              </div>
              <div className="w-full border-b border-white/20 pb-4 relative group">
                <input type="tel" placeholder="Phone number" className="w-full bg-transparent outline-none text-white placeholder-white/40 font-light" />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-electric transition-all duration-300 group-focus-within:w-full"></span>
              </div>
            </div>

            <div className="w-full border-b border-white/20 pb-4 relative group">
              <input type="text" placeholder="Select services" className="w-full bg-transparent outline-none text-white placeholder-white/40 font-light" />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-electric transition-all duration-300 group-focus-within:w-full"></span>
            </div>

            <div className="w-full border-b border-white/20 pb-4 relative group">
              <input type="text" placeholder="Subject" className="w-full bg-transparent outline-none text-white placeholder-white/40 font-light" />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-electric transition-all duration-300 group-focus-within:w-full"></span>
            </div>

            <div className="w-full border-b border-white/20 pb-4 relative group">
              <textarea placeholder="Details" rows={3} className="w-full bg-transparent outline-none text-white placeholder-white/40 font-light resize-none"></textarea>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-electric transition-all duration-300 group-focus-within:w-full"></span>
            </div>

            <button type="submit" className="group mt-4 px-10 py-3.5 rounded-full border border-white/20 bg-[#151515] hover:bg-electric/10 hover:border-electric text-white text-sm font-bold flex items-center justify-center gap-3 w-fit transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              Submit
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:text-electric transition-transform" />
            </button>
            
          </form>
        </motion.div>

      </div>
    </section>
  );
}
