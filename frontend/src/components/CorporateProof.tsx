"use client";

import { motion } from "framer-motion";

const proofPoints = [
  { 
    title: "Established in 2010", 
    description: "Engineering and technology experience developed across changing industrial requirements."
  },
  { 
    title: "1,250+ Client Engagements", 
    description: "Experience gained through projects, products, services and technical requirements."
  },
  { 
    title: "Multi-Industry Experience", 
    description: "Engineering solutions developed across diverse operating environments."
  },
  { 
    title: "End-to-End Capability", 
    description: "Support from initial assessment and design through implementation, AMC and continuous improvement."
  },
];

export default function CorporateProof() {
  return (
    <section className="relative py-16 bg-[#0B1220] border-t border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {proofPoints.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glowing-card group flex flex-col p-6 rounded-2xl bg-[#131C2E] border border-slate-800 hover:border-[#E8B84B]/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(232,184,75,0.15)] transition-all duration-300 cursor-default"
            >
              <h3 className="text-lg font-black text-[#E8B84B] mb-3 group-hover:text-[#f3c65c] group-hover:translate-x-1 transition-all duration-300">{point.title}</h3>
              <p className="text-sm font-medium text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
