"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon, Video, Newspaper, Briefcase, Camera } from "lucide-react";

const mediaCategories = [
  { 
    title: "Completed Work", 
    desc: "Explore machinery, automation systems, installations, connected platforms and custom-developed products.", 
    icon: Briefcase,
    linkText: "View Completed Work",
    linkHref: "/media"
  },
  { 
    title: "Project Stories", 
    desc: "Discover the challenges, engineering responses and operational outcomes behind selected projects.", 
    icon: Newspaper,
    linkText: "Read Project Stories",
    linkHref: "/media"
  },
  { 
    title: "Videos", 
    desc: "Watch machinery demonstrations, automation sequences, testing, installation and commissioning.", 
    icon: Video,
    linkText: "Watch Videos",
    linkHref: "/media"
  },
  { 
    title: "Photo Gallery", 
    desc: "Browse photographs from projects, products, engineering activities, events and partnerships.", 
    icon: Camera,
    linkText: "View Photo Gallery",
    linkHref: "/media"
  },
  { 
    title: "News & Activities", 
    desc: "Follow new developments, collaborations, awards, exhibitions, training programmes and industry initiatives.", 
    icon: ImageIcon,
    linkText: "View News & Activities",
    linkHref: "/media"
  },
];

export default function MediaSection() {
  return (
    <section className="relative py-24 bg-[#0B1220] overflow-hidden border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3">Media Section</h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Inside Sanota
            </h3>
            <p className="text-[15.5px] text-slate-400 leading-relaxed">
              See the people, processes and engineering work behind Sanota’s solutions.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
             <Link
               href="/media"
               className="inline-flex justify-center items-center px-8 py-3.5 border border-[#2E5EAA] text-[14px] font-bold rounded-lg text-white hover:bg-[#2E5EAA]/10 transition-colors group"
             >
               Explore Media
               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {mediaCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-[#2E5EAA]/50 transition-colors duration-300 flex flex-col h-full ${idx === 3 ? 'lg:col-start-2' : ''} ${idx === 4 ? 'lg:col-start-3' : ''}`}
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#0B1220] border border-slate-700 flex items-center justify-center mb-6 group-hover:border-[#2E5EAA] group-hover:shadow-[0_0_15px_rgba(46,94,170,0.2)] transition-all duration-300">
                <cat.icon className="w-7 h-7 text-[#2E5EAA] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-[18px] font-bold text-white mb-3 group-hover:text-[#E8B84B] transition-colors">{cat.title}</h4>
              <p className="text-[13.5px] text-slate-400 mb-8 leading-relaxed flex-grow">
                {cat.desc}
              </p>
              <Link 
                href={cat.linkHref}
                className="inline-flex items-center text-[#E8B84B] font-semibold hover:text-white transition-colors text-[13px] uppercase tracking-wide w-fit mt-auto"
              >
                {cat.linkText} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
