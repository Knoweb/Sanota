"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
    <section id="contact" className="relative pt-16 pb-24 bg-[#050B14] overflow-hidden">
      
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
          <div className="mt-20 relative z-20">
            {/* Animated Ambient Background for the bottom part */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-gradient-to-r from-[#2E5EAA]/30 via-[#E8B84B]/10 to-[#2E5EAA]/30 blur-3xl rounded-[100px] -z-10"
            />
            
            <div className="bg-[#0B1220]/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-10 max-w-5xl mx-auto text-left shadow-[0_0_50px_rgba(46,94,170,0.15)] relative overflow-hidden">
              
              {/* Internal Background Image */}
              <Image 
                src="/images/products/industrial_machinery.jpg" 
                alt="Engineering Background" 
                fill 
                className="object-cover opacity-20 mix-blend-overlay pointer-events-none"
              />

              {/* Shimmer effect line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8B84B]/60 to-transparent opacity-70 z-10" />
              
              <h4 className="relative z-10 text-white font-bold mb-8 text-center text-[16px] tracking-widest uppercase flex items-center justify-center">
                <span className="w-12 h-[1px] bg-slate-700 mr-4"></span>
                Alternative Enquiry Options
                <span className="w-12 h-[1px] bg-slate-700 ml-4"></span>
              </h4>
              
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {options.map((opt, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="group"
                  >
                    <Link href="/contact" className="flex items-center p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:bg-slate-800/90 hover:border-[#E8B84B]/60 transition-all duration-300 relative overflow-hidden shadow-lg">
                      {/* Sweep hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
                      
                      <ChevronRight className="w-4 h-4 text-[#2E5EAA] group-hover:text-[#E8B84B] mr-3 shrink-0 transition-colors" />
                      <span className="text-[13.5px] text-slate-300 group-hover:text-white transition-colors font-medium">{opt}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
