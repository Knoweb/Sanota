"use client";

import { motion } from "framer-motion";
import { Wrench, Shield, CheckCircle2, ArrowRight, ChevronUp, ChevronDown, Pointer } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { homeES } from "@/locales/es/home";
import { homeDE } from "@/locales/de/home";
import { homeJA } from "@/locales/ja/home";

const defaultAmcScope = [
  "Asset and condition assessment",
  "Preventive-maintenance planning",
  "Scheduled mechanical and electrical servicing",
  "PLC, HMI and control-system support",
  "Sensor and instrument checks",
  "Calibration and functional testing",
  "Breakdown diagnosis and corrective support",
  "Control-program and system backups",
  "Spare-parts planning",
  "Asset-health and maintenance reports",
  "Safety and performance observations",
  "Retrofit and upgrade recommendations",
  "Operator and maintenance-team training"
];

export default function AMCAndLifecycle() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const amcData = isJa ? homeJA.amcAndLifecycle : isDe ? homeDE.amcAndLifecycle : isEs ? homeES.amcAndLifecycle : null;

  const amcScope = amcData ? amcData.scopeItems : defaultAmcScope;
  const originalLength = amcScope.length;
  const extendedScope = [...amcScope, ...amcScope, ...amcScope]; // 3x duplication for seamless infinite scrolling

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(originalLength);
  const activeIndexRef = useRef(originalLength);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Initial centering
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeElement = container.querySelector(`[data-index="${originalLength}"]`) as HTMLElement;
      if (activeElement) {
        container.scrollTo({
          top: activeElement.offsetTop - (container.clientHeight / 2) + (activeElement.clientHeight / 2),
          behavior: 'auto'
        });
      }
    }
  }, []);

  // Update active item based on scroll position (creates the "static center highlight" effect)
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const containerCenter = container.scrollTop + (container.clientHeight / 2);
    
    let closestIdx = 0;
    let minDistance = Infinity;

    const items = container.querySelectorAll('[data-index]');
    items.forEach((item) => {
      const el = item as HTMLElement;
      const elCenter = el.offsetTop + (el.clientHeight / 2);
      const distance = Math.abs(containerCenter - elCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = parseInt(el.getAttribute('data-index') || '0', 10);
      }
    });

    setActiveIndex((prev) => prev !== closestIdx ? closestIdx : prev);
  };

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const nextIdx = activeIndexRef.current + 1;
        const nextElement = container.querySelector(`[data-index="${nextIdx}"]`) as HTMLElement;
        if (nextElement) {
          container.scrollTo({
            top: nextElement.offsetTop - (container.clientHeight / 2) + (nextElement.clientHeight / 2),
            behavior: 'smooth'
          });
        }
      }
    }, 2500); // Change active item every 2.5 seconds
    return () => clearInterval(interval);
  }, [isPaused]);

  // Infinite loop logic: seamless reset if we drift out of the safe middle block
  useEffect(() => {
    if (activeIndex >= originalLength * 2) {
      const timeout = setTimeout(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const jumpIdx = activeIndex - originalLength;
          const jumpElement = container.querySelector(`[data-index="${jumpIdx}"]`) as HTMLElement;
          if (jumpElement) {
            container.scrollTo({
              top: jumpElement.offsetTop - (container.clientHeight / 2) + (jumpElement.clientHeight / 2),
              behavior: 'auto'
            });
          }
        }
      }, 600); // wait for smooth scroll to finish
      return () => clearTimeout(timeout);
    } else if (activeIndex < originalLength) {
      const timeout = setTimeout(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const jumpIdx = activeIndex + originalLength;
          const jumpElement = container.querySelector(`[data-index="${jumpIdx}"]`) as HTMLElement;
          if (jumpElement) {
            container.scrollTo({
              top: jumpElement.offsetTop - (container.clientHeight / 2) + (jumpElement.clientHeight / 2),
              behavior: 'auto'
            });
          }
        }
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex]);

  const scroll = (direction: 'up' | 'down') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const targetIdx = direction === 'up' ? activeIndexRef.current - 1 : activeIndexRef.current + 1;
    const targetElement = container.querySelector(`[data-index="${targetIdx}"]`) as HTMLElement;
    if (targetElement) {
      container.scrollTo({
        top: targetElement.offsetTop - (container.clientHeight / 2) + (targetElement.clientHeight / 2),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-24 bg-transparent overflow-hidden border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Immersive Card */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-700/50 shadow-xl dark:shadow-2xl bg-white dark:bg-[#131C2E]/30 backdrop-blur-md">
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/capabilities/cap_practical_1789034261822.jpg"
              alt="AMC and Maintenance Services"
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover opacity-20 dark:opacity-60 mix-blend-multiply dark:mix-blend-lighten"
            />
            {/* Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 dark:from-[#0B1220] dark:via-[#0B1220]/90 dark:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#0B1220] to-transparent opacity-80" />
          </div>

          <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-12 p-8 sm:p-12 lg:p-16 items-center">
            
            {/* Left Content: Glassmorphic Panel */}
            <div className="xl:col-span-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/95 dark:bg-[#131C2E]/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 p-8 sm:p-10 rounded-3xl shadow-lg dark:shadow-xl"
              >
                <div className="inline-flex items-center space-x-2 bg-[#C59B27]/10 dark:bg-[#E8B84B]/10 border border-[#C59B27]/30 dark:border-[#E8B84B]/30 px-4 py-2 rounded-full mb-6">
                  <Wrench className="w-4 h-4 text-[#C59B27] dark:text-[#E8B84B]" />
                  <span className="text-xs font-bold text-[#C59B27] dark:text-[#E8B84B] uppercase tracking-widest">
                    {amcData?.subheading || (isJa ? "AMCおよびライフサイクルサポート" : isDe ? "AMC & Lifecycle-Support" : isEs ? "AMC y Soporte del Ciclo de Vida" : "AMC and Lifecycle Support")}
                  </span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#17135B] dark:text-white tracking-tight mb-6 leading-tight">
                  {isJa ? (
                    <>重要システムを <br/><span className="text-[#C59B27] dark:text-[#E8B84B]">高信頼性で安定稼働させ続ける</span></>
                  ) : isDe ? (
                    <>Kritische Systeme <br/><span className="text-[#C59B27] dark:text-[#E8B84B]">zuverlässig am Laufen halten</span></>
                  ) : isEs ? (
                    <>Mantenga los sistemas críticos <br/><span className="text-[#C59B27] dark:text-[#E8B84B]">funcionando de manera confiable</span></>
                  ) : (
                    <>Keep Critical Systems <br/><span className="text-[#C59B27] dark:text-[#E8B84B]">Operating Reliably</span></>
                  )}
                </h3>
                
                <div className="text-[15px] text-[#555E75] dark:text-slate-300 mb-8 leading-relaxed space-y-5">
                  {amcData ? (
                    <p>{amcData.description}</p>
                  ) : (
                    <>
                      <p>Sanota provides Annual Maintenance Contracts and technical support for machinery, automation and integrated systems developed by Sanota.</p>
                      <p>We can also take over eligible third-party machinery and systems following an initial technical and condition assessment.</p>
                    </>
                  )}
                </div>
                
                <div className="flex items-center space-x-4 p-5 bg-[#FAF8F5] dark:bg-[#0B1220]/60 rounded-2xl border border-slate-200 dark:border-slate-700/50 mb-10 shadow-inner">
                  <Shield className="w-10 h-10 text-[#17135B] dark:text-[#2E5EAA] shrink-0" />
                  <p className="text-[13.5px] text-[#555E75] dark:text-slate-300 leading-relaxed">
                    {amcData ? amcData.note : "Each AMC is developed according to the equipment, operating environment, asset criticality and required response level."}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/contact"
                    className="inline-flex justify-center items-center px-6 py-4 border border-transparent text-[14px] font-bold rounded-xl text-[#111424] bg-[#E5A93C] hover:bg-[#F0B74C] transition-colors shadow-lg shadow-[#E5A93C]/20 group w-full sm:w-auto"
                  >
                    {amcData ? amcData.primaryButton : "Request an Assessment"}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex justify-center items-center px-6 py-4 border border-[#17135B]/20 dark:border-slate-600 text-[14px] font-bold rounded-xl text-[#17135B] dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto backdrop-blur-sm bg-white dark:bg-[#131C2E]/50"
                  >
                    {amcData ? amcData.secondaryButton : "Explore Services"}
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Content: Services Frosted List with Ribbon Scroll */}
            <div className="xl:col-span-6 relative flex flex-col h-full justify-center">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative p-2 sm:p-8 flex flex-col"
              >
                {/* Header */}
                <div className="mb-4 border-b border-slate-200 dark:border-slate-700/50 pb-4 flex items-center justify-between shrink-0">
                  <h4 className="text-xl font-bold text-[#17135B] dark:text-white flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-[#17135B] dark:text-[#2E5EAA] mr-3" />
                    {amcData ? amcData.scopeTitle : "AMC Services May Include"}
                  </h4>
                </div>
                
                {/* Scroll Up Button */}
                <div className="flex justify-center py-2 shrink-0 z-10">
                  <button 
                    onClick={() => scroll('up')} 
                    className="pointer-events-auto text-slate-400 dark:text-slate-500 hover:text-[#C59B27] dark:hover:text-[#E8B84B] hover:scale-125 transition-all duration-300 drop-shadow-md"
                  >
                    <ChevronUp className="w-8 h-8" strokeWidth={1.5} />
                  </button>
                </div>

                {/* Scrollable Container */}
                <div 
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="h-[450px] overflow-y-auto space-y-4 pb-48 pt-48 px-6 sm:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative scroll-smooth"
                  style={{ 
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 30px, black calc(100% - 30px), transparent 100%)', 
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30px, black calc(100% - 30px), transparent 100%)' 
                  }}
                >
                  {extendedScope.map((item, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <div 
                        key={idx} 
                        data-index={idx}
                        className={`flex items-center group p-5 transition-all duration-500 relative cursor-pointer overflow-hidden rounded-r-[1.5rem] rounded-l-md ${
                          isActive 
                            ? 'scale-[1.05] shadow-lg dark:shadow-[0_0_30px_rgba(232,184,75,0.15)] bg-gradient-to-r from-[#C59B27]/15 via-white to-white dark:from-[#E8B84B]/10 dark:via-[#131C2E] dark:to-[#131C2E]/60 border border-slate-300 dark:border-slate-700 border-l-[4px] border-l-[#C59B27] dark:border-l-[#E8B84B] z-10' 
                            : 'scale-95 opacity-100 bg-white/80 dark:bg-[#131C2E]/40 border border-slate-200 dark:border-slate-700/50 border-l-[4px] border-l-transparent hover:bg-slate-50 dark:hover:bg-[#131C2E]/60 hover:border-l-[#17135B] dark:hover:border-l-[#2E5EAA]'
                        }`}
                        onClick={() => setActiveIndex(idx)}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-5 shrink-0 transition-all duration-500 ${
                          isActive ? 'bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border border-[#C59B27] dark:border-[#E8B84B] shadow-md' : 'bg-[#FAF8F5] dark:bg-[#0B1220] border border-slate-300 dark:border-slate-600 group-hover:border-[#17135B] dark:group-hover:border-[#2E5EAA]'
                        }`}>
                          <Pointer className={`w-5 h-5 transition-all duration-500 rotate-90 ${
                            isActive ? 'text-[#C59B27] dark:text-[#E8B84B] scale-110' : 'text-slate-500 dark:text-slate-400 group-hover:text-[#17135B] dark:group-hover:text-[#2E5EAA]'
                          }`} />
                        </div>
                        <span className={`text-[15px] font-bold transition-colors duration-500 drop-shadow-sm ${
                          isActive ? 'text-[#17135B] dark:text-white' : 'text-[#555E75] dark:text-slate-300 group-hover:text-[#17135B] dark:group-hover:text-white'
                        }`}>
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Scroll Down Button */}
                <div className="flex justify-center py-2 shrink-0 z-10">
                  <button 
                    onClick={() => scroll('down')} 
                    className="pointer-events-auto text-slate-400 dark:text-slate-500 hover:text-[#C59B27] dark:hover:text-[#E8B84B] hover:scale-125 transition-all duration-300 drop-shadow-md animate-pulse"
                  >
                    <ChevronDown className="w-8 h-8" strokeWidth={1.5} />
                  </button>
                </div>

              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
