"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, Search, PenTool, Wrench, PlayCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "The Requirement",
    desc: "You define the operational challenge, production bottleneck or new capability required.",
    icon: MessageSquare,
  },
  {
    num: "2",
    title: "Initial Assessment",
    desc: "Our engineers evaluate the site, operational constraints, technical requirements and available resources.",
    icon: Search,
  },
  {
    num: "3",
    title: "System Design",
    desc: "We engineer a coordinated solution involving mechanical, electrical, software and automation components.",
    icon: PenTool,
  },
  {
    num: "4",
    title: "Development & Fabrication",
    desc: "The system is built, programmed and tested at our engineering facilities.",
    icon: Wrench,
  },
  {
    num: "5",
    title: "Installation & Commissioning",
    desc: "Our team deploys the solution on-site, integrating it with your existing operations.",
    icon: PlayCircle,
  },
  {
    num: "6",
    title: "Handover & Support",
    desc: "We provide training, documentation, and ongoing maintenance to ensure reliable operation.",
    icon: TrendingUp,
  }
];

export default function HowSanotaWorks() {
  return (
    <section className="relative py-24 bg-[#0B1220] overflow-hidden border-t border-slate-800">
      
      {/* Topographic/Grid background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#E8B84B 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3"
          >
            How Sanota Works
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            Because we handle the complete engineering process, working with Sanota follows a clear structure.
          </motion.h3>
        </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Central connecting line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#E8B84B]/10 via-[#2E5EAA]/30 to-[#E8B84B]/10 -translate-x-1/2" />

            <div className="space-y-12 md:space-y-0 relative pb-16">
              {steps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} md:h-48`}
                  >
                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block md:w-1/2" />
                    
                    {/* Center Node */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#131C2E] border-4 border-[#0B1220] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(46,94,170,0.5)]">
                      <step.icon className="w-5 h-5 text-[#E8B84B]" />
                    </div>

                    {/* Content Card */}
                    <div className={`md:w-1/2 pl-20 md:px-12 w-full ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-[#2E5EAA]/50 transition-colors relative group">
                        <div className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent ${isEven ? 'left-[-8px] border-r-8 border-r-slate-800' : 'right-[-8px] border-l-8 border-l-slate-800'} hidden md:block group-hover:${isEven ? 'border-r-[#2E5EAA]/50' : 'border-l-[#2E5EAA]/50'} transition-colors`} />
                        
                        <div className={`text-[#E8B84B] font-black text-5xl absolute opacity-10 top-4 ${isEven ? 'right-6' : 'left-6'} pointer-events-none`}>
                          0{step.num}
                        </div>
                        
                        <h4 className="text-xl font-bold text-white mb-3 flex items-center md:inline-flex">
                          <span className="text-[#2E5EAA] mr-3 md:hidden">0{step.num}.</span>
                          {step.title}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center pt-8"
            >
              <Link
                href="/about"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-[#2E5EAA] text-[15px] font-bold rounded-lg text-white hover:bg-[#2E5EAA]/10 transition-colors group"
              >
                View Development Process
              </Link>
            </motion.div>
          </div>

        </div>
    </section>
  );
}
