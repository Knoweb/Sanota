"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { homeES } from "@/locales/es/home";
import { homeDE } from "@/locales/de/home";
import { homeJA } from "@/locales/ja/home";
import { homeAR } from "@/locales/ar/home";

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

const industriesLinksDE = [
  { name: 'Fertigung & Industrieautomation', href: '/industries' },
  { name: 'Intelligente Landwirtschaft', href: '/industries' },
  { name: 'Lebensmittel- & Getränkeverarbeitung', href: '/industries' },
  { name: 'Lösungen für die Teeindustrie', href: '/industries' },
  { name: 'Logistik & Lagerhaltung', href: '/industries' },
  { name: 'Energie- & Ressourceneffizienz', href: '/industries' },
  { name: 'Umwelt- & Abfalllösungen', href: '/industries' },
  { name: 'Infrastruktur und intelligente Einrichtungen', href: '/industries' },
  { name: 'Gesundheitswesen & Biomedizintechnik', href: '/industries' },
  { name: 'Forschung & kundenspezifische Produktentwicklung', href: '/industries' }
];

const industriesLinksJA = [
  { name: '製造業および産業オートメーション', href: '/industries' },
  { name: 'スマート農業', href: '/industries' },
  { name: '食品・飲料加工', href: '/industries' },
  { name: '茶産業ソリューション', href: '/industries' },
  { name: '物流および倉庫管理', href: '/industries' },
  { name: 'エネルギーおよび資源効率', href: '/industries' },
  { name: '環境および廃棄物ソリューション', href: '/industries' },
  { name: 'インフラとスマート施設', href: '/industries' },
  { name: 'ヘルスケアおよび生物医学工学', href: '/industries' },
  { name: '研究開発およびカスタム製品開発', href: '/industries' }
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

const servicesLinksDE = [
  { name: 'Ingenieurberatung', href: '/services' },
  { name: 'System- und Produktentwicklung', href: '/services' },
  { name: 'Sondermaschinenbau', href: '/services' },
  { name: 'Automatisierung, IoT und digitale Integration', href: '/services' },
  { name: 'Nachrüstung und Modernisierung', href: '/services' },
  { name: 'Projektabwicklung und Inbetriebnahme', href: '/services' },
  { name: 'Wartungsverträge und Lebenszyklusbetreuung', href: '/services' },
  { name: 'Technische Schulungen', href: '/services' }
];

const servicesLinksJA = [
  { name: 'エンジニアリングコンサルティング', href: '/services' },
  { name: 'システムおよび製品設計', href: '/services' },
  { name: '特注機械開発', href: '/services' },
  { name: '自動化、IoT、デジタル統合', href: '/services' },
  { name: '改修および近代化', href: '/services' },
  { name: 'プロジェクト実行および試運転', href: '/services' },
  { name: 'AMCおよびライフサイクルサポート', href: '/services' },
  { name: '技術トレーニング', href: '/services' }
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

const exploreLinksDE = [
  { name: 'Produkte & Systeme', href: '/products' },
  { name: 'Abgeschlossene Projekte', href: '/media' },
  { name: 'Projektberichte', href: '/media' },
  { name: 'Videos', href: '/media' },
  { name: 'Fotogalerie', href: '/media' },
  { name: 'Innovation & Partnerschaften', href: '/contact' },
  { name: 'Über Sanota', href: '/about' }
];

const exploreLinksJA = [
  { name: '製品とシステム', href: '/products' },
  { name: '完成事例', href: '/media' },
  { name: 'プロジェクト事例', href: '/media' },
  { name: '動画', href: '/media' },
  { name: 'フォトギャラリー', href: '/media' },
  { name: 'イノベーションとパートナーシップ', href: '/contact' },
  { name: 'サノタについて', href: '/about' }
];

const industriesLinksAR = [
  { name: 'التصنيع والأتمتة الصناعية', href: '/industries' },
  { name: 'الزراعة الذكية', href: '/industries' },
  { name: 'معالجة الأغذية والمشروبات', href: '/industries' },
  { name: 'حلول صناعة الشاي', href: '/industries' },
  { name: 'الخدمات اللوجستية والتخزين', href: '/industries' },
  { name: 'كفاءة الطاقة والموارد', href: '/industries' },
  { name: 'حلول بيئية وإدارة النفايات', href: '/industries' },
  { name: 'البنية التحتية والمرافق الذكية', href: '/industries' },
  { name: 'الرعاية الصحية والهندسة الطبية الحيوية', href: '/industries' },
  { name: 'البحث وتطوير المنتجات المخصصة', href: '/industries' }
];

const servicesLinksAR = [
  { name: 'الاستشارات الهندسية', href: '/services' },
  { name: 'تصميم الأنظمة والمنتجات', href: '/services' },
  { name: 'تطوير الآلات المخصصة', href: '/services' },
  { name: 'الأتمتة وإنترنت الأشياء والتكامل الرقمي', href: '/services' },
  { name: 'التعديل التحديثي والتطوير', href: '/services' },
  { name: 'تنفيذ المشاريع وتشغيلها', href: '/services' },
  { name: 'عقود الصيانة ودعم دورة الحياة', href: '/services' },
  { name: 'التدريب الفني', href: '/services' }
];

const exploreLinksAR = [
  { name: 'المنتجات والأنظمة', href: '/products' },
  { name: 'الأعمال المنجزة', href: '/media' },
  { name: 'قصص المشاريع', href: '/media' },
  { name: 'مقاطع الفيديو والعروض التوضيحية', href: '/media' },
  { name: 'معرض الصور', href: '/media' },
  { name: 'الابتكار والشراكات', href: '/contact' },
  { name: 'عن سانوتا', href: '/about' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language, localizedHref } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const f = isAr ? homeAR.footer : isJa ? homeJA.footer : isDe ? homeDE.footer : isEs ? homeES.footer : null;

  const currentIndustries = isAr ? industriesLinksAR : isJa ? industriesLinksJA : isDe ? industriesLinksDE : isEs ? industriesLinksES : industriesLinksEN;
  const currentServices = isAr ? servicesLinksAR : isJa ? servicesLinksJA : isDe ? servicesLinksDE : isEs ? servicesLinksES : servicesLinksEN;
  const currentExplore = isAr ? exploreLinksAR : isJa ? exploreLinksJA : isDe ? exploreLinksDE : isEs ? exploreLinksES : exploreLinksEN;

  return (
    <footer className="relative z-10 bg-white dark:bg-[#050B14] border-t border-[#ECE7DD] dark:border-slate-800/80 pt-8 pb-4">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Info */}
        <div className="mb-6">
          <Link href={localizedHref("/")} className="inline-block mb-3">
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
                  <Link href={localizedHref(item.href)} className="text-[#555E75] hover:text-[#C59B27] dark:text-slate-400 dark:hover:text-[#E8B84B] text-[12px] transition-colors">
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
                  <Link href={localizedHref(item.href)} className="text-[#555E75] hover:text-[#C59B27] dark:text-slate-400 dark:hover:text-[#E8B84B] text-[12px] transition-colors">
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
                  <Link href={localizedHref(item.href)} className="text-[#555E75] hover:text-[#C59B27] dark:text-slate-400 dark:hover:text-[#E8B84B] text-[12px] transition-colors">
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
              {isAr ? "روابط التواصل الاجتماعي" : isJa ? "ソーシャルリンク" : isDe ? "Soziale Netzwerke" : isEs ? "Redes Sociales" : "Social Links"}
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
            {isAr ? "تم التطوير بواسطة:" : isJa ? "開発元：" : isDe ? "Entwickelt von:" : isEs ? "Desarrollado por:" : "Built by:"} <a href="https://www.knowebsolutions.com/" target="_blank" rel="noopener noreferrer" className="ml-1 text-[#C59B27] dark:text-[#E8B84B] hover:text-[#17135B] dark:hover:text-white font-semibold transition-colors">Knoweb</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
