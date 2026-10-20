"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Lightbulb, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { homeES } from "@/locales/es/home";
import { homeDE } from "@/locales/de/home";
import { homeJA } from "@/locales/ja/home";
import { homeAR } from "@/locales/ar/home";

const defaultCapabilities = [
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
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const ic = isAr ? homeAR.innovationAndCollaboration : isJa ? homeJA.innovationAndCollaboration : isDe ? homeDE.innovationAndCollaboration : isEs ? homeES.innovationAndCollaboration : null;
  const capabilities = ic ? ic.capabilities : defaultCapabilities;

  return (
    <section className="relative py-24 bg-transparent overflow-hidden border-t border-slate-200 dark:border-slate-800/60">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2E5EAA]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E8B84B]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content Area */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-[#E8B84B]/10 border border-[#E8B84B]/30 px-5 py-2 rounded-full mb-8 shadow-sm dark:shadow-[0_0_15px_rgba(232,184,75,0.15)]">
                <Users className="w-4 h-4 text-[#C59B27] dark:text-[#E8B84B]" />
                <span className="text-xs font-bold text-[#C59B27] dark:text-[#E8B84B] uppercase tracking-widest">
                  {ic ? ic.heading : "Innovation and Partnerships"}
                </span>
              </div>
              
              <h3 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#17135B] dark:text-white tracking-tight mb-8 leading-[1.1]">
                {isAr ? (
                  <>من الأفكار إلى <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#60A5FA] drop-shadow-sm">الهندسة العملية الميدانية</span></>
                ) : isJa ? (
                  <>アイデアから <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#60A5FA] drop-shadow-sm">実践的エンジニアリングへ</span></>
                ) : isDe ? (
                  <>Von Ideen zu <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#60A5FA] drop-shadow-sm">Praktischer Ingenieurkunst</span></>
                ) : isEs ? (
                  <>De las Ideas a la <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#60A5FA] drop-shadow-sm">Ingeniería Práctica</span></>
                ) : (
                  <>From Ideas to <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#60A5FA] drop-shadow-sm">Practical Engineering</span></>
                )}
              </h3>
              
              <div className="space-y-5 text-[16px] text-slate-600 dark:text-slate-300 leading-relaxed mb-12 border-l-2 border-slate-300 dark:border-slate-700/50 pl-6">
                {ic ? (
                  <p>{ic.description}</p>
                ) : (
                  <>
                    <p>
                      Sanota works with businesses, inventors, universities, research institutions and technology partners to develop solutions for specialized and emerging requirements.
                    </p>
                    <p>
                      By combining our diverse engineering expertise with your domain knowledge, we turn theoretical concepts into robust, field-ready realities.
                    </p>
                  </>
                )}
              </div>
              
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-[15px] font-bold rounded-xl text-white bg-[#2E5EAA] hover:bg-[#1e3a8a] transition-all duration-300 shadow-[0_4px_20px_rgba(46,94,170,0.3)] hover:shadow-[0_6px_30px_rgba(46,94,170,0.5)] group w-full sm:w-auto"
              >
                {ic ? ic.button : "Explore a Collaboration"}
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Capabilities Card */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] bg-white dark:bg-gradient-to-br dark:from-[#131C2E]/90 dark:to-[#0B1220]/95 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 p-8 sm:p-12 shadow-xl dark:shadow-2xl overflow-hidden group"
            >
              {/* Internal Glowing Orbs for the Card */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#E8B84B]/10 dark:bg-[#E8B84B]/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#E8B84B]/20 transition-colors duration-700" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#2E5EAA]/10 dark:bg-[#2E5EAA]/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#2E5EAA]/20 transition-colors duration-700" />

              <div className="relative z-10">
                <div className="flex items-center mb-10 pb-8 border-b border-slate-200 dark:border-slate-700/50">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2E5EAA] to-[#1e3a8a] flex items-center justify-center mr-5 shadow-lg shadow-[#2E5EAA]/30 border border-[#2E5EAA]/50">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-[#17135B] dark:text-white tracking-tight">Collaborative Capabilities</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">End-to-end support for innovation pipelines</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                  {capabilities.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (idx * 0.05), duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start group/item cursor-default"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#F5F3EF] dark:bg-[#0B1220] border border-slate-300 dark:border-slate-600 flex items-center justify-center shrink-0 mt-0 mr-4 group-hover/item:border-[#C59B27] dark:group-hover/item:border-[#E8B84B] group-hover/item:bg-[#E8B84B]/10 transition-all duration-300 shadow-sm group-hover/item:shadow-[0_0_10px_rgba(232,184,75,0.2)]">
                        <CheckCircle2 className="w-4 h-4 text-[#C59B27] dark:text-slate-400 group-hover/item:text-[#C59B27] dark:group-hover/item:text-[#E8B84B] transition-colors" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-200 text-[15px] font-medium leading-snug pt-0.5 group-hover/item:text-[#17135B] dark:group-hover/item:text-white transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
