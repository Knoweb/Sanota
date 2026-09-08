"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const options = [
  "Start Guided Chat",
  "Request a Technical Consultation",
  "Request a Modernization Assessment",
  "Request an AMC Assessment",
  "Request Product Information",
  "Explore a Partnership"
];

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-32 bg-[#050B14] overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#131C2E]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#2E5EAA]/20 to-transparent rounded-[100%] blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Tell Us What Is Not Working—<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B84B] to-[#2E5EAA]">or What You Want to Achieve.</span>
          </h2>
          
          <p className="text-lg text-white font-semibold mb-6">
            You do not need to know the exact technical solution.
          </p>
          
          <p className="text-[16px] text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Describe the present situation, the challenge and the result you need. Sanota will review your requirement and guide you towards the appropriate engineering, automation, digital, implementation or maintenance pathway.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Link
              href="/tell-us-your-challenge"
              className="inline-flex justify-center items-center px-10 py-4 border border-transparent text-[14px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(232,184,75,0.3)] w-full sm:w-auto group"
            >
              Tell Us Your Challenge <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-10 py-4 border border-slate-700 text-[14px] font-bold rounded-lg text-white hover:bg-slate-800 transition-all w-full sm:w-auto"
            >
              Contact Sanota
            </Link>
          </div>

          {/* Alternative Enquiry Options */}
          <div className="bg-[#0B1220]/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 max-w-4xl mx-auto text-left">
            <h4 className="text-white font-bold mb-6 text-center text-lg">Alternative Enquiry Options</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {options.map((opt, idx) => (
                <Link key={idx} href="/contact" className="flex items-center text-slate-300 hover:text-[#E8B84B] transition-colors group">
                  <ChevronRight className="w-4 h-4 text-[#2E5EAA] group-hover:text-[#E8B84B] mr-2 shrink-0 transition-colors" />
                  <span className="text-[13.5px]">{opt}</span>
                </Link>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
