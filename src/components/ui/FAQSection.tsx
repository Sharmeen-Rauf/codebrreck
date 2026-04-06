"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes Code Breck the best software engineering agency?",
      a: "Our relentless focus on enterprise architecture, scalability, and cutting-edge AI integration sets us apart globally."
    },
    {
      q: "Do you provide full service digital platform development?",
      a: "Yes, from initial discovery and design to full-stack development, cloud deployment, and continuous maintenance."
    },
    {
      q: "How can cloud infrastructures help my business scale?",
      a: "By moving to a scalable cloud native environment using Kubernetes, you eliminate downtime and handles spikes seamlessly."
    },
    {
      q: "How long does it take for a full project delivery?",
      a: "Typical enterprise projects range from 3-6 months depending on complexity and integration requirements."
    },
    {
      q: "Do you offer post-deployment support and SRE services?",
      a: "Yes, we offer SLA-based Site Reliability Engineering to keep your platforms running 24/7."
    },
    {
      q: "What are the benefits of AI Copilot integration?",
      a: "AI Copilots drastically reduce manual effort, automate redundant tasks, and offer insights to your team instantly."
    },
    {
      q: "Can you migrate legacy systems to modern tech stacks?",
      a: "Absolutely. We specialize in strangler-fig pattern migrations refactoring old PHP/Java monoliths to Node/Go microservices."
    },
    {
      q: "Do you provide transparent cost tracking for cloud services?",
      a: "We implement FinOps right into your architecture, giving you complete visibility over what you are spending."
    }
  ];

  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-24 z-20 relative flex justify-center bg-transparent">
      <div className="w-full max-w-7xl flex flex-col gap-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 max-w-xl"
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
            Most asked FAQ&apos;s
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            We&apos;re here to help you and solve doubts. Find answers to the most common questions below.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="w-full grid md:grid-cols-2 gap-x-8 gap-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`w-full overflow-hidden border ${isOpen ? 'border-electric bg-black/60 shadow-[0_0_20px_rgba(0,240,255,0.1)]' : 'border-white/10 bg-[#111]'} rounded-xl transition-colors`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-bold text-white pr-4">{faq.q}</span>
                  <span className={`shrink-0 text-white/50 transition-colors ${isOpen ? 'text-electric' : 'group-hover:text-white'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
