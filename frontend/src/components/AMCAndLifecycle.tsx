"use client";

import { motion } from "framer-motion";
import { Wrench, Shield, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const amcScope = [
  "Annual Maintenance Contracts (AMC)",
  "Preventive & Predictive Maintenance",
  "Component Repair & Replacement",
  "System Modernization & Upgrades"
];

export default function AMCAndLifecycle() {
  return (
    <section className="relative py-24 bg-[#131C2E] overflow-hidden border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3">AMC and Lifecycle Support</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
                Industrial systems require <span className="text-[#2E5EAA]">continuous maintenance</span> to perform at peak capacity.
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Sanota provides ongoing support for machinery, automation and integrated systems developed by our team, as well as eligible third-party industrial systems.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                <Link
                  href="/services"
                  className="inline-flex justify-center items-center px-7 py-3 border border-transparent text-[14px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors uppercase tracking-wider text-center"
                >
                  Learn About AMC Support
                </Link>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-[#0B1220]/50 rounded-xl border border-slate-800/80">
                <Shield className="w-10 h-10 text-[#2E5EAA]" />
                <p className="text-sm text-slate-300">
                  AMC scope, service frequency and response arrangements are developed according to the equipment, operating environment and criticality of your assets.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0B1220] to-[#0B1220]/80 border border-[#1e293b] rounded-3xl p-8 sm:p-12 relative shadow-2xl"
            >
              <div className="flex items-center mb-8">
                <Wrench className="w-8 h-8 text-[#E8B84B] mr-4" />
                <h4 className="text-2xl font-bold text-white">AMC Support May Include</h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {amcScope.map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mr-3 shrink-0 mt-0.5 group-hover:text-[#E8B84B] transition-colors" />
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
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
