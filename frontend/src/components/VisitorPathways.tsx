"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Wrench, Compass } from "lucide-react";

export default function VisitorPathways() {
  const solveList = [
    "Improve a production process", "Automate a manual operation", "Modernize an existing machine",
    "Develop custom machinery", "Introduce monitoring or tracking", "Connect equipment with IoT or software",
    "Develop a new product or prototype", "Build a processing or production system", "Arrange maintenance or an AMC",
    "Understand where to begin"
  ];

  const exploreList = [
    "Completed work", "Project stories", "Machinery demonstrations",
    "Products and systems", "Videos", "Photo gallery",
    "Innovation and partnerships", "News and activities"
  ];

  return (
    <section className="relative py-12 lg:py-16 bg-[#0B1220] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight"
          >
            How Can We Help You Today?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-base"
          >
            Select the pathway that best describes what you are looking for.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Solve */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group p-6 sm:p-8 rounded-[1.5rem] bg-[#131C2E]/40 border border-slate-800 hover:border-[#E8B84B]/40 transition-all duration-500 overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#E8B84B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex-grow flex flex-col">
              <div className="flex items-center mb-4">
                 <div className="w-10 h-10 rounded-xl bg-[#E8B84B]/10 flex items-center justify-center mr-4 shrink-0 border border-[#E8B84B]/20">
                   <Wrench className="w-5 h-5 text-[#E8B84B]" />
                 </div>
                 <h3 className="text-xl sm:text-2xl font-black text-white">I Need to Solve a Problem</h3>
              </div>
              
              <div className="inline-flex w-max px-3 py-1 rounded-full border border-[#E8B84B]/30 bg-[#E8B84B]/10 mb-4">
                 <span className="text-[#E8B84B] font-bold tracking-widest uppercase text-[10px]">For Clients & Partners</span>
              </div>
              
              <div className="text-slate-300 text-[14px] sm:text-[15px] leading-relaxed space-y-2 mb-6 opacity-80 min-h-[44px]">
                <p>You do not need to arrive with a completed technical specification. Tell us about the present situation, what is not working and what you need to achieve.</p>
              </div>
              
              <h4 className="text-white font-bold text-sm sm:text-base mb-4">We can help when you need to:</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-6 flex-grow">
                {solveList.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E8B84B] mr-2 mt-0.5 shrink-0 opacity-80" />
                    <span className="text-slate-400 text-[13px] font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link
                href="/tell-us-your-challenge"
                className="mt-auto w-full inline-flex justify-center items-center px-6 py-3 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] text-[14px] font-black rounded-xl transition-all duration-300 shadow-md shadow-[#E8B84B]/10 hover:shadow-[#E8B84B]/30 hover:-translate-y-1 group/btn"
              >
                Tell Us Your Challenge
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Explore */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative group p-6 sm:p-8 rounded-[1.5rem] bg-[#131C2E]/40 border border-slate-800 hover:border-[#2E5EAA]/50 transition-all duration-500 overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#2E5EAA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex-grow flex flex-col">
              <div className="flex items-center mb-4">
                 <div className="w-10 h-10 rounded-xl bg-[#2E5EAA]/10 flex items-center justify-center mr-4 shrink-0 border border-[#2E5EAA]/30">
                   <Compass className="w-5 h-5 text-[#2E5EAA]" />
                 </div>
                 <h3 className="text-xl sm:text-2xl font-black text-white">I Want to Explore Sanota</h3>
              </div>
              
              <div className="inline-flex w-max px-3 py-1 rounded-full border border-[#2E5EAA]/30 bg-[#2E5EAA]/10 mb-4">
                 <span className="text-[#2E5EAA] font-bold tracking-widest uppercase text-[10px]">For Visitors & Researchers</span>
              </div>
              
              <div className="text-slate-300 text-[14px] sm:text-[15px] leading-relaxed space-y-2 mb-6 opacity-80 min-h-[44px]">
                <p>Discover the machinery, systems, products and integrated solutions Sanota has developed across a diverse range of industries and environments.</p>
              </div>
              
              <h4 className="text-white font-bold text-sm sm:text-base mb-4">Explore our world:</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-6 flex-grow">
                {exploreList.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5EAA] mr-2 mt-0.5 shrink-0 opacity-80" />
                    <span className="text-slate-400 text-[13px] font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link
                href="/media"
                className="mt-auto w-full inline-flex justify-center items-center px-6 py-3 bg-[#2E5EAA] hover:bg-[#254d8c] text-white text-[14px] font-black rounded-xl transition-all duration-300 shadow-md shadow-[#2E5EAA]/10 hover:shadow-[#2E5EAA]/30 hover:-translate-y-1 group/btn"
              >
                See Sanota in Action
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
