"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogSection() {
  const blogs = [
    {
      category: "Design",
      title: "UI / UX Designing is the process of creating interfaces",
      desc: "UI / UX Designing is the process of creating interfaces that are both visually appealing and user-friendly.",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=600&auto=format&fit=crop",
    },
    {
      category: "Development",
      title: "Web Development and the work involved",
      desc: "Web Development is the work involved in developing a website for the Internet (World Wide Web) or an intranet.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
    },
    {
      category: "AI & Innovation",
      title: "AI and its impact on the world",
      desc: "AI refers to the simulation of human intelligence in machines that are programmed to think and learn.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    }
  ];

  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-24 z-20 relative flex justify-center bg-transparent">
      <div className="w-full max-w-[1400px] flex flex-col items-center gap-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center gap-4"
        >
          <h3 className="text-electric font-semibold text-lg tracking-wider">Our Blogs</h3>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            We make the process of working <br /> too easy and simpler
          </h2>
          <p className="text-white/60 text-lg mt-2">Here&apos;s some of our blogs:</p>
        </motion.div>

        {/* Blog Grid */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col gap-6 group cursor-pointer"
            >
              {/* Image Placeholder */}
              <Link href="/blogs" className="w-full aspect-[4/3] rounded-3xl bg-black border border-white/5 flex items-center justify-center overflow-hidden relative group-hover:border-electric transition-all shadow-lg">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <Image 
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </Link>

              {/* Content */}
              <div className="flex flex-col gap-3 px-2">
                <span className="text-electric text-sm font-semibold tracking-wider uppercase">{blog.category}</span>
                <h4 className="text-2xl font-bold text-white group-hover:text-electric transition-colors leading-[1.3]">{blog.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed mb-2 line-clamp-2">{blog.desc}</p>
                
                <Link href="/blogs" className="flex items-center gap-2 text-white/50 text-sm font-medium hover:text-electric transition-colors w-fit">
                  <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
