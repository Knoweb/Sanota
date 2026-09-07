"use client";

import { motion } from "framer-motion";
import { Wrench, Cpu, Activity, Network, PenTool, LifeBuoy, ArrowRight } from "lucide-react";
import Link from "next/link";

const capabilities = [
  { name: "Mechanical Engineering", icon: Wrench },
  { name: "Electrical Systems", icon: Cpu },
  { name: "Automation & Control", icon: Activity },
  { name: "IoT & Data Integration", icon: Network },
  { name: "Fabrication & Assembly", icon: PenTool },
  { name: "AMC & Technical Support", icon: LifeBuoy },
];

export default function IntegratedSolutionCapability() {
  return (
    <section className="relative py-24 bg-[#0B1220] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#E8B84B]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#2E5EAA]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              To solve complex problems, you need an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-yellow-200">integrated approach.</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Sanota provides complete engineering capabilities under one roof, reducing vendor management, minimizing technical risk, and ensuring all parts of a solution work together seamlessly.
            </p>
            <Link
              href="/services"
              className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-[15px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-lg shadow-[#E8B84B]/20 group"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Capabilities Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={idx}
                  className="flex items-center space-x-4 p-5 rounded-2xl bg-[#131C2E] border border-slate-800/80 hover:border-[#E8B84B]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0B1220] flex items-center justify-center shrink-0 border border-slate-800">
                    <Icon className="w-6 h-6 text-[#E8B84B]" />
                  </div>
                  <span className="font-bold text-white text-[15px]">{cap.name}</span>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
