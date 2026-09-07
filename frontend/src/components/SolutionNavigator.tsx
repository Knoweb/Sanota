"use client";

import { motion } from "framer-motion";
import { Link2, Settings, Zap, Building2, Cpu, Wrench, PackageSearch, Network } from "lucide-react";
import Link from "next/link";

const options = [
  { name: "Modernize a Machine", icon: Settings },
  { name: "Automate a Process", icon: Zap },
  { name: "Develop a New Product", icon: PackageSearch },
  { name: "Build an Industrial Facility", icon: Building2 },
  { name: "Implement an IoT System", icon: Network },
  { name: "Outsource Maintenance (AMC)", icon: Wrench },
  { name: "Source Equipment/Parts", icon: Cpu },
  { name: "Integrate Software & Hardware", icon: Link2 },
];

export default function SolutionNavigator() {
  return (
    <section className="relative py-24 bg-[#131C2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-white mb-4"
          >
            How Can We Help You?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Select a requirement below to learn more about our specific engineering capabilities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {options.map((option, idx) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={`/services`}
                  className="flex flex-col items-center justify-center p-8 text-center rounded-2xl bg-[#0B1220] border border-slate-800 hover:border-[#E8B84B] hover:bg-[#1a263c] transition-all duration-300 group h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-[#131C2E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-[#E8B84B]" />
                  </div>
                  <h3 className="text-white font-bold text-[15px] leading-snug">{option.name}</h3>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
