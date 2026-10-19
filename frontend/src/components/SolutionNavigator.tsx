"use client";

import { motion } from "framer-motion";
import { Link2, Settings, Zap, Building2, Cpu, Wrench, PackageSearch, Network, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { homeES } from "@/locales/es/home";

const options = [
  {
    name: "Modernize a Machine",
    description: "Restore machinery, replace outdated controls, improve safety and extend operating life.",
    linkText: "Request a Modernization Assessment",
    href: "/tell-us-your-challenge",
    icon: Settings,
    bgImage: "/nav/nav_modernize.jpg",
    color: "#E8B84B" // Gold
  },
  {
    name: "Automate a Process",
    description: "Introduce PLC, HMI, sensor, drive and control technologies to improve consistency and reduce manual intervention.",
    linkText: "Explore Industrial Automation",
    href: "/services",
    icon: Zap,
    bgImage: "/nav/nav_automate.jpg",
    color: "#06b6d4" // Cyan
  },
  {
    name: "Develop a Machine",
    description: "Design and build machinery or equipment around a specific production, processing or testing requirement.",
    linkText: "Explore Custom Machinery Development",
    href: "/services",
    icon: Cpu,
    bgImage: "/nav/nav_develop_machine.jpg",
    color: "#10b981" // Emerald
  },
  {
    name: "Monitor an operation",
    description: "Connect machines, assets and environments with sensors, IoT, dashboards, alerts and reporting.",
    linkText: "Explore IoT & Digital Integration",
    href: "/services",
    icon: Network,
    bgImage: "/nav/nav_monitor.jpg",
    color: "#3b82f6" // Blue
  },
  {
    name: "Build a Complete System",
    description: "Develop and integrate machinery, controls, software, utilities and operational processes as one solution.",
    linkText: "Explore Project Execution",
    href: "/services",
    icon: Building2,
    bgImage: "/nav/nav_build_system.jpg",
    color: "#8b5cf6" // Violet
  },
  {
    name: "Develop a Product",
    description: "Turn a technical requirement, concept or research idea into a prototype or practical product.",
    linkText: "Explore Product Development",
    href: "/services",
    icon: PackageSearch,
    bgImage: "/nav/nav_develop_product.jpg",
    color: "#ec4899" // Pink
  },
  {
    name: "Maintain Critical Assets",
    description: "Protect machinery, automation and integrated systems through preventive maintenance, technical support and AMCs.",
    linkText: "Request an AMC Assessment",
    href: "/tell-us-your-challenge",
    icon: Wrench,
    bgImage: "/nav/nav_maintain.jpg",
    color: "#f97316" // Orange
  },
  {
    name: "I Am Not Sure Yet",
    description: "Explain the situation in your own words. Our team will help identify the most appropriate starting point.",
    linkText: "Request a Technical Consultation",
    href: "/tell-us-your-challenge",
    icon: Link2,
    bgImage: "/nav/nav_unsure.jpg",
    color: "#14b8a6" // Teal
  },
];

export default function SolutionNavigator() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { language } = useLanguage();
  const isEs = language === "es";
  const sn = isEs ? homeES.solutionNavigator : null;

  const displayOptions = options.map((opt, idx) => {
    if (sn && sn.items[idx]) {
      return {
        ...opt,
        name: sn.items[idx].name,
        description: sn.items[idx].description,
        linkText: sn.items[idx].linkText,
      };
    }
    return opt;
  });

  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-cycle through cards every 1.8 seconds unless user hovers
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % options.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      {/* Ambient glow that follows active card */}
      <div
        className="absolute pointer-events-none transition-all duration-700"
        style={{
          background: isDark
            ? "radial-gradient(600px circle at 50% 50%, rgba(232,184,75,0.06), transparent 70%)"
            : "radial-gradient(600px circle at 50% 50%, rgba(212,175,55,0.08), transparent 70%)",
          inset: 0,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-black mb-4 ${isDark ? "text-white" : "text-[#17135B]"}`}
          >
            {sn ? sn.heading : "What Are You Trying to Achieve?"}
          </motion.h2>
          <p className={`${isDark ? "text-slate-500" : "text-[#646C82]"} text-sm font-medium`}>
            {sn ? sn.subheading : "Hover over a card to pause"}
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {displayOptions.map((option, idx) => {
            const Icon = option.icon;
            const isActive = activeIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex"
                onMouseEnter={() => setActiveIdx(idx)}
              >
                <div
                  className={`relative flex flex-col p-4 md:p-8 rounded-2xl md:rounded-3xl border transition-all duration-500 group w-full cursor-default overflow-hidden ${
                    isDark
                      ? isActive
                        ? "bg-[#050B14]/60 backdrop-blur-md border-[#E8B84B]/60 shadow-[0_0_30px_rgba(232,184,75,0.18)] -translate-y-1"
                        : "bg-[#131C2E]/30 backdrop-blur-sm border-slate-700/50 hover:border-[#E8B84B]/30"
                      : isActive
                        ? "bg-white border-[#C59B27] shadow-[0_14px_30px_rgba(23,19,91,0.09)] -translate-y-1"
                        : "bg-white border-[#ECE7DD] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#D4AF37]/60 hover:shadow-[0_10px_24px_rgba(23,19,91,0.06)]"
                  }`}
                >
                  {/* Animated top border pulse when active */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBorder"
                      className="absolute top-0 left-6 right-6 h-[2px] rounded-full z-20"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${option.color}, transparent)`
                      }}
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.35 }}
                    />
                  )}

                  {/* Background Image: Dark overlay in dark mode, light clean subtle watermark in light mode */}
                  {isDark ? (
                    <div className={`absolute inset-0 z-0 transition-all duration-700 ${isActive ? 'opacity-70 scale-105' : 'opacity-30 group-hover:opacity-50 scale-100'}`}>
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/60 via-[#0B1220]/40 to-[#0B1220]/90 z-10" />
                      <Image
                        src={option.bgImage}
                        alt={option.name}
                        fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-cover mix-blend-lighten"
                      />
                    </div>
                  ) : (
                    <div className={`absolute inset-0 z-0 transition-all duration-700 ${isActive ? 'opacity-10 scale-105' : 'opacity-5 group-hover:opacity-10 scale-100'}`}>
                      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95 z-10" />
                      <Image
                        src={option.bgImage}
                        alt={option.name}
                        fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-cover mix-blend-multiply"
                      />
                    </div>
                  )}

                  <div
                    className="relative z-20 w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6 border transition-all duration-500"
                    style={{
                      backgroundColor: isDark
                        ? (isActive ? `${option.color}26` : `${option.color}0D`)
                        : (isActive ? `${option.color}18` : "#F8F7F3"),
                      borderColor: isDark
                        ? (isActive ? `${option.color}66` : `${option.color}26`)
                        : (isActive ? option.color : "#ECE7DD"),
                    }}
                  >
                    <Icon
                      className="w-5 h-5 md:w-7 md:h-7 transition-colors duration-500"
                      style={{ color: isActive ? option.color : (isDark ? `${option.color}99` : option.color) }}
                    />
                  </div>

                  <h3
                    className={`relative z-20 font-bold text-[13px] md:text-[18px] leading-snug mb-2 md:mb-3 transition-colors duration-500 ${
                      isDark
                        ? (isActive ? "text-white" : "text-slate-300")
                        : "text-[#17135B]"
                    }`}
                  >
                    {option.name}
                  </h3>

                  <p
                    className={`relative z-20 text-xs md:text-sm leading-relaxed mb-4 md:mb-8 flex-grow transition-colors duration-500 hidden md:block ${
                      isDark
                        ? (isActive ? "text-slate-300" : "text-slate-500")
                        : "text-[#555E75]"
                    }`}
                  >
                    {option.description}
                  </p>

                  <Link
                    href={option.href}
                    className="text-[10px] md:text-[13px] font-bold flex items-center transition-all duration-300 w-fit group-hover:translate-x-1 mt-auto"
                    style={{
                      color: isDark
                        ? (isActive ? option.color : `${option.color}b3`)
                        : (isActive ? "#C59B27" : "#17135B"),
                    }}
                  >
                    {option.linkText}
                    <ArrowRight className="ml-1 md:ml-1.5 w-3 h-3 md:w-4 md:h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
