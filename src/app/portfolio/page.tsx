"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FooterSection from "@/components/ui/FooterSection";

export const portfolioCategories = [
  "WEB DEVELOPMENT", "SHOPIFY", "WORDPRESS", "FIGMA DESIGN", "LOGO DESIGN", "BRANDING", "ILLUSTRATION", "PRINT"
];

export const dummyProjects = [
  {
    title: "Autonomous robotic inspection solutions",
    category: "WEB DEVELOPMENT",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Eco-Friendly Rise up to ride in comfort",
    category: "SHOPIFY",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Curiebod Shopify Store Development",
    category: "SHOPIFY",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Summer's Signature Hue Launch",
    category: "BRANDING",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Go webs, go! Partake CPG Design",
    category: "FIGMA DESIGN",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Premium Cosmetic Retail Dashboard",
    category: "WEB DEVELOPMENT",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
  }
];

export default function PortfolioPage() {
  const marqueeDuplicated = Array(15).fill("OUR WORK");

  return (
    <main className="relative w-full min-h-screen bg-black flex flex-col pt-32 lg:pt-40 overflow-hidden">
      
      {/* Background glow specific to portfolio page */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-electric/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[30%] right-[0%] w-[40vh] h-[40vh] bg-[#ff3333]/5 blur-[200px] rounded-full pointer-events-none z-0" />

      {/* Hero Section Container */}
      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8 z-10 flex flex-col lg:flex-row items-center justify-between mb-32 h-[50vh] lg:h-[60vh]">
        
        {/* Left Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col gap-6 items-start z-10"
        >
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tighter leading-[1.05] text-white">
            Our Results-<br/>
            Driven <br/>
            Project Showcase
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl font-medium tracking-wide mt-2 mb-4 max-w-xl pr-4">
            We take pride in delivering projects that drive measurable results. Our work is a testament to our commitment to excellence, where each project is carefully crafted to meet specific business goals. From concept to execution, we focus on creating impactful solutions that not only fulfill client expectations but also contribute to their ongoing success.
          </p>
          
          <Link href="/contact" className="group px-8 py-3.5 rounded-full border border-electric bg-black/40 hover:bg-electric text-white text-sm font-bold flex items-center gap-3 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            Book a call
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:text-black transition-transform" />
          </Link>
        </motion.div>

        {/* Right 3D Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] lg:h-full lg:-mr-10 mt-10 lg:mt-0 z-0 pointer-events-none"
        >
          <Image 
            src="/portfolio-hero.png" 
            alt="3D Red/Cyan Knot Graphic"
            fill 
            className="object-contain lg:object-right scale-125 lg:scale-[1.3] drop-shadow-[0_20px_50px_rgba(0,240,255,0.2)]"
            priority
          />
        </motion.div>
        
      </div>

      {/* Diagonal Infinite Marquee */}
      <div className="relative w-full h-24 rotate-[-3deg] scale-110 mb-32 z-20 flex bg-electric uppercase overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.4)] border-y border-white/30">
        <motion.div
           className="flex gap-6 items-center flex-nowrap w-max"
           animate={{
             x: ["0%", "-50%"]
           }}
           transition={{
             duration: 15,
             repeat: Infinity,
             ease: "linear",
           }}
        >
          {marqueeDuplicated.map((text, i) => (
             <span key={i} className="text-black font-black text-3xl shrink-0 tracking-widest flex gap-6 items-center">
               {text}
               <span className="text-white text-2xl drop-shadow-md">★</span>
               <span className="text-black font-black text-3xl shrink-0 tracking-widest">
                 OUR WORK
               </span>
               <span className="text-white text-2xl drop-shadow-md">★</span>
             </span>
          ))}
        </motion.div>
      </div>

      {/* Portfolio Grid Header */}
      <div className="w-full px-4 md:px-8 mt-12 mb-20 max-w-[1400px] mx-auto z-10 flex flex-col items-center top-0 text-center relative">
        <span className="text-electric text-lg font-bold tracking-widest uppercase mb-2">Featured Projects</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter shadow-sm mb-12">
          Our <span className="text-white/80 drop-shadow-[0_0_20px_rgba(0,240,255,0.5)]">Portfolio</span>
        </h2>
        
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 lg:gap-4 w-full md:px-12 mb-16">
          {portfolioCategories.map((category, index) => (
             <button 
                key={index} 
                className={`px-6 py-2 rounded-full border transition-colors duration-300 font-bold text-sm tracking-wide ${index === 0 ? 'bg-electric/90 text-black border-electric' : 'bg-[#111] text-white/70 border-white/10 hover:border-electric hover:text-white'}`}
             >
                {category}
             </button>
          ))}
        </div>

        {/* Portfolio Grids */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative w-full h-[280px] md:h-[350px] rounded-3xl overflow-hidden border border-white/10 shadow-lg"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-colors duration-500 z-10" />
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 flex flex-col justify-end items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-electric text-xs font-bold tracking-widest uppercase mb-1">{project.category}</span>
                <span className="text-white font-bold text-lg leading-tight text-left">{project.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
