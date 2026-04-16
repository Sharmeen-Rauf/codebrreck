import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FooterSection from "@/components/ui/FooterSection";

export default function BlogsPage() {
  return (
    <main className="relative w-full min-h-screen bg-black flex flex-col pt-32 lg:pt-40">
      
      {/* Background glow specific to blogs page */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vh] h-[50vh] bg-electric/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[60vh] h-[60vh] bg-[#ff3333]/10 blur-[200px] rounded-full pointer-events-none" />

      {/* Hero Section Container matching BEMBEX LAB screenshot layout */}
      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8 mb-20 lg:mb-32 z-10 flex-grow">
        
        {/* Dark rounded container enclosing the hero content matching screenshot */}
        <div className="w-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row gap-12 items-center min-h-[60vh]">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 items-start lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tight leading-[1.05] text-white">
              <span className="text-electric">Inspiring Ideas</span>, Expert Insights, and <span className="text-[#c78b7a]">the Latest</span> Trends
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl font-medium tracking-wide mt-4 mb-4 lg:pr-4">
              Dive into our blog for actionable strategies, expert insights, and fresh perspectives that will help you stay ahead of the curve. Whether you're looking for ways to boost performance or optimize your digital presence.
            </p>
            
            <button className="flex items-center gap-3 bg-electric/10 text-electric border border-electric/30 hover:bg-electric hover:text-black transition-all duration-300 font-bold px-8 py-3.5 rounded-full group">
              Explore Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-[500px] rounded-[1.5rem] overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.15)] group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 to-transparent z-10" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent duration-700 transition-colors z-10" />
            <Image 
              src="/blog-hero.png" 
              alt="Abstract Swirling Vortex"
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
          
        </div>

      </div>

      <FooterSection />
    </main>
  );
}
