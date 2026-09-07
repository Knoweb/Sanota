"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Leaf, Wheat, Factory, Box } from "lucide-react";
import Image from "next/image";

const industries = [
  {
    title: "Tea Manufacturing",
    desc: "Engineering and automation for continuous tea processing.",
    icon: Leaf,
    image: "/api/placeholder/800/600",
    items: [
      "Complete Withering Automation",
      "Automated Sorting and Grading Lines",
      "Continuous Conveying Systems",
      "Factory Modernization"
    ]
  },
  {
    title: "Agriculture & Food Processing",
    desc: "Systems designed for hygiene, volume and material preservation.",
    icon: Wheat,
    image: "/api/placeholder/800/600",
    items: [
      "Bulk Drying Systems (Grain, Spices, Fruits)",
      "Sorting & Quality Control",
      "Material Handling & Conveying",
      "Packing Automation"
    ]
  },
  {
    title: "Heavy Manufacturing & Production",
    desc: "Robust engineering for demanding environments.",
    icon: Factory,
    image: "/api/placeholder/800/600",
    items: [
      "Custom Machinery Development",
      "Production Line Automation",
      "Machine Rebuilding & Modernization",
      "Control System Upgrades"
    ]
  },
  {
    title: "Logistics & Warehousing",
    desc: "Systems to move, sort, and track inventory efficiently.",
    icon: Box,
    image: "/api/placeholder/800/600",
    items: [
      "Automated Sorting Conveyors",
      "Loading & Unloading Systems",
      "RFID & Tracking Integration (Through Knoweb)"
    ]
  }
];

export default function IndustriesPage() {
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
              Industries We <span className="text-[#2E5EAA]">Support</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto font-semibold mb-6"
            >
              Engineering Solutions for Industrial Operations
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto"
            >
              Sanota works with production facilities, processing plants, and operational centers to implement mechanical and automated systems that improve throughput, consistency and safety.
            </motion.p>
          </div>
        </section>

        {/* Industries List */}
        <section className="py-24 bg-[#0B1220]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {industries.map((ind, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                  >
                    {/* Image side */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800">
                        {/* Placeholder for actual industry images */}
                        <div className="absolute inset-0 bg-[#131C2E] flex items-center justify-center">
                          <ind.icon className="w-24 h-24 text-slate-700" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-80" />
                      </div>
                    </div>

                    {/* Content side */}
                    <div className="w-full lg:w-1/2">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-[#131C2E] border border-slate-700 flex items-center justify-center mr-6">
                          <ind.icon className="w-8 h-8 text-[#E8B84B]" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">{ind.title}</h2>
                          <p className="text-[#2E5EAA] font-semibold">{ind.desc}</p>
                        </div>
                      </div>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {ind.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start text-slate-300">
                            <div className="w-2 h-2 rounded-full bg-[#E8B84B] mt-2 mr-3 shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center mt-32">
              <Link
                href="/tell-us-your-challenge"
                className="inline-flex items-center px-10 py-5 border border-transparent text-lg font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-transform transform hover:scale-105 uppercase tracking-wider shadow-[0_0_20px_rgba(232,184,75,0.2)]"
              >
                Discuss Your Industry Requirement
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
