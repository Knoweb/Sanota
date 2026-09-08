"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Leaf, CupSoda, Coffee, ChevronRight, CheckCircle2 } from "lucide-react";

const industries = [
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial Automation",
    description: "Custom machinery, production automation, testing systems, connected monitoring and modernization of industrial equipment.",
    link: "/industries",
    linkText: "Explore Manufacturing Solutions",
    image: "/ind_manufacturing_1788515164504.jpg",
    icon: Box,
  },
  {
    id: "agriculture",
    title: "Smart Agriculture & Agri-Technology",
    description: "Greenhouses, irrigation, fertigation, controlled cultivation, environmental automation and crop-monitoring systems.",
    link: "/industries",
    linkText: "Explore Smart Agriculture",
    image: "/ind_agri_1788515181352.jpg",
    icon: Leaf,
  },
  {
    id: "food",
    title: "Food & Beverage Processing",
    description: "Equipment and integrated systems for preparation, drying, preservation, cooking, handling and packaging.",
    link: "/industries",
    linkText: "Explore Food-Processing Solutions",
    image: "/ind_food_1788515232491.jpg",
    icon: CupSoda,
  },
  {
    id: "tea",
    title: "Tea Industry Solutions",
    description: "Tea-processing machinery, withering systems, dryers, environmental control, factory modernization and digital platforms.",
    link: "/industries",
    linkText: "Explore Tea Industry Solutions",
    image: "/ind_tea_1788515252795.jpg",
    icon: Coffee,
  },
];

const additionalIndustries = [
  "Logistics, Warehousing & Material Handling",
  "Energy & Resource Efficiency",
  "Environmental & Waste Solutions",
  "Infrastructure & Smart Facilities",
  "Healthcare & Biomedical Engineering",
  "Research, Innovation & Custom Product Development",
];

export default function IndustriesWeSupport() {
  return (
    <section id="industries" className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase"
          >
            Engineering Support <br />
            <span className="text-[#2E5EAA]">Across Industries</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-3xl text-[15.5px] text-slate-400 leading-relaxed"
          >
            Sanota helps organizations improve productivity, reliability, process control, operational visibility, resource efficiency and long-term system performance.
          </motion.p>
        </div>

        {/* Featured Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {industries.map((ind, idx) => (
            <motion.div 
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-[#0B1220] flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={ind.image} 
                  alt={ind.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/60 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#0B1220]/80 backdrop-blur-md rounded-xl border border-slate-700 flex items-center justify-center">
                  <ind.icon className="w-6 h-6 text-[#E8B84B]" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow relative -mt-8 z-10">
                <h3 className="text-[22px] font-bold text-white mb-4 group-hover:text-[#2E5EAA] transition-colors">{ind.title}</h3>
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                  {ind.description}
                </p>
                <Link 
                  href={ind.link}
                  className="inline-flex items-center text-[#E8B84B] font-semibold hover:text-white transition-colors"
                >
                  {ind.linkText} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Industries */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 rounded-3xl p-10 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#2E5EAA]/10 to-transparent pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Additional Industries</h3>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center px-6 py-3 border border-slate-700 hover:border-[#2E5EAA] text-[13px] font-bold rounded-lg text-white bg-[#0B1220] hover:bg-[#2E5EAA]/10 transition-colors uppercase tracking-wider whitespace-nowrap"
            >
              View All Industries
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {additionalIndustries.map((industry, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-[#E8B84B] mr-3 shrink-0 mt-0.5" />
                <span className="text-[14px] text-slate-300">{industry}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
