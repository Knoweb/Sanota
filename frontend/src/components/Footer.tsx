"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { homeES } from "@/locales/es/home";

const industriesLinksEN = [
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
];

const industriesLinksES = [
  { name: 'Fabricación y automatización industrial', href: '/industries' },
  { name: 'Agricultura inteligente', href: '/industries' },
  { name: 'Procesamiento de alimentos y bebidas', href: '/industries' },
  { name: 'Soluciones para la industria del té', href: '/industries' },
  { name: 'Logística y almacenamiento', href: '/industries' },
  { name: 'Eficiencia energética y de recursos', href: '/industries' },
  { name: 'Soluciones ambientales y de residuos', href: '/industries' },
  { name: 'Infraestructura e instalaciones inteligentes', href: '/industries' },
  { name: 'Ingeniería biomédica y sanitaria', href: '/industries' },
  { name: 'Investigación y desarrollo de productos a medida', href: '/industries' }
];

const servicesLinksEN = [
  { name: 'Engineering Consultation', href: '/services' },
  { name: 'System & Product Design', href: '/services' },
  { name: 'Custom Machinery Development', href: '/services' },
  { name: 'Automation, IoT & Digital Integration', href: '/services' },
  { name: 'Retrofit & Modernization', href: '/services' },
  { name: 'Project Execution & Commissioning', href: '/services' },
  { name: 'AMC & Lifecycle Support', href: '/services' },
  { name: 'Technical Training', href: '/services' }
];

const servicesLinksES = [
  { name: 'Consultoría de ingeniería', href: '/services' },
  { name: 'Diseño de sistemas y productos', href: '/services' },
  { name: 'Desarrollo de maquinaria a medida', href: '/services' },
  { name: 'Automatización, IoT e integración digital', href: '/services' },
  { name: 'Modernización y reacondicionamiento', href: '/services' },
  { name: 'Ejecución y puesta en marcha de proyectos', href: '/services' },
  { name: 'Contratos AMC y soporte del ciclo de vida', href: '/services' },
  { name: 'Capacitación técnica', href: '/services' }
];

const exploreLinksEN = [
  { name: 'Products & Systems', href: '/products' },
  { name: 'Completed Work', href: '/media' },
  { name: 'Project Stories', href: '/media' },
  { name: 'Videos', href: '/media' },
  { name: 'Photo Gallery', href: '/media' },
  { name: 'Innovation & Partnerships', href: '/contact' },
  { name: 'About Sanota', href: '/about' }
];

const exploreLinksES = [
  { name: 'Productos y sistemas', href: '/products' },
  { name: 'Trabajos completados', href: '/media' },
  { name: 'Historias de proyectos', href: '/media' },
  { name: 'Vídeos y demostraciones', href: '/media' },
  { name: 'Galería fotográfica', href: '/media' },
  { name: 'Innovación y alianzas', href: '/contact' },
  { name: 'Sobre Sanota', href: '/about' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const isEs = language === "es";
  const f = isEs ? homeES.footer : null;

  const currentIndustries = isEs ? industriesLinksES : industriesLinksEN;
  const currentServices = isEs ? servicesLinksES : servicesLinksEN;
  const currentExplore = isEs ? exploreLinksES : exploreLinksEN;

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
            {f ? f.tagline : "Integrated engineering solutions developed around real operational requirements."}
          </p>
          <p className="text-[#C59B27] dark:text-[#E8B84B] font-bold text-[10px] sm:text-[11px] tracking-widest uppercase mt-2">
            {f ? f.capabilityPills : (
              <>
                Engineering <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Automation <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> IoT <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Software <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Implementation <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Lifecycle Support
              </>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          
          {/* Column 1: Industries */}
          <div>
            <h4 className="text-[#17135B] dark:text-white font-bold mb-3 tracking-wider text-[13px]">
              {f ? f.headings.industries : "Industries"}
            </h4>
            <ul className="space-y-1.5">
              {currentIndustries.map((item) => (
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
            <h4 className="text-[#17135B] dark:text-white font-bold mb-3 tracking-wider text-[13px]">
              {f ? f.headings.services : "Services"}
            </h4>
            <ul className="space-y-1.5">
              {currentServices.map((item) => (
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
            <h4 className="text-[#17135B] dark:text-white font-bold mb-3 tracking-wider text-[13px]">
              {f ? f.headings.explore : "Explore"}
            </h4>
            <ul className="space-y-1.5">
              {currentExplore.map((item) => (
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
            <h4 className="text-[#17135B] dark:text-white font-bold mb-3 tracking-wider text-[13px]">
              {f ? f.headings.contact : "Contact"}
            </h4>
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
                <span className="text-[#555E75] dark:text-slate-400 text-[12px]">{f ? f.location : "Sri Lanka"}</span>
              </li>
            </ul>

            {/* Challenge Callout Card - with explicit high contrast styling for light & dark mode */}
            <div className="dark-overlay bg-gradient-to-br from-[#0F0C3B] to-[#1A1658] border border-[#D4AF37]/50 rounded-xl p-4 mb-5 shadow-lg shadow-[#17135B]/20">
              <h5 className="!text-white font-bold text-[12.5px] mb-1.5 leading-snug" style={{ color: '#FFFFFF' }}>
                {f ? f.callToActionText : "Have an engineering challenge?"}
              </h5>
              <p className="!text-slate-200 text-[11px] leading-relaxed mb-3.5 opacity-90" style={{ color: '#E2E8F0' }}>
                {f ? f.closingLine : "Tell us what you need to achieve."}
              </p>
              <Link 
                href="/tell-us-your-challenge"
                className="flex items-center justify-center w-full py-2 bg-[#E5A93C] hover:bg-[#F0B74C] text-[#111424] font-bold text-[11.5px] rounded-md transition-colors shadow-sm"
              >
                {f ? f.callToActionButton : "Start Your Enquiry"}
              </Link>
            </div>

            <h4 className="text-[#17135B] dark:text-white font-bold mb-2.5 tracking-wider text-[13px]">
              {f ? "Redes Sociales" : "Social Links"}
            </h4>
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
            {f ? f.rights : `© ${currentYear} Sanota (Pvt) Ltd. All rights reserved.`}
          </p>
          <div className="flex space-x-6 text-slate-500 text-xs">
            <Link href="#" className="hover:text-[#17135B] dark:hover:text-slate-300 transition-colors">
              {f ? f.privacyPolicy : "Privacy Policy"}
            </Link>
            <Link href="#" className="hover:text-[#17135B] dark:hover:text-slate-300 transition-colors">
              {f ? f.terms : "Terms and Conditions"}
            </Link>
          </div>
          <p className="text-slate-500 text-xs flex items-center">
            {f ? "Desarrollado por:" : "Built by:"} <a href="https://www.knowebsolutions.com/" target="_blank" rel="noopener noreferrer" className="ml-1 text-[#C59B27] dark:text-[#E8B84B] hover:text-[#17135B] dark:hover:text-white font-semibold transition-colors">Knoweb</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
