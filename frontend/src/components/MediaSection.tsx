"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon, Video, Newspaper, Briefcase, Camera, Mic } from "lucide-react";

const mediaCategories = [
  { title: "Inside Sanota", desc: "Company updates and engineering culture.", icon: Mic },
  { title: "Completed Work", desc: "Detailed case studies and results.", icon: Briefcase },
  { title: "Project Stories", desc: "Behind the scenes of our engineering process.", icon: Newspaper },
  { title: "Videos", desc: "Engineering and automation in action.", icon: Video },
  { title: "Photo Gallery", desc: "Work in progress and finished systems.", icon: Camera },
  { title: "News & Activities", desc: "Events, exhibitions and announcements.", icon: ImageIcon },
];

export default function MediaSection() {
  return (
    <section className="relative py-24 bg-[#0B1220] overflow-hidden border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3">Media & News</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Keep up with Sanota's projects, news and <span className="text-[#2E5EAA]">technical capabilities.</span>
            </h3>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="mt-8 md:mt-0"
          >
             <Link
               href="/media"
               className="inline-flex items-center px-7 py-3 border border-slate-700 hover:border-[#E8B84B]/50 text-[14px] font-bold rounded-lg text-white bg-[#131C2E] hover:bg-[#131C2E]/80 transition-colors shadow-lg"
             >
               Visit the Media Center
             </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-[#2E5EAA]/50 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0B1220] border border-slate-700 flex items-center justify-center mb-6 group-hover:border-[#2E5EAA] group-hover:shadow-[0_0_15px_rgba(46,94,170,0.2)] transition-all duration-300">
                <cat.icon className="w-7 h-7 text-[#2E5EAA] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#E8B84B] transition-colors">{cat.title}</h4>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                {cat.desc}
              </p>
              <Link 
                href="/media"
                className="inline-flex items-center text-[#E8B84B] font-semibold hover:text-white transition-colors text-sm"
              >
                Explore <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
