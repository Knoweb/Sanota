"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, Radio, PenTool } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Modernize existing machinery",
    icon: Wrench,
  },
  {
    title: "Automate manual processes",
    icon: Zap,
  },
  {
    title: "Improve operational visibility through IoT",
    icon: Radio,
  },
  {
    title: "Design and build custom industrial equipment",
    icon: PenTool,
  },
];

export default function WhatSanotaDoes() {
  return (
    <section id="services" className="relative py-24 bg-[#0B1220] overflow-hidden border-t border-slate-800/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3"
          >
            What Sanota Does
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight"
          >
            From Operational Challenge to <br className="hidden sm:block" />
            <span className="text-[#2E5EAA]">Engineered Solution</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Every successful solution begins with a clear understanding of the operational requirement. Customers approach Sanota to:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl text-center flex flex-col items-center hover:border-[#E8B84B]/50 hover:bg-[#131C2E] transition-all group"
            >
              <div className="w-16 h-16 bg-[#0B1220] rounded-2xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-[#E8B84B] transition-colors shadow-lg">
                 <service.icon className="w-8 h-8 text-[#2E5EAA] group-hover:text-[#E8B84B] transition-colors" />
              </div>
              <h4 className="text-white font-semibold text-lg">{service.title}</h4>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="#"
            className="inline-flex items-center px-8 py-4 border border-[#2E5EAA] text-[15px] font-bold rounded-full text-white bg-[#2E5EAA]/10 hover:bg-[#2E5EAA] transition-colors uppercase tracking-wider"
          >
            Explore Our Services
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
