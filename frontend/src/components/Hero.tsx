"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/hero_image.jpg",
  "/hero_agri.jpg",
  "/hero_food.jpg"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-32 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 pr-0 lg:pr-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#131C2E] border border-[#1e293b] mb-6 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#E8B84B] animate-pulse" />
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Engineering • Automation • IoT • Software • Implementation • Support</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              One Challenge. <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-yellow-200">One Integrated Engineering Solution.</span>
            </h1>

            <div className="text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed space-y-4">
              <p>Sanota helps industries solve operational challenges by bringing together mechanical engineering, electrical systems, automation, IoT, software, implementation and technical support through one coordinated team.</p>
              <p>Whether the requirement involves a machine, process, product, digital platform or complete operational system, we help develop a practical way forward.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <Link
                href="/tell-us-your-challenge"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-[15px] font-bold rounded text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-lg shadow-[#E8B84B]/20 group"
              >
                Tell Us Your Challenge
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/media"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-[#2E5EAA] text-[15px] font-bold rounded text-white hover:bg-[#2E5EAA]/10 transition-colors group"
              >
                See Sanota in Action
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-[#2E5EAA]" />
              </Link>
            </div>

            {/* Chat Prompt */}
            <div className="p-5 rounded-lg bg-[#131C2E]/60 border border-slate-800/80 max-w-xl backdrop-blur-sm">
              <h3 className="text-white font-bold mb-2">Not sure where to begin?</h3>
              <p className="text-slate-400 text-sm mb-4">
                Tell us what is not working—or what you want to achieve. We will help direct your enquiry to the appropriate engineering team.
              </p>
              <button className="text-sm font-bold text-[#E8B84B] hover:text-[#d4a643] flex items-center transition-colors">
                Start Guided Chat
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </motion.div>
          
          <div className="lg:col-span-5 relative group">
            {/* Decorative Offset Shapes */}
            <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-tr from-[#E8B84B]/30 to-[#2E5EAA]/30 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            <div className="absolute top-4 -right-4 bottom-4 -left-4 border border-[#E8B84B]/40 rounded-[2.5rem] -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
            <div className="absolute -top-4 right-4 -bottom-4 left-4 border border-[#2E5EAA]/40 rounded-[2.5rem] -z-10 transition-transform duration-700 group-hover:-translate-x-2 group-hover:translate-y-2" />
            
            <div className="relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl flex items-center justify-center bg-[#0B1220] z-10">
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
                    fill 
                    className="object-cover opacity-70" 
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/20 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                 <div className="flex items-center space-x-3 mb-5">
                   <div className="w-2.5 h-2.5 rounded-full bg-[#E8B84B] animate-pulse" />
                   <p className="text-[13px] font-bold text-white uppercase tracking-widest">
                     {currentImageIndex === 0 && "Industrial Automation"}
                     {currentImageIndex === 1 && "Smart Agriculture"}
                     {currentImageIndex === 2 && "Food Processing"}
                   </p>
                 </div>
                 <div className="flex space-x-2">
                   {images.map((_, idx) => (
                     <button 
                       key={idx} 
                       onClick={() => setCurrentImageIndex(idx)}
                       className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentImageIndex ? 'w-10 bg-[#E8B84B]' : 'w-4 bg-white/30 hover:bg-white/50'}`}
                       aria-label={`Go to slide ${idx + 1}`}
                     />
                   ))}
                 </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
