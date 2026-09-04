"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2010", label: "Established In", prefix: "", suffix: "" },
  { value: "1,250", label: "Client Engagements", prefix: "", suffix: "+" },
  { value: "120", label: "Dedicated Staff", prefix: "", suffix: "+" },
  { value: "3", label: "Workshop Facilities", prefix: "", suffix: "" },
  { value: "24/7", label: "O&M Support", prefix: "", suffix: "" },
  { value: "ISO 9001", label: "Quality Management", prefix: "", suffix: ":2015" },
];

export default function CorporateProof() {
  return (
    <section className="relative py-20 bg-[#0B1220] border-t border-slate-800/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
           <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3"
          >
            Corporate Proof
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl font-bold text-white"
          >
            A Record of Performance
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center divide-x-0 lg:divide-x divide-slate-800">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="text-4xl font-black text-white mb-2 tracking-tight flex items-baseline">
                {stat.prefix && <span className="text-2xl text-[#2E5EAA] mr-1">{stat.prefix}</span>}
                {stat.value}
                {stat.suffix && <span className="text-2xl text-[#2E5EAA] ml-1">{stat.suffix}</span>}
              </div>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
