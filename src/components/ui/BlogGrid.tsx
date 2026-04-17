"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const dummyBlogs = [
  {
    slug: "ui-ux-designing-process",
    category: "Design",
    title: "UI / UX Designing is the process of creating interfaces",
    desc: "UI / UX Designing is the process of creating interfaces that are both visually appealing and user-friendly.",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=600&auto=format&fit=crop"
  },
  {
    slug: "web-development-work-involved",
    category: "Development",
    title: "Web Development and the work involved",
    desc: "Web Development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
  },
  {
    slug: "ai-impact-on-world",
    category: "Development",
    title: "AI and its impact on the world",
    desc: "AI (Artificial Intelligence) refers to the simulation of human intelligence in machines that are programmed to think and learn.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
  },
  {
    slug: "cms-and-its-importance",
    category: "Development",
    title: "CMS and its importance",
    desc: "CMS (Content Management System) is a software application that allows users to create, manage, and modify content on a website without the need for specialized technical knowledge.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop"
  }
];

export default function BlogGrid() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-20 lg:py-32 relative z-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyBlogs.map((post, idx) => (
          <motion.div 
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col gap-5 group"
          >
            {/* Image Card */}
            <Link href={`/blogs/${post.slug}`} className="relative w-full h-[240px] rounded-3xl overflow-hidden shadow-lg shadow-black/50 border border-white/5">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent duration-500 transition-colors z-10" />
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </Link>

            {/* Content */}
            <div className="flex flex-col items-start px-2">
              <span className="text-electric text-sm font-semibold tracking-wider mb-2">{post.category}</span>
              <Link href={`/blogs/${post.slug}`}>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-electric transition-colors duration-300 leading-snug mb-3">
                  {post.title}
                </h3>
              </Link>
              <p className="text-white/60 text-[15px] font-medium leading-relaxed mb-6">
                {post.desc}
              </p>
              
              <Link 
                href={`/blogs/${post.slug}`} 
                className="flex items-center gap-2 mt-auto text-white/50 hover:text-electric transition-colors group/btn font-semibold text-sm"
              >
                <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center group-hover/btn:border-electric transition-colors">
                  <ArrowUpRight className="w-3 h-3 group-hover/btn:rotate-45 transition-transform duration-300" />
                </div>
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
