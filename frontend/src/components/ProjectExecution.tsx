"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const executionScope = [
  "Detailed engineering",
  "Equipment and component selection",
  "Procurement coordination",
  "Machinery fabrication and assembly",
  "Control-panel development",
  "PLC, HMI and software programming",
  "Factory testing",
  "Site installation",
  "Mechanical and electrical integration",
  "System commissioning",
  "Performance testing",
  "Operator training",
  "Documentation and final handover"
];

export default function ProjectExecution() {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3">Project Execution</h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
              From Approved Design to an <span className="text-[#2E5EAA]">Operating System</span>
            </h3>
            <p className="text-lg text-slate-400 mb-6">
              Sanota provides coordinated project execution to convert an approved engineering solution into a complete and operational system.
            </p>
            <p className="text-lg text-slate-400 mb-10">
              This coordinated approach gives customers one accountable engineering partner throughout the project.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-7 py-3 border border-[#E8B84B] text-[14px] font-bold rounded-full text-[#E8B84B] hover:bg-[#E8B84B] hover:text-[#0B1220] transition-colors uppercase tracking-wider"
            >
              Plan Your Engineering Project
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glowing-card bg-[#131C2E]/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#2E5EAA]/10 to-transparent rounded-full blur-2xl -z-10" />
            
            <h4 className="text-lg font-bold text-white mb-8">Depending on the project, our scope can include:</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {executionScope.map((item, idx) => (
                <div key={idx} className="flex items-start group">
                  <CheckCircle2 className="w-5 h-5 text-[#2E5EAA] mr-3 shrink-0 mt-0.5 group-hover:text-[#E8B84B] transition-colors" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
