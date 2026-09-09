"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, CheckCircle2, Wrench, Compass } from "lucide-react";

export default function VisitorPathways() {
  const [activeTab, setActiveTab] = useState<"solve" | "explore">("solve");

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
    <section className="relative py-24 lg:py-32 bg-[#0B1220] overflow-hidden">
      
      {/* Background Ambient Glow matching active tab */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[150px] opacity-10 pointer-events-none transition-colors duration-1000 z-0
          ${activeTab === 'solve' ? 'bg-[#E8B84B]' : 'bg-[#2E5EAA]'}`} 
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Title and Tab Controls */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">How Can We Help You Today?</h2>
              <p className="text-slate-400 text-lg">Select the pathway that best describes what you are looking for.</p>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                onClick={() => setActiveTab("solve")} 
                className={`w-full px-8 py-6 rounded-2xl text-lg font-bold transition-all duration-300 flex items-center border text-left
                  ${activeTab === 'solve' 
                    ? 'bg-[#131C2E] border-[#E8B84B] text-white shadow-[0_0_30px_rgba(232,184,75,0.15)] scale-105 z-10' 
                    : 'bg-[#050B14] border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-[#0B1220]'}`}
              >
                 <Wrench className={`w-6 h-6 mr-4 shrink-0 ${activeTab === 'solve' ? 'text-[#E8B84B]' : 'text-slate-500'}`} />
                 I Need to Solve a Problem
              </button>
              
              <button 
                onClick={() => setActiveTab("explore")} 
                className={`w-full px-8 py-6 rounded-2xl text-lg font-bold transition-all duration-300 flex items-center border text-left
                  ${activeTab === 'explore' 
                    ? 'bg-[#131C2E] border-[#2E5EAA] text-white shadow-[0_0_30px_rgba(46,94,170,0.15)] scale-105 z-10' 
                    : 'bg-[#050B14] border-slate-800 text-slate-500 hover:text-slate-300 hover:bg-[#0B1220]'}`}
              >
                 <Compass className={`w-6 h-6 mr-4 shrink-0 ${activeTab === 'explore' ? 'text-[#2E5EAA]' : 'text-slate-500'}`} />
                 I Want to Explore Sanota
              </button>
            </div>
          </div>

          {/* Right Column: Content Area */}
          <div className="lg:col-span-7 relative min-h-[500px]">
            <AnimatePresence mode="wait">
              
              {activeTab === 'solve' && (
                <motion.div
                  key="solve"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full bg-[#131C2E]/40 backdrop-blur-sm border border-slate-800 rounded-[2rem] p-8 sm:p-12"
                >
                  <div className="inline-block px-4 py-1.5 rounded-full border border-[#E8B84B]/30 bg-[#E8B84B]/10 mb-6">
                    <span className="text-[#E8B84B] font-bold tracking-widest uppercase text-xs">For Clients & Partners</span>
                  </div>
                  
                  <div className="text-slate-300 text-lg leading-relaxed space-y-4 mb-10">
                    <p>You do not need to arrive with a completed technical specification. Tell us about the present situation, what is not working and what you need to achieve.</p>
                    <p>Sanota will help identify the appropriate combination of engineering, automation, digital technology and technical support.</p>
                  </div>
                  
                  <h3 className="text-white font-bold text-xl mb-6">We can help when you need to:</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12">
                    {solveList.map((item, idx) => (
                      <div key={idx} className="flex items-start group">
                        <CheckCircle2 className="w-5 h-5 text-[#E8B84B] mr-3 shrink-0" />
                        <span className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href="/tell-us-your-challenge"
                    className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] text-lg font-black rounded-xl transition-all duration-300 shadow-lg shadow-[#E8B84B]/20 hover:shadow-[#E8B84B]/40 hover:-translate-y-1 group"
                  >
                    Tell Us Your Challenge
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              )}

              {activeTab === 'explore' && (
                <motion.div
                  key="explore"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full bg-[#131C2E]/40 backdrop-blur-sm border border-slate-800 rounded-[2rem] p-8 sm:p-12"
                >
                  <div className="inline-block px-4 py-1.5 rounded-full border border-[#2E5EAA]/30 bg-[#2E5EAA]/10 mb-6">
                    <span className="text-[#2E5EAA] font-bold tracking-widest uppercase text-xs">For Visitors & Researchers</span>
                  </div>
                  
                  <div className="text-slate-300 text-lg leading-relaxed space-y-4 mb-10">
                    <p>Discover the machinery, systems, products and integrated solutions Sanota has developed across industries.</p>
                  </div>
                  
                  <h3 className="text-white font-bold text-xl mb-6">Explore our world:</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12">
                    {exploreList.map((item, idx) => (
                      <div key={idx} className="flex items-start group">
                        <CheckCircle2 className="w-5 h-5 text-[#2E5EAA] mr-3 shrink-0" />
                        <span className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href="/media"
                    className="inline-flex items-center px-8 py-4 bg-[#2E5EAA] hover:bg-[#254d8c] text-white text-lg font-black rounded-xl transition-all duration-300 shadow-lg shadow-[#2E5EAA]/20 hover:shadow-[#2E5EAA]/40 hover:-translate-y-1 group"
                  >
                    See Sanota in Action
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
