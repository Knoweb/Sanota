"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Link as LinkIcon, CheckCircle2, ArrowRight } from "lucide-react";

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
                <LinkIcon className="w-4 h-4 mr-2" /> Sanota and Knoweb
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Engineering Connected by <span className="text-[#2E5EAA]">Digital Technology</span>
              </h3>
              
              <div className="space-y-4 text-[15px] text-slate-400 leading-relaxed mb-10">
                <p>
                  Sanota’s integrated engineering capability is supported by Knoweb, an affiliated information technology company under common ownership.
                </p>
                <p>
                  Knoweb contributes expertise in software development, IoT connectivity, cloud platforms, web and mobile applications, dashboards, enterprise systems and data management.
                </p>
                <p>
                  Together, these capabilities enable physical machinery and operational systems to be connected with:
                </p>
              </div>
              
              <Link
                href="/services"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-[14px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-lg group w-full sm:w-auto"
              >
                Explore Automation, IoT & Digital Integration
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glowing-card bg-[#0B1220]/80 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {capabilities.map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                    <CheckCircle2 className="w-4 h-4 text-[#2E5EAA] mr-3 shrink-0 mt-0.5 group-hover:text-[#E8B84B] transition-colors" />
                    <span className="text-slate-300 text-[13.5px] leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
