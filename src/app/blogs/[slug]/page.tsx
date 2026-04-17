import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FooterSection from "@/components/ui/FooterSection";
import { dummyBlogs } from "@/components/ui/BlogGrid";
import FAQSection from "@/components/ui/FAQSection";
import ContactSection from "@/components/ui/ContactSection";
import GlobalImpactSection from "@/components/ui/GlobalImpactSection";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = dummyBlogs.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <main className="w-full min-h-screen bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blogs" className="text-electric hover:underline">Return to Blogs</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative w-full min-h-screen bg-black flex flex-col pt-32 lg:pt-40">
      <div className="relative w-full max-w-4xl mx-auto px-4 md:px-8 mb-20 z-10 flex-grow">
        
        <Link href="/blogs" className="inline-flex items-center gap-2 text-white/50 hover:text-electric transition-colors mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>
        
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full border border-electric/30 bg-electric/10 text-electric text-sm font-bold tracking-wider mb-6">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            {post.title}
          </h1>
          
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <Image 
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-p:text-white/70 prose-headings:text-white prose-a:text-electric">
          <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed max-w-3xl mb-12">
            {post.desc}
          </p>

          <div className="h-[1px] w-full bg-white/10 my-12" />

          <h2>The Future of {post.category}</h2>
          <p>
            In today's fast-paced digital world, staying ahead of the curve is crucial. The principles we've discussed are not just theoretical; they are the bedrock upon which successful modern enterprises are built. As technology continues to evolve, so too must our approaches to leveraging it effectively.
          </p>
          <p>
            Implementing these strategies requires a deep understanding of both your audience and the technical landscape. It's about finding that perfect intersection between human-centric design and scalable, robust engineering.
          </p>
          <h3>Key Takeaways</h3>
          <ul>
            <li>Always prioritize user experience and intuitive interfaces.</li>
            <li>Leverage the latest frameworks to build fast, responsive platforms.</li>
            <li>Continuous iteration based on analytics and feedback is the key to longevity.</li>
          </ul>
        </div>
      </div>

      <GlobalImpactSection />
      <FAQSection />
      <ContactSection />

      <FooterSection />
    </main>
  );
}
