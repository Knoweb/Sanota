"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Users } from "lucide-react";

export default function InnovationAndCollaboration() {
  return (
    <section className="relative py-24 bg-transparent border-t border-slate-800/50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[#E8B84B] uppercase tracking-widest mb-3"
          >
            Innovation and Collaboration
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6"
          >
            Developing <span className="text-[#2E5EAA]">New Capability</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[15.5px] text-slate-400 leading-relaxed"
          >
            Sanota actively collaborates with state universities, research groups and specialized technology partners in Sri Lanka and abroad to strengthen our engineering capability and develop new solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl text-center flex flex-col items-center hover:border-[#E8B84B]/50 transition-colors"
           >
              <div className="w-16 h-16 bg-[#0B1220] rounded-full flex items-center justify-center mb-6 border border-slate-700">
                 <Code2 className="w-8 h-8 text-[#E8B84B]" />
              </div>
              <h4 className="text-white font-bold text-lg mb-3">R&D and Custom Solutions</h4>
              <p className="text-slate-400 text-[13.5px] leading-relaxed">Pushing the boundaries of what is possible in industrial engineering.</p>
           </motion.div>

           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl text-center flex flex-col items-center hover:border-[#2E5EAA]/50 transition-colors mt-0 md:mt-8"
           >
              <div className="w-16 h-16 bg-[#0B1220] rounded-full flex items-center justify-center mb-6 border border-slate-700">
                 <GraduationCap className="w-8 h-8 text-[#2E5EAA]" />
              </div>
              <h4 className="text-white font-bold text-lg mb-3">University Partnerships</h4>
              <p className="text-slate-400 text-[13.5px] leading-relaxed">Collaborating with academic institutions to test new theories and develop technical talent.</p>
           </motion.div>

           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#131C2E]/60 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl text-center flex flex-col items-center hover:border-[#E8B84B]/50 transition-colors mt-0 md:mt-16"
           >
              <div className="w-16 h-16 bg-[#0B1220] rounded-full flex items-center justify-center mb-6 border border-slate-700">
                 <Users className="w-8 h-8 text-[#E8B84B]" />
              </div>
              <h4 className="text-white font-bold text-lg mb-3">Technology Partners</h4>
              <p className="text-slate-400 text-[13.5px] leading-relaxed">Working with global hardware and software providers to build robust systems.</p>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
