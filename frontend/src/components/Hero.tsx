"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { homeES } from "@/locales/es/home";
import { homeDE } from "@/locales/de/home";
import { homeJA } from "@/locales/ja/home";
import { homeAR } from "@/locales/ar/home";

const images = [
  "/hero_image.webp",
  "/hero_agri.webp",
  "/hero_food.webp"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language, localizedHref } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const h = isAr ? homeAR.hero : isJa ? homeJA.hero : isDe ? homeDE.hero : isEs ? homeES.hero : null;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] pt-6 pb-12 lg:pt-5 lg:pb-16 overflow-hidden bg-transparent">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 pr-0 lg:pr-8"
          >
            <div className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#131C2E] border border-[#1e293b] ${isDe ? "mb-4" : "mb-6"} shadow-md`}>
              <span className="w-2 h-2 rounded-full bg-[#E8B84B] animate-pulse" />
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                {h ? h.badge : "Integrated Engineering Solutions"}
              </span>
            </div>

            <h1 className={`font-extrabold tracking-tight text-white leading-[1.15] ${isDe ? "text-3xl sm:text-4xl lg:text-[2.95rem] xl:text-[3.15rem] mb-4" : "text-4xl sm:text-5xl lg:text-[3.5rem] mb-5"}`}>
              {h ? h.titleLine1 : "One Challenge."} <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-yellow-200">
                {h ? h.titleLine2 : "One Integrated Engineering Solution."}
              </span>
            </h1>

            <div className={`text-slate-300 max-w-2xl leading-relaxed ${isDe ? "text-[15px] lg:text-[15.5px] mb-5 space-y-3" : "text-md mb-8 space-y-4"}`}>
              <p>
                {h ? h.description1 : "Sanota helps industries solve operational challenges by bringing together mechanical engineering, electrical systems, automation, IoT, software, implementation and technical support through one coordinated team."}
              </p>
              <p>
                {h ? h.description2 : "Whether the requirement involves a machine, process, product, digital platform or complete operational system, we help develop a practical way forward."}
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ${isDe ? "mb-5" : "mb-8"}`}>
              <Link
                href={localizedHref("/tell-us-your-challenge")}
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-[14px] font-bold rounded-lg text-[#111424] bg-[#E5A93C] hover:bg-[#F0B74C] transition-all shadow-md shadow-[#E5A93C]/25 group"
              >
                {h ? h.ctaPrimary : "Tell Us Your Challenge"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={localizedHref("/media")}
                className="inline-flex justify-center items-center px-6 py-3 border border-slate-700 dark:border-[#2E5EAA] text-[14px] font-bold rounded-lg text-[#17135B] dark:text-white bg-white/80 dark:bg-transparent hover:bg-slate-100 dark:hover:bg-[#2E5EAA]/10 transition-colors group shadow-sm dark:shadow-none"
              >
                {h ? h.ctaSecondary : "See Sanota in Action"}
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform text-[#C59B27] dark:text-[#2E5EAA]" />
              </Link>
            </div>

            <div className={isDe ? "mb-5" : "mb-8"}>
              <p className="text-[13px] font-bold text-slate-400 dark:text-slate-300 uppercase tracking-widest">
                {h ? h.capabilityLine : "Engineering • Automation • IoT • Software • Implementation • Support"}
              </p>
            </div>

            {/* Chat Prompt */}
            <div className={`${isDe ? "p-3.5" : "p-4"} rounded-xl bg-white/90 dark:bg-[#131C2E]/40 border border-[#ECE7DD] dark:border-slate-700/50 max-w-xl backdrop-blur-md shadow-sm dark:shadow-lg`}>
              <h2 className="text-[#17135B] dark:text-white font-bold text-sm mb-1">
                {h ? h.chatBox.title : "Not sure where to begin?"}
              </h2>
              <p className="text-[#555E75] dark:text-slate-300 text-xs mb-2.5">
                {h ? h.chatBox.description : "Tell us what is not working—or what you want to achieve. We will help direct your enquiry to the appropriate engineering team."}
              </p>
              <Link href={localizedHref("/tell-us-your-challenge")} className="text-xs font-bold text-[#C59B27] dark:text-[#E8B84B] hover:underline flex items-center transition-colors">
                {h ? h.chatBox.button : "Start Guided Chat"}
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-5 relative group">
            {/* Ambient Background Glow behind image */}
            <div className="absolute -inset-2 lg:-inset-4 bg-[#C59B27]/20 dark:bg-[#E8B84B]/20 rounded-[2.5rem] blur-xl opacity-60 animate-pulse -z-10" />

            <motion.div 
              animate={{ 
                boxShadow: ["0 0 10px rgba(212,175,55,0.2)", "0 0 30px rgba(212,175,55,0.6)", "0 0 10px rgba(212,175,55,0.2)"],
                borderColor: ["rgba(212,175,55,0.3)", "rgba(212,175,55,0.9)", "rgba(212,175,55,0.3)"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden flex items-center justify-center bg-[#0B1220] z-10 border-2"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt="Industrial Automation"
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-100"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1220] to-transparent opacity-90 pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="flex items-center space-x-3 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E5A93C] animate-pulse" />
                  <p className="text-[13px] font-bold !text-white uppercase tracking-widest drop-shadow-md">
                    {currentImageIndex === 0 && (h ? h.slides.industrialAutomation : "Industrial Automation")}
                    {currentImageIndex === 1 && (h ? h.slides.smartAgriculture : "Smart Agriculture")}
                    {currentImageIndex === 2 && (h ? h.slides.foodProcessing : "Food Processing")}
                  </p>
                </div>
                <div className="flex space-x-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentImageIndex ? 'w-10 bg-[#E5A93C]' : 'w-4 bg-white/40 hover:bg-white/60'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
