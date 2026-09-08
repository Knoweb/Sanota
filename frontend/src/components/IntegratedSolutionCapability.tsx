"use client";

import { motion } from "framer-motion";
import { Wrench, Cpu, Activity, Network, PenTool, LifeBuoy, ArrowRight } from "lucide-react";
import Link from "next/link";

const capabilities = [
  { 
    name: "Mechanical Engineering", 
    description: "Machinery, mechanisms, structures, processing equipment and special-purpose systems.",
    icon: Wrench 
  },
  { 
    name: "Electrical & Electronic Engineering", 
    description: "Control panels, electrical systems, embedded electronics, instruments and device integration.",
    icon: Cpu 
  },
  { 
    name: "Automation & Control", 
    description: "PLCs, HMIs, sensors, actuators, motor controls, drives, servo systems and industrial safety functions.",
    icon: Activity 
  },
  { 
    name: "IoT & Software", 
    description: "Connected monitoring, cloud platforms, dashboards, mobile applications, alerts, tracking and reporting.",
    icon: Network 
  },
  { 
    name: "Fabrication & Implementation", 
    description: "Procurement, fabrication, assembly, installation, integration, testing and commissioning.",
    icon: PenTool 
  },
  { 
    name: "AMC & Lifecycle Support", 
    description: "Preventive maintenance, breakdown support, system health reviews, training, upgrades and continuous improvement.",
    icon: LifeBuoy 
  },
];

export default function IntegratedSolutionCapability() {
  return (
    <section className="relative py-24 bg-[#0B1220] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#E8B84B]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#2E5EAA]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-5 sticky top-24"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
              More Than One Technology. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-yellow-200">One Connected Solution.</span>
            </h2>
            <div className="text-[15.5px] text-slate-300 mb-8 leading-relaxed space-y-5">
              <p>Industrial problems rarely belong to a single technical discipline.</p>
              <p>A production issue may require mechanical changes, electrical controls, automation, sensors, software, installation and ongoing maintenance. Sanota brings these capabilities together through one coordinated solution.</p>
            </div>
            
            <div className="p-5 border-l-4 border-[#E8B84B] bg-[#131C2E] mb-8 rounded-r-xl">
              <p className="text-white font-bold tracking-wide leading-relaxed">
                One coordinated team.<br/>
                One accountable delivery approach.<br/>
                One integrated solution.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-[14px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-lg shadow-[#E8B84B]/20 group w-full sm:w-auto"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Capabilities Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
          >
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={idx}
                  className="flex flex-col p-6 rounded-2xl bg-[#131C2E] border border-slate-800/80 hover:border-[#E8B84B]/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0B1220] flex items-center justify-center mb-5 border border-slate-800 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#E8B84B]" />
                  </div>
                  <h3 className="font-bold text-white text-[16px] mb-2">{cap.name}</h3>
                  <p className="text-slate-400 text-[14px] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
