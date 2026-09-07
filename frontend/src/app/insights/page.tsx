"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

// Placeholder articles
const articles = [
  {
    title: "Optimizing Fluidized Bed Dryers for Maximum Efficiency",
    excerpt: "An engineering analysis on airflow distribution and heat transfer in continuous drying operations.",
    date: "Dec 10, 2023",
    category: "Technical Paper"
  },
  {
    title: "The Transition to Automated Withering in Tea Manufacturing",
    excerpt: "Evaluating the energy savings and quality improvements of controlled environmental systems.",
    date: "Nov 22, 2023",
    category: "Case Study"
  },
  {
    title: "Integrating Legacy Machinery with Modern SCADA Systems",
    excerpt: "A practical guide to retrieving data from unconnected analog industrial equipment.",
    date: "Oct 15, 2023",
    category: "Automation Guide"
  }
];

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow pt-24">
        
        {/* Hero Section */}
        <section className="relative py-24 bg-[#050B14] overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-b from-[#131C2E]/50 to-transparent" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6"
            >
              <span className="text-[#E8B84B]">Insights</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto font-semibold mb-6"
            >
              Engineering Perspectives
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto"
            >
              Technical articles, research findings and perspectives on industrial engineering from the Sanota team.
            </motion.p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-24 bg-[#0B1220]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-[#E8B84B]/50 transition-colors flex flex-col group"
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 bg-[#2E5EAA]/10 text-[#2E5EAA] text-xs font-bold rounded-full border border-[#2E5EAA]/20 uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-slate-500 text-xs font-mono">{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#E8B84B] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <Link 
                    href="#" 
                    className="inline-flex items-center text-sm font-bold text-[#E8B84B] mt-auto hover:text-white transition-colors"
                  >
                    Read Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center justify-center p-8 bg-[#131C2E]/30 rounded-2xl border border-slate-800/50 max-w-2xl">
                <BookOpen className="w-8 h-8 text-slate-600 mr-4 shrink-0" />
                <p className="text-slate-400 text-sm">
                  We are currently organizing our technical archives. More engineering insights, research papers, and case studies will be published here soon.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
