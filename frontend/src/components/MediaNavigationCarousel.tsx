"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Briefcase, Newspaper, Video, Camera, Radio } from "lucide-react";

const mediaNavigation = [
  { title: "Completed Work", desc: "View selected machinery, automation, IoT, modernization and integrated engineering projects delivered by Sanota.", button: "View Completed Work", icon: Briefcase, image: "/ind_manufacturing_1788515164504.jpg" },
  { title: "Project Stories", desc: "Understand the challenges clients faced, the capabilities Sanota brought together and how each solution was developed.", button: "Read Project Stories", icon: Newspaper, image: "/ind_agri_1788515181352.jpg" },
  { title: "Videos & Demonstrations", desc: "Watch machinery, automation, connected systems and engineering solutions in operation.", button: "Watch Videos", icon: Video, image: "/ind_food_1788515232491.jpg" },
  { title: "Photo Gallery", desc: "Browse photographs of projects, products, installations, commissioning activities, technical teams and industry events.", button: "View Photo Gallery", icon: Camera, image: "/ind_tea_1788515252795.jpg" },
  { title: "News & Activities", desc: "Follow Sanota’s recent projects, exhibitions, partnerships, training programmes, innovations and company developments.", button: "View News & Activities", icon: Radio, image: "/ind_manufacturing_1788515164504.jpg" }
];

export default function MediaNavigationCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mediaNavigation.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-transparent relative overflow-hidden">
      {/* Huge Ambient Glow behind the carousel to make dark cards pop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[80vh] bg-gradient-to-r from-[#2E5EAA]/20 via-[#E8B84B]/15 to-[#2E5EAA]/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-[#E8B84B] font-black tracking-widest uppercase text-sm mb-2">Media Navigation</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">What Would You Like to Explore?</h3>
        </div>
      </div>

      {/* 3D Coverflow Carousel */}
      <div 
        className="relative w-full h-[550px] flex justify-center items-center mb-4 overflow-hidden z-10"
        style={{ perspective: 1500 }}
      >
        {/* Floating Glowing Navigation Arrows */}
        <motion.button 
          onClick={() => setActiveIndex((prev) => (prev - 1 + mediaNavigation.length) % mediaNavigation.length)}
          className="absolute left-2 sm:left-6 lg:left-[10%] z-40 p-4 rounded-full border text-white backdrop-blur-md"
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
          onClick={() => setActiveIndex((prev) => (prev + 1) % mediaNavigation.length)}
          className="absolute right-2 sm:right-6 lg:right-[10%] z-40 p-4 rounded-full border text-white backdrop-blur-md"
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

        {mediaNavigation.map((nav, idx) => {
          let offset = idx - activeIndex;
          const total = mediaNavigation.length;
          
          if (offset < -2) offset += total;
          else if (offset > 2) offset -= total;

          const isCenter = offset === 0;
          const zIndex = isCenter ? 30 : (Math.abs(offset) === 1 ? 20 : 10);
          const scale = isCenter ? 1 : (Math.abs(offset) === 1 ? 0.85 : 0.7);
          const x = `${offset * 55}%`; // Spacing for smaller cards
          const opacity = isCenter ? 1 : (Math.abs(offset) === 1 ? 0.85 : 0.5); // Much higher visibility for side cards
          const rotateY = isCenter ? 0 : (offset > 0 ? -12 : 12);

          return (
            <motion.div
              key={idx}
              className="absolute w-[360px] h-[460px] cursor-pointer group"
              style={{ zIndex }}
              initial={false}
              animate={{ 
                x, 
                scale, 
                opacity,
                rotateY,
                z: isCenter ? 50 : (Math.abs(offset) === 1 ? -100 : -200)
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => setActiveIndex(idx)}
            >
              <div 
                className={`relative w-full h-full rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500
                  ${isCenter ? 'border border-[#E8B84B]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(232,184,75,0.15)]' : 'border border-slate-700/50 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.6)]'}`}
              >
                {/* Background Image inside the tile */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={nav.image} 
                    alt={nav.title} 
                    fill 
                    className={`object-cover transition-transform duration-700 ${isCenter ? 'scale-100' : 'scale-110 grayscale'}`} 
                  />
                  {/* Overlay adjusted so side cards are clearly visible but readable */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${isCenter ? 'bg-gradient-to-t from-[#050B14] via-[#0B1220]/90 to-[#0B1220]/60 opacity-90' : 'bg-[#0B1220]/70 opacity-100'}`} />
                  
                  {/* Extra hover glow */}
                  {isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E8B84B]/20 to-transparent opacity-60 mix-blend-overlay" />
                  )}
                </div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 shadow-inner transition-colors duration-500
                    ${isCenter ? 'bg-[#131C2E]/80 backdrop-blur-md border-[#E8B84B] shadow-[inset_0_0_20px_rgba(232,184,75,0.2)]' : 'bg-[#0B1220]/80 backdrop-blur-md border-slate-700'}`}>
                    <nav.icon className={`w-7 h-7 ${isCenter ? 'text-[#E8B84B] drop-shadow-[0_0_8px_rgba(232,184,75,0.8)]' : 'text-slate-400'}`} />
                  </div>
                  
                  <h4 className={`text-2xl font-black mb-4 leading-tight transition-colors duration-500 ${isCenter ? 'text-white' : 'text-slate-200'}`}>
                    {nav.title}
                  </h4>
                  <p className={`text-[14.5px] leading-relaxed font-light transition-colors duration-500 ${isCenter ? 'text-slate-300' : 'text-slate-400'}`}>
                    {nav.desc}
                  </p>
                </div>

                {/* Bottom Action Area */}
                <div className={`mt-auto pt-6 border-t flex items-center gap-4 transition-colors duration-500 relative z-10
                  ${isCenter ? 'border-[#E8B84B]/30' : 'border-slate-800/50'}`}>
                  <span className={`text-sm font-bold tracking-wide transition-colors duration-500 ${isCenter ? 'text-[#E8B84B]' : 'text-slate-400'}`}>
                    {nav.button}
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-colors duration-500 ${isCenter ? 'text-[#E8B84B]' : 'text-slate-500'}`} />
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
