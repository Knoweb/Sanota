"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render placeholder to avoid layout shift before mount
    return (
      <div className={`w-10 h-10 rounded-full border border-slate-700/50 bg-[#131C2E]/60 ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`relative inline-flex items-center justify-center gap-1.5 p-1.5 rounded-full transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#E8B84B]/50 ${
        isDark
          ? "bg-[#131C2E] border border-slate-700/80 text-[#E8B84B] hover:border-[#E8B84B]/70 hover:bg-[#1A263D] hover:shadow-[0_0_12px_rgba(232,184,75,0.25)]"
          : "bg-white border border-[#E5E7EB] text-[#C89D2B] hover:border-[#C89D2B]/70 hover:bg-amber-50/60 shadow-xs hover:shadow-[0_2px_8px_rgba(200,157,43,0.18)]"
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute"
            >
              <Moon className="w-4 h-4 text-[#E8B84B] group-hover:scale-110 transition-transform duration-200" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute"
            >
              <Sun className="w-4 h-4 text-[#C89D2B] group-hover:scale-110 transition-transform duration-200" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className={`text-xs font-bold uppercase tracking-wider ${
          isDark ? "text-slate-300 group-hover:text-white" : "text-slate-700 group-hover:text-[#0C1E3C]"
        }`}>
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
