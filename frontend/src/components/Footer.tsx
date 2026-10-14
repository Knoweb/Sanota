import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-white dark:bg-[#050B14] border-t border-[#ECE7DD] dark:border-slate-800/80 pt-8 pb-4">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Info */}
        <div className="mb-6">
          <Link href="/" className="inline-block mb-3">
            <Image 
              src="/lg.png" 
              alt="Sanota Logo" 
              width={120} 
              height={40} 
              className="dark:brightness-0 dark:invert opacity-95 h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-[#555E75] dark:text-slate-400 text-[13px] leading-relaxed max-w-2xl">
            Integrated engineering solutions developed around real operational requirements.
          </p>
          <p className="text-[#C59B27] dark:text-[#E8B84B] font-bold text-[10px] sm:text-[11px] tracking-widest uppercase mt-2">
            Engineering <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Automation <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> IoT <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Software <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Implementation <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Lifecycle Support
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          
          {/* Column 1: Industries */}
          <div>
            <h4 className="text-[#17135B] dark:text-white font-bold mb-3 tracking-wider text-[13px]">Industries</h4>
            <ul className="space-y-1.5">
              {[
                { name: 'Manufacturing & Industrial Automation', href: '/industries' },
                { name: 'Smart Agriculture', href: '/industries' },
                { name: 'Food & Beverage Processing', href: '/industries' },
                { name: 'Tea Industry Solutions', href: '/industries' },
                { name: 'Logistics & Warehousing', href: '/industries' },
                { name: 'Energy & Resource Efficiency', href: '/industries' },
                { name: 'Environmental & Waste Solutions', href: '/industries' },
                { name: 'Infrastructure & Smart Facilities', href: '/industries' },
                { name: 'Healthcare & Biomedical Engineering', href: '/industries' },
                { name: 'Research & Custom Product Development', href: '/industries' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#555E75] hover:text-[#C59B27] dark:text-slate-400 dark:hover:text-[#E8B84B] text-[12px] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-[#17135B] dark:text-white font-bold mb-3 tracking-wider text-[13px]">Services</h4>
            <ul className="space-y-1.5">
              {[
                { name: 'Engineering Consultation', href: '/services' },
                { name: 'System & Product Design', href: '/services' },
                { name: 'Custom Machinery Development', href: '/services' },
                { name: 'Automation, IoT & Digital Integration', href: '/services' },
                { name: 'Retrofit & Modernization', href: '/services' },
                { name: 'Project Execution & Commissioning', href: '/services' },
                { name: 'AMC & Lifecycle Support', href: '/services' },
                { name: 'Technical Training', href: '/services' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#555E75] hover:text-[#C59B27] dark:text-slate-400 dark:hover:text-[#E8B84B] text-[12px] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div>
            <h4 className="text-[#17135B] dark:text-white font-bold mb-3 tracking-wider text-[13px]">Explore</h4>
            <ul className="space-y-1.5">
              {[
                { name: 'Products & Systems', href: '/products' },
                { name: 'Completed Work', href: '/media' },
                { name: 'Project Stories', href: '/media' },
                { name: 'Videos', href: '/media' },
                { name: 'Photo Gallery', href: '/media' },
                { name: 'Innovation & Partnerships', href: '/contact' },
                { name: 'About Sanota', href: '/about' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#555E75] hover:text-[#C59B27] dark:text-slate-400 dark:hover:text-[#E8B84B] text-[12px] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-[#17135B] dark:text-white font-bold mb-3 tracking-wider text-[13px]">Contact</h4>
            <ul className="space-y-2.5 mb-5">
              <li className="flex items-start">
                <Globe className="w-5 h-5 text-[#C59B27] dark:text-[#2E5EAA] mr-4 shrink-0 mt-0.5" />
                <a href="https://www.sanotaglobal.com" target="_blank" rel="noopener noreferrer" className="text-[#555E75] hover:text-[#C59B27] dark:text-slate-400 dark:hover:text-[#E8B84B] transition-colors text-[12px]">
                  www.sanotaglobal.com
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-3.5 h-3.5 text-[#C59B27] dark:text-[#2E5EAA] mr-2.5 shrink-0" />
                <a href="mailto:info@sanotaglobal.com" className="text-[#555E75] hover:text-[#C59B27] dark:text-slate-400 dark:hover:text-[#E8B84B] transition-colors text-[12px]">
                  info@sanotaglobal.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-3.5 h-3.5 text-[#C59B27] dark:text-[#2E5EAA] mr-2.5 shrink-0" />
                <span className="text-[#555E75] dark:text-slate-400 text-[12px]">+94 740 70 99 89</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-3.5 h-3.5 text-[#C59B27] dark:text-[#2E5EAA] mr-2.5 shrink-0 mt-0.5" />
                <span className="text-[#555E75] dark:text-slate-400 text-[12px]">Sri Lanka</span>
              </li>
            </ul>

            {/* Challenge Callout Card (Matching User CSS specs) */}
            <div className="bg-gradient-to-br from-[#0F0C3B] to-[#1A1658] border border-[#D4AF37]/40 rounded-xl p-4 mb-5 shadow-lg shadow-[#17135B]/15">
              <h5 className="text-white font-bold text-[12.5px] mb-1">Have an engineering challenge?</h5>
              <p className="text-slate-300 text-[11px] leading-relaxed mb-3">
                Tell us what you need to achieve.
              </p>
              <Link 
                href="/tell-us-your-challenge"
                className="flex items-center justify-center w-full py-2 bg-[#E5A93C] hover:bg-[#F0B74C] text-[#111424] font-bold text-[11.5px] rounded-md transition-colors shadow-sm"
              >
                Start Your Enquiry
              </Link>
            </div>

            <h4 className="text-[#17135B] dark:text-white font-bold mb-2.5 tracking-wider text-[13px]">Social Links</h4>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/company/sanotalk/?originalSubdomain=lk" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#FAF8F5] dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.instagram.com/sanota_lk/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#FAF8F5] dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://web.facebook.com/SanotaPrivateLimited/?_rdc=1&_rdr#" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#FAF8F5] dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-slate-500 text-xs">
            © {currentYear} Sanota (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 text-slate-500 text-xs">
            <Link href="#" className="hover:text-[#17135B] dark:hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#17135B] dark:hover:text-slate-300 transition-colors">Terms and Conditions</Link>
          </div>
          <p className="text-slate-500 text-xs flex items-center">
            Built by: <a href="https://www.knowebsolutions.com/" target="_blank" rel="noopener noreferrer" className="ml-1 text-[#C59B27] dark:text-[#E8B84B] hover:text-[#17135B] dark:hover:text-white font-semibold transition-colors">Knoweb</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
