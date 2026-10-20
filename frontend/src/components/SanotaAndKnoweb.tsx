"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Link as LinkIcon, CheckCircle2, ArrowRight } from "lucide-react";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { homeES } from "@/locales/es/home";
import { homeDE } from "@/locales/de/home";
import { homeJA } from "@/locales/ja/home";
import { homeAR } from "@/locales/ar/home";

const defaultCapabilities = [
  "Sensors and data acquisition",
  "Cloud connectivity",
  "Web and mobile access",
  "Operational dashboards",
  "Alerts and notifications",
  "Tracking and traceability",
  "Digital records and reporting",
  "Remote monitoring and control",
  "Business and enterprise systems"
];

export default function SanotaAndKnoweb() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const sk = isAr ? homeAR.sanotaAndKnoweb : isJa ? homeJA.sanotaAndKnoweb : isDe ? homeDE.sanotaAndKnoweb : isEs ? homeES.sanotaAndKnoweb : null;
  const capabilities = sk ? sk.features : defaultCapabilities;

  return (
    <section className="relative py-24 bg-transparent overflow-hidden border-t border-slate-200 dark:border-slate-800">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#17135B] rounded-full mix-blend-screen filter blur-[150px] opacity-10 dark:opacity-20 pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#C59B27] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative bg-white dark:bg-[#131C2E]/30 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-[2.5rem] overflow-hidden shadow-xl dark:shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Content Area */}
            <div className="p-8 sm:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center space-x-2 bg-[#17135B]/8 dark:bg-[#2E5EAA]/10 border border-[#17135B]/15 dark:border-[#2E5EAA]/30 px-4 py-2 rounded-full mb-6">
                  <LinkIcon className="w-4 h-4 text-[#17135B] dark:text-[#2E5EAA]" />
                  <span className="text-xs font-bold text-[#17135B] dark:text-[#2E5EAA] uppercase tracking-widest">
                    {sk ? sk.heading : "Sanota and Knoweb"}
                  </span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17135B] dark:text-white tracking-tight mb-6 leading-tight">
                  {isAr ? (
                    <>الهندسة المتصلة <br/><span className="text-[#C59B27] dark:text-[#E8B84B] drop-shadow-[0_0_15px_rgba(197,155,39,0.2)] dark:drop-shadow-[0_0_15px_rgba(232,184,75,0.3)]">بالتكنولوجيا الرقمية والبرمجيات</span></>
                  ) : isJa ? (
                    <>デジタル技術と融合する <br/><span className="text-[#C59B27] dark:text-[#E8B84B] drop-shadow-[0_0_15px_rgba(197,155,39,0.2)] dark:drop-shadow-[0_0_15px_rgba(232,184,75,0.3)]">コネクテッドエンジニアリング</span></>
                  ) : isDe ? (
                    <>Durch digitale Technologie vernetzte <br/><span className="text-[#C59B27] dark:text-[#E8B84B] drop-shadow-[0_0_15px_rgba(197,155,39,0.2)] dark:drop-shadow-[0_0_15px_rgba(232,184,75,0.3)]">Ingenieurtechnik</span></>
                  ) : isEs ? (
                    <>Ingeniería Conectada por <br/><span className="text-[#C59B27] dark:text-[#E8B84B] drop-shadow-[0_0_15px_rgba(197,155,39,0.2)] dark:drop-shadow-[0_0_15px_rgba(232,184,75,0.3)]">Tecnología Digital</span></>
                  ) : (
                    <>Engineering Connected by <br/><span className="text-[#C59B27] dark:text-[#E8B84B] drop-shadow-[0_0_15px_rgba(197,155,39,0.2)] dark:drop-shadow-[0_0_15px_rgba(232,184,75,0.3)]">Digital Technology</span></>
                  )}
                </h3>
                
                <div className="space-y-4 text-[15px] text-[#555E75] dark:text-slate-300 leading-relaxed mb-10">
                  <p>
                    {sk ? sk.paragraph1 : "Sanota’s integrated engineering capability is supported by Knoweb, an affiliated information technology company under common ownership."}
                  </p>
                  <p>
                    {sk ? sk.paragraph2 : "Knoweb contributes expertise in software development, IoT connectivity, cloud platforms, web and mobile applications, dashboards, enterprise systems and data management."}
                  </p>
                  <p className="font-semibold text-[#17135B] dark:text-white pt-2">
                    {sk ? sk.paragraph3 : "Together, these capabilities enable physical machinery and operational systems to be connected with:"}
                  </p>
                </div>
                
                <Link
                  href="/services"
                  className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-[14px] font-bold rounded-xl text-white bg-[#17135B] hover:bg-[#0E0A3C] transition-all duration-300 shadow-lg shadow-[#17135B]/20 group w-full sm:w-auto"
                >
                  {sk ? sk.button : "Explore Automation & IoT"}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right Image & Floating List Area */}
            <div className="relative min-h-[500px] lg:min-h-full">
              {/* Feature Image */}
              <Image 
                src="/images/capabilities/cap_iot_1789018334030.jpg" 
                alt="Digital Technology and IoT"
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              
              {/* Complex Gradients for blending */}
              <div className="absolute inset-0 bg-gradient-to-r from-white lg:from-white via-white/40 to-transparent dark:from-[#131C2E]/90 dark:lg:from-[#131C2E] dark:via-[#131C2E]/40 dark:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#0B1220] via-transparent to-white/40 dark:to-[#0B1220]/50 opacity-80" />
              <div className="absolute inset-0 bg-[#17135B]/10 dark:bg-[#2E5EAA]/20 mix-blend-overlay" />

              {/* Floating Capabilities List */}
              <div className="absolute inset-0 p-8 sm:p-12 lg:p-16 flex items-center justify-end">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-[95%] bg-white/95 dark:bg-[#0B1220]/75 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 p-8 sm:p-10 lg:p-12 rounded-[2rem] shadow-xl dark:shadow-2xl"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-4 gap-x-3 sm:gap-y-8 sm:gap-x-8">
                    {capabilities.map((item, idx) => (
                      <div key={idx} className="flex items-start group">
                        <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-[#C59B27]/15 dark:bg-[#E8B84B]/10 border border-[#C59B27]/30 dark:border-[#E8B84B]/30 flex items-center justify-center shrink-0 mt-0 mr-2 sm:mr-4 group-hover:bg-[#C59B27] dark:group-hover:bg-[#E8B84B] transition-colors duration-300 shadow-[0_0_10px_rgba(197,155,39,0.15)]">
                          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#C59B27] dark:text-[#E8B84B] group-hover:text-white dark:group-hover:text-[#0B1220] transition-colors" />
                        </div>
                        <span className="text-[#17135B] dark:text-slate-200 text-[10px] sm:text-[16px] font-medium leading-tight sm:leading-relaxed group-hover:text-[#C59B27] dark:group-hover:text-white transition-colors pt-0.5 sm:pt-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
