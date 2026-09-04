"use client";

import { motion } from "framer-motion";
import { Activity, Eye, Cpu, Settings, Zap, LineChart } from "lucide-react";
import { useState } from "react";

const nodes = [
  { id: "sense", label: "SENSE", Icon: Activity, desc: "Data Acquisition & IoT" },
  { id: "monitor", label: "MONITOR", Icon: Eye, desc: "Real-time Tracking" },
  { id: "analyze", label: "ANALYZE", Icon: Cpu, desc: "Insights & Processing" },
  { id: "control", label: "CONTROL", Icon: Settings, desc: "SCADA & Management" },
  { id: "automate", label: "AUTOMATE", Icon: Zap, desc: "Robotics & Workflows" },
  { id: "optimize", label: "OPTIMIZE", Icon: LineChart, desc: "Continuous AI Improvement" },
];

export default function WhatWeDo() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="relative py-24 overflow-hidden bg-transparent">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase"
          >
            The Core of <br />
            <span className="text-[#E8B84B]">What We Do</span>
          </motion.h2>
        </div>

        {/* Desktop Loop */}
        <div className="hidden lg:block relative py-12">
          {/* Connecting Line */}
          <div className="absolute top-[88px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8B84B]/40 to-transparent z-0" />
          
          <div className="relative z-10 flex justify-between items-start">
            {nodes.map((node, index) => {
              const isHovered = hoveredNode === node.id;
              
              return (
                <div 
                  key={node.id} 
                  className="flex flex-col items-center group cursor-pointer w-40 relative"
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 border-2 
                      ${isHovered ? 'bg-[#131C2E] border-[#E8B84B] shadow-[0_0_30px_rgba(232,184,75,0.4)]' : 'bg-[#0B1220] border-[#1e293b] shadow-xl'}`}
                  >
                    <node.Icon className={`w-8 h-8 transition-colors duration-300 ${isHovered ? 'text-[#E8B84B]' : 'text-slate-400'}`} />
                  </motion.div>
                  
                  <h3 className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 mb-2
                    ${isHovered ? 'text-white' : 'text-slate-500'}`}>
                    {node.label}
                  </h3>

                  <div className={`text-center px-2 transition-all duration-300 absolute top-36 w-48 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                    <p className="text-[13px] font-medium text-[#E8B84B]">
                      {node.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Loop */}
        <div className="lg:hidden relative space-y-12 pl-6">
           {/* Connecting Vertical Line */}
           <div className="absolute top-0 bottom-0 left-[39px] w-[1px] bg-gradient-to-b from-transparent via-[#E8B84B]/40 to-transparent z-0" />
           
           {nodes.map((node, index) => {
              return (
                <motion.div 
                  key={node.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative z-10 flex items-center"
                >
                  <div className="w-16 h-16 shrink-0 rounded-full bg-[#131C2E] border-2 border-[#E8B84B] flex items-center justify-center mr-6 shadow-[0_0_20px_rgba(232,184,75,0.2)]">
                    <node.Icon className="w-6 h-6 text-[#E8B84B]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white uppercase tracking-wider mb-1">
                      {node.label}
                    </h3>
                    <p className="text-sm font-medium text-slate-400">
                      {node.desc}
                    </p>
                  </div>
                </motion.div>
              )
           })}
        </div>

      </div>
    </section>
  );
}
