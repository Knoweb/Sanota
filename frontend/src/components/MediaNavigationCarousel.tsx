"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Briefcase, Newspaper, Video, Camera, Radio } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const mediaNavigation = [
  { 
    title: "Completed Work", 
    desc: "View selected machinery, automation, IoT, modernization and integrated engineering projects delivered by Sanota.", 
    button: "View Completed Work", 
    href: "#completed-work",
    icon: Briefcase, 
    image: "/ind_manufacturing_1788515164504.jpg" 
  },
  { 
    title: "Project Stories", 
    desc: "Understand the challenges clients faced, the capabilities Sanota brought together and how each solution was developed.", 
    button: "Read Project Stories", 
    href: "#project-stories",
    icon: Newspaper, 
    image: "/ind_agri_1788515181352.jpg" 
  },
  { 
    title: "Videos & Demonstrations", 
    desc: "Watch machinery, automation, connected systems and engineering solutions in operation.", 
    button: "Watch Videos", 
    href: "#featured-work",
    icon: Video, 
    image: "/ind_food_1788515232491.jpg" 
  },
  { 
    title: "Photo Gallery", 
    desc: "Browse photographs of projects, products, installations, commissioning activities, technical teams and industry events.", 
    button: "View Photo Gallery", 
    href: "#photo-gallery",
    icon: Camera, 
    image: "/ind_tea_1788515252795.jpg" 
  },
  { 
    title: "News & Activities", 
    desc: "Follow Sanota’s recent projects, exhibitions, partnerships, training programmes, innovations and company developments.", 
    button: "View News & Activities", 
    href: "#latest-news",
    icon: Radio, 
    image: "/featured_iot_1789116892994.jpg" 
  }
];

export default function MediaNavigationCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mediaNavigation.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-transparent relative overflow-hidden">
      {/* Huge Ambient Glow behind the carousel to make cards pop */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[80vh] rounded-full blur-[120px] pointer-events-none z-0" 
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(46,94,170,0.2) 0%, rgba(232,184,75,0.12) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(23,19,91,0.06) 0%, rgba(197,155,39,0.08) 50%, transparent 70%)'
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-black tracking-widest uppercase text-sm mb-2">Media Navigation</h2>
          <h3 
            className="text-3xl md:text-5xl font-black transition-colors duration-300"
            style={{ color: isDark ? '#FFFFFF' : '#17135B' }}
          >
            What Would You Like to Explore?
          </h3>
        </div>
      </div>

      {/* 3D Coverflow Carousel */}
      <div 
        className="relative w-full h-[560px] flex justify-center items-center mb-2 overflow-hidden z-10"
        style={{ perspective: 1500 }}
      >
        {/* Floating Glowing Navigation Arrows */}
        <motion.button 
          onClick={() => setActiveIndex((prev) => (prev - 1 + mediaNavigation.length) % mediaNavigation.length)}
          aria-label="Previous Media Item"
          className="absolute left-2 sm:left-6 lg:left-[8%] z-40 p-3.5 sm:p-4 rounded-full border backdrop-blur-md transition-all duration-300"
          style={{ 
            background: isDark
              ? 'linear-gradient(135deg, rgba(19,28,46,0.95), rgba(11,18,32,0.95))'
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
          onClick={() => setActiveIndex((prev) => (prev + 1) % mediaNavigation.length)}
          aria-label="Next Media Item"
          className="absolute right-2 sm:right-6 lg:right-[8%] z-40 p-3.5 sm:p-4 rounded-full border backdrop-blur-md transition-all duration-300"
          style={{ 
            background: isDark
              ? 'linear-gradient(135deg, rgba(19,28,46,0.95), rgba(11,18,32,0.95))'
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

        {mediaNavigation.map((nav, idx) => {
          let offset = idx - activeIndex;
          const total = mediaNavigation.length;
          
          if (offset < -2) offset += total;
          else if (offset > 2) offset -= total;

          const isCenter = offset === 0;
          const zIndex = isCenter ? 30 : (Math.abs(offset) === 1 ? 20 : 10);
          const scale = isCenter ? 1 : (Math.abs(offset) === 1 ? 0.88 : 0.76);
          const x = `${offset * 58}%`;
          const opacity = isCenter ? 1 : (Math.abs(offset) === 1 ? 0.88 : 0.6);
          const rotateY = isCenter ? 0 : (offset > 0 ? -12 : 12);

          return (
            <motion.div
              key={idx}
              className="coverflow-card absolute w-[300px] sm:w-[350px] lg:w-[390px] cursor-pointer group"
              style={{ zIndex }}
              initial={false}
              animate={{ 
                x, 
                scale, 
                opacity,
                rotateY,
                z: isCenter ? 50 : (Math.abs(offset) === 1 ? -80 : -180)
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => {
                if (!isCenter) {
                  setActiveIndex(idx);
                }
              }}
            >
              <div 
                className="relative w-full rounded-3xl overflow-hidden flex flex-col transition-all duration-500"
                style={{ 
                  height: isCenter ? 510 : 470,
                  transformStyle: "preserve-3d",
                  background: isDark
                    ? (isCenter 
                        ? 'linear-gradient(135deg, #131C2E, #0B1220)' 
                        : 'linear-gradient(135deg, #0f172a, #0B1220)')
                    : '#FFFFFF',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: isDark
                    ? (isCenter ? '#E8B84B' : 'rgba(255,255,255,0.12)')
                    : (isCenter ? '#C59B27' : '#ECE7DD'),
                  boxShadow: isDark
                    ? (isCenter 
                        ? '0 0 0 1px rgba(232,184,75,0.25), 0 30px 60px -15px rgba(0,0,0,0.9), 0 0 45px rgba(232,184,75,0.15)' 
                        : '0 12px 36px rgba(0,0,0,0.6)')
                    : (isCenter
                        ? '0 20px 48px -10px rgba(23,19,91,0.16), 0 0 30px rgba(212,175,55,0.22)'
                        : '0 8px 24px rgba(23,19,91,0.06)'),
                }}
              >
                {/* Upper Photo Section */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900 shrink-0">
                  <Image 
                    src={nav.image} 
                    alt={nav.title} 
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    style={{
                      transform: isCenter ? "scale(1.04)" : "scale(1)",
                    }}
                  />
                  {/* Subtle bottom vignette to transition cleanly to the card body */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{ 
                      background: isDark
                        ? 'linear-gradient(to top, rgba(19,28,46,0.85) 0%, transparent 45%)'
                        : 'linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 40%)'
                    }} 
                  />
                  
                  {/* Floating Icon Badge */}
                  <div 
                    className="absolute top-4 left-4 w-12 h-12 backdrop-blur-md rounded-2xl border flex items-center justify-center transition-all duration-500 shadow-md"
                    style={{
                      background: isDark ? 'rgba(11,18,32,0.88)' : '#FFFFFF',
                      borderColor: isDark 
                        ? (isCenter ? '#E8B84B' : 'rgba(255,255,255,0.18)') 
                        : (isCenter ? '#C59B27' : '#ECE7DD'),
                      boxShadow: isDark 
                        ? (isCenter ? '0 0 16px rgba(232,184,75,0.35)' : '0 2px 10px rgba(0,0,0,0.4)')
                        : '0 4px 12px rgba(23,19,91,0.08)',
                    }}
                  >
                    <nav.icon 
                      className="w-6 h-6 transition-colors duration-500" 
                      style={{ 
                        color: isCenter 
                          ? (isDark ? '#E8B84B' : '#C59B27') 
                          : (isDark ? '#94A3B8' : '#17135B') 
                      }} 
                    />
                  </div>
                </div>

                {/* Lower Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow relative z-10 bg-white dark:bg-[#131C2E] justify-between">
                  <div>
                    <h4 
                      className="text-xl sm:text-2xl font-black mb-3 leading-tight transition-colors duration-300 !drop-shadow-none"
                      style={{ 
                        color: isDark ? '#FFFFFF' : '#17135B',
                        textShadow: 'none'
                      }}
                    >
                      {nav.title}
                    </h4>
                    <p 
                      className="text-[13.5px] sm:text-[14px] leading-relaxed font-normal transition-colors duration-300 !drop-shadow-none"
                      style={{ 
                        color: isDark ? '#CBD5E1' : '#555E75',
                        textShadow: 'none'
                      }}
                    >
                      {nav.desc}
                    </p>
                  </div>

                  {/* Bottom Action Button / Link */}
                  <div 
                    className="mt-5 pt-4 border-t flex items-center justify-between transition-colors duration-300"
                    style={{
                      borderColor: isDark 
                        ? (isCenter ? 'rgba(232,184,75,0.3)' : 'rgba(255,255,255,0.1)') 
                        : (isCenter ? 'rgba(197,155,39,0.3)' : '#ECE7DD')
                    }}
                  >
                    <Link 
                      href={nav.href}
                      className="text-sm font-bold tracking-wide flex items-center gap-2 transition-all duration-300 hover:gap-3 group-hover:underline"
                      style={{ 
                        color: isDark ? '#E8B84B' : '#C59B27' 
                      }}
                      onClick={(e) => {
                        if (!isCenter) {
                          e.preventDefault();
                          setActiveIndex(idx);
                        }
                      }}
                    >
                      <span>{nav.button}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center items-center gap-2 mt-4 relative z-20">
        {mediaNavigation.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === idx 
                ? (isDark ? "w-8 bg-[#E8B84B]" : "w-8 bg-[#C59B27]") 
                : (isDark ? "w-2.5 bg-slate-700 hover:bg-slate-500" : "w-2.5 bg-slate-300 hover:bg-slate-400")
            }`}
          />
        ))}
      </div>
    </section>
  );
}
