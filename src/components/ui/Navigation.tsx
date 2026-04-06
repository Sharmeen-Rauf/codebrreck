"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Packages", href: "/packages" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full p-4 md:p-6 flex justify-between items-center z-50">
      <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center px-4">
        
        {/* Left: Logo */}
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-3 group">
          <div className="flex items-center justify-center w-8 h-8 relative">
            <span className="absolute inset-0 border-2 border-electric rounded-tl-lg rounded-br-lg rotate-45 group-hover:rotate-90 transition-transform duration-500"></span>
            <span className="relative z-10 text-electric font-bold text-lg">B</span>
          </div>
          <span className="group-hover:text-electric transition-colors uppercase">CODE BRECK <span className="text-electric text-xs align-bottom leading-3 block text-right mt-[-4px]">Lab</span></span>
        </Link>
        
        {/* Center: Links Pill */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-white bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`relative flex flex-col items-center hover:text-electric transition-colors ${isActive ? 'text-electric' : 'text-white/80'}`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-electric rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]"></span>
                )}
              </Link>
            )
          })}
        </div>
        
        {/* Right: Button */}
        <Link 
          href="/contact" 
          className="group px-6 py-2.5 rounded-full border border-white/20 bg-transparent hover:border-electric text-white transition-all text-sm font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
        >
          Book a call
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </nav>
  );
}
