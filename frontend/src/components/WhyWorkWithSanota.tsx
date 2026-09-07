"use client";

import { motion } from "framer-motion";
import { Layers, Lightbulb, Settings, Repeat, Target, ShieldCheck } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    title: "Engineering First",
    description: "We are not just integrators; we design and build core mechanical and electrical systems.",
    icon: Layers,
  },
  {
    title: "Practical Automation",
    description: "We focus on robust, scalable automation that makes operational sense, not unnecessary complexity.",
    icon: Target,
  },
  {
    title: "Single Point of Responsibility",
    description: "One team handling mechanics, electronics, and software, eliminating vendor friction.",
    icon: Settings,
  },
  {
    title: "Long-Term Support",
    description: "We maintain what we build, offering continuous service, spares and system upgrades.",
    icon: ShieldCheck,
  }
];

export default function WhyWorkWithSanota() {
  return (
    <section id="about" className="relative py-24 bg-transparent overflow-hidden">
      
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#E8B84B]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#2E5EAA]/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3"
          >
            Why Sanota
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            A Practical Approach to Engineering
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#131C2E]/40 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl hover:bg-[#131C2E]/80 hover:border-[#E8B84B]/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0B1220] border border-slate-700 flex items-center justify-center mb-6 group-hover:border-[#E8B84B] transition-colors">
                <reason.icon className="w-7 h-7 text-[#2E5EAA] group-hover:text-[#E8B84B] transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#E8B84B] transition-colors">{reason.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {reason.description}
              </p>
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
            href="/about"
            className="inline-flex items-center px-8 py-4 border border-transparent hover:border-[#E8B84B]/50 text-[15px] font-bold rounded-full text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors uppercase tracking-wider"
          >
            Learn More About Sanota
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
