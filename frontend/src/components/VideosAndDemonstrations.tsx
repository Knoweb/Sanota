"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const filters = [
  "All Videos",
  "Machinery",
  "Automation",
  "IoT & Software",
  "Agriculture",
  "Processing",
  "Modernization",
  "Projects",
  "Company Activities"
];

// Placeholder videos
const videos = [
  { id: 1, category: "Machinery", title: "Machinery in operation", thumbnail: "/proj_mod_1788515440738.jpg" },
  { id: 2, category: "Automation", title: "Automation demonstrations", thumbnail: "/proj_tea_1788515615060.jpg" },
  { id: 3, category: "Modernization", title: "Before-and-after modernization", thumbnail: "/proj_mod_1788515440738.jpg" },
  { id: 4, category: "Agriculture", title: "Smart-agriculture systems", thumbnail: "/proj_greenhouse_1788515466596.jpg" },
  { id: 5, category: "Processing", title: "Processing equipment", thumbnail: "/hero_food.jpg" },
  { id: 6, category: "IoT & Software", title: "IoT dashboards and alerts", thumbnail: "/proj_rfid_1788515670964.jpg" },
  { id: 7, category: "Projects", title: "Installation and commissioning", thumbnail: "/proj_testing_1788515821950.jpg" },
  { id: 8, category: "Projects", title: "Product demonstrations", thumbnail: "/hero_food.jpg" },
  { id: 9, category: "Company Activities", title: "Technical explanations", thumbnail: "/proj_tea_1788515615060.jpg" },
  { id: 10, category: "Company Activities", title: "Exhibitions and company activities", thumbnail: "/proj_mod_1788515440738.jpg" },
];

export default function VideosAndDemonstrations() {
  const [activeFilter, setActiveFilter] = useState("All Videos");

  const filteredVideos = videos.filter(
    (video) => activeFilter === "All Videos" || video.category === activeFilter
  );

  return (
    <section className="hidden py-24 bg-[#050B14] relative">
      {/* 
        NOTE: Hidden for now as requested. 
        Remove 'hidden' from the section className when ready to display.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Watch Sanota Solutions in Operation
          </h2>
          <p className="text-slate-400 text-lg">
            Explore videos of machinery, automation, IoT systems, installations, commissioning activities and completed engineering solutions.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeFilter === filter
                  ? "bg-[#E8B84B] text-[#0B1220] shadow-[0_0_15px_rgba(232,184,75,0.4)]"
                  : "bg-[#131C2E] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredVideos.slice(0, 6).map((video) => (
            <motion.div
              key={video.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4 border border-slate-800 bg-slate-900 shadow-lg">
                <Image 
                  src={video.thumbnail} 
                  alt={video.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white/70 group-hover:text-white transition-all transform group-hover:scale-110 drop-shadow-lg" />
                </div>
              </div>
              <p className="text-[#E8B84B] text-xs font-bold uppercase tracking-widest mb-1">{video.category}</p>
              <h4 className="text-white font-bold text-lg group-hover:text-[#E8B84B] transition-colors">{video.title}</h4>
            </motion.div>
          ))}
        </div>

        {/* Primary Button */}
        <div className="text-center">
          <Link
            href="/media"
            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-200 text-[#0B1220] font-bold rounded-lg transition-colors shadow-lg group"
          >
            View All Videos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
