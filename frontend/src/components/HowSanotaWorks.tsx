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
    color: "#3B82F6", // Blue
  },
  {
    num: "02",
    title: "ASSESS",
    desc: "We study the process, machinery, site conditions, limitations and available opportunities.",
    icon: Search,
    color: "#10B981", // Emerald
  },
  {
    num: "03",
    title: "DESIGN",
    desc: "We develop the engineering concept, system architecture and implementation approach.",
    icon: PenTool,
    color: "#F59E0B", // Amber
  },
  {
    num: "04",
    title: "INTEGRATE",
    desc: "We coordinate mechanical, electrical, automation, IoT and software components.",
    icon: Wrench,
    color: "#E8B84B", // Sanota Gold
  },
  {
    num: "05",
    title: "IMPLEMENT",
    desc: "We build, install, test, commission and hand over the completed solution.",
    icon: PlayCircle,
    color: "#EF4444", // Red
  },
  {
    num: "06",
    title: "SUPPORT",
    desc: "We provide training, maintenance, AMC, upgrades and continuing performance improvement.",
    icon: TrendingUp,
    color: "#8B5CF6", // Violet
  },
];

export default function HowSanotaWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [glowingStep, setGlowingStep] = useState<number>(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % steps.length;
        // The particle takes ~600ms to travel, so we delay the glow until it arrives.
        setTimeout(() => setGlowingStep(next), 600);
        return next;
      });
    }, 2800);
    return () => clearInterval(timer);
  }, [paused]);

  const handleMouseEnter = (idx: number) => {
    setPaused(true);
    setActiveStep(idx);
    setGlowingStep(idx);
  };

  return (
    <section className="relative overflow-hidden border-t border-slate-800/60 py-12 lg:py-16 bg-transparent">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10 w-full">

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

        {/* Timeline */}
        <div className="relative">

          {/* SVG Definitions for Colorful Gradient Icons */}
          <svg width="0" height="0" className="absolute">
            <defs>
              {steps.map((step, idx) => (
                <linearGradient key={`grad-${idx}`} id={`icon-grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor={step.color} />
                </linearGradient>
              ))}
            </defs>
          </svg>

          {/* Connecting line behind circles */}
          <div className="hidden lg:block absolute top-[40px] left-[8.33%] right-[8.33%] h-[2px] z-0 rounded-full bg-slate-800/30">
            {/* The Track */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
            
            {/* Energy Particle (Shooting Star) */}
            <motion.div
              animate={{
                left: `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute top-1/2 -translate-y-1/2 h-[4px] w-20 rounded-full z-10 blur-[1px]"
              style={{ 
                transform: 'translateX(-50%)',
                background: `linear-gradient(90deg, transparent, ${steps[activeStep].color}, transparent)`,
                boxShadow: `0 0 20px 4px ${steps[activeStep].color}80`
              }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isGlowing = glowingStep === idx;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={() => setPaused(false)}
                >
                  {/* Circle Node */}
                  <div
                    className={`w-[80px] h-[80px] rounded-full border-2 flex items-center justify-center mb-5 transition-all duration-500 relative`}
                    style={{
                      borderColor: isGlowing ? step.color : `${step.color}33`,
                      background: isGlowing 
                        ? `radial-gradient(circle at center, ${step.color}25 0%, rgba(11,18,32,0.9) 100%)` 
                        : 'rgba(11,18,32,0.8)',
                      boxShadow: isGlowing ? `0 0 40px ${step.color}60, inset 0 0 15px ${step.color}30` : 'none',
                      transform: isGlowing ? 'scale(1.15)' : 'scale(1)',
                    }}
                  >
                    {/* Pulsing ring when active */}
                    {isGlowing && (
                      <motion.div
                        key={`ring-${idx}`}
                        className="absolute inset-0 rounded-full border"
                        style={{ borderColor: `${step.color}80` }}
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 1.6, opacity: 0 }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                    
                    {/* Colorful Gradient Icon */}
                    <Icon
                      className={`w-8 h-8 transition-all duration-500 ${isGlowing ? "scale-110 drop-shadow-lg" : "opacity-60"}`}
                      stroke={isGlowing ? `url(#icon-grad-${idx})` : '#94a3b8'}
                      strokeWidth={isGlowing ? 2.5 : 2}
                    />
                  </div>

                  {/* Label */}
                  <p 
                    className="text-[13px] font-black tracking-[0.15em] uppercase mb-2 transition-colors duration-300 text-center"
                    style={{ 
                      color: isGlowing ? step.color : '#64748b',
                      textShadow: isGlowing ? `0 0 10px ${step.color}60` : 'none'
                    }}
                  >
                    {step.title}
                  </p>
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
