"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Industries", href: "#" },
  { name: "Services", href: "#" },
  { name: "Products & Systems", href: "#" },
  { name: "Projects", href: "#" },
  { name: "About", href: "#" },
  { name: "Insights", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#CCE0FF]/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center mr-6 hover:opacity-80 transition-opacity">
              <Image 
                src="/lg.png" 
                alt="Sanota Logo" 
                width={180} 
                height={54} 
                className="object-contain h-12 w-auto" 
                priority
              />
            </Link>
          </div>
          
          <nav className="hidden xl:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[14px] font-bold text-slate-800 hover:text-[#2E5EAA] transition-colors uppercase tracking-wider whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center ml-6 shrink-0">
            <Link
              href="#"
              className="inline-flex items-center px-7 py-3 border border-transparent text-[14px] font-bold rounded-full text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors uppercase tracking-wider shadow-lg whitespace-nowrap"
            >
              Request a Consultation
            </Link>
          </div>

          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-[#2E5EAA]"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="xl:hidden bg-[#CCE0FF] border-b border-slate-200 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-[15px] font-bold text-slate-800 hover:text-[#2E5EAA] hover:bg-slate-200/50 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#"
              className="block mt-6 text-center px-4 py-4 border border-transparent text-[15px] font-bold rounded-md text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] uppercase tracking-wider"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
