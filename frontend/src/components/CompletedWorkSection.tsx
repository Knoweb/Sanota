"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getStrapiBaseUrl } from "@/lib/api";

const industryFilters = ["All Projects", "Manufacturing", "Agriculture", "Food & Beverage", "Tea", "Logistics", "Energy", "Environment", "Infrastructure", "Healthcare", "Research & Development"];
const solutionFilters = ["All Solutions", "Machinery", "Automation", "IoT", "Software", "Modernization", "Product Development", "Project Execution", "AMC"];

const industryFiltersES: Record<string, string> = {
  "All Projects": "Todos los proyectos",
  "Manufacturing": "Fabricación",
  "Agriculture": "Agricultura",
  "Food & Beverage": "Alimentos y bebidas",
  "Tea": "Té",
  "Logistics": "Logística",
  "Energy": "Energía",
  "Environment": "Medio ambiente",
  "Infrastructure": "Infraestructura",
  "Healthcare": "Sanidad",
  "Research & Development": "Investigación y desarrollo"
};

const solutionFiltersES: Record<string, string> = {
  "All Solutions": "Todas las soluciones",
  "Machinery": "Maquinaria",
  "Automation": "Automatización",
  "IoT": "IoT",
  "Software": "Software",
  "Modernization": "Modernización",
  "Product Development": "Desarrollo de productos",
  "Project Execution": "Ejecución de proyectos",
  "AMC": "AMC"
};

const industryFiltersJA: Record<string, string> = {
  "All Industries": "すべての業界",
  "Food & Beverage": "食品・飲料",
  "Tea": "製茶",
  "Research & Development": "研究・開発",
  "Energy": "エネルギー",
  "Environment": "環境",
  "Manufacturing": "製造業"
};

const solutionFiltersJA: Record<string, string> = {
  "All Solutions": "すべてのソリューション",
  "Machinery": "産業機械",
  "Automation": "オートメーション",
  "IoT": "IoT",
  "Software": "ソフトウェア",
  "Modernization": "近代化・改修",
  "Product Development": "製品開発",
  "Project Execution": "プロジェクト実行",
  "AMC": "AMC（年間保守）"
};

const projectCriteriaJA = [
  "業界または運用環境",
  "対象となる製品、機械、またはシステム",
  "統合された技術・テクノロジー",
  "運用上の成果・効果",
  "お客様の具体的なご要件",
  "Sanotaが提供したサービス",
  "導入・実装におけるSanotaの役割",
  "関連する写真または動画"
];

const projectCriteria = [
  "The industry or operating environment",
  "The product, machinery or system involved",
  "The technologies integrated",
  "The operational outcome",
  "The client’s requirement",
  "The services provided by Sanota",
  "Sanota's role in implementation",
  "Related photographs or videos"
];

const projectCriteriaES = [
  "La industria o entorno operativo",
  "El producto, maquinaria o sistema involucrado",
  "Las tecnologías integradas",
  "El resultado operativo obtenido",
  "El requerimiento específico del cliente",
  "Los servicios proporcionados por Sanota",
  "El papel de Sanota en la implementación",
  "Fotografías o vídeos relacionados"
];

const industryFiltersAR: Record<string, string> = {
  "All Projects": "جميع المشاريع",
  "Manufacturing": "التصنيع",
  "Agriculture": "الزراعة",
  "Food & Beverage": "الأغذية والمشروبات",
  "Tea": "الشاي",
  "Logistics": "الخدمات اللوجستية",
  "Energy": "الطاقة",
  "Environment": "البيئة",
  "Infrastructure": "البنية التحتية",
  "Healthcare": "الرعاية الصحية",
  "Research & Development": "البحث والتطوير"
};

const solutionFiltersAR: Record<string, string> = {
  "All Solutions": "جميع الحلول",
  "Machinery": "الآلات الصناعية",
  "Automation": "الأتمتة",
  "IoT": "إنترنت الأشياء",
  "Software": "البرمجيات",
  "Modernization": "التحديث والتطوير",
  "Product Development": "تطوير المنتجات",
  "Project Execution": "تنفيذ المشاريع",
  "AMC": "عقود الصيانة (AMC)"
};

const projectCriteriaAR = [
  "مجال العمل أو بيئة التشغيل",
  "المنتج أو الآلة أو النظام المعني",
  "التقنيات والتكنولوجيا المدمجة",
  "النتيجة التشغيلية المحققة",
  "متطلبات العميل المحددة",
  "الخدمات المقدمة من سانوتا",
  "دور سانوتا في التنفيذ والتطبيق",
  "الصور أو مقاطع الفيديو ذات الصلة"
];

// Real completed projects matching Sanota's actual equipment and systems portfolio
const dummyProjects: any = [
  {
    id: 1,
    attributes: {
      title: 'Integrated Food Processing & Conveyor Line',
      description: 'Continuous food preparation and packaging conveyor system built with food-grade stainless steel and automated washdown controls.',
      industry: 'Food & Beverage',
      solution: 'Machinery',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/food-processing-line.webp', isLocal: true } } }
    }
  },
  {
    id: 2,
    attributes: {
      title: 'Carton Box Making & Packaging Machine',
      description: 'High-speed precision carton box folding and gluing machinery with integrated PLC controls and automated sheet feeding.',
      industry: 'Manufacturing',
      solution: 'Machinery',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/box-making-machine-1.webp', isLocal: true } } }
    }
  },
  {
    id: 3,
    attributes: {
      title: 'Compressed Tea Coin & Tablet Press',
      description: 'High-pressure hydraulic compression machinery engineered for specialty tea coin production with uniform density.',
      industry: 'Tea, Food & Beverage',
      solution: 'Machinery, Product Development',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/tea-coin-machine.webp', isLocal: true } } }
    }
  },
  {
    id: 4,
    attributes: {
      title: 'Smart Drainage IoT Flood Monitoring Sensor',
      description: 'Solar-powered IoT ultrasonic drainage water level sensor network transmitting real-time flood alerts to cloud dashboard.',
      industry: 'Environment, Infrastructure',
      solution: 'IoT, Software',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/drain-sensor-2.webp', isLocal: true } } }
    }
  },
  {
    id: 5,
    attributes: {
      title: 'Automated Guided Vehicle (AGV) & Conveyor',
      description: 'Autonomous guided internal transport vehicle integrated with automated unloading roller conveyor for warehouse logistics.',
      industry: 'Logistics, Manufacturing',
      solution: 'Automation, Machinery',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/agv-unloading-conveyor.webp', isLocal: true } } }
    }
  },
  {
    id: 6,
    attributes: {
      title: 'Ten Tray Agricultural Dehydrator',
      description: 'Controlled hot air dehydration chamber with precision digital airflow and temperature controls for agricultural produce.',
      industry: 'Agriculture, Food & Beverage',
      solution: 'Machinery',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/ten-tray-dryer.webp', isLocal: true } } }
    }
  },
  {
    id: 7,
    attributes: {
      title: 'Commercial Solar Thermal Hot Water System',
      description: 'High-capacity industrial solar thermal hot water heating installation delivering clean, energy-efficient thermal utility.',
      industry: 'Energy',
      solution: 'Project Execution, Machinery',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/solar-hot-water-system.webp', isLocal: true } } }
    }
  },
  {
    id: 8,
    attributes: {
      title: 'Hydraulic Scrap & Waste Baling Press',
      description: 'Heavy-duty hydraulic compaction baling press for recycling facilities and waste volume reduction with automated cycle controls.',
      industry: 'Environment, Manufacturing',
      solution: 'Machinery, Modernization',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/bale-machine.webp', isLocal: true } } }
    }
  },
  {
    id: 9,
    attributes: {
      title: 'Precision Stopper Torque Testing Unit',
      description: 'Custom laboratory testing instrument measuring container closure torque with PC curve visualization and data logging.',
      industry: 'Research & Development',
      solution: 'Product Development',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/stopper-tester.webp', isLocal: true } } }
    }
  },
  {
    id: 10,
    attributes: {
      title: 'Rotary Cutter Machine Modernization',
      description: 'Complete mechanical overhaul and obsolete control panel modernization, tripling jar-seal cutting output with servo precision.',
      industry: 'Manufacturing',
      solution: 'Modernization, Machinery',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/eraser-cutter.webp', isLocal: true } } }
    }
  },
  {
    id: 11,
    attributes: {
      title: 'Smart Weighing & Cloud Inventory Station',
      description: 'Digital scale station integrated with barcode scanner, touchscreen operator terminal, and cloud ERP inventory logging.',
      industry: 'Logistics',
      solution: 'Software, IoT',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/smart-weighing.webp', isLocal: true } } }
    }
  },
  {
    id: 12,
    attributes: {
      title: 'Clinical Electronic Nerve Stimulator Device',
      description: 'Medical electrotherapy device developed from electronic concept through prototyping to clinical electrical safety standards.',
      industry: 'Healthcare',
      solution: 'Product Development',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/nerve-stimulator.webp', isLocal: true } } }
    }
  },
  {
    id: 13,
    attributes: {
      title: 'Industrial Steam Boiler Automation & AMC',
      description: 'Steam boiler electrical control panel assembly, burner calibration, and scheduled preventive maintenance and AMC.',
      industry: 'Energy, Manufacturing',
      solution: 'AMC, Machinery',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/boiler.webp', isLocal: true } } }
    }
  },
  {
    id: 14,
    attributes: {
      title: 'Custom Industrial PLC Control Panels',
      description: 'Engineered electrical switchboards, PLC racks, HMI operator screens, and servo motor drives for factory automation lines.',
      industry: 'Manufacturing, Research & Development',
      solution: 'Automation, AMC',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/plc-panel.webp', isLocal: true } } }
    }
  },
  {
    id: 15,
    attributes: {
      title: 'Automated Tea Trough Withering Control',
      description: 'Automated climate regulation retrofitted onto tea withering troughs with digital humidity and airflow modulation.',
      industry: 'Tea, Agriculture',
      solution: 'Automation, Modernization',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/green-tea-dryer.webp', isLocal: true } } }
    }
  },
  {
    id: 16,
    attributes: {
      title: 'River Solid Waste Containment Boom',
      description: 'Heavy-duty engineered waterway debris barrier intercepting floating plastic waste in municipal canals and waterways.',
      industry: 'Infrastructure, Environment',
      solution: 'Project Execution',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/trash-boom.webp', isLocal: true } } }
    }
  },
  {
    id: 17,
    attributes: {
      title: 'Municipal Smart Traffic Signal Controller',
      description: 'Microcontroller traffic signal timing and sequencing hardware for high-congestion municipal road intersections.',
      industry: 'Infrastructure',
      solution: 'Software, Automation',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/traffic-light-system-kadawatha.webp', isLocal: true } } }
    }
  },
  {
    id: 18,
    attributes: {
      title: 'Electronic Multi-Axis ICU Hospital Bed',
      description: 'Motorized hospital bed actuation system with emergency CPR positioning and ergonomic patient controller.',
      industry: 'Healthcare',
      solution: 'Machinery, Product Development',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/icu-bed.webp', isLocal: true } } }
    }
  },
  {
    id: 19,
    attributes: {
      title: 'Automated Yogurt Incubation Chamber',
      description: 'Controlled temperature and fermentation chamber designed for commercial dairy culture setting and incubation.',
      industry: 'Food & Beverage',
      solution: 'Product Development, Machinery',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/yogurt-incubator.webp', isLocal: true } } }
    }
  },
  {
    id: 20,
    attributes: {
      title: 'Kaastu Technical Training & Mechanism Bench',
      description: 'Modular engineering training bench for hands-on technician instruction in electro-mechanical machinery assembly.',
      industry: 'Research & Development',
      solution: 'AMC, Automation',
      linkText: 'Explore Project',
      coverImage: { data: { attributes: { url: '/real-projects/kaastu-training-unit.webp', isLocal: true } } }
    }
  }
];

interface Project {
  id: number;
  attributes: {
    title: string;
    description: string;
    industry: string;
    solution: string;
    clientRequirement: string;
    sanotaRole: string;
    outcome: string;
    technologies: string;
    linkText: string;
    coverImage: {
      data: {
        attributes: {
          url: string;
          isLocal?: boolean;
        }
      } | null;
    }
  }
}

export default function CompletedWorkSection() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndustry, setActiveIndustry] = useState("All Projects");
  const [activeSolution, setActiveSolution] = useState("All Solutions");
  const [showProjects, setShowProjects] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const strapiUrl = getStrapiBaseUrl();
        if (!strapiUrl) {
          setProjects(dummyProjects);
          setLoading(false);
          return;
        }

        const res = await fetch(`${strapiUrl}/api/projects?populate=*`, {
          signal: AbortSignal.timeout(3000),
        }).catch(() => null);

        if (res && res.ok) {
          const data = await res.json();
          if (data && data.data && data.data.length > 0) {
            setProjects(data.data);
          } else {
            setProjects(dummyProjects);
          }
        } else {
          setProjects(dummyProjects);
        }
      } catch {
        setProjects(dummyProjects);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) => 
    (activeIndustry === "All Projects" || project.attributes.industry === activeIndustry) &&
    (activeSolution === "All Solutions" || project.attributes.solution === activeSolution)
  );

  const renderProjectGrid = (gridProjects: Project[]) => (
    gridProjects.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {gridProjects.map((project) => (
          <Link key={project.id} href="#" className="photo-overlay group relative h-[320px] rounded-[2rem] overflow-hidden block border border-slate-700/60 shadow-xl hover:border-[#E8B84B]/60 transition-all duration-500">
            {/* Background Image */}
            {(() => {
              const imgUrl = project.attributes.coverImage?.data?.attributes?.url;
              const isLocal = project.attributes.coverImage?.data?.attributes?.isLocal;
              const finalSrc = imgUrl ? (isLocal ? imgUrl : `http://localhost:1337${imgUrl}`) : null;
              
              return finalSrc ? (
                <Image 
                  src={finalSrc}
                  alt={project.attributes.title} 
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#131C2E] to-[#0B1220]" />
              );
            })()}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#0B1220]/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
              <h4 className="text-xl font-bold !text-white mb-2 group-hover:text-[#E8B84B] transition-colors duration-500" style={{ color: '#FFFFFF' }}>{project.attributes.title}</h4>
              <p className="text-slate-200 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:text-white transition-colors duration-500" style={{ color: '#CBD5E1' }}>{project.attributes.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.attributes.industry && (
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-md"
                    style={{
                      backgroundColor: 'rgba(15, 23, 42, 0.95)',
                      borderColor: 'rgba(255, 255, 255, 0.35)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      color: '#FFFFFF'
                    }}
                  >
                    {(() => {
                      const primaryInd = project.attributes.industry.split(',')[0].trim();
                      return isAr && industryFiltersAR[primaryInd] ? industryFiltersAR[primaryInd] : isJa && industryFiltersJA[primaryInd] ? industryFiltersJA[primaryInd] : isEs && industryFiltersES[primaryInd] ? industryFiltersES[primaryInd] : primaryInd;
                    })()}
                  </span>
                )}
                {project.attributes.solution && (
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-lg backdrop-blur-md"
                    style={{
                      backgroundColor: 'rgba(232, 184, 75, 0.22)',
                      borderColor: '#E8B84B',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      color: '#F5C24E'
                    }}
                  >
                    {(() => {
                      const primarySol = project.attributes.solution.split(',')[0].trim();
                      return isAr && solutionFiltersAR[primarySol] ? solutionFiltersAR[primarySol] : isJa && solutionFiltersJA[primarySol] ? solutionFiltersJA[primarySol] : isEs && solutionFiltersES[primarySol] ? solutionFiltersES[primarySol] : primarySol;
                    })()}
                  </span>
                )}
              </div>

              {/* Animated Link */}
              <div className="inline-flex items-center text-xs font-bold text-[#E8B84B] uppercase tracking-wider opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {isJa ? "プロジェクトを見る" : isDe ? "Projekt entdecken" : isEs ? "Explorar proyecto" : (project.attributes.linkText || "Explore Project")} <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    ) : (
      <div className="text-center py-12 bg-[#131C2E]/30 rounded-2xl border border-slate-800 mt-8">
        <p className="text-slate-400 mb-4">{isJa ? "この条件に一致するプロジェクトは見つかりませんでした。" : isDe ? "Keine Projekte gefunden, die diesem Filter entsprechen." : isEs ? "No se encontraron proyectos con este filtro." : "No projects found matching this filter."}</p>
      </div>
    )
  );

  return (
    <section id="completed-work" className="py-24 bg-[#050B14] border-t border-slate-800/50 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
              {isAr ? "الأعمال المنجزة" : isJa ? "納入実績" : isDe ? "Abgeschlossene Arbeiten" : isEs ? "Trabajo Terminado" : "Completed Work"}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {isAr ? "حلول عملية لبيئات التشغيل الحقيقية" : isJa ? "実際の運用環境に向けた実践的ソリューション" : isDe ? "Praktische Lösungen für reale Betriebsumgebungen" : isEs ? "Soluciones prácticas para entornos operativos reales" : "Practical Solutions for Real Operating Environments"}
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              {isAr
                ? "تعرض مجموعة الأعمال المنجزة مشاريع مختارة لشركة سانوتا عبر مختلف الصناعات والتخصصات التقنية."
                : isJa
                ? "納入実績コレクションでは、多様な業界や技術分野におけるSanotaの選定プロジェクトを紹介しています。"
                : isDe
                ? "Die Sammlung abgeschlossener Arbeiten präsentiert ausgewählte Sanota-Projekte aus verschiedenen Branchen und technischen Fachbereichen."
                : isEs 
                ? "La colección de trabajos completados presenta proyectos seleccionados de Sanota en diversas industrias y disciplinas técnicas."
                : "The Completed Work collection presents selected Sanota projects across industries and technical disciplines."}
            </p>
            <p className="text-slate-500 italic text-sm leading-relaxed border-l-2 border-slate-800 pl-4">
              {isAr
                ? "في حال تطبيق اتفاقيات سرية العميل، قد يتم عرض معلومات المشروع دون الكشف عن هوية العميل أو التفاصيل الفنية الحساسة."
                : isJa
                ? "機密保持契約が適用される場合、クライアントを特定せず、機密技術の詳細を開示しない形でプロジェクト情報を掲載しています。"
                : isDe
                ? "Bei Vertraulichkeitsvereinbarungen können Projektinformationen dargestellt werden, ohne den Kunden zu identifizieren oder vertrauliche technische Details offenzulegen."
                : isEs 
                ? "Cuando se aplique la confidencialidad del cliente, la información del proyecto podrá presentarse sin identificar al cliente ni revelar detalles técnicos confidenciales."
                : "Where client confidentiality applies, project information may be presented without identifying the client or disclosing sensitive technical details."}
            </p>
          </div>
          <div className="glowing-card bg-[#131C2E]/40 border border-slate-800 rounded-2xl p-6">
            <p className="text-white font-bold mb-4">
              {isAr ? "يحدد كل مشروع منجز ما يلي:" : isJa ? "各プロジェクト事例の記載項目：" : isDe ? "Jeder Projekteintrag beschreibt:" : isEs ? "Cada ficha de proyecto identifica:" : "Each project entry should identify:"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(isAr ? projectCriteriaAR : isJa ? projectCriteriaJA : isEs ? projectCriteriaES : projectCriteria).map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#E8B84B] mt-0.5 mr-2 shrink-0" />
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 1: Industry Filters */}
        <div className="mb-10">
          <div className="mb-4">
            <h4 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-4">
              {isAr ? "تصفية حسب الصناعة" : isJa ? "業界で絞り込む" : isDe ? "Nach Branche filtern" : isEs ? "Filtrar por industria" : "Filter by Industry"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {industryFilters.map((filter, idx) => (
                <button 
                  key={idx} 
                  onClick={() => { setActiveIndustry(filter); setShowProjects(true); }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${activeIndustry === filter ? 'bg-[#E8B84B] text-[#0B1220]' : 'bg-[#131C2E] border border-slate-700 text-slate-300 hover:text-white'}`}
                >
                  {isAr ? (industryFiltersAR[filter] || filter) : isJa ? (industryFiltersJA[filter] || filter) : isEs ? (industryFiltersES[filter] || filter) : filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: Solution Filters */}
        <div className="mb-12 pt-10 border-t border-slate-800/50">
          <div className="mb-4">
            <h4 className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-4">
              {isAr ? "تصفية حسب الحل" : isJa ? "ソリューションで絞り込む" : isDe ? "Nach Lösung filtern" : isEs ? "Filtrar por solución" : "Filter by Solution"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {solutionFilters.map((filter, idx) => (
                <button 
                  key={idx} 
                  onClick={() => { setActiveSolution(filter); setShowProjects(true); }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${activeSolution === filter ? 'bg-[#E8B84B] text-[#0B1220]' : 'bg-[#131C2E] border border-slate-700 text-slate-300 hover:text-white'}`}
                >
                  {isAr ? (solutionFiltersAR[filter] || filter) : isJa ? (solutionFiltersJA[filter] || filter) : isEs ? (solutionFiltersES[filter] || filter) : filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {!showProjects ? (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowProjects(true)}
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent hover:border-[#E8B84B]/50 text-[15px] font-bold rounded-lg text-[#0B1220] bg-[#E8B84B] hover:bg-[#d4a643] transition-colors shadow-[0_0_20px_rgba(232,184,75,0.3)] hover:shadow-[0_0_30px_rgba(232,184,75,0.5)] group"
            >
              {isAr ? "تصفح الأعمال المنجزة" : isJa ? "納入実績を見る" : isDe ? "Abgeschlossene Arbeiten ansehen" : isEs ? "Explorar Trabajos Completados" : "Browse Completed Work"}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ) : (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {loading ? <div className="text-center py-12 text-slate-400">{isAr ? "جاري تحميل المشاريع..." : isJa ? "プロジェクトを読み込み中..." : isDe ? "Projekte werden geladen..." : isEs ? "Cargando proyectos..." : "Loading projects..."}</div> : renderProjectGrid(filteredProjects)}
          </div>
        )}

      </div>
    </section>
  );
}
