"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { homeES } from "@/locales/es/home";
import { homeDE } from "@/locales/de/home";

const defaultOptions = [
  "Start Guided Chat",
  "Request a Technical Consultation",
  "Request a Modernization Assessment",
  "Request an AMC Assessment",
  "Request Product Information",
  "Explore a Partnership"
];

export default function FinalCTA() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const cta = isDe ? homeDE.finalCTA : isEs ? homeES.finalCTA : null;
  const options = cta ? cta.alternatives : defaultOptions;
  return (
    <section id="contact" className="relative pt-16 pb-24 bg-transparent overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAF8F5]/80 dark:to-[#050B14]/80 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#17135B]/10 dark:from-[#2E5EAA]/20 to-transparent rounded-[100%] blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17135B] dark:text-white tracking-tight mb-4">
            {cta ? (
              cta.heading
            ) : (
              <>
                Tell Us What Is Not Working—<br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] to-[#17135B] dark:from-[#E8B84B] dark:to-[#2E5EAA]">
                  or What You Want to Achieve.
                </span>
              </>
            )}
          </h2>
          
          <p className="text-lg text-[#17135B] dark:text-white font-semibold mb-6">
            {cta ? cta.subheading : "You do not need to know the exact technical solution."}
          </p>
          
          <p className="text-[16px] text-[#555E75] dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {cta ? cta.description : "Describe the present situation, the challenge and the result you need. Sanota will review your requirement and guide you towards the appropriate engineering, automation, digital, implementation or maintenance pathway."}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Link
              href="/tell-us-your-challenge"
              className="inline-flex justify-center items-center px-10 py-4 border border-transparent text-[14px] font-bold rounded-lg text-[#111424] bg-[#E5A93C] hover:bg-[#F0B74C] transition-all transform hover:scale-105 shadow-lg shadow-[#E5A93C]/30 w-full sm:w-auto group"
            >
              {cta ? cta.primaryButton : "Tell Us Your Challenge"} <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-10 py-4 border border-[#17135B]/20 dark:border-slate-700 text-[14px] font-bold rounded-lg text-[#17135B] dark:text-white bg-white dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 transition-all w-full sm:w-auto shadow-sm dark:shadow-none"
            >
              {cta ? cta.secondaryButton : "Contact Sanota"}
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
              className="absolute inset-0 bg-gradient-to-r from-[#17135B]/15 via-[#C59B27]/10 to-[#17135B]/15 dark:from-[#2E5EAA]/30 dark:via-[#E8B84B]/10 dark:to-[#2E5EAA]/30 blur-3xl rounded-[100px] -z-10"
            />
            
            <div className="bg-white/95 dark:bg-[#0B1220]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 sm:p-10 max-w-5xl mx-auto text-left shadow-xl dark:shadow-[0_0_50px_rgba(46,94,170,0.15)] relative overflow-hidden">
              
              {/* Internal Background Image */}
              <Image 
                src="/images/products/industrial_machinery.jpg" 
                alt="Engineering Background" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-cover opacity-10 dark:opacity-20 mix-blend-overlay pointer-events-none"
              />

              {/* Shimmer effect line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C59B27]/60 dark:via-[#E8B84B]/60 to-transparent opacity-70 z-10" />
              
              <h4 className="relative z-10 text-[#17135B] dark:text-white font-bold mb-8 text-center text-[16px] tracking-widest uppercase flex items-center justify-center">
                <span className="w-12 h-[1px] bg-slate-300 dark:bg-slate-700 mr-4"></span>
                {cta ? cta.alternativeTitle : "Alternative Enquiry Options"}
                <span className="w-12 h-[1px] bg-slate-300 dark:bg-slate-700 ml-4"></span>
              </h4>
              
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {options.map((opt, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="group"
                  >
                    <Link href="/contact" className="flex items-center p-4 rounded-xl bg-[#FAF8F5] dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 hover:bg-white dark:hover:bg-slate-800/90 hover:border-[#C59B27] dark:hover:border-[#E8B84B]/60 transition-all duration-300 relative overflow-hidden shadow-sm dark:shadow-lg">
                      {/* Sweep hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
                      
                      <ChevronRight className="w-4 h-4 text-[#17135B] dark:text-[#2E5EAA] group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] mr-3 shrink-0 transition-colors" />
                      <span className="text-[13.5px] text-[#17135B] dark:text-slate-300 group-hover:text-[#C59B27] dark:group-hover:text-white transition-colors font-semibold">{opt}</span>
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
