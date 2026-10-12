"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`fixed inset-0 -z-20 pointer-events-none overflow-hidden transition-colors duration-500 ${
      isDark ? "bg-[#050B14]" : "bg-[#FBFBFA]"
    }`}>
      {/* Dynamic Gradient Base */}
      <motion.div
        className={`absolute inset-0 transition-opacity duration-500 ${isDark ? "opacity-80" : "opacity-40"}`}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          backgroundImage: isDark
            ? "linear-gradient(-45deg, #050B14, #131C2E, #0B1220, #1B2A45)"
            : "linear-gradient(-45deg, #FBFBFA, #F5F3EF, #FAF9F6, #EDE7DA)",
          backgroundSize: "300% 300%",
        }}
      />
      
      {/* Giant Slow Moving Waves */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isDark ? "opacity-60 mix-blend-screen" : "opacity-30 mix-blend-multiply"
      }`}>
        {/* Giant Wave 1 (Moves left, very slow) */}
        <motion.svg
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className={`absolute top-[10%] w-[200%] h-[120vh] ${
            isDark ? "fill-[#2E5EAA]/15" : "fill-[#2E5EAA]/5"
          }`}
          viewBox="0 0 2880 1000"
          preserveAspectRatio="none"
        >
          <path d="M0,400 Q360,100 720,400 T1440,400 Q1800,100 2160,400 T2880,400 L2880,1000 L0,1000 Z" />
        </motion.svg>

        {/* Giant Wave 2 (Moves right, extremely slow) */}
        <motion.svg
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className={`absolute -top-[20%] w-[200%] h-[150vh] ${
            isDark ? "fill-[#E8B84B]/10" : "fill-[#C89D2B]/5"
          }`}
          viewBox="0 0 2880 1000"
          preserveAspectRatio="none"
        >
           <path d="M0,600 Q360,900 720,600 T1440,600 Q1800,900 2160,600 T2880,600 L2880,1000 L0,1000 Z" />
        </motion.svg>
      </div>
    </div>
  );
}
