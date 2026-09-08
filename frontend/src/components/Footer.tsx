import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050B14] border-t border-slate-800/80 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/lg.png" 
                alt="Sanota Logo" 
                width={150} 
                height={50} 
                className="brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Integrated engineering for evolving industries. We design, develop, automate, modernize and maintain machinery, products, processes and operational systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Industries', href: '/industries' },
                { name: 'Services', href: '/services' },
                { name: 'Products & Systems', href: '/products' },
                { name: 'Media', href: '/media' },
                { name: 'About', href: '/about' },
                { name: 'Insights', href: '/insights' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-[#E8B84B] text-[15px] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Contact Information</h4>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#2E5EAA] mr-4 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  69, Panagoda, Homagama, Sri Lanka
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#2E5EAA] mr-4 shrink-0" />
                <span className="text-slate-400 text-sm">
                  +94 11 123 4567
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#2E5EAA] mr-4 shrink-0" />
                <span className="text-slate-400 text-sm">
                  contact@sanota.com
                </span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Brand Line */}
        <div className="pt-12 pb-8 text-center border-t border-slate-800">
          <h2 className="text-3xl md:text-5xl font-black text-white/10 uppercase tracking-[0.2em]">
            Engineered for Performance.
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-xs">
            © {currentYear} Sanota (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 text-slate-500 text-xs">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
          <p className="text-slate-500 text-xs flex items-center">
            Built by: <a href="https://knoweb.com" target="_blank" rel="noopener noreferrer" className="ml-1 text-slate-400 hover:text-white font-semibold transition-colors">Knoweb</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
