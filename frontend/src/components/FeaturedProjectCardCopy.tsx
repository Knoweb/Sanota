"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedProjectCardCopy() {
  return (
    <section className="hidden py-24 bg-[#0B1220] relative border-t border-slate-800">
      {/* 
        NOTE: Hidden for now as requested. 
        Remove 'hidden' from the section className when ready to display.
      */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#131C2E] border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Left Side: Placeholder for Project Image */}
          <div className="w-full md:w-5/12 bg-slate-800 relative min-h-[300px]">
             {/* <Image src="..." alt="Project" fill className="object-cover" /> */}
             <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
               [Project Image]
             </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-7/12 p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-6">Project Title</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 border-b border-slate-700/50 pb-8">
              <div>
                <p className="text-[#E8B84B] text-xs font-bold uppercase tracking-widest mb-1">Industry/Sector</p>
                <p className="text-slate-300 text-sm">[Industry Name]</p>
              </div>
              <div>
                <p className="text-[#E8B84B] text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                <p className="text-slate-300 text-sm">[Location Name]</p>
              </div>
              <div>
                <p className="text-[#E8B84B] text-xs font-bold uppercase tracking-widest mb-1">Solution</p>
                <p className="text-slate-300 text-sm">[Solution Type]</p>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <div>
                <h4 className="text-white font-bold mb-2">The Requirement</h4>
                <p className="text-slate-400 text-sm leading-relaxed">[Description of the client's requirement]</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Sanota’s Response</h4>
                <p className="text-slate-400 text-sm leading-relaxed">[Description of the engineering solution provided]</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">The Outcome</h4>
                <p className="text-slate-400 text-sm leading-relaxed">[Description of the results achieved]</p>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="inline-flex items-center text-sm font-bold text-[#E8B84B] hover:text-white transition-colors">
                View Project Story <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <span className="hidden sm:inline-block text-slate-700">|</span>
              <Link href="#" className="inline-flex items-center text-sm font-bold text-slate-300 hover:text-white transition-colors">
                View Related Services
              </Link>
              <span className="hidden sm:inline-block text-slate-700">|</span>
              <Link href="/contact" className="inline-flex items-center text-sm font-bold text-slate-300 hover:text-white transition-colors">
                Discuss a Similar Requirement
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
