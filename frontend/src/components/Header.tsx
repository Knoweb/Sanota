"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSelector from "@/components/LanguageSelector";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();
  const { t, localizedHref } = useLanguage();
  const isDark = theme === "dark";

  const navLinks = [
    { name: t.nav.home, href: localizedHref("/") },
    { name: t.nav.industries, href: localizedHref("/industries") },
    { name: t.nav.services, href: localizedHref("/services") },
    { name: t.nav.products, href: localizedHref("/products") },
    { name: t.nav.media, href: localizedHref("/media") },
    { name: t.nav.about, href: localizedHref("/about") },
    { name: t.nav.contact, href: localizedHref("/contact") },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-[#050B14]/95 backdrop-blur-md shadow-sm dark:shadow-[0_10px_40px_-10px_rgba(5,11,20,0.5)] border-b border-[#ECE7DD] dark:border-[#2E5EAA]/20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center shrink-0">
            <Link href={localizedHref("/")} className="relative flex items-center justify-center mr-3 xl:mr-5 group transition-opacity hover:opacity-80">
              <Image
                src="/lg.png"
                alt="Sanota Logo"
                width={150}
                height={44}
                className="object-contain h-11 w-auto relative z-10 hover:scale-105 transition-transform duration-300"
                style={{
                  filter: isDark
                    ? "drop-shadow(0.15px 0.15px 0 rgba(255,255,255,0.6)) drop-shadow(-0.15px -0.15px 0 rgba(255,255,255,0.6)) drop-shadow(0.15px -0.15px 0 rgba(255,255,255,0.6)) drop-shadow(-0.15px 0.15px 0 rgba(255,255,255,0.6)) drop-shadow(2px 2px 1px rgba(0,0,0,0.7)) drop-shadow(4px 4px 4px rgba(0,0,0,0.5))"
                    : "none",
                }}
                priority
              />
            </Link>
          </div>

          <nav className="hidden xl:flex items-center justify-center gap-2 xl:gap-2.5 2xl:gap-5 flex-1 mx-2 2xl:mx-4 min-w-0">
            {navLinks.map((link) => {
              const decodedPath = decodeURIComponent(pathname || "");
              const decodedHref = decodeURIComponent(link.href || "");
              const isHome = ["/", "/es", "/de", "/ja", "/ar", "/en", "/inicio", "/startseite", "/ホーム", "/الرئيسية"].includes(decodedHref);
              const isActive = decodedPath === decodedHref || (!isHome && decodedPath.startsWith(decodedHref));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-1.5 py-1.5 text-[11.5px] xl:text-[12px] 2xl:text-[13px] font-bold transition-all duration-300 uppercase tracking-wide whitespace-nowrap group hover:-translate-y-0.5 ${
                    isActive 
                      ? "text-[#C59B27] dark:text-[#E8B84B]" 
                      : "text-[#555E75] hover:text-[#17135B] dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C59B27] dark:bg-[#E8B84B] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {/* Hover indicator for non-active tabs */}
                  {!isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C59B27]/50 dark:bg-[#E8B84B]/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-2 2xl:gap-3 shrink-0">
            <Link
              href={localizedHref("/tell-us-your-challenge")}
              className="inline-flex items-center px-3.5 py-2 2xl:px-5 2xl:py-2.5 border border-transparent text-[11.5px] 2xl:text-[13px] font-bold rounded-full text-[#111424] bg-[#E5A93C] hover:bg-[#F0B74C] transition-all uppercase tracking-wider shadow-md hover:shadow-lg whitespace-nowrap"
            >
              {t.nav.tellUsYourChallenge}
            </Link>
            
            {/* Preferences Toolbar: Language Selector + Theme Toggle */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-100/80 dark:bg-[#131C2E] border border-slate-200/90 dark:border-slate-700/80 shadow-xs">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center space-x-2 xl:hidden">
            <LanguageSelector />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#17135B] dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#E8B84B] p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="xl:hidden bg-white dark:bg-[#0B1220] border-b border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-[0_20px_40px_-10px_rgba(5,11,20,0.8)]">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-[14px] font-bold text-[#555E75] hover:text-[#17135B] hover:bg-[#FAF8F5] dark:text-slate-300 dark:hover:text-[#E8B84B] dark:hover:bg-[#131C2E] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={localizedHref("/tell-us-your-challenge")}
              onClick={() => setIsOpen(false)}
              className="block mt-6 text-center px-4 py-4 border border-transparent text-[14px] font-bold rounded-md text-[#111424] bg-[#E5A93C] hover:bg-[#F0B74C] uppercase tracking-wider shadow-md"
            >
              {t.nav.tellUsYourChallenge}
            </Link>
            <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between px-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t.nav.selectLanguage}</span>
              <LanguageSelector showFullLabel={true} />
            </div>
            <div className="pt-2 flex items-center justify-between px-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{t.nav.switchTheme}</span>
              <ThemeToggle showLabel={true} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
