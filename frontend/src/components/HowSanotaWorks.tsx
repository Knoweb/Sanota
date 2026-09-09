"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, Search, PenTool, Wrench, PlayCircle, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const steps = [
  {
    num: "01",
    title: "UNDERSTAND",
    desc: "We listen to the customer and understand the operation, challenge and expected result.",
    icon: MessageSquare,
  },
  {
    num: "02",
    title: "ASSESS",
    desc: "We study the process, machinery, site conditions, limitations and available opportunities.",
    icon: Search,
  },
  {
    num: "03",
    title: "DESIGN",
    desc: "We develop the engineering concept, system architecture and implementation approach.",
    icon: PenTool,
  },
  {
    num: "04",
    title: "INTEGRATE",
    desc: "We coordinate mechanical, electrical, automation, IoT and software components.",
    icon: Wrench,
  },
  {
    num: "05",
    title: "IMPLEMENT",
    desc: "We build, install, test, commission and hand over the completed solution.",
    icon: PlayCircle,
  },
  {
    num: "06",
    title: "SUPPORT",
    desc: "We provide training, maintenance, AMC, upgrades and continuing performance improvement.",
    icon: TrendingUp,
  },
];

export default function HowSanotaWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="relative overflow-hidden border-t border-slate-800/60 min-h-screen flex flex-col justify-center">

      {/* CSS Animated gradient background */}
      <div className="absolute inset-0 z-0" style={{ background: "#000013", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: "-50%",
            background: `
              radial-gradient(ellipse 80% 60% at 20% 40%, #000066 0%, transparent 60%),
              radial-gradient(ellipse 60% 80% at 80% 60%, #0a0a3e 0%, transparent 60%),
              radial-gradient(ellipse 100% 50% at 50% 100%, #525f68 0%, transparent 50%)
            `,
            animation: "shaderFlow 8s ease-in-out infinite alternate",
          }}
        />
        {/* Nabtura-style curved wave shapes */}
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#E8B84B" fillOpacity="0.3" d="M0,192L120,186.7C240,181,480,171,720,181.3C960,192,1200,224,1320,240L1440,256L1440,320L0,320Z" />
          <path fill="#2E5EAA" fillOpacity="0.2" d="M0,256L120,240C240,224,480,192,720,186.7C960,181,1200,203,1320,213.3L1440,224L1440,320L0,320Z" />
        </svg>
        <div className="absolute inset-0 bg-[#000013]/20" />
      </div>

      <style>{`
        @keyframes shaderFlow {
          0%   { transform: translate(0%, 0%) rotate(0deg) scale(1); }
          50%  { transform: translate(5%, -3%) rotate(-3deg) scale(1.1); }
          100% { transform: translate(3%, -5%) rotate(-5deg) scale(1); }
        }
        @keyframes lineGrow {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10 py-20 w-full">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black text-[#E8B84B] uppercase tracking-[0.3em] mb-4"
          >
            How Sanota Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            From Requirement to Working Solution
          </motion.h2>
        </div>

        {/* Nabtura-style Horizontal Timeline */}
        <div className="relative">

          {/* Connecting line behind circles */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-[2px] z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-transparent via-[#E8B84B]/60 to-transparent"
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-0 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center cursor-pointer"
                  onMouseEnter={() => { setPaused(true); setActiveStep(idx); }}
                  onMouseLeave={() => setPaused(false)}
                >
                  {/* Circle Node */}
                  <div
                    className={`w-[110px] h-[110px] rounded-full border-2 flex items-center justify-center mb-6 transition-all duration-500 relative
                      ${isActive
                        ? "border-[#E8B84B] bg-[#E8B84B]/10 shadow-[0_0_50px_rgba(232,184,75,0.4)] scale-110"
                        : "border-slate-600 bg-[#050B20]/80 scale-100"
                      }`}
                  >
                    {/* Pulsing ring when active */}
                    {isActive && (
                      <motion.div
                        key={`ring-${idx}`}
                        className="absolute inset-0 rounded-full border border-[#E8B84B]/40"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 1.6, opacity: 0 }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                    {/* Step number inside */}
                    <span className={`absolute top-4 text-xs font-black tracking-widest transition-colors duration-300 ${isActive ? "text-[#E8B84B]" : "text-slate-600"}`}>
                      {step.num}
                    </span>
                    <Icon
                      className={`w-12 h-12 transition-all duration-500 ${isActive ? "text-[#E8B84B] scale-110" : "text-slate-400"}`}
                    />
                  </div>

                  {/* Label */}
                  <p className={`text-sm font-black tracking-[0.2em] uppercase mb-3 transition-colors duration-300 ${isActive ? "text-[#E8B84B]" : "text-slate-400"}`}>
                    {step.title}
                  </p>

                  {/* Description — shows on hover */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      maxHeight: isActive ? 120 : 0,
                      marginTop: isActive ? 8 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden text-center px-1"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link
            href="/contact"
            className="inline-flex justify-center items-center px-8 py-4 border border-[#E8B84B]/50 text-[15px] font-bold rounded-xl text-white hover:bg-[#E8B84B]/10 hover:border-[#E8B84B] transition-all duration-300 group"
          >
            Start a Discussion
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
