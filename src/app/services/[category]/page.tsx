import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import FooterSection from "@/components/ui/FooterSection";
import ContactSection from "@/components/ui/ContactSection";
import GlobalImpactSection from "@/components/ui/GlobalImpactSection";
import { servicesData } from "@/lib/servicesData";

// Dummy image blocks for professional generation
const placeholderImages = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
];

export default function ServiceCategoryPage({ params }: { params: { category: string } }) {
  const service = servicesData.find(s => s.slug === params.category);

  if (!service) {
    return (
      <main className="w-full min-h-screen bg-black flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Service Matrix Not Found</h1>
        <Link href="/services" className="px-6 py-2 bg-electric text-black rounded-full font-bold">Return to Operations</Link>
      </main>
    );
  }

  return (
    <main className="relative w-full min-h-screen bg-black flex flex-col overflow-hidden">
      
      {/* Background glow specific to internal service pages */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-electric/10 to-transparent pointer-events-none z-0" />

      {/* Hero Header */}
      <div className="relative w-full pt-32 md:pt-40 pb-20 px-4 md:px-8 z-10 flex flex-col items-center text-center max-w-[1400px] mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-electric transition-colors mb-6 font-semibold">
          <ArrowLeft className="w-4 h-4" />
          Back to Code Breck
        </Link>
        <span className="text-electric font-bold tracking-widest uppercase mb-4 shadow-sm border border-electric/30 px-6 py-2 rounded-full bg-electric/5">Core Competency</span>
        <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black tracking-tighter leading-tight text-white mb-6">
          {service.title}
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed">
          Unlock extreme scale and precision by injecting Code Breck&apos;s hyper-specialized {service.title} capabilities directly into your business architecture. 
        </p>
      </div>

      {/* Dynamic Sub-Service Grid */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {service.items.map((item, idx) => {
            const imgPath = placeholderImages[idx % placeholderImages.length];
            return (
              <div key={idx} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] hover:border-electric transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col h-full">
                {/* Image Block */}
                <div className="w-full h-60 md:h-72 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors z-10" />
                  <Image 
                    src={imgPath}
                    alt={item}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center border border-white/10">
                    <Zap className="w-5 h-5 text-electric" />
                  </div>
                </div>
                
                {/* Content Block */}
                <div className="p-8 md:p-10 flex-grow flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-electric transition-colors">{item}</h3>
                  <p className="text-white/60 mb-8 leading-relaxed">
                    Execute an enterprise-grade approach to {item}. We integrate cutting-edge architecture and proven methodologies to construct scalable, future-proof systems aligned with your precise operational demands.
                  </p>
                  
                  <ul className="mt-auto space-y-3 mb-8">
                    <li className="flex items-center text-sm font-medium text-white/80"><CheckCircle2 className="w-4 h-4 mr-3 text-electric" /> Advanced System Mapping</li>
                    <li className="flex items-center text-sm font-medium text-white/80"><CheckCircle2 className="w-4 h-4 mr-3 text-electric" /> High-Performance Delivery</li>
                  </ul>

                  <Link href="/contact" className="inline-flex items-center gap-2 text-electric font-bold text-sm hover:text-white transition-colors group/btn">
                    Deploy Solution
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Append Global Contact hooks */}
      <GlobalImpactSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
