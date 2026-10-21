"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useLanguage, LanguageCode } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import CountryFlag from "@/components/CountryFlag";
import { getLocalizedPath } from "@/utils/routes";

interface LanguageSelectorProps {
  className?: string;
  showFullLabel?: boolean;
}

export default function LanguageSelector({ className = "", showFullLabel = false }: LanguageSelectorProps) {
  const { language, currentLanguage, setLanguage, languages } = useLanguage();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-full border border-slate-700/50 bg-[#131C2E]/60 ${className}`} />
    );
  }

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select Language"
        className={`relative inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/50 ${
          isDark
            ? "bg-[#131C2E] border border-slate-700/80 text-slate-200 hover:border-[#E8B84B]/70 hover:bg-[#1A263D] hover:shadow-[0_0_12px_rgba(232,184,75,0.2)]"
            : "bg-white border border-[#E5E7EB] text-[#17135B] hover:border-[#C59B27]/70 hover:bg-amber-50/50 shadow-xs hover:shadow-[0_2px_8px_rgba(197,155,39,0.15)]"
        }`}
      >
        <CountryFlag code={currentLanguage.code} className="w-4 h-3 rounded-[2px] shadow-xs" />
        <span className="text-[11px] font-bold uppercase tracking-wider">
          {showFullLabel ? currentLanguage.nativeName : currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#C59B27] dark:text-[#E8B84B]" : "text-slate-400"
          }`}
        />
      </button>

      {/* Floating Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={`absolute right-0 mt-2 w-56 rounded-2xl p-2 z-50 shadow-2xl backdrop-blur-xl border ${
              isDark
                ? "bg-[#0B1220]/95 border-slate-700/80 shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                : "bg-white/98 border-[#ECE7DD] shadow-[0_20px_40px_rgba(23,19,91,0.12)]"
            }`}
          >
            {/* Header info */}
            <div className="px-3 py-2 border-b border-slate-200/80 dark:border-slate-800/80 mb-1 flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#C59B27] dark:text-[#E8B84B] flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                Select Language
              </span>
              <span className="text-[10px] text-slate-400 font-semibold uppercase">
                {languages.length} options
              </span>
            </div>

            {/* Language list */}
            <div className="space-y-1">
              {languages.map((lang) => {
                const isSelected = lang.code === language;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      const targetPath = getLocalizedPath(pathname, lang.code);
                      setLanguage(lang.code);
                      setIsOpen(false);
                      if (targetPath && targetPath !== pathname) {
                        router.push(targetPath);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all duration-200 group ${
                      isSelected
                        ? isDark
                          ? "bg-[#131C2E] text-[#E8B84B] border border-[#E8B84B]/40 shadow-[0_0_12px_rgba(232,184,75,0.15)]"
                          : "bg-amber-50 text-[#17135B] border border-[#C59B27]/40 shadow-sm"
                        : isDark
                        ? "text-slate-300 hover:bg-[#131C2E]/60 hover:text-white"
                        : "text-[#555E75] hover:bg-[#FAF8F5] hover:text-[#17135B]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CountryFlag code={lang.code} className="w-5 h-3.5 rounded-[2px] shadow-xs" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold leading-tight group-hover:translate-x-0.5 transition-transform duration-150">
                          {lang.nativeName}
                        </span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-normal">
                          {lang.name}
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-[#C59B27] dark:text-[#E8B84B] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
