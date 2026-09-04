"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    <header className="fixed top-0 w-full z-50 bg-[#0B1220]/90 backdrop-blur-md border-b border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-wider text-white">
              SANOTA
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="#"
              className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-lg shadow-[#E8B84B]/20"
            >
              Request a Consultation
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1220] border-b border-[#1e293b]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-[#131C2E] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#"
              className="block mt-4 text-center px-4 py-2 border border-transparent text-base font-medium rounded text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643]"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
