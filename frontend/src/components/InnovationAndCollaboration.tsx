"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const capabilities = [
  "Feasibility assessment",
  "Concept development",
  "Prototype design",
  "Mechanical and electronic engineering",
  "Embedded systems",
  "Automation and control",
  "IoT and software integration",
  "Testing and design improvement",
  "Pilot systems",
  "Production engineering",
  "Commercialization support"
];

export default function InnovationAndCollaboration() {
  return (
    <section className="relative py-24 bg-transparent border-t border-slate-800/50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3">
                Innovation and Partnerships
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
                From Ideas to <span className="text-[#2E5EAA]">Practical Engineering</span>
              </h3>
              <p className="text-[15.5px] text-slate-400 leading-relaxed mb-10">
                Sanota works with businesses, inventors, universities, research institutions and technology partners to develop solutions for specialized and emerging requirements.
              </p>
              
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-[14px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-lg group w-full sm:w-auto"
              >
                Explore a Collaboration
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glowing-card bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 p-8 sm:p-10 rounded-3xl"
            >
              <h4 className="text-xl font-bold text-white mb-8">Our collaborative capabilities include:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {capabilities.map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                    <CheckCircle2 className="w-4 h-4 text-[#2E5EAA] mr-3 shrink-0 mt-0.5 group-hover:text-[#E8B84B] transition-colors" />
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
