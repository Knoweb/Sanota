"use client";

import { motion } from "framer-motion";
import { Layers, Lightbulb, Settings, Repeat, Target, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const reasons = [
  {
    title: "Integrated In-House Capability",
    description: "The resources required for engineering, automation, IoT, software and implementation are coordinated within the Sanota solution environment.",
    icon: Layers,
    image: "/images/capabilities/cap_integrated_1789034204880.jpg"
  },
  {
    title: "Practical Engineering",
    description: "Solutions are developed around real operating conditions, customer priorities and implementation requirements.",
    icon: Target,
    image: "/images/capabilities/cap_practical_1789034261822.jpg"
  },
  {
    title: "Custom Development",
    description: "We can develop solutions for requirements that cannot be adequately addressed by standard products.",
    icon: Settings,
    image: "/images/capabilities/cap_custom_1789034275387.jpg"
  },
  {
    title: "Modernization Expertise",
    description: "Existing machinery and systems can often be restored, upgraded and connected before replacement becomes necessary.",
    icon: Repeat,
    image: "/images/capabilities/cap_modernization_1789034289241.jpg"
  },
  {
    title: "End-to-End Delivery",
    description: "Sanota can remain involved from assessment and design through commissioning and lifecycle support.",
    icon: ShieldCheck,
    image: "/images/capabilities/cap_delivery_1789034307231.jpg"
  },
  {
    title: "Multi-Industry Understanding",
    description: "Experience across different industries allows relevant technologies and ideas to be adapted to new operational environments.",
    icon: Lightbulb,
    image: "/images/capabilities/cap_industry_1789034379331.jpg"
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
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
          >
            One Accountable Engineering Partner
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glowing-card bg-[#131C2E]/40 backdrop-blur-sm border border-slate-800 rounded-3xl hover:bg-[#131C2E]/80 hover:border-[#E8B84B]/40 transition-all duration-300 group flex flex-col h-full overflow-hidden shadow-2xl"
            >
              {/* Image Banner */}
              <div className="relative h-40 w-full overflow-hidden shrink-0 border-b border-slate-800/50">
                <Image 
                  src={reason.image} 
                  alt={reason.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131C2E] to-transparent opacity-95" />
                <div className="absolute inset-0 bg-[#2E5EAA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Icon */}
                <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-[#0B1220]/80 backdrop-blur-md border border-slate-700 flex items-center justify-center group-hover:border-[#E8B84B]/60 transition-all duration-300 z-10 shadow-lg">
                  <reason.icon className="w-6 h-6 text-[#2E5EAA] group-hover:text-[#E8B84B] transition-colors" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-5 flex flex-col flex-grow">
                <h4 className="text-[17.5px] font-bold text-white mb-3 group-hover:text-[#E8B84B] transition-colors leading-tight">
                  {reason.title}
                </h4>
                <p className="text-slate-400 leading-relaxed text-[13.5px] flex-grow">
                  {reason.description}
                </p>
              </div>
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
            className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-[14px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-lg group"
          >
            About Sanota
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
