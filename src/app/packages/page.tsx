"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import FooterSection from "@/components/ui/FooterSection";

const categories = [
  "Web Design & Development",
  "SEO",
  "Performance Marketing",
  "Logo Designing & Branding",
  "Social Media Marketing",
  "Content Marketing"
];

const pricingData: Record<string, any[]> = {
  "Web Design & Development": [
    {
      name: "Startup Plan",
      price: "$199",
      oldPrice: "$299",
      features: [
        "One-page or landing page design",
        "Custom layout + brand styling",
        "Mobile-responsive build",
        "Basic contact form integration",
        "Up to 1 monthly revision"
      ]
    },
    {
      name: "Advanced Plan",
      price: "$499",
      oldPrice: "$599",
      features: [
        "Up to 5 custom pages",
        "CRO Focused UX strategy",
        "Mobile optimization",
        "Speed Tuning",
        "CRM Integration",
        "Basic SEO setup"
      ]
    },
    {
      name: "Premium Plan",
      price: "$999",
      oldPrice: "$1999",
      features: [
        "Up to 10 custom pages",
        "Full design responsive UI",
        "Custom animations",
        "Advanced integrations",
        "Unlimited updates",
        "E-commerce capability"
      ]
    }
  ],
  "SEO": [
    {
      name: "Startup Plan",
      price: "$299",
      oldPrice: "$399",
      features: [
        "Initial Site Audit",
        "Keyword Research (up to 20)",
        "On-page Optimization (5 pages)",
        "Basic Monthly Reporting",
        "Email Support"
      ]
    },
    {
      name: "Advanced Plan",
      price: "$699",
      oldPrice: "$899",
      features: [
        "Comprehensive Tech SEO Audit",
        "Keyword Mapping (up to 50)",
        "On-page Optimization (15 pages)",
        "Content Gap Analysis",
        "Competitor Tracking",
        "Bi-weekly Reporting"
      ]
    },
    {
      name: "Premium Plan",
      price: "$1299",
      oldPrice: "$1599",
      features: [
        "Enterprise Tech Setup",
        "Unlimited Keyword Tracking",
        "Full Website Optimization",
        "Backlink Strategy implementation",
        "Dedicated Account Manager",
        "Weekly Strategy Calls"
      ]
    }
  ],
  "Performance Marketing": [
    {
      name: "Startup Plan",
      price: "$399",
      oldPrice: "$499",
      features: [
        "1 Platform (Google or Meta)",
        "Campaign Strategy Setup",
        "Ad Copy & Creative (Basic)",
        "Monthly Performance Report",
        "Up to $2k Ad Spend Management"
      ]
    },
    {
      name: "Advanced Plan",
      price: "$899",
      oldPrice: "$1099",
      features: [
        "2 Platforms Setup",
        "Advanced Audience Targeting",
        "A/B Testing Creatives",
        "Bi-weekly Performance Report",
        "Retargeting Campaigns",
        "Up to $10k Ad Spend"
      ]
    },
    {
      name: "Premium Plan",
      price: "$1499",
      oldPrice: "$1999",
      features: [
        "Omnichannel (3+ Platforms)",
        "Custom Conversion Tracking",
        "Video Ad Creation",
        "Weekly Optimization",
        "Dedicated Marketing Manager",
        "Unlimited Ad Spend Management"
      ]
    }
  ],
  "Logo Designing & Branding": [
    {
      name: "Startup Plan",
      price: "$149",
      oldPrice: "$249",
      features: [
        "2 Initial Logo Concepts",
        "High-Res Files (JPG/PNG)",
        "Primary Color Palette",
        "1 Revision Round",
        "Standard Delivery"
      ]
    },
    {
      name: "Advanced Plan",
      price: "$499",
      oldPrice: "$699",
      features: [
        "4 Original Logo Concepts",
        "Vector Files (AI/EPS/SVG)",
        "Full Color Palette & Typography",
        "Brand Guidelines (Basic)",
        "Social Media Kit",
        "3 Revision Rounds"
      ]
    },
    {
      name: "Premium Plan",
      price: "$899",
      oldPrice: "$1299",
      features: [
        "Unlimited Logo Concepts",
        "Complete Brand Identity Book",
        "Stationery Design",
        "3D Mockups",
        "Copyright Transfer",
        "Unlimited Revisions"
      ]
    }
  ],
  "Social Media Marketing": [
    {
      name: "Startup Plan",
      price: "$299",
      oldPrice: "$399",
      features: [
        "Platform Management (1 Profile)",
        "8 Custom Posts/Month",
        "Basic Hashtag Strategy",
        "Monthly Progress Report",
        "Community Engagement (Basic)"
      ]
    },
    {
      name: "Advanced Plan",
      price: "$599",
      oldPrice: "$799",
      features: [
        "Platform Management (up to 3)",
        "15 Custom Posts/Month",
        "Content Calendar Planning",
        "Story & Reel Creation",
        "Competitor Benchmarking",
        "Bi-weekly Analytics"
      ]
    },
    {
      name: "Premium Plan",
      price: "$999",
      oldPrice: "$1299",
      features: [
        "Omni-platform Management",
        "Daily Posting & Stories",
        "Viral Content Strategy",
        "Influencer Outreach (Basic)",
        "Dedicated Community Manager",
        "Weekly Strategy Adjustments"
      ]
    }
  ],
  "Content Marketing": [
    {
      name: "Startup Plan",
      price: "$199",
      oldPrice: "$299",
      features: [
        "2 SEO Optimized Blogs/Month",
        "Basic Keyword Research",
        "Copy Editing",
        "Plagiarism Check",
        "Royalty-free Images"
      ]
    },
    {
      name: "Advanced Plan",
      price: "$599",
      oldPrice: "$799",
      features: [
        "4 Long-form Articles/Month",
        "Comprehensive Content Strategy",
        "On-page SEO Optimization",
        "Social Media Snippets",
        "Competitor Content Gap Analysis",
        "Monthly Traffic Report"
      ]
    },
    {
      name: "Premium Plan",
      price: "$1099",
      oldPrice: "$1499",
      features: [
        "8 Premium Articles/Month",
        "Whitepaper/E-book Creation",
        "Press Release Distribution",
        "Content Hub Organization",
        "Guest Posting Strategy",
        "Dedicated Content Manager"
      ]
    }
  ]
};

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <main className="relative w-full min-h-screen pt-32 flex flex-col bg-black overflow-hidden justify-between">
      {/* Immersive glow background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-electric/15 blur-[180px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-electric/10 blur-[200px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 mb-20">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-electric text-xl font-bold mb-4 tracking-wide">Pricing</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            The Perfect plans for Your Needs
          </h1>
        </motion.div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-[20px] text-sm md:text-base transition-all duration-300 font-medium whitespace-nowrap ${
                activeCategory === category
                  ? "border border-electric text-white bg-electric/10 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                  : "border border-white/20 text-white/70 hover:border-electric/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {pricingData[activeCategory].map((plan, index) => (
              <motion.div
                key={plan.name + activeCategory}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-[#030d0d]/60 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 flex flex-col group hover:border-electric/30 transition-all duration-500 overflow-hidden shadow-2xl"
              >
                {/* Accent line on top */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-electric/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Subtle card glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-electric/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <h3 className="text-electric text-lg font-semibold mb-6">{plan.name}</h3>
                
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-xl text-electric line-through decoration-electric/40 font-medium">{plan.oldPrice}</span>
                </div>
                
                <div className="text-[#00ff88] text-[15px] font-medium mb-8">
                  Up to <span className="text-electric font-bold">50%</span> referral AAR
                </div>

                <div className="text-white font-bold text-lg mb-6 tracking-wide">Includes:</div>
                
                {/* Scrollable features area */}
                <div className="flex-grow space-y-4 mb-8 overflow-y-auto pr-2 flex flex-col min-h-[220px]" 
                     style={{
                       scrollbarWidth: 'thin',
                       scrollbarColor: '#00f0ff transparent'
                     }}>
                  {plan.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex gap-4 text-white/80 text-[15px] items-start">
                      <div className="mt-[2px] w-5 h-5 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                         <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="w-full relative overflow-hidden group/btn rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent transition-transform hover:scale-[1.02] active:scale-[0.98] block">
                  <div className="w-full bg-[#030d0d] group-hover/btn:bg-[#082222] transition-colors duration-300 py-4 rounded-2xl flex items-center justify-center gap-2">
                    <span className="text-white text-[15px] font-bold tracking-wide">Buy Now</span>
                    <ArrowUpRight className="w-4 h-4 text-white font-bold" />
                  </div>
                  {/* Bottom electric gradient overlay mimicking screenshot */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-electric/20 to-transparent pointer-events-none" />
                </Link>
                
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
