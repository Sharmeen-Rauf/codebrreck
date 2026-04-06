"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useSceneContext } from "@/context/SceneContext";
import Link from "next/link";
import CounterSection from "@/components/ui/CounterSection";
import AboutSection from "@/components/ui/AboutSection";
import ServicesSection from "@/components/ui/ServicesSection";
import WhyChooseSection from "@/components/ui/WhyChooseSection";
import VideoSection from "@/components/ui/VideoSection";
import ProcessSection from "@/components/ui/ProcessSection";
import TrustSection from "@/components/ui/TrustSection";
import TestimonialSection from "@/components/ui/TestimonialSection";
import FAQSection from "@/components/ui/FAQSection";
import ContactSection from "@/components/ui/ContactSection";
import BlogSection from "@/components/ui/BlogSection";
import GlobalImpactSection from "@/components/ui/GlobalImpactSection";
import FooterSection from "@/components/ui/FooterSection";

export default function Home() {
  const { setSection } = useSceneContext();
  const [localSection, setLocalSection] = useState(0);
  const { scrollYProgress } = useScroll();

  // Update 3D scene based on scroll
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      let current = 0;
      if (latest < 0.25) current = 0;
      else if (latest >= 0.25 && latest < 0.75) current = 1;
      else current = 2;
      
      setLocalSection(current);
      setSection(current);
    });
  }, [scrollYProgress, setSection]);

  // Ensure scene returns to 0 on mount
  useEffect(() => {
    setSection(0);
  }, [setSection]);

  return (
    <main className="relative w-full">
      {/* Sections Wrapper for Scrolling */}
      <div className="w-full relative z-10">
        
        {/* Hero Section */}
        <section className="h-screen w-full flex flex-col justify-center items-center text-center px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 text-glow">
              BUILD BEYOND <br /> LIMITS.
            </h1>
            <p className="text-lg md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto font-light">
              Engineering the future. A global software house delivering cutting-edge AI, scalable cloud infrastructure, and enterprise platforms.
            </p>
            
            <Link href="/services" className="group px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-electric hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all flex items-center gap-3 w-fit mx-auto">
              Explore Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-6 text-white/30"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </section>

        {/* Counter Section */}
        <CounterSection />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Why Choose Section */}
        <WhyChooseSection />

        {/* Dynamic Video Showcase */}
        <VideoSection />

        {/* Working Criteria */}
        <ProcessSection />

        {/* Trust Logos */}
        <TrustSection />

        {/* Testimonials Carousel */}
        <TestimonialSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact Form Section */}
        <ContactSection />

        {/* Blog Grid Section */}
        <BlogSection />

        {/* Global Map Section */}
        <GlobalImpactSection />

        {/* Custom Mega Footer */}
        <FooterSection />

      </div>
    </main>
  );
}
