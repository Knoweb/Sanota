"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Leaf, CupSoda, Coffee, Cpu, BatteryCharging, Recycle, Building, Activity, FlaskConical } from "lucide-react";

const industries = [
  {
    id: "agriculture",
    title: "Agriculture & Plantations",
    description: "Greenhouse systems, irrigation, withering systems, environmental control and intelligent crop-monitoring solutions.",
    link: "/industries",
    linkText: "Explore Agriculture Solutions",
    image: "/ind_agri_1788515181352.jpg",
    icon: Leaf,
  },
  {
    id: "food",
    title: "Food & Beverage",
    description: "Processing equipment and integrated systems supporting preparation, preservation, packaging and value addition.",
    link: "/industries",
    linkText: "Explore Food & Beverage",
    image: "/ind_food_1788515232491.jpg",
    icon: CupSoda,
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Custom machinery, production automation, testing systems, machine monitoring and process integration.",
    link: "/industries",
    linkText: "Explore Manufacturing",
    image: "/ind_manufacturing_1788515164504.jpg",
    icon: Box,
  },
  {
    id: "apparel",
    title: "Apparel & Textiles",
    description: "Automation, handling systems, and resource efficiency solutions tailored for the apparel manufacturing sector.",
    link: "/industries",
    linkText: "Explore Apparel Solutions",
    image: "/ind_tea_1788515252795.jpg", // Reusing tea image as placeholder
    icon: Activity,
  },
];

const additionalIndustries = [
  { name: "FMCG", icon: Box },
  { name: "Healthcare & Pharmaceuticals", icon: FlaskConical },
  { name: "Packaging & Logistics", icon: TruckIcon },
  { name: "Construction & Building Materials", icon: Building },
  { name: "Research & Custom Engineering", icon: Cpu },
];

function TruckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
      <path d="M14 17h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}

export default function IndustriesWeSupport() {
  return (
    <section id="industries" className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase"
          >
            Engineering Support <br />
            <span className="text-[#2E5EAA]">Across Industries</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-3xl text-lg text-slate-400"
          >
            Sanota supports organizations across diverse industries by helping them improve productivity, process control, reliability, operational visibility, resource efficiency and long-term performance.
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
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#2E5EAA] transition-colors">{ind.title}</h3>
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
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Additional Industries</h3>
              <p className="text-slate-400">Sanota also provides engineering and technology solutions for:</p>
            </div>
            <Link
              href="/industries"
              className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 border border-slate-700 hover:border-[#2E5EAA] text-[13px] font-bold rounded-full text-white bg-[#0B1220] hover:bg-[#2E5EAA]/10 transition-colors uppercase tracking-wider whitespace-nowrap"
            >
              View Industry Solutions
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalIndustries.map((ind, idx) => (
              <div key={idx} className="flex items-center p-4 rounded-xl bg-[#0B1220]/50 border border-slate-800/50 hover:border-[#E8B84B]/30 transition-colors">
                <ind.icon className="w-5 h-5 text-[#E8B84B] mr-4 shrink-0" />
                <span className="text-sm text-slate-300 font-medium">{ind.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
