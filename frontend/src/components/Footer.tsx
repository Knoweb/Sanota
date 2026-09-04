import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] border-t border-[#1e293b]">
      {/* Pre-footer CTA */}
      <div className="border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-[#131C2E] to-[#0B1220] rounded-2xl border border-[#1e293b] p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Have an Operational Challenge or Engineering Requirement?
            </h2>
            <div className="h-1 w-24 bg-[#E8B84B] mx-auto mb-8 rounded-full" />
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="#"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-semibold rounded text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors"
              >
                Discuss Your Requirement
              </Link>
              <Link
                href="#"
                className="inline-flex justify-center items-center px-6 py-3 border border-[#2E5EAA] text-base font-semibold rounded text-white hover:bg-[#2E5EAA]/10 transition-colors"
              >
                Request a Technical Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-wider text-white mb-6 block">
              SANOTA
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Integrated Engineering, Automation and Smart Systems.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Industries</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors">Manufacturing</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors">Smart Agriculture</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors">Food Processing</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors">Tea Industry</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors flex items-center">All Industries <ArrowRight className="ml-1 h-3 w-3" /></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors">Design</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors">Develop</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors">Automate</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors">Connect</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors">Modernize</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors">Maintain (AMC)</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors">Projects</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors">Products & Systems</Link></li>
              <li><Link href="#" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#2E5EAA] mr-3 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">Sanota Engineering (Pvt) Ltd<br/>Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#2E5EAA] mr-3 shrink-0" />
                <span className="text-sm text-slate-400">+94 XX XXX XXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#2E5EAA] mr-3 shrink-0" />
                <a href="mailto:info@sanota.lk" className="text-sm text-slate-400 hover:text-[#E8B84B] transition-colors">info@sanota.lk</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sanota Engineering (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
