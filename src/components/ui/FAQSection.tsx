"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ArrowDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I update my billing information?",
      a: "To update billing information, go to your account settings -> Billing. There you'll be able to add or update payment methods, view invoices, and change billing addresses."
    },
    {
      q: "How can I contact customer support?",
      a: "You can contact us via email at hello@codebreck.com or use the contact form directly from this website. Our team is available 24/7."
    },
    {
      q: "How do I update my profile information?",
      a: "Navigate to your global profile settings from the dashboard to seamlessly edit your personal information and preferences."
    },
    {
      q: "How do I find my purchase history?",
      a: "Your complete purchase history is securely accessible under the 'Billing' or 'Orders' section inside your dedicated client portal."
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
          className="flex flex-col gap-2 w-full text-center items-center"
        >
          <span className="text-electric text-lg font-bold tracking-widest uppercase">FAQs</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-2">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Grid -> Single Column Stack matching screenshot */}
        <div className="w-full flex flex-col gap-4 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`w-full overflow-hidden border ${isOpen ? 'border-electric bg-black/60 shadow-[0_0_20px_rgba(0,240,255,0.05)]' : 'border-white/5 bg-[#111]'} rounded-xl transition-colors`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center p-6 md:px-8 text-left group"
                >
                  <span className="font-bold text-white pr-4">{faq.q}</span>
                  <span className={`shrink-0 text-white/50 transition-colors ${isOpen ? 'text-electric' : 'group-hover:text-white'}`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
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
                      <div className="px-6 md:px-8 pb-6 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Load More Button matching screenshot */}
        <div className="w-full flex justify-center mt-6">
          <Link href="/contact" className="px-8 py-3 rounded-full border border-electric/30 bg-electric/10 text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-electric hover:text-black transition-all group">
            Load More
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
