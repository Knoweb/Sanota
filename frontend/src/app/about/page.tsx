"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CorporateProof from "@/components/CorporateProof";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";
import { CheckCircle2, Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow pt-24">
        
        {/* Hero Section */}
        <section className="relative py-24 bg-[#050B14] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#131C2E]/50 to-transparent" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6"
            >
              About <span className="text-[#E8B84B]">Sanota</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Integrated Engineering for Evolving Industries
            </motion.p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-lg max-w-none text-slate-300"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Our Story</h2>
              <p>
                Sanota was established in 2010 to address a specific gap in the industrial sector: the need for an engineering partner capable of integrating mechanical systems, automation and digital technology into a single solution.
              </p>
              <p>
                Over the past decade, we have grown from a specialized engineering team into a comprehensive industrial solutions provider. Today, we support manufacturing, agriculture, food processing and logistics operations across Sri Lanka and international markets, delivering over 1,250 successful client engagements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 bg-[#131C2E] border-t border-slate-800/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#0B1220] p-10 rounded-3xl border border-slate-800"
              >
                <Eye className="w-12 h-12 text-[#E8B84B] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  To be the most reliable engineering partner for industries seeking to modernize, automate and optimize their operations.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#0B1220] p-10 rounded-3xl border border-slate-800"
              >
                <Target className="w-12 h-12 text-[#2E5EAA] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  To develop practical, integrated engineering solutions that solve real operational challenges while ensuring long-term reliability and support.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Corporate Proof */}
        <CorporateProof />

        {/* Why Organizations Work With Sanota */}
        <section className="py-24 bg-[#0B1220] border-t border-slate-800/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Organizations Work With Sanota</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                { title: "Complete Engineering Ownership", desc: "We handle mechanics, electronics and software internally." },
                { title: "Practical Problem Solving", desc: "We build solutions around actual operating conditions, not theoretical ideals." },
                { title: "Long-Term Responsibility", desc: "We provide AMC, spares, and lifecycle support for what we build." },
                { title: "Continuous Innovation", desc: "We actively invest in R&D and partner with state universities to develop new capabilities." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start bg-[#131C2E] p-8 rounded-2xl border border-slate-800"
                >
                  <CheckCircle2 className="w-8 h-8 text-[#E8B84B] mr-6 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-transparent text-[15px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors uppercase tracking-wider"
              >
                View Our Capabilities
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
