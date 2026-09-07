"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-32 bg-[#050B14] overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#131C2E]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#2E5EAA]/20 to-transparent rounded-[100%] blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-8">
            Ready to discuss <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-[#2E5EAA]">your requirement?</span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact Sanota to explore engineering solutions for your operations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/tell-us-your-challenge"
              className="inline-flex items-center px-10 py-5 border border-transparent text-lg font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-all transform hover:scale-105 uppercase tracking-widest shadow-[0_0_30px_rgba(232,184,75,0.3)]"
            >
              Tell Us Your Challenge <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-5 border border-slate-700 text-lg font-bold rounded-lg text-white hover:bg-slate-800 transition-all uppercase tracking-widest"
            >
              General Contact Info
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
