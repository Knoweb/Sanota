"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Leaf, CupSoda, Coffee, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const industries = [
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial Automation",
    description: "Custom machinery, production automation, testing systems, connected monitoring and modernization of industrial equipment.",
    link: "/industries",
    linkText: "Explore Manufacturing Solutions",
    image: "/ind_manufacturing_1788515164504.jpg",
    icon: Box,
    color: "#2E5EAA",
  },
  {
    id: "agriculture",
    title: "Smart Agriculture & Agri-Technology",
    description: "Greenhouses, irrigation, fertigation, controlled cultivation, environmental automation and crop-monitoring systems.",
    link: "/industries",
    linkText: "Explore Smart Agriculture",
    image: "/ind_agri_1788515181352.jpg",
    icon: Leaf,
    color: "#22c55e",
  },
  {
    id: "food",
    title: "Food & Beverage Processing",
    description: "Equipment and integrated systems for preparation, drying, preservation, cooking, handling and packaging.",
    link: "/industries",
    linkText: "Explore Food-Processing Solutions",
    image: "/ind_food_1788515232491.jpg",
    icon: CupSoda,
    color: "#f97316",
  },
  {
    id: "tea",
    title: "Tea Industry Solutions",
    description: "Tea-processing machinery, withering systems, dryers, environmental control, factory modernization and digital platforms.",
    link: "/industries",
    linkText: "Explore Tea Industry Solutions",
    image: "/ind_tea_1788515252795.jpg",
    icon: Coffee,
    color: "#E8B84B",
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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="industries" className="relative py-12 lg:py-16 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="mb-10 text-center">
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
            className="mt-4 max-w-3xl mx-auto text-[14.5px] text-slate-400 leading-relaxed"
          >
            Sanota helps organizations improve productivity, reliability, process control, operational visibility, resource efficiency and long-term system performance.
          </motion.p>
        </div>

        {/* 3D Coverflow Carousel */}
        <div 
          className="relative w-full h-[540px] flex justify-center items-center mb-10 overflow-hidden"
          style={{ perspective: 1400 }}
        >
          {/* Floating Glowing Navigation Arrows */}
          <motion.button 
            onClick={() => setActiveIndex((prev) => (prev - 1 + industries.length) % industries.length)}
            className="absolute left-2 sm:left-6 lg:left-16 z-40 p-3.5 rounded-full border text-white backdrop-blur-sm"
            style={{ 
              background: 'linear-gradient(135deg, rgba(19,28,46,0.9), rgba(11,18,32,0.9))',
              borderColor: 'rgba(232,184,75,0.4)',
              boxShadow: '0 0 20px rgba(232,184,75,0.25), 0 8px 32px rgba(0,0,0,0.4)'
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 35px rgba(232,184,75,0.6), 0 8px 32px rgba(0,0,0,0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-[#E8B84B]" />
          </motion.button>
          
          <motion.button 
            onClick={() => setActiveIndex((prev) => (prev + 1) % industries.length)}
            className="absolute right-2 sm:right-6 lg:right-16 z-40 p-3.5 rounded-full border text-white backdrop-blur-sm"
            style={{ 
              background: 'linear-gradient(135deg, rgba(19,28,46,0.9), rgba(11,18,32,0.9))',
              borderColor: 'rgba(232,184,75,0.4)',
              boxShadow: '0 0 20px rgba(232,184,75,0.25), 0 8px 32px rgba(0,0,0,0.4)'
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.25 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 35px rgba(232,184,75,0.6), 0 8px 32px rgba(0,0,0,0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-[#E8B84B]" />
          </motion.button>

          {industries.map((ind, idx) => {
            let offset = idx - activeIndex;
            const total = industries.length;
            
            if (offset < -1) offset += total;
            else if (offset > 1) offset -= total;
            if (Math.abs(offset) > 1) offset = 2;

            const isCenter = offset === 0;
            const isHidden = offset === 2 || Math.abs(offset) > 1;
            const zIndex = isCenter ? 30 : isHidden ? 5 : 20;
            const scale = isCenter ? 1 : isHidden ? 0.65 : 0.84;
            const x = isHidden ? "0%" : `${offset * 72}%`;
            const opacity = isCenter ? 1 : isHidden ? 0 : 0.70;

            return (
              <motion.div 
                key={ind.id}
                className={`absolute w-[300px] sm:w-[360px] lg:w-[430px] rounded-3xl overflow-hidden border flex flex-col cursor-pointer`}
                initial={false}
                animate={{
                  x,
                  scale,
                  zIndex,
                  opacity
                }}
                transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => setActiveIndex(idx)}
                style={{ 
                  height: isCenter ? 500 : 460,
                  transformStyle: "preserve-3d",
                  background: isCenter 
                    ? 'linear-gradient(135deg, #131C2E, #0B1220)' 
                    : `linear-gradient(135deg, #0d1625, #0B1220)`,
                  borderColor: isCenter 
                    ? 'rgba(232,184,75,0.5)' 
                    : `${ind.color}55`,
                  boxShadow: isCenter 
                    ? '0 0 0 1px rgba(232,184,75,0.2), 0 40px 80px -20px rgba(0,0,0,0.9), 0 0 60px rgba(232,184,75,0.08)' 
                    : `0 10px 40px rgba(0,0,0,0.5), 0 0 30px ${ind.color}15`,
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={ind.image} 
                    alt={ind.title} 
                    fill 
                    className="object-cover transition-all duration-700"
                    style={{ 
                      transform: isCenter ? "scale(1.06)" : "scale(1)",
                      opacity: isCenter ? 0.9 : 0.80,
                      filter: isCenter ? 'brightness(1.1)' : 'brightness(0.9) saturate(1.1)',
                    }}
                  />
                  {/* Color-tinted gradient overlay for side cards */}
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: isCenter 
                        ? 'linear-gradient(to top, #0B1220 0%, rgba(11,18,32,0.5) 50%, transparent 100%)'
                        : `linear-gradient(to top, #0B1220 0%, ${ind.color}20 50%, transparent 100%)`
                    }} 
                  />
                  <div 
                    className="absolute top-4 left-4 w-12 h-12 backdrop-blur-md rounded-xl border flex items-center justify-center transition-all duration-500"
                    style={{
                      background: 'rgba(11,18,32,0.85)',
                      borderColor: isCenter ? 'rgba(232,184,75,0.4)' : `${ind.color}60`,
                      boxShadow: `0 0 16px ${ind.color}40`,
                    }}
                  >
                    <ind.icon 
                      className="w-6 h-6 transition-colors duration-500" 
                      style={{ color: ind.color }} 
                    />
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow relative -mt-8 z-10 pointer-events-none">
                  <h3 
                    className="text-[20px] md:text-[22px] font-bold mb-3 transition-colors duration-500"
                    style={{ color: isCenter ? 'white' : ind.color }}
                  >{ind.title}</h3>
                  <p className={`text-[13px] md:text-[14px] flex-grow leading-relaxed transition-colors duration-500 ${isCenter ? 'text-slate-300' : 'text-slate-400'}`}>
                    {ind.description}
                  </p>
                  
                  {isCenter && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="pointer-events-auto mt-4"
                    >
                      <Link 
                        href={ind.link}
                        className="inline-flex items-center text-[#E8B84B] font-semibold hover:text-white transition-colors group"
                      >
                        {ind.linkText} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Industries - 2 Column Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glowing-card bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#2E5EAA]/10 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6 relative z-10">
            <h3 className="text-[22px] font-bold text-white">Additional Industries</h3>
            <Link
              href="/industries"
              className="inline-flex items-center px-6 py-2.5 border border-slate-700 hover:border-[#2E5EAA] text-[12px] font-bold rounded-lg text-white bg-[#0B1220] hover:bg-[#2E5EAA]/10 transition-colors uppercase tracking-wider whitespace-nowrap"
            >
              View All Industries
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12 lg:gap-x-24 relative z-10">
            {additionalIndustries.map((industry, idx) => (
              <li key={idx} className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-[#E8B84B] mr-4 shrink-0" />
                <span className="text-[14.5px] text-slate-300 font-medium">{industry}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

