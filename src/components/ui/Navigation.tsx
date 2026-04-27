"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/lib/servicesData";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="absolute top-0 left-0 w-full p-4 md:p-6 flex justify-between items-center z-50 bg-transparent">
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
            
            // Render Mega Menu wrapper specifically for Services
            if (link.name === "Services") {
              return (
                <div key={link.name} className="group relative">
                  <Link 
                    href={link.href} 
                    className={`relative flex flex-col items-center hover:text-electric transition-colors py-4 ${isActive ? 'text-electric' : 'text-white/80'}`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-3 left-0 w-full h-[2px] bg-electric rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]"></span>
                    )}
                  </Link>
                  
                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[1200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-[100]">
                    <div className="w-full bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-[0_30px_100px_rgba(0,0,0,0.9)] max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-electric scrollbar-track-transparent custom-scroll">
                      
                      <style dangerouslySetInnerHTML={{__html: `
                        .custom-scroll::-webkit-scrollbar {
                          width: 4px;
                        }
                        .custom-scroll::-webkit-scrollbar-track {
                          background: transparent;
                        }
                        .custom-scroll::-webkit-scrollbar-thumb {
                          background-color: #00f0ff;
                          border-radius: 20px;
                        }
                      `}} />

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {servicesData.map((category) => (
                          <div key={category.slug} className="flex flex-col">
                            <Link href={`/services/${category.slug}`} className="text-white font-bold text-lg mb-4 hover:text-electric transition-colors block border-b border-white/10 pb-2">
                              {category.title}
                            </Link>
                            <ul className="flex flex-col gap-3">
                              {category.items.map((subItem, idx) => (
                                <li key={idx} className="flex items-start text-white/60 hover:text-white transition-colors group/item">
                                  <ChevronRight className="w-4 h-4 mr-2 shrink-0 group-hover/item:text-electric transition-colors" />
                                  <span className="text-sm font-medium leading-relaxed">{subItem}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Normal Link Render
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
        
        {/* Right: Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="hidden md:flex group px-6 py-2.5 rounded-full border border-white/20 bg-transparent hover:border-electric text-white transition-all text-sm font-bold items-center gap-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
          >
            Book a call
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Hamburger Menu (Mobile Only) */}
          <button 
            className="md:hidden p-2 text-white/80 hover:text-electric transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-electric transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col items-center gap-8 text-2xl font-black tracking-tight">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`transition-colors ${isActive ? 'text-electric' : 'text-white hover:text-electric'}`}
                  >
                    {link.name}
                  </Link>
                )
              })}

              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="mt-8 px-10 py-4 rounded-full bg-electric text-black transition-all text-lg font-bold shadow-[0_0_30px_rgba(0,240,255,0.4)]"
              >
                Book a call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
