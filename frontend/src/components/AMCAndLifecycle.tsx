"use client";

import { motion } from "framer-motion";
import { Wrench, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const amcScope = [
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
  return (
    <section className="relative py-24 bg-[#131C2E] overflow-hidden border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3">AMC and Lifecycle Support</h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
                Keep Critical Systems <span className="text-[#2E5EAA]">Operating Reliably</span>
              </h3>
              <div className="text-[15.5px] text-slate-400 mb-8 leading-relaxed space-y-4">
                <p>
                  Sanota provides Annual Maintenance Contracts and technical support for machinery, automation and integrated systems developed by Sanota.
                </p>
                <p>
                  We can also take over eligible third-party machinery and systems following an initial technical and condition assessment.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 p-5 bg-[#0B1220]/50 rounded-xl border border-slate-800/80 mb-10">
                <Shield className="w-10 h-10 text-[#2E5EAA] shrink-0" />
                <p className="text-[13.5px] text-slate-300 leading-relaxed">
                  Each AMC is developed according to the equipment, operating environment, asset criticality and required response level.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center px-6 py-3.5 border border-transparent text-[14px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-lg group w-full sm:w-auto"
                >
                  Request an AMC Assessment
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex justify-center items-center px-6 py-3.5 border border-slate-700 text-[14px] font-bold rounded-lg text-white hover:bg-slate-800 transition-colors w-full sm:w-auto"
                >
                  Explore Maintenance Services
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0B1220] to-[#0B1220]/80 border border-slate-800 rounded-3xl p-8 sm:p-12 relative shadow-2xl"
            >
              <div className="flex items-center mb-8">
                <Wrench className="w-8 h-8 text-[#E8B84B] mr-4" />
                <h4 className="text-2xl font-bold text-white">AMC Services May Include</h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {amcScope.map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                    <CheckCircle2 className="w-4 h-4 text-slate-600 mr-3 shrink-0 mt-0.5 group-hover:text-[#E8B84B] transition-colors" />
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
