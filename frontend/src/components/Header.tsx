"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Industries", href: "/industries" },
  { name: "Services", href: "/services" },
  { name: "Products & Systems", href: "/products" },
  { name: "Media", href: "/media" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-200/95 via-[#2E5EAA]/80 to-[#050B14]/95 backdrop-blur-md shadow-[0_10px_40px_-10px_rgba(5,11,20,0.5)] border-b border-[#2E5EAA]/20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center mr-6 hover:opacity-80 transition-opacity">
              <Image
                src="/lg.png"
                alt="Sanota Logo"
                width={150}
                height={45}
                className="object-contain h-10 w-auto"
                priority
              />
            </Link>
          </div>

          <nav className="hidden xl:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-1 py-2 text-[13px] font-bold transition-all duration-300 uppercase tracking-wider whitespace-nowrap group hover:-translate-y-1 ${
                    isActive ? "text-[#E8B84B]" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E8B84B] rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {/* Hover indicator for non-active tabs */}
                  {!isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E8B84B]/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center ml-6 shrink-0">
            <Link
              href="/tell-us-your-challenge"
              className="inline-flex items-center px-7 py-3 border border-transparent text-[14px] font-bold rounded-full text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors uppercase tracking-wider shadow-lg whitespace-nowrap"
            >
              Tell Us Your Challenge
            </Link>
          </div>

          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-[#E8B84B]"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="xl:hidden bg-[#0B1220] border-b border-slate-800 shadow-[0_20px_40px_-10px_rgba(5,11,20,0.8)]">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-[14px] font-bold text-slate-300 hover:text-[#E8B84B] hover:bg-[#131C2E] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/tell-us-your-challenge"
              className="block mt-6 text-center px-4 py-4 border border-transparent text-[14px] font-bold rounded-md text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] uppercase tracking-wider"
            >
              Tell Us Your Challenge
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
