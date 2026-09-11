"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Link as LinkIcon, CheckCircle2, ArrowRight } from "lucide-react";

import Image from "next/image";

const capabilities = [
  "Sensors and data acquisition",
  "Cloud connectivity",
  "Web and mobile access",
  "Operational dashboards",
  "Alerts and notifications",
  "Tracking and traceability",
  "Digital records and reporting",
  "Remote monitoring and control",
  "Business and enterprise systems"
];

export default function SanotaAndKnoweb() {
  return (
    <section className="relative py-24 bg-[#0B1220] overflow-hidden border-t border-slate-800">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2E5EAA] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#E8B84B] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative bg-[#131C2E]/40 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Content Area */}
            <div className="p-8 sm:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center space-x-2 bg-[#2E5EAA]/10 border border-[#2E5EAA]/30 px-4 py-2 rounded-full mb-6">
                  <LinkIcon className="w-4 h-4 text-[#2E5EAA]" />
                  <span className="text-xs font-bold text-[#2E5EAA] uppercase tracking-widest">Sanota and Knoweb</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                  Engineering Connected by <br/><span className="text-[#E8B84B] drop-shadow-[0_0_15px_rgba(232,184,75,0.3)]">Digital Technology</span>
                </h3>
                
                <div className="space-y-4 text-[15px] text-slate-300 leading-relaxed mb-10">
                  <p>
                    Sanota’s integrated engineering capability is supported by Knoweb, an affiliated information technology company under common ownership.
                  </p>
                  <p>
                    Knoweb contributes expertise in software development, IoT connectivity, cloud platforms, web and mobile applications, dashboards, enterprise systems and data management.
                  </p>
                  <p className="font-semibold text-white pt-2">
                    Together, these capabilities enable physical machinery and operational systems to be connected with:
                  </p>
                </div>
                
                <Link
                  href="/services"
                  className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-[14px] font-bold rounded-xl text-white bg-[#2E5EAA] hover:bg-[#1e3a8a] transition-all duration-300 shadow-lg shadow-[#2E5EAA]/20 group w-full sm:w-auto"
                >
                  Explore Automation & IoT
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right Image & Floating List Area */}
            <div className="relative min-h-[500px] lg:min-h-full">
              {/* Feature Image */}
              <Image 
                src="/images/capabilities/cap_iot_1789018334030.jpg" 
                alt="Digital Technology and IoT"
                fill
                className="object-cover"
              />
              
              {/* Complex Gradients for blending */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#131C2E]/90 lg:from-[#131C2E] via-[#131C2E]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-[#0B1220]/50 opacity-80" />
              <div className="absolute inset-0 bg-[#2E5EAA]/20 mix-blend-overlay" />

              {/* Floating Capabilities List */}
              <div className="absolute inset-0 p-8 sm:p-12 lg:p-16 flex items-center justify-end">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-[95%] bg-[#0B1220]/60 backdrop-blur-xl border border-slate-700/50 p-8 sm:p-10 lg:p-12 rounded-[2rem] shadow-2xl"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8">
                    {capabilities.map((item, idx) => (
                      <div key={idx} className="flex items-start group">
                        <div className="w-8 h-8 rounded-full bg-[#E8B84B]/10 border border-[#E8B84B]/30 flex items-center justify-center shrink-0 mt-0 mr-4 group-hover:bg-[#E8B84B] transition-colors duration-300 shadow-[0_0_10px_rgba(232,184,75,0.1)]">
                          <CheckCircle2 className="w-4 h-4 text-[#E8B84B] group-hover:text-[#0B1220] transition-colors" />
                        </div>
                        <span className="text-slate-200 text-[16px] font-medium leading-relaxed group-hover:text-white transition-colors drop-shadow-md pt-0.5">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
