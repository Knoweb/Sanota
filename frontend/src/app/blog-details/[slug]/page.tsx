import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, Share2, CheckCircle2 } from "lucide-react";
import { getArticleBySlug } from "@/lib/api";
import ReactMarkdown from "react-markdown";

export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = await getArticleBySlug(resolvedParams.slug);

  const getImageForSlug = (slug: string) => {
    if (slug === 'smart-drainage-system') return '/completed work/drain-water.webp';
    if (slug === 'nerve-stimulator') return '/nerve-stimulator.png';
    if (slug === 'asmp-food-processing') return '/asmp-blog.jpg';
    return '/placeholder-image.jpg';
  };

  if (!data) {
    return (
      <div className="flex flex-col min-h-screen bg-[#050B14]">
        <Header />
        <main className="flex-grow pt-32 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
            <p className="text-slate-400 mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Link href="/media" className="inline-flex items-center text-sm font-medium text-[#E8B84B] hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Media
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#050B14]">
      <Header />
      <main className="flex-grow pt-24 lg:pt-32 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Link href="/media" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-[#E8B84B] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Media
          </Link>

          {/* Header */}
          <header className="mb-10 text-center">
            <div className="flex items-center justify-center text-sm text-[#E8B84B] font-medium mb-4 gap-4">
              <span className="flex items-center bg-[#E8B84B]/10 px-3 py-1 rounded-full border border-[#E8B84B]/20"><Tag className="w-4 h-4 mr-1.5" /> {data.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">{data.title}</h1>
            <div className="flex items-center justify-center text-slate-400 text-sm gap-6 border-y border-slate-800/60 py-4">
              <span className="flex items-center"><User className="w-4 h-4 mr-2 text-[#2E5EAA]" /> {data.author}</span>
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-[#2E5EAA]" /> {new Date(data.date).toLocaleDateString()}</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl border border-slate-800">
            <Image 
              src={data.coverImage?.url || getImageForSlug(data.slug)} 
              alt={data.title} 
              fill 
              className="object-cover" 
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6 prose-headings:text-white prose-a:text-[#E8B84B] hover:prose-a:text-[#d4a643] prose-li:text-slate-300">
            <ReactMarkdown>{data.content}</ReactMarkdown>
          </div>

          {/* Tags & Share */}
          <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold text-sm">Tags:</span>
              <span className="px-4 py-1.5 bg-[#131C2E] border border-slate-700 rounded-full text-xs text-slate-300 hover:border-[#E8B84B]/50 transition-colors cursor-pointer">{data.category}</span>
              <span className="px-4 py-1.5 bg-[#131C2E] border border-slate-700 rounded-full text-xs text-slate-300 hover:border-[#E8B84B]/50 transition-colors cursor-pointer">Sanota</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-white font-bold text-sm flex items-center"><Share2 className="w-4 h-4 mr-2 text-[#2E5EAA]" /> Share:</span>
              <button className="w-10 h-10 rounded-full bg-[#131C2E] border border-slate-700 hover:border-[#2E5EAA] hover:bg-[#2E5EAA]/10 flex items-center justify-center transition-all text-slate-400 hover:text-[#2E5EAA]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-[#131C2E] border border-slate-700 hover:border-[#2E5EAA] hover:bg-[#2E5EAA]/10 flex items-center justify-center transition-all text-slate-400 hover:text-[#2E5EAA]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-[#131C2E] border border-slate-700 hover:border-[#2E5EAA] hover:bg-[#2E5EAA]/10 flex items-center justify-center transition-all text-slate-400 hover:text-[#2E5EAA]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </button>
            </div>
          </div>

        </article>
      </main>
      <Footer />
    </div>
  );
}
