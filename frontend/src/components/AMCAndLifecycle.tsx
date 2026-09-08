"use client";

import { motion } from "framer-motion";
import { Wrench, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const amcScope = [
  "Mechanical inspection, lubrication and adjustment",
  "Electrical panel inspection and thermal scanning",
  "Sensor calibration and automation system checks",
  "Hardware component replacement and sourcing",
  "Control logic updates and software patching",
  "Breakdown response and technical troubleshooting"
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
                Industrial systems require <span className="text-[#2E5EAA]">continuous maintenance</span> to perform at peak capacity.
              </h2>
              <p className="text-[15.5px] text-slate-400 mb-8 leading-relaxed">
                Sanota provides ongoing support for machinery, automation and integrated systems developed by our team, as well as eligible third-party industrial systems.
              </p>
              
              <div className="flex items-center space-x-4 p-5 bg-[#0B1220]/50 rounded-xl border border-slate-800/80 mb-10">
                <Shield className="w-10 h-10 text-[#2E5EAA] shrink-0" />
                <p className="text-[13.5px] text-slate-300 leading-relaxed">
                  AMC scope, service frequency and response arrangements are developed according to the equipment, operating environment and criticality of your assets.
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-[14px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-lg group w-fit"
              >
                Learn About AMC Support
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
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
              
              <div className="flex flex-col space-y-5">
                {amcScope.map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                    <CheckCircle2 className="w-5 h-5 text-slate-600 mr-4 shrink-0 mt-0.5 group-hover:text-[#E8B84B] transition-colors" />
                    <span className="text-slate-300 text-[14px] leading-relaxed">{item}</span>
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
