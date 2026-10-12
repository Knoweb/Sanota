"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function AmbientGlow() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Blue/Cyan Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: isDark ? [0.1, 0.2, 0.1] : [0.03, 0.08, 0.03],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#2E5EAA] rounded-full blur-[120px] ${
          isDark ? "mix-blend-screen" : "mix-blend-multiply opacity-20"
        }`}
      />
      {/* Gold Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: isDark ? [0.05, 0.15, 0.05] : [0.04, 0.1, 0.04],
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className={`absolute bottom-[20%] right-[10%] w-[600px] h-[600px] ${
          isDark ? "bg-[#E8B84B] mix-blend-screen" : "bg-[#C89D2B] mix-blend-multiply opacity-25"
        } rounded-full blur-[150px]`}
      />
    </div>
  );
}
