"use client";

import Link from "next/link";
import { ArrowRight, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative z-10 glass-panel border-b-0 border-x-0 mt-32 rounded-t-[3rem] overflow-hidden pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-24">
        
        {/* Top Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-16 mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Stay Ahead of the Curve.</h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Join thousands of global leaders receiving our insights on artificial intelligence, cloud architectures, and digital scaling.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="bg-black/50 border border-white/20 rounded-full px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-electric transition-colors min-w-[300px]"
            />
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-electric transition-colors flex items-center justify-center gap-2 group">
              Subscribe
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-black tracking-tighter mb-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-electric block"></span>
              CODE BRECK
            </div>
            <p className="text-white/50 text-sm">Engineering the future of enterprise software across the globe.</p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Solutions</h4>
            <Link href="/services" className="text-white/50 hover:text-electric transition-colors text-sm">AI Engineering</Link>
            <Link href="/services" className="text-white/50 hover:text-electric transition-colors text-sm">Cloud Native</Link>
            <Link href="/services" className="text-white/50 hover:text-electric transition-colors text-sm">SaaS Platforms</Link>
            <Link href="/services" className="text-white/50 hover:text-electric transition-colors text-sm">Web3 & Crypto</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Company</h4>
            <Link href="/about" className="text-white/50 hover:text-electric transition-colors text-sm">About Us</Link>
            <Link href="/industries" className="text-white/50 hover:text-electric transition-colors text-sm">Industries</Link>
            <Link href="/contact" className="text-white/50 hover:text-electric transition-colors text-sm">Careers</Link>
            <Link href="/contact" className="text-white/50 hover:text-electric transition-colors text-sm">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Legal</h4>
            <Link href="#" className="text-white/50 hover:text-electric transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-white/50 hover:text-electric transition-colors text-sm">Terms of Service</Link>
            <Link href="#" className="text-white/50 hover:text-electric transition-colors text-sm">Cookie Policy</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-white/40 text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Code Breck Inc. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-white/40">
            <Link href="#" className="hover:text-electric transition-colors"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-electric transition-colors"><Linkedin className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-electric transition-colors"><Github className="w-5 h-5" /></Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
