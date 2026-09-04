"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Link as LinkIcon, Database, Cpu, LayoutDashboard, Cloud } from "lucide-react";

export default function SanotaAndKnoweb() {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#131C2E] via-[#0B1220] to-[#131C2E] border border-slate-800 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
          {/* Decorative network lines */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #E8B84B 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-[#2E5EAA]/10 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3 flex items-center">
                <LinkIcon className="w-4 h-4 mr-2" /> Sanota & Knoweb
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Engineering Connected by <br />
                <span className="text-[#2E5EAA]">Digital Technology</span>
              </h3>
              
              <div className="space-y-6 text-slate-300 leading-relaxed mb-10">
                <p>
                  Sanota's integrated engineering capability is supported by Knoweb, an affiliated information technology company under common ownership.
                </p>
                <p>
                  Knoweb contributes specialist expertise in software development, IoT connectivity, cloud platforms, web and mobile applications, dashboards, enterprise systems and data management.
                </p>
                <p>
                  Through this relationship, Sanota can connect physical machinery, sensors and control systems with digital platforms that improve visibility, traceability, reporting and remote access.
                </p>
              </div>
              
              <Link
                href="#"
                className="inline-flex items-center px-7 py-3 border border-[#E8B84B] text-[14px] font-bold rounded-full text-[#E8B84B] hover:bg-[#E8B84B] hover:text-[#0B1220] transition-colors uppercase tracking-wider"
              >
                Explore Automation, IoT & Digital Integration
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
               <div className="bg-[#0B1220]/80 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center group hover:border-[#2E5EAA] transition-colors">
                 <div className="w-12 h-12 bg-[#2E5EAA]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2E5EAA]/20 transition-colors">
                   <Cpu className="w-6 h-6 text-[#2E5EAA]" />
                 </div>
                 <h4 className="text-white font-semibold text-sm">IoT Connectivity</h4>
               </div>
               
               <div className="bg-[#0B1220]/80 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center group hover:border-[#E8B84B] transition-colors mt-8">
                 <div className="w-12 h-12 bg-[#E8B84B]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#E8B84B]/20 transition-colors">
                   <Cloud className="w-6 h-6 text-[#E8B84B]" />
                 </div>
                 <h4 className="text-white font-semibold text-sm">Cloud Platforms</h4>
               </div>
               
               <div className="bg-[#0B1220]/80 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center group hover:border-[#E8B84B] transition-colors -mt-8">
                 <div className="w-12 h-12 bg-[#E8B84B]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#E8B84B]/20 transition-colors">
                   <LayoutDashboard className="w-6 h-6 text-[#E8B84B]" />
                 </div>
                 <h4 className="text-white font-semibold text-sm">Web & Mobile Dashboards</h4>
               </div>
               
               <div className="bg-[#0B1220]/80 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center group hover:border-[#2E5EAA] transition-colors">
                 <div className="w-12 h-12 bg-[#2E5EAA]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2E5EAA]/20 transition-colors">
                   <Database className="w-6 h-6 text-[#2E5EAA]" />
                 </div>
                 <h4 className="text-white font-semibold text-sm">Data Management</h4>
               </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
