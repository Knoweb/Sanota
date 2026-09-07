"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mic, Briefcase, Newspaper, Video, Camera, Image as ImageIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Inside Sanota",
    desc: "Company news and updates",
    icon: Mic,
    items: [
      { title: "Sanota expands manufacturing facility", date: "Oct 12, 2023" },
      { title: "New partnership with technical university", date: "Sep 05, 2023" }
    ]
  },
  {
    title: "Completed Work",
    desc: "Case studies of commissioned projects",
    icon: Briefcase,
    items: [
      { title: "Automated sorting line for export facility", date: "Aug 22, 2023" },
      { title: "Custom dehydration system deployment", date: "Jul 14, 2023" }
    ]
  },
  {
    title: "Project Stories",
    desc: "Updates on ongoing engineering work",
    icon: Newspaper,
    items: [
      { title: "Behind the scenes: PLC integration", date: "Nov 02, 2023" },
      { title: "Testing phase for new conveyor design", date: "Oct 28, 2023" }
    ]
  },
  {
    title: "Videos",
    desc: "Showcase of machinery in operation",
    icon: Video,
    items: [
      { title: "Fluidized Bed Dryer in Action", date: "Nov 15, 2023" },
      { title: "Robotic arm sorting demonstration", date: "Sep 20, 2023" }
    ]
  },
  {
    title: "Photo Gallery",
    desc: "Visuals from the workshop and site installations",
    icon: Camera,
    items: [
      { title: "Installation at client site", date: "Gallery" },
      { title: "Workshop fabrication progress", date: "Gallery" }
    ]
  },
  {
    title: "News & Activities",
    desc: "Exhibitions, events, and industry participation",
    icon: ImageIcon,
    items: [
      { title: "Sanota at Industrial Expo 2023", date: "Dec 01, 2023" },
      { title: "Annual engineering conference", date: "Jun 10, 2023" }
    ]
  }
];

export default function MediaPage() {
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
              Media and <span className="text-[#E8B84B]">News</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto font-semibold mb-6"
            >
              Updates from the Engineering Floor
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto"
            >
              Follow Sanota's latest projects, technical developments and company updates.
            </motion.p>
          </div>
        </section>

        {/* Media Grid */}
        <section className="py-24 bg-[#0B1220]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-[#2E5EAA]/50 transition-colors flex flex-col"
                >
                  <div className="flex items-center mb-6 pb-6 border-b border-slate-800">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1220] border border-slate-700 flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-[#E8B84B]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                      <p className="text-slate-400 text-xs">{category.desc}</p>
                    </div>
                  </div>
                  
                  <div className="flex-grow space-y-4 mb-8">
                    {category.items.map((item, itemIdx) => (
                      <Link href="#" key={itemIdx} className="block group">
                        <h4 className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-mono">
                          {item.date}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <Link 
                    href="#" 
                    className="inline-flex items-center text-sm font-bold text-[#2E5EAA] hover:text-[#E8B84B] transition-colors mt-auto"
                  >
                    View All in {category.title} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
