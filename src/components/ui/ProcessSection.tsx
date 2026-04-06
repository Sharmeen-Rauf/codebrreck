"use client";

import { motion } from "framer-motion";
import { MessageSquare, ClipboardCheck, Settings, Users, TrendingUp } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Free Consultation",
      desc: "Free 1:1 consultation to discuss your goals, challenges, and business needs."
    },
    {
      icon: ClipboardCheck,
      title: "Business Audit",
      desc: "Technical audit of your architecture, infrastructure, and workflows to identify what needs improvement."
    },
    {
      icon: Settings,
      title: "Custom Working Plan",
      desc: "Custom engineering strategy tailored to your enterprise needs and scaling requirements."
    },
    {
      icon: Users,
      title: "Onboarding Process",
      desc: "Onboarding to kick off collaboration, timelines, and establish direct team communication."
    },
    {
      icon: TrendingUp,
      title: "Execution & Results",
      desc: "We build and manage your systems, CI/CD, and operations with monthly reports and rapid feature deployments."
    }
  ];

  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-24 z-20 relative flex justify-center bg-transparent">
      <div className="w-full max-w-7xl flex flex-col items-center gap-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col gap-4"
        >
          <h3 className="text-electric font-semibold text-lg tracking-wider">Our Working Criteria</h3>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            We make the process of working <br className="hidden md:block"/> too easy and simpler
          </h2>
          <p className="text-white/60 text-lg mt-2">Here&apos;s how we do it:</p>
        </motion.div>

        {/* Grid Cards */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col gap-6 hover:bg-[#151515] hover:border-electric/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-electric/50 transition-colors">
                <step.icon className="w-5 h-5 text-electric/70 group-hover:text-electric group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all" />
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold text-white tracking-wide">{step.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
