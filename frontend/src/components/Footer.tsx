import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050B14] border-t border-slate-800/80 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <Link href="/" className="inline-block">
            <Image 
              src="/lg.png" 
              alt="Sanota Logo" 
              width={150} 
              height={50} 
              className="brightness-0 invert opacity-90"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Divisions */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-[15px]">Divisions</h4>
            <ul className="space-y-4">
              {[
                { name: 'Machinery & Automation', href: '/services' },
                { name: 'Thermal & Environmental Systems', href: '/services' },
                { name: 'Technical Support & AMC', href: '/services' },
                { name: 'Custom Engineering & R&D', href: '/services' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-[#E8B84B] text-[14px] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Platforms */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-[15px]">Platforms</h4>
            <ul className="space-y-4">
              {[
                { name: 'Knoweb Digital Platforms', href: 'https://knoweb.com' },
                { name: 'Farmnet Smart Agriculture', href: '/products' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-[#E8B84B] text-[14px] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-[15px]">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Sanota', href: '/about' },
                { name: 'Media', href: '/media' },
                { name: 'Insights', href: '/insights' },
                { name: 'Contact', href: '/contact' },
                { name: 'Careers', href: '/careers' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-[#E8B84B] text-[14px] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-[15px]">Connect</h4>
            <ul className="space-y-4 mb-8">
              {[
                { name: 'Tell Us Your Challenge', href: '/tell-us-your-challenge' },
                { name: 'Request AMC Assessment', href: '/contact' },
                { name: 'General Enquiries', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-[#E8B84B] text-[14px] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-bold mb-4 tracking-wider text-[15px]">Social Links</h4>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-[#131C2E] flex items-center justify-center text-slate-400 hover:text-[#E8B84B] hover:bg-[#E8B84B]/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-[#131C2E] flex items-center justify-center text-slate-400 hover:text-[#E8B84B] hover:bg-[#E8B84B]/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-[#131C2E] flex items-center justify-center text-slate-400 hover:text-[#E8B84B] hover:bg-[#E8B84B]/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>
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
