import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, Share2, ArrowRight } from "lucide-react";
import { getArticleBySlug } from "@/lib/api";
import { getStaticArticleBySlug } from "@/data/articlesData";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const staticData = getStaticArticleBySlug(resolvedParams.slug);
  const apiData = await getArticleBySlug(resolvedParams.slug);
  const data = apiData || (staticData ? {
    ...staticData,
    documentId: staticData.slug,
    coverImage: { url: staticData.coverImage }
  } : null);

  if (!data) {
    return {
      title: "Article Not Found | Sanota Global",
    };
  }

  const getImageForSlug = (slug: string) => {
    if (slug === 'role-of-piezoelectric-technology-modern-society') return '/piezoelectric-technology.jpg';
    if (slug === 'thermal-imaging-electrical-faults') return '/thermal-camera-inspection.jpg';
    if (slug === 'cnc-machining-vs-3d-printing') return '/cnc-vs-3d-printing.jpg';
    if (slug === 'smart-manufacturing-sri-lankan-smes') return '/smart-manufacturing-smes.jpg';
    if (slug === 'microgreen-greenhouse-monitoring') return '/microgreen-monitoring.jpg';
    if (slug === 'smart-drainage-system') return '/completed work/drain-water.webp';
    if (slug === 'nerve-stimulator') return '/nerve-stimulator.png';
    if (slug === 'asmp-food-processing') return '/asmp-blog.jpg';
    return '/sanota.png';
  };

  const imageUrl = data.coverImage?.url || getImageForSlug(data.slug);

  return {
    title: `${data.title} | Sanota Global Insights`,
    description: data.content ? data.content.substring(0, 160).replace(/[#*_\n]/g, ' ') + "..." : "Read this article on Sanota Global.",
    openGraph: {
      title: data.title,
      description: data.content ? data.content.substring(0, 160).replace(/[#*_\n]/g, ' ') + "..." : "Read this article on Sanota Global.",
      images: [imageUrl],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.content ? data.content.substring(0, 160).replace(/[#*_\n]/g, ' ') + "..." : "Read this article on Sanota Global.",
      images: [imageUrl],
    },
  };
}

export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const staticData = getStaticArticleBySlug(resolvedParams.slug);
  const apiData = await getArticleBySlug(resolvedParams.slug);
  const data = apiData || (staticData ? {
    ...staticData,
    documentId: staticData.slug,
    coverImage: { url: staticData.coverImage }
  } : null);

  const getImageForSlug = (slug: string) => {
    if (slug === 'role-of-piezoelectric-technology-modern-society') return '/piezoelectric-technology.jpg';
    if (slug === 'thermal-imaging-electrical-faults') return '/thermal-camera-inspection.jpg';
    if (slug === 'cnc-machining-vs-3d-printing') return '/cnc-vs-3d-printing.jpg';
    if (slug === 'smart-manufacturing-sri-lankan-smes') return '/smart-manufacturing-smes.jpg';
    if (slug === 'microgreen-greenhouse-monitoring') return '/microgreen-monitoring.jpg';
    if (slug === 'smart-drainage-system') return '/completed work/drain-water.webp';
    if (slug === 'nerve-stimulator') return '/nerve-stimulator.png';
    if (slug === 'asmp-food-processing') return '/asmp-blog.jpg';
    return '/sanota.png';
  };

  if (!data) {
    return (
      <div className="flex flex-col min-h-screen bg-[#FAF8F5] dark:bg-[#050B14]">
        <Header />
        <main className="flex-grow pt-32 pb-16 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl font-bold text-[#17135B] dark:text-white mb-4">Article Not Found</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">The article you're looking for doesn't exist or is undergoing technical updates.</p>
            <Link href="/insights" className="inline-flex items-center text-sm font-bold text-[#C59B27] dark:text-[#E8B84B] hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] dark:bg-[#050B14]">
      <Header />
      <main className="flex-grow pt-24 lg:pt-32 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Link href="/insights" className="inline-flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-[#C59B27] dark:hover:text-[#E8B84B] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
          </Link>

          {/* Header */}
          <header className="mb-10 text-center">
            <div className="flex items-center justify-center text-sm mb-4">
              <span className="flex items-center bg-[#C59B27]/10 dark:bg-[#E8B84B]/10 text-[#C59B27] dark:text-[#E8B84B] font-bold px-3.5 py-1.5 rounded-full border border-[#C59B27]/20 dark:border-[#E8B84B]/20 text-xs uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5 mr-1.5" /> {data.category}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#17135B] dark:text-white leading-tight mb-6">
              {data.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center text-slate-500 dark:text-slate-400 text-xs sm:text-sm gap-4 sm:gap-6 border-y border-slate-200 dark:border-slate-800/80 py-4">
              <span className="flex items-center">
                <User className="w-4 h-4 mr-2 text-[#2E5EAA]" /> {data.author}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-[#2E5EAA]" /> {new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </span>
            </div>
          </header>

          {/* Markdown Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown
              components={{
                img: ({ src, alt }) => (
                  <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900">
                    <img
                      src={src || ''}
                      alt={alt || 'Sanota Engineering Insight'}
                      className="w-full h-auto object-cover max-h-[550px]"
                    />
                    {alt && (
                      <figcaption className="text-center text-xs text-slate-400 py-3 bg-slate-950/80 border-t border-slate-800/80">
                        {alt}
                      </figcaption>
                    )}
                  </figure>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl sm:text-3xl font-black text-[#17135B] dark:text-white mt-12 mb-4 border-b border-slate-200 dark:border-slate-800 pb-3">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl sm:text-2xl font-bold text-[#17135B] dark:text-[#E8B84B] mt-8 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ node, children }: any) => {
                  const hasImage = node?.children?.some(
                    (child: any) => child.type === 'element' && (child.tagName === 'img' || child.tagName === 'figure')
                  );
                  if (hasImage) {
                    return <div className="my-6">{children}</div>;
                  }
                  return (
                    <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                      {children}
                    </p>
                  );
                },
                blockquote: ({ children }) => (
                  <blockquote className="my-6 border-l-4 border-[#C59B27] dark:border-[#E8B84B] bg-[#C59B27]/5 dark:bg-[#E8B84B]/5 pl-4 py-2 sm:pl-6 sm:py-3 rounded-r-xl italic text-slate-800 dark:text-slate-200">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-2 mb-6 pl-4 list-disc marker:text-[#C59B27] dark:marker:text-[#E8B84B]">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="space-y-2 mb-6 pl-5 list-decimal marker:text-[#C59B27] dark:marker:text-[#E8B84B]">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                    {children}
                  </li>
                ),
                hr: () => (
                  <hr className="my-10 border-slate-200 dark:border-slate-800" />
                )
              }}
            >
              {data.content}
            </ReactMarkdown>
          </div>

          {/* Tags & Action Banner */}
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[#17135B] dark:text-white font-bold text-sm">Tags:</span>
              <span className="px-3.5 py-1.5 bg-slate-100 dark:bg-[#131C2E] border border-slate-300 dark:border-slate-700 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300">
                {data.category}
              </span>
              <span className="px-3.5 py-1.5 bg-slate-100 dark:bg-[#131C2E] border border-slate-300 dark:border-slate-700 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300">
                Sanota
              </span>
            </div>
            
            <Link
              href="/tell-us-your-challenge"
              className="inline-flex items-center px-6 py-3 bg-[#C59B27] hover:bg-[#B38A22] text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-md"
            >
              Discuss a Similar Project <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

        </article>
      </main>
      <Footer />
    </div>
  );
}
