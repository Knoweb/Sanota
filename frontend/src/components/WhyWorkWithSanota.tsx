"use client";

import { motion } from "framer-motion";
import { Layers, Lightbulb, Settings, Repeat, Target, ShieldCheck } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    title: "Integrated Expertise",
    description: "Mechanical engineering, electrical and electronic systems, industrial automation, IoT and software are combined through one connected delivery approach.",
    icon: Layers,
  },
  {
    title: "Practical Engineering",
    description: "Every solution is developed around actual operating conditions, implementation requirements, available resources and long-term usability.",
    icon: Target,
  },
  {
    title: "Custom Development",
    description: "When a suitable standard solution is unavailable, Sanota can design and develop machinery, products and systems around the customer's specific requirement.",
    icon: Lightbulb,
  },
  {
    title: "Modernization Before Replacement",
    description: "We assess whether existing machinery can be restored, retrofitted or automated before recommending unnecessary replacement.",
    icon: Repeat,
  },
  {
    title: "End-to-End Project Delivery",
    description: "Sanota can manage engineering design, procurement, fabrication, software development, assembly, installation, system integration, testing, commissioning and handover.",
    icon: Settings,
  },
  {
    title: "Lifecycle Support",
    description: "Our responsibility can continue after commissioning through preventive maintenance, Annual Maintenance Contracts, technical support, training, upgrades and performance improvement.",
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
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3"
          >
            Why Work With Sanota
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6"
          >
            One Partner. <br className="sm:hidden" />
            <span className="text-[#2E5EAA]">Connected Engineering Capability.</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Sanota goes beyond supplying individual machines or isolated technologies. We work with customers to understand the complete operational requirement and develop a coordinated solution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
            href="#"
            className="inline-flex items-center px-8 py-4 border border-[#2E5EAA] text-[15px] font-bold rounded-full text-white bg-[#2E5EAA]/10 hover:bg-[#2E5EAA] transition-colors uppercase tracking-wider"
          >
            Learn More About Sanota
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
