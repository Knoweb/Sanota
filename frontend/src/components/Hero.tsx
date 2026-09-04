"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute inset-0 bg-[#0B1220] -z-20" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#2E5EAA]/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#E8B84B]/5 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#131C2E] border border-[#1e293b] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E8B84B] animate-pulse" />
              <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">Engineering • Automation • IoT • Software</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Integrated Engineering for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-yellow-200">Evolving Industries</span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
              Sanota designs, develops, automates, modernizes and maintains machinery, products, processes and operational systems for industries in Sri Lanka and international markets. By bringing together engineering, automation, IoT and software, we transform operational challenges into practical, reliable and scalable solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="#"
                className="inline-flex justify-center items-center px-6 py-3.5 border border-transparent text-base font-semibold rounded text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-lg shadow-[#E8B84B]/20 group"
              >
                Discuss Your Requirement
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="inline-flex justify-center items-center px-6 py-3.5 border border-[#2E5EAA] text-base font-semibold rounded text-white hover:bg-[#2E5EAA]/10 transition-colors group"
              >
                Explore Our Solutions
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-[#2E5EAA]" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden border border-[#1e293b] bg-[#131C2E] shadow-2xl flex items-center justify-center group"
          >
            {/* Placeholder for video/hero image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#131C2E] to-[#1B2A45] opacity-80" />
            <div className="text-center z-10 p-6">
              <div className="w-16 h-16 mx-auto bg-[#1e293b] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-[#E8B84B] border-b-8 border-b-transparent ml-1" />
              </div>
              <p className="text-slate-400 font-medium">Hero Image or Brand Video</p>
              <p className="text-sm text-slate-500 mt-2">Placeholder for visual content</p>
            </div>
            
            {/* Decorative tech grid overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] z-0" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
