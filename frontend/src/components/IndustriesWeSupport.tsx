"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Leaf, CupSoda, Coffee, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

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
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="industries-we-support" className="relative py-12 lg:py-16 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="mb-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight uppercase ${isDark ? "text-white" : "text-[#17135B]"}`}
          >
            Engineering Support <br />
            <span className={isDark ? "text-[#2E5EAA]" : "text-[#C59B27]"}>Across Industries</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`mt-4 max-w-3xl mx-auto text-[14.5px] leading-relaxed ${isDark ? "text-slate-400" : "text-[#555E75]"}`}
          >
            Sanota helps organizations improve productivity, reliability, process control, operational visibility, resource efficiency and long-term system performance.
          </motion.p>
        </div>

        {/* 3D Coverflow Carousel (Desktop only) */}
        <div 
          className="relative w-full h-[540px] hidden lg:flex justify-center items-center mb-10 overflow-hidden"
          style={{ perspective: 1400 }}
        >
          {/* Floating Glowing Navigation Arrows */}
          <motion.button 
            onClick={() => setActiveIndex((prev) => (prev - 1 + industries.length) % industries.length)}
            className="absolute left-2 sm:left-6 lg:left-16 z-40 p-3.5 rounded-full border backdrop-blur-sm"
            style={{ 
              background: isDark
                ? 'linear-gradient(135deg, rgba(19,28,46,0.9), rgba(11,18,32,0.9))'
                : '#FFFFFF',
              borderColor: isDark ? 'rgba(232,184,75,0.4)' : '#ECE7DD',
              boxShadow: isDark
                ? '0 0 20px rgba(232,184,75,0.25), 0 8px 32px rgba(0,0,0,0.4)'
                : '0 4px 16px rgba(23,19,91,0.08), 0 1px 4px rgba(0,0,0,0.02)'
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className={`w-6 h-6 ${isDark ? "text-[#E8B84B]" : "text-[#17135B]"}`} />
          </motion.button>
          
          <motion.button 
            onClick={() => setActiveIndex((prev) => (prev + 1) % industries.length)}
            className="absolute right-2 sm:right-6 lg:right-16 z-40 p-3.5 rounded-full border backdrop-blur-sm"
            style={{ 
              background: isDark
                ? 'linear-gradient(135deg, rgba(19,28,46,0.9), rgba(11,18,32,0.9))'
                : '#FFFFFF',
              borderColor: isDark ? 'rgba(232,184,75,0.4)' : '#ECE7DD',
              boxShadow: isDark
                ? '0 0 20px rgba(232,184,75,0.25), 0 8px 32px rgba(0,0,0,0.4)'
                : '0 4px 16px rgba(23,19,91,0.08), 0 1px 4px rgba(0,0,0,0.02)'
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.25 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className={`w-6 h-6 ${isDark ? "text-[#E8B84B]" : "text-[#17135B]"}`} />
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
                className={`coverflow-card absolute w-[300px] sm:w-[360px] lg:w-[430px] rounded-3xl overflow-hidden border flex flex-col cursor-pointer`}
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
                  background: isDark
                    ? (isCenter 
                        ? 'linear-gradient(135deg, #131C2E, #0B1220)' 
                        : 'linear-gradient(135deg, #0d1625, #0B1220)')
                    : '#FFFFFF',
                  borderColor: isDark
                    ? (isCenter ? 'rgba(232,184,75,0.5)' : `${ind.color}55`)
                    : (isCenter ? '#C59B27' : '#ECE7DD'),
                  boxShadow: isDark
                    ? (isCenter 
                        ? '0 0 0 1px rgba(232,184,75,0.2), 0 40px 80px -20px rgba(0,0,0,0.9), 0 0 60px rgba(232,184,75,0.08)' 
                        : `0 10px 40px rgba(0,0,0,0.5), 0 0 30px ${ind.color}15`)
                    : (isCenter
                        ? '0 20px 48px -10px rgba(23,19,91,0.12), 0 0 25px rgba(212,175,55,0.18)'
                        : '0 8px 24px rgba(23,19,91,0.05)'),
                }}
              >
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <Image 
                    src={ind.image} 
                    alt={ind.title} 
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    className="object-cover transition-all duration-700"
                    style={{ 
                      transform: isCenter ? "scale(1.05)" : "scale(1)",
                      opacity: isCenter ? 1 : 0.92,
                    }}
                  />
                  {/* Subtle edge vignette without washing out the photo */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{ 
                      background: isDark
                        ? 'linear-gradient(to top, rgba(11,18,32,0.6) 0%, transparent 40%)'
                        : 'linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 35%)'
                    }} 
                  />
                  <div 
                    className="absolute top-4 left-4 w-11 h-11 backdrop-blur-md rounded-xl border flex items-center justify-center transition-all duration-500 shadow-md"
                    style={{
                      background: isDark ? 'rgba(11,18,32,0.85)' : '#FFFFFF',
                      borderColor: isDark 
                        ? (isCenter ? 'rgba(232,184,75,0.4)' : `${ind.color}60`)
                        : (isCenter ? '#C59B27' : '#ECE7DD'),
                      boxShadow: isDark ? `0 0 16px ${ind.color}40` : '0 2px 8px rgba(0,0,0,0.08)',
                    }}
                  >
                    <ind.icon 
                      className="w-5 h-5 transition-colors duration-500" 
                      style={{ color: ind.color }} 
                    />
                  </div>
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-grow relative z-10 bg-white dark:bg-[#131C2E]">
                  <h3 
                    className="text-[20px] md:text-[22px] font-black mb-2 transition-colors duration-300 leading-tight !drop-shadow-none"
                    style={{ 
                      color: isDark ? '#FFFFFF' : '#17135B',
                      textShadow: 'none'
                    }}
                  >{ind.title}</h3>
                  <p 
                    className="text-[13px] md:text-[14px] flex-grow leading-relaxed transition-colors duration-300 font-normal !drop-shadow-none"
                    style={{ 
                      color: isDark ? '#CBD5E1' : '#555E75',
                      textShadow: 'none' 
                    }}
                  >
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
                        className={`inline-flex items-center font-bold text-sm transition-colors group ${
                          isDark ? 'text-[#E8B84B] hover:text-white' : 'text-[#C59B27] hover:text-[#17135B]'
                        }`}
                      >
                        {ind.linkText} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile 2-Column Grid (Mobile & Tablet only) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:hidden mb-10">
          {industries.map((ind) => (
            <Link key={ind.id} href={ind.link}>
              <div className={`relative h-40 sm:h-56 rounded-2xl overflow-hidden border group cursor-pointer shadow-md flex flex-col justify-end p-4 sm:p-5 ${
                isDark ? "border-slate-700/50 bg-[#131C2E]" : "border-[#ECE7DD] bg-white"
              }`}>
                <Image 
                  src={ind.image} 
                  alt={ind.title} 
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  className={`object-cover transition-opacity duration-500 ${isDark ? "opacity-60 group-hover:opacity-80" : "opacity-80 group-hover:opacity-95"}`}
                />
                <div 
                  className="absolute inset-0"
                  style={{ 
                    background: isDark
                      ? `linear-gradient(to top, #0B1220 0%, ${ind.color}30 60%, transparent 100%)`
                      : `linear-gradient(to top, rgba(23,19,91,0.85) 0%, rgba(23,19,91,0.3) 60%, transparent 100%)`
                  }} 
                />
                <div className="relative z-10">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg backdrop-blur-md flex items-center justify-center mb-2 border ${
                    isDark ? "bg-black/40 border-white/10 group-hover:border-white/30" : "bg-white/90 border-[#ECE7DD]"
                  } transition-colors`}>
                    <ind.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: ind.color }} />
                  </div>
                  <h3 className="font-bold text-[12px] sm:text-[15px] leading-snug drop-shadow-md !text-white">
                    {ind.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Industries - 2 Column Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`max-w-5xl mx-auto glowing-card border rounded-3xl p-8 lg:p-10 relative overflow-hidden transition-all duration-300 ${
            isDark 
              ? "bg-[#131C2E]/40 backdrop-blur-md border-slate-700/50 hover:border-[#2E5EAA]/50 hover:shadow-[0_0_30px_rgba(46,94,170,0.15)]"
              : "bg-white border-[#ECE7DD] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#C59B27]/60 hover:shadow-[0_12px_32px_rgba(23,19,91,0.06)]"
          }`}
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#2E5EAA]/10 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6 relative z-10">
            <h3 
              className="text-[22px] font-extrabold !text-[#17135B] dark:!text-white !drop-shadow-none"
              style={{ color: isDark ? '#FFFFFF' : '#17135B', textShadow: 'none' }}
            >
              Additional Industries
            </h3>
            <Link
              href="/industries"
              className={`inline-flex items-center px-6 py-2.5 border text-[12px] font-bold rounded-lg transition-colors uppercase tracking-wider whitespace-nowrap ${
                isDark 
                  ? "border-slate-700 hover:border-[#2E5EAA] text-white bg-[#0B1220] hover:bg-[#2E5EAA]/10"
                  : "border-[#ECE7DD] hover:border-[#C59B27] text-[#17135B] bg-[#FAF8F5] hover:bg-white"
              }`}
            >
              View All Industries
              <ChevronRight className={`ml-2 w-4 h-4 ${isDark ? "text-white" : "text-[#C59B27]"}`} />
            </Link>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12 lg:gap-x-24 relative z-10">
            {additionalIndustries.map((industry, idx) => (
              <li key={idx} className="flex items-center">
                <CheckCircle2 className={`w-4 h-4 mr-4 shrink-0 ${isDark ? "text-[#E8B84B]" : "text-[#C59B27]"}`} />
                <span className={`text-[14.5px] font-medium ${isDark ? "text-slate-300" : "text-[#555E75]"}`}>{industry}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

