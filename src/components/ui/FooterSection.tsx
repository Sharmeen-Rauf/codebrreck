"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function FooterSection() {
  const footerLinks = [
    { name: "Privacy Policy", href: "#" },
    { icon: <Facebook className="w-4 h-4" />, href: "#" },
    { icon: <Instagram className="w-4 h-4" />, href: "#" },
    { name: "TikTok", href: "#" },
    { name: "Reviews.io", href: "#", highlight: true },
    { name: "Trustpilot", href: "#", highlight: true, color: "text-emerald-400" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#" },
    { icon: <Youtube className="w-4 h-4" />, href: "#" },
    { icon: <Twitter className="w-4 h-4" />, href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#050505] z-20 relative pt-24 pb-8 flex flex-col items-center border-t border-white/5 overflow-hidden">
      
      {/* Mega Logo */}
      <div className="flex flex-col items-center gap-4 mb-20 px-4 text-center">
        <div className="w-20 h-20 border-4 border-electric rounded-xl flex items-center justify-center rotate-12 bg-black shadow-[0_0_40px_rgba(0,240,255,0.3)] hover:rotate-0 transition-transform duration-500 cursor-pointer">
          <span className="text-electric font-black text-4xl">C</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mt-4">
          Your Performance <br className="hidden md:block" /> Partner
        </h2>
      </div>

      {/* Grid Links Bar */}
      <div className="w-full max-w-[1400px] border-y border-white/10 grid grid-cols-2 md:flex divide-y md:divide-y-0 md:divide-x divide-white/10 bg-black">
        {footerLinks.map((link, idx) => (
          <Link 
            key={idx} 
            href={link.href}
            className={`flex-1 flex items-center justify-center hover:bg-white/5 transition-colors py-4 md:py-6 text-center
              ${link.name ? 'px-2 md:px-6' : 'px-4'}
              ${link.highlight ? 'font-bold' : 'font-medium text-white/50'}
              ${link.color ? link.color : 'text-white/80'}
            `}
          >
            {link.icon && <span className="flex items-center justify-center">{link.icon}</span>}
            {link.name && <span className="text-xs md:text-sm">{link.name}</span>}
          </Link>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="w-full max-w-5xl px-8 py-10 mt-4 text-center text-[10px] sm:text-xs text-white/30 leading-relaxed font-light">
        Disclaimer: Logo, portfolio, images, and content are the sole property of Code Breck Lab. All third-party company names, brand names, and trademarks displayed on this website are their respective owners&apos; property. Furthermore, Code Breck Lab, as a digital engineering company, does not influence the third party material that is being displayed on the website. Therefore, we are also not responsible for any resemblance with any other material on the web. These portfolios and case studies are actual but exemplary (For better understanding); the actual names, designs, functionality, content, and stats/facts may differ from the actual projects. This is due to the strict NDA policy that Code Breck Lab follows.
      </div>

      {/* Background Animated Massive Gradient Text */}
      <div className="w-full flex justify-center relative my-10 overflow-hidden pointer-events-none select-none h-[12vw] min-h-[120px]">
        {/* The Text Mask */}
        <h1 className="text-[15vw] leading-none font-black tracking-tighter text-transparent bg-clip-text text-center w-full absolute inset-0 z-10 
          bg-gradient-to-b from-[#111] to-black">
          CODE BRECK
        </h1>
        {/* The Animated Colorful Gradient underneath, scrolling/moving */}
        <div className="absolute inset-0 z-0 h-[300%] bg-gradient-to-r from-electric via-purple-600 to-electric opacity-10 blur-xl animate-[pulse_5s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* Copyright */}
      <div className="w-full text-center text-xs text-white/40 pb-4 relative z-20">
        Copyright © 2026 Code Breck Lab. All rights reserved.
      </div>
    </footer>
  );
}
