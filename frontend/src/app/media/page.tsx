"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import MediaNavigationCarousel from "@/components/MediaNavigationCarousel";
import CompletedWorkSection from "@/components/CompletedWorkSection";
import DriftWall from "@/components/DriftWall";
import NewsTagCloud from "@/components/NewsTagCloud";
import { ArrowRight, Play, Briefcase, Newspaper, Video, Camera, Radio, CheckCircle2, ChevronRight, MessageSquare, Image as ImageIcon, MapPin, Zap, Monitor, Truck, Coffee, Sprout, Settings, AlertCircle, Search, Cpu, Wrench, TrendingUp, Shield, User, Tag, Calendar } from "lucide-react";
import dynamic from "next/dynamic";
import { getArticles, Article } from "@/lib/api";
import { useLanguage } from "@/context/LanguageContext";
import { mediaES } from "@/locales/es/media";
import { mediaDE } from "@/locales/de/media";
import { mediaJA } from "@/locales/ja/media";
import { mediaAR } from "@/locales/ar/media";

const AeroShards = dynamic(() => import("@/components/AeroShards"), { ssr: false });

const mediaNavigation = [
  { title: "Completed Work", desc: "View selected machinery, automation, IoT, modernization and integrated engineering projects delivered by Sanota.", button: "View Completed Work", icon: Briefcase },
  { title: "Project Stories", desc: "Understand the challenges clients faced, the capabilities Sanota brought together and how each solution was developed.", button: "Read Project Stories", icon: Newspaper },
  { title: "Videos & Demonstrations", desc: "Watch machinery, automation, connected systems and engineering solutions in operation.", button: "Watch Videos", icon: Video },
  { title: "Photo Gallery", desc: "Browse photographs of projects, products, installations, commissioning activities, technical teams and industry events.", button: "View Photo Gallery", icon: Camera },
  { title: "News & Activities", desc: "Follow Sanota’s recent projects, exhibitions, partnerships, training programmes, innovations and company developments.", button: "View News & Activities", icon: Radio }
];

const featuredWork = [
  { title: "Industrial Machinery & Modernization", desc: "Custom machinery, control-system upgrades, automation retrofits and improvements to existing industrial equipment.", link: "Explore Industrial Projects", icon: Settings, image: "/featured_industrial_1789116846117.jpg" },
  { title: "Smart Agriculture", desc: "Greenhouse, irrigation, fertigation, environmental monitoring and connected agricultural systems.", link: "Explore Smart Agriculture Projects", icon: Sprout, image: "/featured_agriculture_1789116860132.jpg" },
  { title: "Food, Beverage & Tea", desc: "Processing equipment, production systems, environmental controls and industry-specific automation.", link: "Explore Processing Projects", icon: Coffee, image: "/featured_food_1789116878789.jpg" },
  { title: "IoT & Digital Integration", desc: "Connected machinery, sensors, dashboards, alerts, tracking systems and operational software.", link: "Explore IoT & Digital Projects", icon: Monitor, image: "/featured_iot_1789116892994.jpg" },
  { title: "Material Handling & Logistics", desc: "Conveyors, movement systems, automated guided solutions, tracking and customized handling equipment.", link: "Explore Logistics Projects", icon: Truck, image: "/featured_logistics_1789116908842.jpg" },
  { title: "Energy, Environment & Facilities", desc: "Resource monitoring, environmental systems, waste-related solutions and connected facility technologies.", link: "Explore Energy & Environmental Projects", icon: Zap, image: "/featured_energy_1789116922913.jpg" }
];


const projectStoryStructure = [
  { title: "The Challenge", desc: "What was not working, what needed improvement or what the client wanted to develop." },
  { title: "The Assessment", desc: "How Sanota studied the operation, equipment, constraints and expected outcome." },
  { title: "The Integrated Solution", desc: "The combination of engineering, automation, IoT, software, fabrication and implementation capabilities applied to the requirement." },
  { title: "The Implementation", desc: "How the solution was developed, installed, integrated, tested and commissioned." },
  { title: "The Outcome", desc: "The practical operational improvement, completed system or new capability created through the project." },
  { title: "Continued Support", desc: "Maintenance, AMC, training, modernization or technical assistance provided after implementation." }
];

const galleryCollections = [
  { title: "Completed Projects", desc: "Machinery, systems and solutions operating in client environments.", image: "/gallery/completed.jpg" },
  { title: "Products & Equipment", desc: "Custom-developed equipment, product details and system components.", image: "/gallery/equipment.jpg" },
  { title: "Workshop & Development", desc: "Design, fabrication, assembly, integration and testing activities.", image: "/gallery/workshop.jpg" },
  { title: "Installation & Commissioning", desc: "On-site implementation, testing and operational handover.", image: "/gallery/installation.jpg" },
  { title: "Automation & Digital Technology", desc: "Control systems, sensors, dashboards, connected equipment and software interfaces.", image: "/gallery/automation.jpg" },
  { title: "AMC & Technical Support", desc: "Inspection, maintenance, servicing and lifecycle-support activities.", image: "/gallery/amc.jpg" },
  { title: "Events & Exhibitions", desc: "Industry exhibitions, demonstrations, partnerships and company participation.", image: "/gallery/events.jpg" },
  { title: "Team & Training", desc: "Technical teams, client training, capability development and internal activities.", image: "/gallery/team.jpg" }
];

const newsUpdates = [
  "New project completions",
  "Product and system developments",
  "Exhibitions and demonstrations",
  "Industry partnerships",
  "Research and innovation activities",
  "Training programmes",
  "Technical workshops",
  "New service capabilities",
  "Company announcements",
  "Community and industry participation"
];

const browseIndustries = [
  "Manufacturing & Industrial Automation",
  "Smart Agriculture & Agri-Technology",
  "Food & Beverage Processing",
  "Tea Industry Solutions",
  "Logistics, Warehousing & Material Handling",
  "Energy & Resource Efficiency",
  "Environmental & Waste Solutions",
  "Infrastructure & Smart Facilities",
  "Healthcare & Biomedical Engineering",
  "Research, Innovation & Product Development"
];

const browseCapabilities = [
  "Engineering Consultation & Problem Analysis",
  "System & Product Design",
  "Custom Machinery & Product Development",
  "Automation, IoT & Digital Integration",
  "Retrofit, Refurbishment & Modernization",
  "Project Execution, Installation & Commissioning",
  "AMC, Maintenance & Lifecycle Support",
  "Training & Technical Capability Development"
];

const knowebStories = [
  "Connected machinery",
  "Industrial IoT systems",
  "Remote monitoring",
  "Operational dashboards",
  "Mobile and web applications",
  "Alert and reporting systems",
  "Tracking technologies",
  "Cloud-connected engineering solutions"
];

const publicationPrinciples = [
  "Authentic project and product imagery",
  "Real engineering and implementation activities",
  "Clear explanations of the client requirement and Sanota’s role",
  "Accurate technical descriptions",
  "Observable outcomes",
  "Appropriate client and partner approvals",
  "Protection of confidential information",
  "Safe and professional working practices"
];

const featuredWorkES = [
  { title: "Maquinaria industrial y modernización", desc: "Maquinaria a medida, actualización de sistemas de control, automatización y mejoras en equipos industriales existentes.", link: "Explorar proyectos industriales", icon: Settings, image: "/featured_industrial_1789116846117.jpg" },
  { title: "Agricultura inteligente", desc: "Invernaderos, riego, fertirrigación, monitoreo ambiental y sistemas agrícolas conectados.", link: "Explorar proyectos agrícolas", icon: Sprout, image: "/featured_agriculture_1789116860132.jpg" },
  { title: "Alimentos, bebidas y té", desc: "Equipos de procesamiento, sistemas de producción, control ambiental y automatización especializada.", link: "Explorar proyectos de procesamiento", icon: Coffee, image: "/featured_food_1789116878789.jpg" },
  { title: "IoT e integración digital", desc: "Maquinaria conectada, sensores, paneles de control, alertas, sistemas de seguimiento y software operativo.", link: "Explorar proyectos de IoT y digital", icon: Monitor, image: "/featured_iot_1789116892994.jpg" },
  { title: "Manipulación de materiales y logística", desc: "Transportadores, sistemas de transferencia, vehículos guiados automatizados y equipos a medida.", link: "Explorar proyectos de logística", icon: Truck, image: "/featured_logistics_1789116908842.jpg" },
  { title: "Energía, medio ambiente e instalaciones", desc: "Monitoreo de recursos, sistemas ambientales, gestión de residuos y tecnologías para instalaciones inteligentes.", link: "Explorar proyectos de energía y medio ambiente", icon: Zap, image: "/featured_energy_1789116922913.jpg" }
];

const galleryCollectionsES = [
  { title: "Proyectos completados", desc: "Maquinaria, sistemas y soluciones operando en las instalaciones del cliente.", image: "/gallery/completed.jpg" },
  { title: "Productos y equipos", desc: "Equipos desarrollados a medida, detalles de productos y componentes de sistemas.", image: "/gallery/equipment.jpg" },
  { title: "Taller y desarrollo", desc: "Actividades de diseño, fabricación, ensamblaje, integración y pruebas.", image: "/gallery/workshop.jpg" },
  { title: "Instalación y puesta en marcha", desc: "Implementación en el sitio, pruebas y entrega operativa.", image: "/gallery/installation.jpg" },
  { title: "Automatización y tecnología digital", desc: "Sistemas de control, sensores, tableros, equipos conectados e interfaces de software.", image: "/gallery/automation.jpg" },
  { title: "AMC y soporte técnico", desc: "Inspección, mantenimiento, revisiones y soporte durante todo el ciclo de vida.", image: "/gallery/amc.jpg" },
  { title: "Eventos y exposiciones", desc: "Exposiciones industriales, demostraciones, asociaciones y participación de la empresa.", image: "/gallery/events.jpg" },
  { title: "Equipo y capacitación", desc: "Equipos técnicos, formación de clientes, desarrollo de capacidades y actividades internas.", image: "/gallery/team.jpg" }
];

const browseIndustriesES = [
  "Fabricación y automatización industrial",
  "Agricultura inteligente y agrotecnología",
  "Procesamiento de alimentos y bebidas",
  "Soluciones para la industria del té",
  "Logística, almacenamiento y manipulación",
  "Eficiencia energética y de recursos",
  "Soluciones ambientales y de residuos",
  "Infraestructura e instalaciones inteligentes",
  "Ingeniería biomédica y sanitaria",
  "Investigación, innovación y desarrollo de productos"
];

const browseCapabilitiesES = [
  "Consultoría de ingeniería y análisis de problemas",
  "Diseño de sistemas y productos",
  "Maquinaria personalizada y desarrollo de productos",
  "Automatización, IoT e integración digital",
  "Modernización y reacondicionamiento de equipos",
  "Ejecución de proyectos, instalación y puesta en marcha",
  "AMC, mantenimiento y soporte del ciclo de vida",
  "Capacitación y desarrollo de habilidades técnicas"
];

const knowebStoriesES = [
  "Maquinaria conectada",
  "Sistemas de IoT industrial",
  "Monitoreo remoto",
  "Paneles de control operativos",
  "Aplicaciones móviles y web",
  "Sistemas de alerta y generación de informes",
  "Tecnologías de seguimiento",
  "Soluciones de ingeniería conectadas a la nube"
];

const publicationPrinciplesES = [
  "Imágenes auténticas de proyectos y productos",
  "Actividades reales de ingeniería e implementación",
  "Explicaciones claras del requisito del cliente y del papel de Sanota",
  "Descripciones técnicas precisas",
  "Resultados observables y contrastables",
  "Aprobaciones pertinentes de clientes y colaboradores",
  "Protección rigurosa de la información confidencial",
  "Prácticas de trabajo seguras y profesionales"
];

const featuredWorkDE = [
  { title: "Industriemaschinen & Modernisierung", desc: "Sondermaschinen, Modernisierung von Steuerungssystemen, Automatisierungsnachrüstung und Verbesserungen an bestehenden Industrieanlagen.", link: "Industrieprojekte entdecken", icon: Settings, image: "/featured_industrial_1789116846117.jpg" },
  { title: "Intelligente Landwirtschaft", desc: "Gewächshäuser, Bewässerung, Fertigation, Umweltüberwachung und vernetzte Agrarsysteme.", link: "Agrarprojekte entdecken", icon: Sprout, image: "/featured_agriculture_1789116860132.jpg" },
  { title: "Lebensmittel, Getränke & Tee", desc: "Verarbeitungsanlagen, Produktionssysteme, Umweltsteuerungen und branchenspezifische Automatisierung.", link: "Verarbeitungsprojekte entdecken", icon: Coffee, image: "/featured_food_1789116878789.jpg" },
  { title: "IoT & Digitale Integration", desc: "Vernetzte Maschinen, Sensoren, Dashboards, Warnmeldungen, Tracking-Systeme und Betriebssoftware.", link: "IoT- & Digitalprojekte entdecken", icon: Monitor, image: "/featured_iot_1789116892994.jpg" },
  { title: "Materialfluss & Logistik", desc: "Förderanlagen, Transfersysteme, fahrerlose Transportsysteme (FTS) und maßgeschneiderte Fördertechnik.", link: "Logistikprojekte entdecken", icon: Truck, image: "/featured_logistics_1789116908842.jpg" },
  { title: "Energie, Umwelt & Gebäudetechnik", desc: "Ressourcenüberwachung, Umweltsysteme, Abfalllösungen und vernetzte Gebäudetechnologien.", link: "Energie- & Umweltprojekte entdecken", icon: Zap, image: "/featured_energy_1789116922913.jpg" }
];

const galleryCollectionsDE = [
  { title: "Abgeschlossene Projekte", desc: "Maschinen, Systeme und Lösungen im Einsatz bei Kunden.", image: "/gallery/completed.jpg" },
  { title: "Produkte & Ausrüstung", desc: "Kundenspezifisch entwickelte Ausrüstung, Produktdetails und Systemkomponenten.", image: "/gallery/equipment.jpg" },
  { title: "Werkstatt & Entwicklung", desc: "Konstruktion, Fertigung, Montage, Integration und Testaktivitäten.", image: "/gallery/workshop.jpg" },
  { title: "Installation & Inbetriebnahme", desc: "Vor-Ort-Implementierung, Tests und betriebsbereite Übergabe.", image: "/gallery/installation.jpg" },
  { title: "Automatisierung & digitale Technologie", desc: "Steuerungssysteme, Sensoren, Dashboards, vernetzte Anlagen und Softwareschnittstellen.", image: "/gallery/automation.jpg" },
  { title: "AMC & technischer Support", desc: "Inspektion, Wartung, Instandhaltung und Lifecycle-Support.", image: "/gallery/amc.jpg" },
  { title: "Veranstaltungen & Ausstellungen", desc: "Branchenmessen, Vorführungen, Partnerschaften und Unternehmensauftritte.", image: "/gallery/events.jpg" },
  { title: "Team & Schulung", desc: "Technische Teams, Kundenschulungen, Kompetenzentwicklung und interne Weiterbildungen.", image: "/gallery/team.jpg" }
];

const browseIndustriesDE = [
  "Fertigung & Industrieautomation",
  "Intelligente Landwirtschaft & Agrartechnologie",
  "Lebensmittel- & Getränkeverarbeitung",
  "Lösungen für die Teeindustrie",
  "Logistik, Lagerhaltung & Materialtransport",
  "Energie- & Ressourceneffizienz",
  "Umwelt- & Abfalllösungen",
  "Infrastruktur & intelligente Gebäude",
  "Gesundheitswesen & Biomedizintechnik",
  "Forschung, Innovation & Produktentwicklung"
];

const browseCapabilitiesDE = [
  "Ingenieurberatung & Problemanalyse",
  "System- & Produktdesign",
  "Sondermaschinenbau & Produktentwicklung",
  "Automatisierung, IoT & digitale Integration",
  "Nachrüstung, Überholung & Modernisierung",
  "Projektabwicklung, Installation & Inbetriebnahme",
  "AMC, Wartung & Lifecycle-Support",
  "Schulung & Weiterbildung technischer Kompetenzen"
];

const knowebStoriesDE = [
  "Vernetzte Maschinen",
  "Industrielle IoT-Systeme",
  "Fernüberwachung",
  "Operative Dashboards",
  "Mobile und Webanwendungen",
  "Alarm- und Berichtssysteme",
  "Tracking-Technologien",
  "Cloud-vernetzte Engineering-Lösungen"
];

const publicationPrinciplesDE = [
  "Authentische Bilder von Projekten und Produkten",
  "Echte Ingenieurs- und Implementierungsaktivitäten",
  "Klare Erklärungen der Kundenanforderungen und der Rolle von Sanota",
  "Präzise technische Beschreibungen",
  "Beobachtbare Ergebnisse",
  "Angemessene Genehmigungen von Kunden und Partnern",
  "Schutz vertraulicher Informationen",
  "Sichere und professionelle Arbeitspraktiken"
];


const featuredWorkJA = [
  { title: "産業機械＆近代化", desc: "特注機械、制御システムのアップグレード、自動化レトロフィット、既存産業設備の改善。", link: "産業プロジェクトを見る", icon: Settings, image: "/featured_industrial_1789116846117.jpg" },
  { title: "スマート農業", desc: "温室、灌漑、施肥灌漑、環境モニタリング、コネクテッド農業システム。", link: "スマート農業プロジェクトを見る", icon: Sprout, image: "/featured_agriculture_1789116860132.jpg" },
  { title: "食品・飲料・製茶", desc: "加工設備、生産システム、環境制御、業界特化型の自動化ソリューション。", link: "加工プロジェクトを見る", icon: Coffee, image: "/featured_food_1789116878789.jpg" },
  { title: "IoT＆デジタル統合", desc: "コネクテッド機械、センサー、ダッシュボード、アラート、追跡システム、運用ソフトウェア。", link: "IoT・デジタルプロジェクトを見る", icon: Monitor, image: "/featured_iot_1789116892994.jpg" },
  { title: "マテリアルハンドリング＆物流", desc: "コンベア、搬送システム、無人搬送車（AGV）、追跡、カスタマイズ搬送設備。", link: "物流プロジェクトを見る", icon: Truck, image: "/featured_logistics_1789116908842.jpg" },
  { title: "エネルギー・環境・施設", desc: "資源モニタリング、環境システム、廃棄物関連ソリューション、スマート施設技術。", link: "エネルギー・環境プロジェクトを見る", icon: Zap, image: "/featured_energy_1789116922913.jpg" }
];

const galleryCollectionsJA = [
  { title: "完了プロジェクト", desc: "クライアントの現場で稼働する機械、システム、ソリューション。", image: "/gallery/completed.jpg" },
  { title: "製品＆機器", desc: "特注開発機器、製品詳細、システムコンポーネント。", image: "/gallery/equipment.jpg" },
  { title: "工場＆開発現場", desc: "設計、製造、組立、統合、テスト活動。", image: "/gallery/workshop.jpg" },
  { title: "設置＆試運転", desc: "現地導入、テスト、運用の引き渡し。", image: "/gallery/installation.jpg" },
  { title: "自動化＆デジタル技術", desc: "制御システム、センサー、ダッシュボード、コネクテッド機器、ソフトウェアインターフェース。", image: "/gallery/automation.jpg" },
  { title: "AMC＆技術サポート", desc: "点検、保守、修理、ライフサイクルサポート活動。", image: "/gallery/amc.jpg" },
  { title: "イベント＆展示会", desc: "業界展示会、デモンストレーション、パートナーシップ、企業参加活動。", image: "/gallery/events.jpg" },
  { title: "チーム＆トレーニング", desc: "技術チーム、クライアント研修、能力開発、社内活動。", image: "/gallery/team.jpg" }
];

const browseIndustriesJA = [
  "製造業＆産業オートメーション",
  "スマート農業＆アグリテクノロジー",
  "食品・飲料加工",
  "製茶業界向けソリューション",
  "物流・倉庫管理・マテリアルハンドリング",
  "エネルギー＆資源効率化",
  "環境＆廃棄物ソリューション",
  "インフラ＆スマート施設",
  "医療＆生体医工学",
  "研究・イノベーション・製品開発"
];

const browseCapabilitiesJA = [
  "エンジニアリング相談＆課題分析",
  "システム＆製品設計",
  "特注機械＆製品開発",
  "自動化・IoT・デジタル統合",
  "レトロフィット・オーバーホール・近代化",
  "プロジェクト実行・設置・試運転",
  "AMC・保守・ライフサイクルサポート",
  "トレーニング＆技術能力開発"
];

const knowebStoriesJA = [
  "コネクテッド機械",
  "産業用IoTシステム",
  "リモート監視",
  "運用ダッシュボード",
  "モバイル＆Webアプリケーション",
  "アラート＆レポートシステム",
  "追跡テクノロジー",
  "クラウド連携エンジニアリングソリューション"
];

const publicationPrinciplesJA = [
  "プロジェクトおよび製品の真正な写真",
  "実際のエンジニアリングおよび導入活動",
  "クライアント要件とサノタの役割の明確な説明",
  "正確な技術的記述",
  "検証可能で客観的な成果",
  "クライアントおよびパートナーからの適切な承認",
  "機密情報の厳格な保護",
  "安全でプロフェッショナルな作業基準"
];

const featuredWorkAR = [
  { title: "الآلات الصناعية والتحديث", desc: "آلات مصممة حسب الطلب، وتحديثات لأنظمة التحكم، وتطوير أنظمة الأتمتة، وتحسينات للمعدات الصناعية القائمة.", link: "عرض مشاريع التحديث", icon: Settings, image: "/featured_industrial_1789116846117.jpg" },
  { title: "الزراعة الذكية", desc: "البيوت الزجاجية، والري، والتسميد، والمراقبة البيئية، والأنظمة الزراعية المتصلة.", link: "عرض المشاريع الزراعية", icon: Sprout, image: "/featured_agriculture_1789116860132.jpg" },
  { title: "معالجة الأغذية والمشروبات والشاي", desc: "معدات معالجة الأغذية والمشروبات والشاي، وأنظمة الإنتاج، وأنظمة التحكم البيئي، والأتمتة الخاصة بالصناعة.", link: "عرض مشاريع تصنيع الأغذية", icon: Coffee, image: "/featured_food_1789116878789.jpg" },
  { title: "إنترنت الأشياء والتكامل الرقمي", desc: "الآلات المتصلة، وأجهزة الاستشعار، ولوحات المعلومات، والتنبيهات، وأنظمة التتبع، والبرامج التشغيلية.", link: "عرض مشاريع إنترنت الأشياء", icon: Monitor, image: "/featured_iot_1789116892994.jpg" },
  { title: "معدات مناولة المواد والخدمات اللوجستية", desc: "سيور النقل، وأنظمة الحركة، والحلول الآلية الموجهة، ومعدات التتبع والمناولة المخصصة.", link: "عرض مشاريع الخدمات اللوجستية", icon: Truck, image: "/featured_logistics_1789116908842.jpg" },
  { title: "مراقبة موارد الطاقة والبيئة والمرافق", desc: "الأنظمة البيئية، والحلول المتعلقة بالنفايات، وتقنيات المرافق المتصلة ومراقبة الموارد.", link: "عرض مشاريع الطاقة والبيئة", icon: Zap, image: "/featured_energy_1789116922913.jpg" }
];

const galleryCollectionsAR = [
  { title: "المشاريع المنجزة", desc: "الآلات والأنظمة والحلول العاملة في بيئات العملاء.", image: "/gallery/completed.jpg" },
  { title: "المنتجات والمعدات", desc: "معدات مطورة حسب الطلب، وتفاصيل المنتج، ومكونات النظام.", image: "/gallery/equipment.jpg" },
  { title: "ورشة العمل والتطوير", desc: "أنشطة التصميم والتصنيع والتجميع والتكامل والاختبار.", image: "/gallery/workshop.jpg" },
  { title: "التركيب والتشغيل", desc: "التنفيذ والاختبار والتسليم التشغيلي في الموقع.", image: "/gallery/installation.jpg" },
  { title: "الأتمتة والتكنولوجيا الرقمية", desc: "أنظمة التحكم في الأتمتة، وأجهزة الاستشعار، ولوحات المعلومات، والمعدات المتصلة، وواجهات البرامج.", image: "/gallery/automation.jpg" },
  { title: "عقود الصيانة السنوية والدعم الفني", desc: "أنشطة الفحص والصيانة والخدمة والدعم الفني لعقود الصيانة السنوية.", image: "/gallery/amc.jpg" },
  { title: "الفعاليات والمعارض", desc: "معارض الصناعة، والعروض التوضيحية، والشراكات، ومشاركة الشركات.", image: "/gallery/events.jpg" },
  { title: "الفرق والتدريب", desc: "الفرق الفنية، تدريب العملاء، تطوير القدرات والأنشطة الداخلية.", image: "/gallery/team.jpg" }
];

const browseIndustriesAR = [
  "التصنيع والأتمتة الصناعية",
  "الزراعة الذكية والتكنولوجيا الزراعية",
  "معالجة الأغذية والمشروبات",
  "حلول صناعة الشاي",
  "الخدمات اللوجستية والتخزين ومناولة المواد",
  "كفاءة الطاقة والموارد",
  "حلول بيئية وإدارة النفايات",
  "البنية التحتية والمرافق الذكية",
  "الرعاية الصحية والهندسة الطبية الحيوية",
  "البحث والابتكار وتطوير المنتجات"
];

const browseCapabilitiesAR = [
  "الاستشارات الهندسية وتحليل المشكلات",
  "تصميم الأنظمة والمنتجات",
  "تطوير الآلات والمنتجات حسب الطلب",
  "الأتمتة وإنترنت الأشياء والتكامل الرقمي",
  "التحديث والتطوير والتجديد",
  "تنفيذ المشاريع والتركيب والتشغيل",
  "عقود الصيانة السنوية والصيانة ودعم دورة حياة المنتج",
  "التدريب وتطوير القدرات التقنية"
];

const knowebStoriesAR = [
  "الآلات المتصلة",
  "أنظمة إنترنت الأشياء الصناعية",
  "المراقبة عن بعد",
  "لوحات معلومات التشغيل",
  "تطبيقات الهاتف المحمول والويب",
  "أنظمة التنبيه والإبلاغ",
  "تقنيات التتبع",
  "حلول هندسية متصلة بالسحابة"
];

const publicationPrinciplesAR = [
  "صور حقيقية للمشاريع والمنتجات",
  "أنشطة هندسية وتنفيذية واقعية",
  "شرح واضح لمتطلبات العميل ودور سانوتا",
  "أوصاف فنية دقيقة ومفصلة",
  "نتائج عملية قابلة للملاحظة والقياس",
  "الحصول على الموافقات اللازمة من العملاء والشركاء",
  "حماية تامة للمعلومات السرية",
  "ممارسات عمل آمنة واحترافية"
];

export default function MediaPage() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const m = isAr ? mediaAR : isJa ? mediaJA : isDe ? mediaDE : isEs ? mediaES : null;

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  
  const getImageForSlug = (slug: string) => {
    if (slug === 'smart-drainage-system') return '/completed work/drain-water.webp';
    if (slug === 'nerve-stimulator') return '/nerve-stimulator.png';
    if (slug === 'asmp-food-processing') return '/asmp-blog.jpg';
    return '/placeholder-image.jpg';
  };

  useEffect(() => {
    getArticles(3).then(setArticles);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-transparent min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: "url('/media_hero_bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-white/75 dark:bg-[#050B14]/60 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 dark:via-[#050B14]/20 to-[#FAF8F5] dark:to-[#050B14]/90 z-0" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-5"
            >
              {isAr ? "قصص إعلامية ومشاريع وهندسية" : isJa ? "メディア、プロジェクト、エンジニアリングストーリー" : isDe ? "Medien, Projekte & Ingenieurgeschichten" : isEs ? "Historias de medios, proyectos e ingeniería" : "Media, Projects & Engineering Stories"}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-6xl font-black text-[#17135B] dark:text-white tracking-tight mb-6 leading-tight max-w-5xl mx-auto"
            >
              {isAr ? (
                <>
                  الهندسة في <span className="text-[#2E5EAA]">الممارسة</span>
                </>
              ) : isJa ? (
                <>
                  エンジニアリングの<span className="text-[#2E5EAA]">実践</span>
                </>
              ) : isDe ? (
                <>
                  Ingenieurwesen in <span className="text-[#2E5EAA]">Aktion</span>
                </>
              ) : isEs ? (
                m?.hero?.heading || "Ingeniería en Acción"
              ) : (
                <>
                  Engineering in <span className="text-[#2E5EAA]">Action</span>
                </>
              )}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-4 font-medium leading-relaxed"
            >
              {m ? m.hero.subheading : "Explore the projects, products, people and technologies behind Sanota’s integrated engineering solutions."}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              {m ? m.hero.description : "See how Sanota applies engineering, automation, IoT, software and technical expertise to real operational requirements across industries."}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <a
                href="#completed-work"
                className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center shadow-lg"
              >
                {m ? m.hero.primaryButton : "Explore Completed Work"} <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link
                href="#videos"
                className="px-8 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-[#131C2E]/80 dark:hover:bg-slate-800 text-[#17135B] dark:text-white font-bold rounded-lg border border-slate-300 dark:border-slate-700 transition-colors flex items-center justify-center"
              >
                {m ? m.hero.secondaryButton : "Watch Our Videos"} <Play className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#C59B27] dark:text-[#E8B84B] font-bold text-xs tracking-widest uppercase"
            >
              {isAr ? (
                <>الأعمال المنجزة <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> قصص المشاريع <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> الفيديوهات <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> معرض الصور <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> الأخبار والأنشطة</>
              ) : isJa ? (
                <>完了プロジェクト <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> プロジェクトストーリー <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> 動画 <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> フォトギャラリー <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> ニュース＆活動</>
              ) : isDe ? (
                <>Abgeschlossene Arbeiten <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Projektgeschichten <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Videos <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Fotogalerie <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Neuigkeiten & Aktivitäten</>
              ) : isEs ? (
                <>Trabajos Completados <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Historias de Proyectos <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Vídeos <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Galería de Fotos <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Noticias y Actividades</>
              ) : (
                <>Completed Work <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Project Stories <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Videos <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> Photo Gallery <span className="mx-2 text-slate-400 dark:text-slate-600">•</span> News & Activities</>
              )}
            </motion.p>
          </div>
        </section>

        {/* Media Introduction */}
        <section className="py-16 relative overflow-hidden bg-transparent border-b border-slate-200 dark:border-slate-800/50">
          {/* AeroShards Background and Animated Middle Shade */}
          <div className="absolute inset-0 overflow-hidden z-0 dark:block hidden">
            <AeroShards
              backgroundColor="#050B14"
              shardColor="#1A1813"
              accentColor="#E8B84B"
              placement="full"
              flow="stream"
              material="pearl"
              detail="low"
              effect="none"
              scale={1.2}
              spread={1}
              depth={1}
              speed={0.2}
              spin={0.5}
              interaction="none"
              density={0.5}
              shardSize={1.1}
              stretch={1}
              turbulence={1}
              glow={0.6}
              edgeSoftness={2}
              bloom={0}
              grain={0}
              chromaticAberration={0}
              transitionDuration={1}
              interactionRadius={1.5}
              interactionStrength={0.5}
              rippleIntensity={1}
              holdToGather
              paused={false}
            />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6">
                {isAr ? (
                  <>انظر ماذا <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-amber-600 dark:to-[#F1D08A]">تفعل سانوتا</span></>
                ) : isJa ? (
                  <>サノタの<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-amber-600 dark:to-[#F1D08A]">取り組み</span>を見る</>
                ) : isDe ? (
                  <>Sehen Sie, was <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-amber-600 dark:to-[#F1D08A]">Sanota</span> tut</>
                ) : isEs ? (
                  <>Mira lo que hace <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-amber-600 dark:to-[#F1D08A]">Sanota</span></>
                ) : (
                  <>See What Sanota <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-amber-600 dark:to-[#F1D08A]">Does</span></>
                )}
              </h2>
              
              {/* Animated Divider */}
              <motion.div 
                className="h-[2px] bg-gradient-to-r from-transparent via-[#C59B27] dark:via-[#E8B84B] to-transparent w-48 mx-auto mb-8"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />

              <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl font-medium leading-relaxed mb-6">
                {isAr ? "تُفهم القدرات الهندسية على أفضل وجه من خلال التطبيق العملي." : isJa ? "エンジニアリング能力は、実践的な応用を通して最もよく理解できます。" : isDe ? "Ingenieurleistungen lassen sich am besten durch praktische Anwendung verstehen." : isEs ? "Las capacidades de ingeniería se comprenden mejor mediante la aplicación práctica." : "Engineering capabilities are best understood through practical application."}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                {m ? m.intro.description : "The Sanota Media Centre brings together completed work, project stories, videos, photographs and company activities to show how challenges are assessed, solutions are developed and systems are implemented."}
              </p>
              
              <div className="inline-block px-6 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1220] shadow-md">
                <p className="text-[#17135B] dark:text-white font-bold text-sm tracking-wide">
                  {isAr ? "استكشف أعمال شركة سانوتا حسب القطاع أو الحل أو نوع الوسائط." : isJa ? "業界、ソリューション、またはメディアタイプ別にサノタの実績をご覧ください。" : isDe ? "Erkunden Sie die Arbeit von Sanota nach Branche, Lösung oder Medientyp." : isEs ? "Explore el trabajo de Sanota por industria, solución o tipo de medio." : "Explore Sanota’s work by industry, solution or media type."}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Media Navigation Carousel */}
        <MediaNavigationCarousel />

        {/* Featured Work */}
        <section id="featured-work" className="py-16 bg-transparent border-t border-slate-200 dark:border-slate-800/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">{isAr ? "أعمال مميزة" : isJa ? "注目の実績" : isDe ? "Ausgewählte Arbeiten" : isEs ? "Trabajo Destacado" : "Featured Work"}</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6">{isAr ? "شاهدوا سانوتا عملياً" : isJa ? "サノタの実践を見る" : isDe ? "Sanota in Aktion erleben" : isEs ? "Vea a Sanota en Acción" : "See Sanota in Action"}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">{isAr ? "استكشف أمثلة مختارة لكيفية قيام شركة سانوتا بدمج قدرات هندسية وتكنولوجية مختلفة لتلبية الاحتياجات التشغيلية الحقيقية." : isJa ? "実際の運用ニーズに応じて、サノタが多様なエンジニアリングおよび技術力をどのように統合しているかの厳選された事例をご覧ください。" : isDe ? "Erkunden Sie ausgewählte Beispiele dafür, wie Sanota verschiedene Ingenieur- und Technologiekompetenzen rund um reale betriebliche Anforderungen kombiniert." : isEs ? "Explore ejemplos seleccionados de cómo Sanota combina diferentes capacidades de ingeniería y tecnología en función de necesidades operativas reales." : "Explore selected examples of how Sanota combines different engineering and technology capabilities around real operational needs."}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {(isAr ? featuredWorkAR : isJa ? featuredWorkJA : isDe ? featuredWorkDE : isEs ? featuredWorkES : featuredWork).map((work, idx) => (
                <Link key={idx} href="#" className="group relative h-[320px] rounded-[2rem] overflow-hidden block shadow-lg dark:shadow-none">
                  {/* Background Image */}
                  <Image 
                    src={work.image} 
                    alt={work.title} 
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/75 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/10 dark:bg-[#131C2E]/80 backdrop-blur-md border border-white/20 dark:border-slate-700 flex items-center justify-center mb-4 group-hover:border-[#E8B84B] transition-colors duration-500">
                      <work.icon className="w-6 h-6 text-[#E8B84B] group-hover:drop-shadow-[0_0_8px_rgba(232,184,75,0.8)] transition-all duration-500" />
                    </div>
                    <h4 className="text-xl font-bold !text-white mb-2 group-hover:text-[#E8B84B] transition-colors duration-500" style={{ color: '#FFFFFF' }}>{work.title}</h4>
                    <p className="text-slate-200 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:text-white transition-colors duration-500" style={{ color: '#CBD5E1' }}>{work.desc}</p>
                    
                    {/* Animated Link */}
                    <div className="inline-flex items-center text-xs font-bold text-[#E8B84B] uppercase tracking-wider opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {work.link} <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link href="#completed-work" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors shadow-md">
                {isAr ? "عرض جميع الأعمال المنجزة" : isJa ? "すべての完了実績を見る" : isDe ? "Alle abgeschlossenen Arbeiten ansehen" : isEs ? "Ver Todos los Trabajos Completados" : "View All Completed Work"} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Completed Work */}
        <CompletedWorkSection />

        {/* Project Stories */}
        <section id="project-stories" className="py-12 md:py-16 bg-transparent border-t border-slate-200 dark:border-slate-800/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-xs mb-3">{isAr ? "قصص المشاريع" : isJa ? "プロジェクトストーリー" : isDe ? "Projektgeschichten" : isEs ? "Historias de Proyectos" : "Project Stories"}</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-[#17135B] dark:text-white mb-4">{m ? m.projectStories.heading : "From Challenge to Working Solution"}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base max-w-3xl mx-auto">{m ? m.projectStories.subheading : "Project Stories provide a closer look at how Sanota approaches complex operational requirements."}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {((m ? m.projectStories.steps.map((s: any) => ({ title: s.step, desc: s.desc })) : projectStoryStructure)).map((story: any, idx: number) => {
                const iconsList = [AlertCircle, Search, Cpu, Wrench, TrendingUp, Shield];
                const Icon = iconsList[idx];
                
                return (
                  <div key={idx} className="group relative bg-white dark:bg-[#131C2E]/40 border border-slate-200 dark:border-slate-800 rounded-[32px] rounded-tr-xl rounded-bl-xl overflow-hidden min-h-[220px] flex flex-col items-center justify-center text-center cursor-default shadow-md dark:shadow-lg">
                    
                    {/* The sliding background fill */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFF59D] to-[#FFD54F] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />

                    {/* Content Wrapper */}
                    <div className="relative z-10 p-6 flex flex-col items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1">
                      
                      {/* Icon container */}
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-[#050B14] border border-slate-200 dark:border-[#E8B84B]/20 group-hover:border-transparent group-hover:bg-white/20 group-hover:backdrop-blur-md flex items-center justify-center mb-4 transition-all duration-700 rotate-3 group-hover:-rotate-6 group-hover:scale-110 shadow-sm dark:shadow-[0_0_15px_rgba(232,184,75,0.1)] group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                        <Icon className="w-6 h-6 text-[#C59B27] dark:text-[#E8B84B] group-hover:text-[#0B1220] transition-colors duration-700" />
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-lg font-bold text-[#17135B] dark:text-white group-hover:text-[#0B1220] transition-colors duration-700 mb-1">{story.title}</h4>
                      
                      {/* Animating description */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-full">
                        <div className="overflow-hidden">
                          <p className="text-slate-600 dark:text-slate-400 group-hover:text-[#0B1220]/80 transition-colors duration-700 pt-2 leading-relaxed text-xs opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0">
                            {story.desc}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#" className="px-6 py-3 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center text-sm shadow-md">
                {m ? m.projectStories.primaryButton : "Read Project Stories"} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/tell-us-your-challenge" className="px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-[#131C2E] dark:hover:bg-slate-800 text-[#17135B] dark:text-white font-bold rounded-lg border border-slate-300 dark:border-slate-700 transition-colors flex items-center justify-center text-sm">
                {m ? m.projectStories.secondaryButton : "Discuss a Similar Requirement"}
              </Link>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section id="photo-gallery" className="py-16 bg-transparent border-t border-slate-200 dark:border-slate-800/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">{isAr ? "معرض الصور" : isJa ? "フォトギャラリー" : isDe ? "Fotogalerie" : isEs ? "Galería de Fotos" : "Photo Gallery"}</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6">{m ? m.photoGallery.heading : "Projects, Products and People"}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto mb-10">{m ? m.photoGallery.subheading : "The Sanota Photo Gallery provides a visual record of engineering work across project and company environments."}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-14">
              {(isAr ? galleryCollectionsAR : isJa ? galleryCollectionsJA : isDe ? galleryCollectionsDE : isEs ? galleryCollectionsES : galleryCollections).map((col, idx) => (
                <div 
                  key={idx} 
                  className="group relative w-full h-[200px] sm:h-[240px] lg:h-[260px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                  onClick={() => setIsGalleryOpen(true)}
                >
                  
                  {/* Background Image */}
                  {col.image && (
                    <Image 
                      src={col.image} 
                      alt={col.title} 
                      fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* Gradient Overlay for Readability (Always visible at bottom) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-transparent opacity-90" />
                  
                  {/* Hover Overlay (Darkens on hover) */}
                  <div className="absolute inset-0 bg-[#0B1220]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm" />

                  {/* Content (Visible at bottom by default, moves to center on hover) */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end group-hover:justify-center transition-all duration-500">
                    <div className="transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                      <ImageIcon className="w-6 h-6 text-[#E8B84B] mb-3 group-hover:scale-125 transition-transform duration-500 origin-left group-hover:origin-center group-hover:mx-auto" />
                      <h4 className="!text-white font-bold text-lg mb-2 group-hover:text-center group-hover:text-[#E8B84B] transition-colors" style={{ color: '#FFFFFF' }}>{col.title}</h4>
                    </div>
                    
                    {/* Description (Fades in on hover) */}
                    <p className="text-slate-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 group-hover:text-center" style={{ color: '#CBD5E1' }}>
                      {col.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button onClick={() => setIsGalleryOpen(true)} className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors shadow-md">
                {m ? m.photoGallery.button : "Open Photo Gallery"} <Camera className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Gallery Popup Modal */}
        {isGalleryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 dark:bg-[#050B14]/90 backdrop-blur-md" 
              onClick={() => setIsGalleryOpen(false)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-7xl h-full max-h-[800px] bg-white dark:bg-[#03060a] border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B1220] relative z-20">
                <div className="flex items-center">
                  <Camera className="w-6 h-6 text-[#C59B27] dark:text-[#E8B84B] mr-3" />
                  <h3 className="text-xl font-bold text-[#17135B] dark:text-white">{isAr ? "معرض سانوتا الهندسي" : isJa ? "サノタ エンジニアリングギャラリー" : isDe ? "Sanota Ingenieurgalerie" : isEs ? "Galería de Ingeniería de Sanota" : "Sanota Engineering Gallery"}</h3>
                </div>
                <button 
                  onClick={() => setIsGalleryOpen(false)}
                  className="w-10 h-10 rounded-full bg-slate-200 dark:bg-[#131C2E] hover:bg-slate-300 dark:hover:bg-slate-700 flex items-center justify-center transition-colors group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-black dark:group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* DriftWall Container */}
              <div className="relative flex-grow overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#E8B84B]/10 blur-[120px] rounded-full pointer-events-none" />
                <DriftWall
                  items={[
                    { image: '/food-processing.webp', title: 'Food Processing Line' },
                    { image: '/mini tea college.webp', title: 'Mini Tea Factory' },
                    { image: '/plc-2.webp', title: 'PLC Educational Panels' },
                    { image: '/sola-hotwater.webp', title: 'Solar Water Heater' },
                    { image: '/bale machines.webp', title: 'Hydraulic Baling Press' },
                    { image: '/dehydrator2.webp', title: 'Industrial Ovens' },
                    { image: '/gold award best automated 2023.webp', title: 'Awards & Recognition' },
                  ]}
                  columns={5}
                  tileWidth={240}
                  tileHeight={160}
                  gap={20}
                  tilt={12}
                  turn={-15}
                  perspective={1000}
                  depth={150}
                  speed={35}
                  direction="up"
                  variance={0.4}
                  parallax={0.2}
                  lift={30}
                  fade={0.5}
                  dim={0.6}
                  overlayColor="#050B14"
                  radius={16}
                  roll={0}
                  pauseOnHover={true}
                  grayscale={false}
                />
              </div>
            </motion.div>
          </div>
        )}

        {/* Latest News Feeds */}
        <section id="latest-news" className="py-16 bg-transparent border-t border-slate-200 dark:border-slate-800/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#17135B] dark:text-white tracking-tight">{m ? m.news.heading : "Latest News Feeds"}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {articles.length > 0 ? articles.map((article) => (
                 <div key={article.id} className="bg-white dark:bg-[#131C2E]/60 rounded-xl overflow-hidden flex flex-col h-full group border border-slate-200 dark:border-slate-800 hover:border-[#C59B27] dark:hover:border-[#E8B84B]/50 transition-colors shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-500">
                    <div className="relative h-56 w-full overflow-hidden">
                       <Image src={article.coverImage?.url || getImageForSlug(article.slug)} alt={article.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                       <div className="flex items-center text-[13px] text-slate-500 dark:text-slate-400 mb-5 gap-5">
                          <span className="flex items-center"><User className="w-4 h-4 mr-1.5 text-[#2E5EAA]" /> {isAr ? "بواسطة:" : isJa ? "作成者:" : isDe ? "von:" : isEs ? "por:" : "by:"} {article.author}</span>
                          <span className="flex items-center"><Tag className="w-4 h-4 mr-1.5 text-[#2E5EAA]" /> {article.category}</span>
                       </div>
                       <h3 className="text-xl font-bold text-[#17135B] dark:text-white leading-snug mb-8 group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] transition-colors">
                         {article.title}
                       </h3>
                       <div className="mt-auto border-t border-slate-200 dark:border-slate-800 pt-5 flex items-center justify-between">
                          <span className="flex items-center text-[13px] text-slate-500 dark:text-slate-400 font-medium"><Calendar className="w-4 h-4 mr-2 text-slate-400 dark:text-slate-500" /> {new Date(article.date).toLocaleDateString()}</span>
                          <Link href={`/blog-details/${article.slug}`} className="text-[13px] font-bold text-[#C59B27] dark:text-[#E8B84B] hover:text-[#17135B] dark:hover:text-white tracking-wide transition-colors">{m ? m.news.readMore : "READ MORE"}</Link>
                       </div>
                    </div>
                 </div>
               )) : (
                 <>
                   {/* Card 1 */}
                   <div className="bg-white dark:bg-[#131C2E]/60 rounded-xl overflow-hidden flex flex-col h-full group border border-slate-200 dark:border-slate-800 hover:border-[#C59B27] dark:hover:border-[#E8B84B]/50 transition-colors shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-500">
                      <div className="relative h-56 w-full overflow-hidden">
                         <Image src="/completed work/drain-water.webp" alt="Smart Drainage System" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                         <div className="flex items-center text-[13px] text-slate-500 dark:text-slate-400 mb-5 gap-5">
                            <span className="flex items-center"><User className="w-4 h-4 mr-1.5 text-[#2E5EAA]" /> {isAr ? "فريق سانوتا" : isJa ? "サノタチーム" : isDe ? "von: Sanota Team" : isEs ? "por: Equipo Sanota" : "by: Sanota Team"}</span>
                            <span className="flex items-center"><Tag className="w-4 h-4 mr-1.5 text-[#2E5EAA]" /> {isAr ? "حلول إنترنت الأشياء" : isJa ? "IoTソリューション" : isDe ? "IoT-Lösungen" : isEs ? "Soluciones IoT" : "IoT Solutions"}</span>
                         </div>
                         <h3 className="text-xl font-bold text-[#17135B] dark:text-white leading-snug mb-8 group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] transition-colors">
                           {isAr ? "نظام الصرف الذكي: مكافحة الفيضانات بالتكنولوجيا" : isJa ? "スマート排水システム：テクノロジーで洪水対策に取り組む" : isDe ? "Intelligentes Entwässerungssystem: Hochwasserschutz durch Technologie" : isEs ? "Sistema de Drenaje Inteligente: Combatiendo Inundaciones con Tecnología" : "Smart Drainage System: Tackling Floods with Technology"}
                         </h3>
                         <div className="mt-auto border-t border-slate-200 dark:border-slate-800 pt-5 flex items-center justify-between">
                            <span className="flex items-center text-[13px] text-slate-500 dark:text-slate-400 font-medium"><Calendar className="w-4 h-4 mr-2 text-slate-400 dark:text-slate-500" /> 7/6/2025</span>
                            <Link href="/blog-details/smart-drainage-system" className="text-[13px] font-bold text-[#C59B27] dark:text-[#E8B84B] hover:text-[#17135B] dark:hover:text-white tracking-wide transition-colors">{m ? m.news.readMore : "READ MORE"}</Link>
                         </div>
                      </div>
                   </div>

                   {/* Card 2 */}
                   <div className="bg-white dark:bg-[#131C2E]/60 rounded-xl overflow-hidden flex flex-col h-full group border border-slate-200 dark:border-slate-800 hover:border-[#C59B27] dark:hover:border-[#E8B84B]/50 transition-colors shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-500">
                      <div className="relative h-56 w-full overflow-hidden">
                         <Image src="/nerve-stimulator.png" alt="Nerve Stimulator" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                         <div className="flex items-center text-[13px] text-slate-500 dark:text-slate-400 mb-5 gap-5">
                            <span className="flex items-center"><User className="w-4 h-4 mr-1.5 text-[#2E5EAA]" /> {isAr ? "فريق سانوتا" : isJa ? "サノタチーム" : isDe ? "von: Sanota Team" : isEs ? "por: Equipo Sanota" : "by: Sanota Team"}</span>
                            <span className="flex items-center"><Tag className="w-4 h-4 mr-1.5 text-[#2E5EAA]" /> {isAr ? "تكنولوجيا الرعاية الصحية" : isJa ? "ヘルスケア技術" : isDe ? "Gesundheitstechnologie" : isEs ? "Tecnología de la Salud" : "Health Tech"}</span>
                         </div>
                         <h3 className="text-xl font-bold text-[#17135B] dark:text-white leading-snug mb-8 group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] transition-colors">
                           {isAr ? "تطوير إعادة التأهيل من خلال الابتكار: محفز الأعصاب من سانوتا" : isJa ? "イノベーションによるリハビリテーションの進歩：サノタの神経刺激装置" : isDe ? "Fortschritte in der Rehabilitation durch Innovation: Nervenstimulator von Sanota" : isEs ? "Avanzando en la Rehabilitación Mediante la Innovación: Estimulador Nervioso de Sanota" : "Advancing Rehabilitation Through Innovation: Sanota's Nerve Stimulator"}
                         </h3>
                         <div className="mt-auto border-t border-slate-200 dark:border-slate-800 pt-5 flex items-center justify-between">
                            <span className="flex items-center text-[13px] text-slate-500 dark:text-slate-400 font-medium"><Calendar className="w-4 h-4 mr-2 text-slate-400 dark:text-slate-500" /> 7/6/2025</span>
                            <Link href="/blog-details/nerve-stimulator" className="text-[13px] font-bold text-[#C59B27] dark:text-[#E8B84B] hover:text-[#17135B] dark:hover:text-white tracking-wide transition-colors">{m ? m.news.readMore : "READ MORE"}</Link>
                         </div>
                      </div>
                   </div>

                   {/* Card 3 */}
                   <div className="bg-white dark:bg-[#131C2E]/60 rounded-xl overflow-hidden flex flex-col h-full group border border-slate-200 dark:border-slate-800 hover:border-[#C59B27] dark:hover:border-[#E8B84B]/50 transition-colors shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-500">
                      <div className="relative h-56 w-full overflow-hidden">
                         <Image src="/asmp-blog.jpg" alt="Food Processing System" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                         <div className="flex items-center text-[13px] text-slate-500 dark:text-slate-400 mb-5 gap-5">
                            <span className="flex items-center"><User className="w-4 h-4 mr-1.5 text-[#2E5EAA]" /> {isAr ? "فريق سانوتا" : isJa ? "サノタチーム" : isDe ? "von: Sanota Team" : isEs ? "por: Equipo Sanota" : "by: Sanota Team"}</span>
                            <span className="flex items-center"><Tag className="w-4 h-4 mr-1.5 text-[#2E5EAA]" /> {isAr ? "حلول صناعية" : isJa ? "産業ソリューション" : isDe ? "Industrielösungen" : isEs ? "Soluciones Industriales" : "Industrial Solutions"}</span>
                         </div>
                         <h3 className="text-xl font-bold text-[#17135B] dark:text-white leading-snug mb-8 group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] transition-colors">
                           {isAr ? "نظام معالجة الأغذية الذكي لدعم التجمعات الريفية في سريلانكا (ASMP)" : isJa ? "スリランカの農村クラスターを支援するスマート食品加工システム（ASMP）" : isDe ? "Intelligentes Lebensmittelverarbeitungssystem stärkt ländliche Betriebe in Sri Lanka (ASMP)" : isEs ? "Sistema Inteligente de Procesamiento de Alimentos para Grupos Rurales de Sri Lanka (ASMP)" : "Smart Food Processing System Empowering Sri Lanka's Rural Clusters (ASMP)"}
                         </h3>
                         <div className="mt-auto border-t border-slate-200 dark:border-slate-800 pt-5 flex items-center justify-between">
                            <span className="flex items-center text-[13px] text-slate-500 dark:text-slate-400 font-medium"><Calendar className="w-4 h-4 mr-2 text-slate-400 dark:text-slate-500" /> 7/7/2025</span>
                            <Link href="/blog-details/asmp-food-processing" className="text-[13px] font-bold text-[#C59B27] dark:text-[#E8B84B] hover:text-[#17135B] dark:hover:text-white tracking-wide transition-colors">{m ? m.news.readMore : "READ MORE"}</Link>
                         </div>
                      </div>
                   </div>
                 </>
               )}
            </div>
          </div>
        </section>

        {/* Featured Video Section */}
        <section id="videos" className="py-16 bg-transparent border-t border-slate-200 dark:border-slate-800/50 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#C59B27]/10 dark:bg-[#E8B84B]/20 flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Play className="w-8 h-8 text-[#C59B27] dark:text-[#E8B84B] ml-1" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#17135B] dark:text-white mb-6">{m ? m.videoSection.heading : "See How Integrated Engineering Comes Together"}</h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">{isAr ? "قد يشمل حل سانوتا الآلات، وأجهزة التحكم، وأجهزة الاستشعار، والبرمجيات، والتركيب، والدعم المستمر." : isJa ? "サノタのソリューションには、機械、制御、センサー、ソフトウェア、設置、および継続的なサポートが含まれる場合があります。" : isDe ? "Eine Sanota-Lösung kann Maschinenbau, Steuerungen, Sensoren, Software, Installation und kontinuierlichen Support umfassen." : isEs ? "Una solución Sanota puede implicar maquinaria, controles, sensores, software, instalación y soporte continuo." : "A Sanota solution may involve machinery, controls, sensors, software, installation and ongoing support."}</p>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10">{m ? m.videoSection.subheading : "Watch how these capabilities connect around a real operational requirement."}</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center shadow-md">
                {isAr ? "تشغيل الفيديو المميز" : isJa ? "おすすめ動画を再生" : isDe ? "Ausgewähltes Video abspielen" : isEs ? "Reproducir Vídeo Destacado" : "Play Featured Video"} <Play className="ml-2 w-5 h-5" />
              </button>
              <Link href="/services" className="px-8 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-[#131C2E] dark:hover:bg-slate-800 text-[#17135B] dark:text-white font-bold rounded-lg border border-slate-300 dark:border-slate-700 transition-colors flex items-center justify-center">
                {isAr ? "استكشف الحلول المتكاملة" : isJa ? "統合ソリューションを見る" : isDe ? "Integrierte Lösungen erkunden" : isEs ? "Explorar Soluciones Integradas" : "Explore Integrated Solutions"}
              </Link>
            </div>
          </div>
        </section>

        {/* Browse Sections */}
        <section className="py-14 md:py-16 bg-transparent border-t border-slate-200 dark:border-slate-800/50">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {/* By Industry */}
              <div className="bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg dark:shadow-xl relative overflow-hidden flex flex-col h-full group">
                <div className="relative h-48 sm:h-52 w-full shrink-0 overflow-hidden">
                  <Image src="/gallery/automation.jpg" alt="Browse By Industry" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/75 to-black/20" />
                  <div className="absolute bottom-5 left-6 right-6 z-10">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2E5EAA] text-white font-bold text-xs uppercase tracking-wider mb-2 shadow-sm">
                      {isAr ? "تصفح حسب القطاع" : isJa ? "業界別に探す" : isDe ? "Nach Branche durchsuchen" : isEs ? "Buscar por Industria" : "Browse By Industry"}
                    </div>
                    <h3 
                      className="text-xl sm:text-2xl font-bold !text-white drop-shadow-md leading-snug"
                      style={{ color: '#FFFFFF', textShadow: '0 2px 10px rgba(0,0,0,0.85)' }}
                    >
                      {isAr ? "استكشف فرص العمل ذات الصلة بقطاعك" : isJa ? "貴社の業界に関連する実績を見る" : isDe ? "Arbeiten für Ihren Sektor entdecken" : isEs ? "Explore Trabajos Relevantes para su Sector" : "Explore Work Relevant to Your Sector"}
                    </h3>
                  </div>
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-grow relative z-20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 flex-grow">
                    {(isAr ? browseIndustriesAR : isJa ? browseIndustriesJA : isDe ? browseIndustriesDE : isEs ? browseIndustriesES : browseIndustries).map((ind, idx) => (
                      <Link href="/industries" key={idx} className="group/btn flex items-center p-2.5 sm:p-3 bg-slate-50 dark:bg-[#131C2E]/50 hover:bg-slate-100 dark:hover:bg-[#131C2E] border border-slate-200 dark:border-slate-800 hover:border-[#2E5EAA]/50 rounded-xl transition-all duration-300">
                         <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-lg bg-white dark:bg-[#0B1220] group-hover/btn:bg-[#2E5EAA]/20 flex items-center justify-center mr-3 transition-colors duration-300 shadow-sm">
                           <ChevronRight className="w-4 h-4 text-[#2E5EAA] transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                         </div>
                         <span className="text-slate-700 dark:text-slate-300 text-xs sm:text-[13px] font-medium group-hover/btn:text-[#17135B] dark:group-hover/btn:text-white transition-colors duration-300 line-clamp-2">{ind}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-auto border-t border-slate-200 dark:border-slate-800/80 pt-5">
                    <Link href="/industries" className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 bg-slate-100 hover:bg-[#2E5EAA] text-[#17135B] hover:text-white dark:bg-[#131C2E] dark:hover:bg-[#2E5EAA] dark:text-white font-bold text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 hover:border-[#2E5EAA] transition-all duration-300 group/link">
                      {isAr ? "استكشف جميع الصناعات" : isJa ? "すべての業界を見る" : isDe ? "Alle Branchen erkunden" : isEs ? "Explorar Todas las Industrias" : "Explore All Industries"} <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* By Capability */}
              <div className="bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg dark:shadow-xl relative overflow-hidden flex flex-col h-full group">
                <div className="absolute top-0 right-0 w-56 h-56 bg-[#E8B84B]/5 blur-[70px] rounded-full pointer-events-none z-10" />
                <div className="relative h-48 sm:h-52 w-full shrink-0 overflow-hidden">
                  <Image src="/gallery/workshop.jpg" alt="Browse By Capability" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/75 to-black/20" />
                  <div className="absolute bottom-5 left-6 right-6 z-10">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#C59B27] dark:bg-[#E8B84B] text-[#0B1220] font-bold text-xs uppercase tracking-wider mb-2 shadow-sm">
                      {isAr ? "تصفح حسب الإمكانيات" : isJa ? "機能・能力別に探す" : isDe ? "Nach Kompetenz durchsuchen" : isEs ? "Buscar por Capacidad" : "Browse By Capability"}
                    </div>
                    <h3 
                      className="text-xl sm:text-2xl font-bold !text-white drop-shadow-md leading-snug"
                      style={{ color: '#FFFFFF', textShadow: '0 2px 10px rgba(0,0,0,0.85)' }}
                    >
                      {isAr ? "اكتشف كيف تقدم سانوتا الحلول" : isJa ? "サノタがどのようにソリューションを提供するかを見る" : isDe ? "Entdecken Sie, wie Sanota Lösungen liefert" : isEs ? "Descubra Cómo Sanota Entrega Soluciones" : "Explore How Sanota Delivers Solutions"}
                    </h3>
                  </div>
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-grow relative z-20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 flex-grow">
                    {(isAr ? browseCapabilitiesAR : isJa ? browseCapabilitiesJA : isDe ? browseCapabilitiesDE : isEs ? browseCapabilitiesES : browseCapabilities).map((cap, idx) => (
                      <Link href="/services" key={idx} className="group/btn flex items-center p-2.5 sm:p-3 bg-slate-50 dark:bg-[#131C2E]/50 hover:bg-slate-100 dark:hover:bg-[#131C2E] border border-slate-200 dark:border-slate-800 hover:border-[#C59B27]/50 rounded-xl transition-all duration-300">
                         <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-lg bg-white dark:bg-[#0B1220] group-hover/btn:bg-[#C59B27]/20 flex items-center justify-center mr-3 transition-colors duration-300 shadow-sm">
                           <ChevronRight className="w-4 h-4 text-[#C59B27] dark:text-[#E8B84B] transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                         </div>
                         <span className="text-slate-700 dark:text-slate-300 text-xs sm:text-[13px] font-medium group-hover/btn:text-[#17135B] dark:group-hover/btn:text-white transition-colors duration-300 line-clamp-2">{cap}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-auto border-t border-slate-200 dark:border-slate-800/80 pt-5">
                    <Link href="/services" className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 bg-slate-100 hover:bg-[#C59B27] text-[#17135B] hover:text-white dark:bg-[#131C2E] dark:hover:bg-[#E8B84B] dark:text-white dark:hover:text-[#0B1220] font-bold text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 hover:border-[#C59B27] transition-all duration-300 group/link">
                      {isAr ? "استكشف جميع الخدمات" : isJa ? "すべてのサービスを見る" : isDe ? "Alle Dienstleistungen erkunden" : isEs ? "Explorar Todos los Servicios" : "Explore All Services"} <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sanota + Knoweb */}
        <section className="py-16 relative overflow-hidden bg-transparent">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                  <h2 className="text-[#2E5EAA] font-bold tracking-widest uppercase text-sm mb-4 flex items-center">
                    <Zap className="w-4 h-4 mr-2" /> Sanota + Knoweb
                  </h2>
                  <h3 className="text-4xl md:text-5xl font-bold text-[#17135B] dark:text-white mb-6 leading-tight">
                    {isAr ? (
                      <>الهندسة المتصلة <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#4C84E0]">بالتكنولوجيا الرقمية</span></>
                    ) : isJa ? (
                      <><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#4C84E0]">デジタル技術</span>でつながるエンジニアリング</>
                    ) : isDe ? (
                      <>Ingenieurwesen Verbunden durch <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#4C84E0]">Digitale Technologie</span></>
                    ) : isEs ? (
                      <>Ingeniería Conectada por <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#4C84E0]">Tecnología Digital</span></>
                    ) : (
                      <>Engineering Connected by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#4C84E0]">Digital Technology</span></>
                    )}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                    {isAr ? "ستوضح قصص إعلامية مختارة كيف تجمع شركة سانوتا بين القدرات الهندسية والبرمجيات والتكنولوجيا الرقمية من خلال تعاونها مع شركة نويب." : isJa ? "注目のメディア事例は、サノタがKnowebとの協業を通じて、エンジニアリング能力とソフトウェアおよびデジタル技術をどのように融合させているかを示しています。" : isDe ? "Ausgewählte Medienberichte zeigen, wie Sanota durch die Partnerschaft mit Knoweb Ingenieurskompetenz mit Software und digitaler Technologie verbindet." : isEs ? "Las historias de medios seleccionadas demostrarán cómo Sanota combina capacidad de ingeniería con software y tecnología digital a través de su colaboración con Knoweb." : "Selected media stories will demonstrate how Sanota combines engineering capability with software and digital technology through its collaboration with Knoweb."}
                  </p>
                  <Link href="#" className="group inline-flex items-center px-7 py-4 bg-[#17135B] hover:bg-[#2E5EAA] dark:bg-gradient-to-r dark:from-[#131C2E] dark:to-[#0B1220] dark:hover:from-[#2E5EAA] dark:hover:to-[#1a4185] text-white font-bold rounded-xl border border-slate-300 dark:border-[#2E5EAA]/30 hover:border-[#2E5EAA] transition-all duration-500 shadow-md hover:shadow-lg dark:shadow-[0_0_20px_rgba(46,94,170,0.15)] dark:hover:shadow-[0_0_30px_rgba(46,94,170,0.4)]">
                    {isAr ? "استكشف مشاريع إنترنت الأشياء والمشاريع الرقمية" : isJa ? "IoT・デジタルプロジェクトを見る" : isDe ? "IoT- & Digitalprojekte erkunden" : isEs ? "Explorar Proyectos Digitales y de IoT" : "Explore IoT & Digital Projects"} <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </motion.div>
              </div>
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(isAr ? knowebStoriesAR : isJa ? knowebStoriesJA : isDe ? knowebStoriesDE : isEs ? knowebStoriesES : knowebStories).map((story, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-center bg-white dark:bg-[#131C2E]/40 border border-slate-200 dark:border-[#2E5EAA]/20 hover:border-[#2E5EAA]/60 rounded-2xl px-5 py-4 cursor-default backdrop-blur-sm transition-all shadow-sm dark:shadow-lg"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#2E5EAA]/15 dark:bg-[#2E5EAA]/20 flex items-center justify-center mr-4 shrink-0">
                         <Monitor className="w-4 h-4 text-[#2E5EAA] dark:text-[#4C84E0]" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-200 text-sm font-medium">{story}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publication Principles */}
        <section className="py-16 border-y border-slate-200 dark:border-slate-800/50 bg-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8 lg:mb-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="inline-flex items-center justify-center px-4 py-2 bg-[#C59B27]/10 dark:bg-[#E8B84B]/10 text-[#C59B27] dark:text-[#E8B84B] rounded-full font-bold tracking-widest uppercase text-xs mb-6 border border-[#C59B27]/20 dark:border-[#E8B84B]/20">
                  <Shield className="w-4 h-4 mr-2" /> {isAr ? "مبادئ النشر الإعلامي" : isJa ? "メディア公開の原則" : isDe ? "Grundsätze für Medienpublikationen" : isEs ? "Principios de Publicación en Medios" : "Media Publication Principles"}
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-[#17135B] dark:text-white leading-tight">
                  {isAr ? (
                    <>عمل أصيل. معلومات واضحة.<br/><span className="text-slate-500 dark:text-slate-400">نشر مسؤول.</span></>
                  ) : isJa ? (
                    <>確かな実績。明確な情報。<br/><span className="text-slate-500 dark:text-slate-400">責任ある公開姿勢。</span></>
                  ) : isDe ? (
                    <>Authentische Arbeit. Klare Informationen.<br/><span className="text-slate-500 dark:text-slate-400">Verantwortungsvolle Veröffentlichung.</span></>
                  ) : isEs ? (
                    <>Trabajo Auténtico. Información Clara.<br/><span className="text-slate-500 dark:text-slate-400">Publicación Responsable.</span></>
                  ) : (
                    <>Authentic Work. Clear Information.<br/><span className="text-slate-500 dark:text-slate-400">Responsible Publication.</span></>
                  )}
                </h3>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {(isAr ? publicationPrinciplesAR : isJa ? publicationPrinciplesJA : isDe ? publicationPrinciplesDE : isEs ? publicationPrinciplesES : publicationPrinciples).map((principle, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(197,155,39,0.15)" }}
                  className="bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-700/50 hover:border-[#C59B27]/50 dark:hover:border-[#E8B84B]/50 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group shadow-sm dark:shadow-none"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:opacity-15 dark:group-hover:opacity-20 transition-opacity">
                     <CheckCircle2 className="w-24 h-24 text-[#C59B27] dark:text-[#E8B84B]" />
                  </div>
                  <div className="w-12 h-12 bg-slate-100 dark:bg-[#0B1220] rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 relative z-10 group-hover:border-[#C59B27]/50 dark:group-hover:border-[#E8B84B]/50 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-[#C59B27] dark:text-[#E8B84B]" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed relative z-10 group-hover:text-[#17135B] dark:group-hover:text-white transition-colors">{principle}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
              className="bg-white/80 dark:bg-[#131C2E]/40 border border-slate-200 dark:border-[#E8B84B]/20 rounded-xl p-6 text-center max-w-4xl mx-auto shadow-sm dark:shadow-none"
            >
              <p className="text-slate-600 dark:text-slate-400 text-sm italic flex items-center justify-center text-left sm:text-center">
                <AlertCircle className="w-5 h-5 mr-3 text-[#C59B27] dark:text-[#E8B84B] shrink-0" />
                {isAr ? "ينبغي استخدام الصور العامة فقط عندما تكون مواد سانوتا الأصلية غير متوفرة مؤقتاً ولا ينبغي تقديمها على أنها أعمال سانوتا مكتملة." : isJa ? "一般的なストック画像は、サノタの実際の画像が一時的に利用できない場合にのみ使用され、サノタの完成実績として提示されることはありません。" : isDe ? "Allgemeine Archivbilder sollten nur verwendet werden, wenn authentisches Sanota-Material vorübergehend nicht verfügbar ist, und dürfen nicht als fertige Sanota-Arbeiten dargestellt werden." : isEs ? "Las imágenes genéricas de catálogo solo deben usarse cuando el material auténtico de Sanota no esté disponible temporalmente y no deben presentarse como trabajo terminado de Sanota." : "Generic stock imagery should only be used where authentic Sanota material is temporarily unavailable and should not be presented as completed Sanota work."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Grids */}
        <section className="py-16 relative overflow-hidden bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              
              {/* Discuss Similar Requirement */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="border border-slate-200 dark:border-slate-800 rounded-3xl p-10 sm:p-12 shadow-xl relative overflow-hidden group hover:border-[#2E5EAA]/50 transition-colors duration-500 bg-white/50 dark:bg-transparent backdrop-blur-sm"
              >
                {/* AeroShards Background */}
                <div className="absolute inset-0 z-0">
                  <AeroShards
                    backgroundColor="#0B1220"
                    shardColor="#131C2E"
                    accentColor="#4C84E0"
                    placement="full"
                    flow="stream"
                    material="pearl"
                    detail="balanced"
                    effect="none"
                    scale={1.2}
                    spread={1}
                    depth={1}
                    speed={1}
                    spin={1}
                    interaction="repel"
                    density={1.5}
                    shardSize={1.1}
                    stretch={1}
                    turbulence={1}
                    glow={0.5}
                    edgeSoftness={2}
                    bloom={0.3}
                    grain={0.05}
                    chromaticAberration={0.0075}
                    transitionDuration={1}
                    interactionRadius={1.5}
                    interactionStrength={0.5}
                    rippleIntensity={1}
                    holdToGather
                    paused={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/90 to-blue-50/80 dark:from-[#131C2E]/60 dark:to-[#0B1220]/80 pointer-events-none" />
                </div>
                
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E5EAA]/15 dark:bg-[#2E5EAA]/20 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-30 z-0" />
                
                <div className="relative z-10 flex flex-col h-full pointer-events-none">
                  <div className="w-16 h-16 bg-[#2E5EAA]/15 dark:bg-[#2E5EAA]/20 rounded-2xl flex items-center justify-center mb-8 border border-[#2E5EAA]/30">
                    <Wrench className="w-8 h-8 text-[#2E5EAA] dark:text-[#4C84E0]" />
                  </div>
                  <h2 className="text-[#2E5EAA] dark:text-[#4C84E0] font-bold tracking-widest uppercase text-sm mb-4">{isAr ? "ناقش متطلبات مماثلة" : isJa ? "同様の要件について相談する" : isDe ? "Ähnliche Anforderung besprechen" : isEs ? "Comentar un Requisito Similar" : "Discuss a Similar Requirement"}</h2>
                  <h3 className="text-3xl font-bold text-[#17135B] dark:text-white mb-6">{isAr ? "هل رأيت مشروعاً ذا صلة بعملياتك؟" : isJa ? "貴社の事業に関連するプロジェクトは見つかりましたか？" : isDe ? "Haben Sie ein Projekt gesehen, das für Ihren Betrieb relevant ist?" : isEs ? "¿Ha visto un proyecto relevante para su operación?" : "Have You Seen a Project Relevant to Your Operation?"}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">{isAr ? "قد لا تكون متطلباتك مطابقة تماماً، ولكن قد تكون القدرات الهندسية قابلة للتكيف مع تطبيقك. أخبر سانوتا بما يلي:" : isJa ? "まったく同じ要件である必要はありません。サノタのエンジニアリング能力はお客様の用途に合わせて柔軟に適応可能です。以下をお聞かせください：" : isDe ? "Ihre Anforderungen müssen nicht identisch sein – unsere Ingenieurkompetenzen lassen sich an Ihre Anwendung anpassen. Teilen Sie Sanota mit:" : isEs ? "Es posible que su requisito no sea idéntico, pero las capacidades de ingeniería se pueden adaptar a su aplicación. Cuéntele a Sanota:" : "Your requirement may not be identical, but the engineering capabilities may be adaptable to your application. Tell Sanota:"}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 pointer-events-auto">
                    {(isAr ? [
                      "ما هو المشروع أو الحل الذي أثار اهتمامك",
                      "ما الذي تقوم بتشغيله حالياً في منشأتك",
                      "ما الذي ترغب في تحسينه أو تطويره",
                      "ما النتيجة التشغيلية التي تسعى لتحقيقها"
                    ] : isJa ? [
                      "関心を持たれたプロジェクトやソリューション",
                      "現在稼働している設備や工程",
                      "改善または開発したい内容",
                      "達成したい目標や成果"
                    ] : isDe ? [
                      "Welches Projekt oder welche Lösung Sie interessiert",
                      "Was Sie derzeit betreiben",
                      "Was Sie verbessern oder entwickeln möchten",
                      "Welches Ergebnis Sie erzielen wollen"
                    ] : isEs ? [
                      "Qué proyecto o solución le interesó",
                      "Qué opera actualmente",
                      "Qué desea mejorar o desarrollar",
                      "Qué resultado está intentando lograr"
                    ] : [
                      "Which project or solution interested you",
                      "What you currently operate",
                      "What you want to improve or develop",
                      "Which result you are trying to achieve"
                    ]).map((item, idx) => (
                      <div key={idx} className="flex items-start bg-white/90 dark:bg-[#0B1220]/70 p-4 rounded-xl border border-slate-200 dark:border-slate-800/50 backdrop-blur-sm shadow-sm dark:shadow-none">
                        <div className="w-2 h-2 mt-1.5 rounded-full bg-[#2E5EAA] dark:bg-[#4C84E0] mr-3 shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 text-sm leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row gap-4 pointer-events-auto">
                    <Link href="/tell-us-your-challenge" className="inline-flex justify-center items-center px-8 py-4 bg-[#2E5EAA] hover:bg-[#1a4185] text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg dark:shadow-[0_0_20px_rgba(46,94,170,0.3)] dark:hover:shadow-[0_0_30px_rgba(46,94,170,0.5)]">
                      {isAr ? "مناقشة متطلبات مماثلة" : isJa ? "要件を相談する" : isDe ? "Anforderung besprechen" : isEs ? "Comentar Requisito" : "Discuss Requirement"}
                    </Link>
                    <Link href="/tell-us-your-challenge" className="inline-flex justify-center items-center px-8 py-4 bg-white/80 dark:bg-transparent hover:bg-slate-100 dark:hover:bg-[#131C2E] text-[#17135B] dark:text-white font-bold rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all backdrop-blur-sm">
                      {isAr ? "أخبرنا عن التحدي الذي تواجهه" : isJa ? "課題を相談する" : isDe ? "Schildern Sie Ihre Herausforderung" : isEs ? "Cuéntanos tu Desafío" : "Tell Us Your Challenge"}
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Media Enquiries */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="border border-slate-200 dark:border-slate-800 rounded-3xl p-10 sm:p-12 shadow-xl relative overflow-hidden group hover:border-[#C59B27]/50 dark:hover:border-[#E8B84B]/50 transition-colors duration-500 bg-white/50 dark:bg-transparent backdrop-blur-sm"
              >
                {/* AeroShards Background */}
                <div className="absolute inset-0 z-0">
                  <AeroShards
                    backgroundColor="#0B1220"
                    shardColor="#1A1813"
                    accentColor="#E8B84B"
                    placement="full"
                    flow="stream"
                    material="pearl"
                    detail="balanced"
                    effect="none"
                    scale={1.2}
                    spread={1}
                    depth={1}
                    speed={1}
                    spin={1}
                    interaction="repel"
                    density={1.5}
                    shardSize={1.1}
                    stretch={1}
                    turbulence={1}
                    glow={0.6}
                    edgeSoftness={2}
                    bloom={0.4}
                    grain={0.05}
                    chromaticAberration={0.0075}
                    transitionDuration={1}
                    interactionRadius={1.5}
                    interactionStrength={0.5}
                    rippleIntensity={1}
                    holdToGather
                    paused={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-bl from-white/95 via-amber-50/50 to-slate-50/90 dark:from-[#131C2E]/60 dark:to-[#0B1220]/80 pointer-events-none" />
                </div>

                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C59B27]/15 dark:bg-[#E8B84B]/20 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-30 z-0" />
                
                <div className="relative z-10 flex flex-col h-full pointer-events-none">
                  <div className="w-16 h-16 bg-[#C59B27]/15 dark:bg-[#E8B84B]/20 rounded-2xl flex items-center justify-center mb-8 border border-[#C59B27]/30 dark:border-[#E8B84B]/30">
                    <MessageSquare className="w-8 h-8 text-[#C59B27] dark:text-[#E8B84B]" />
                  </div>
                  <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">{isAr ? "استفسارات وسائل الإعلام" : isJa ? "メディア・報道関係のお問い合わせ" : isDe ? "Medienanfragen" : isEs ? "Consultas de Medios" : "Media Enquiries"}</h2>
                  <h3 className="text-3xl font-bold text-[#17135B] dark:text-white mb-6">{isAr ? "استفسار إعلامي أو شراكة أو نشر" : isJa ? "取材・協業・メディア掲載に関するお問い合わせ" : isDe ? "Medien-, Partnerschafts- oder Publikationsanfrage" : isEs ? "Consulta de Medios, Asociaciones o Publicaciones" : "Media, Partnership or Publication Enquiry"}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-12">{isAr ? "للاستفسارات المتعلقة بميزات المشروع، أو المقالات التقنية، أو المعارض، أو الشراكات، أو المقابلات، أو الحصول على إذن باستخدام وسائل الإعلام الخاصة بسانوتا، يرجى الاتصال بفريق سانوتا." : isJa ? "プロジェクトの取材、技術記事、展示会、パートナーシップ、インタビュー、またはサノタのメディア素材の使用許可に関するお問い合わせは、サノタチームまでご連絡ください。" : isDe ? "Für Anfragen zu Projektberichten, Fachartikeln, Ausstellungen, Partnerschaften, Interviews oder zur Verwendung von Sanota-Medienmaterial wenden Sie sich bitte an das Sanota-Team." : isEs ? "Para consultas relacionadas con reportajes de proyectos, artículos técnicos, exposiciones, colaboraciones, entrevistas o permisos para utilizar el material de Sanota, póngase en contacto con el equipo de Sanota." : "For enquiries relating to project features, technical articles, exhibitions, partnerships, interviews or permission to use Sanota media, please contact the Sanota team."}</p>
                  
                  <div className="mt-auto flex flex-col sm:flex-row gap-4 pointer-events-auto">
                    <Link href="/contact" className="inline-flex justify-center items-center px-8 py-4 bg-[#C59B27] hover:bg-[#B38A22] dark:bg-[#E8B84B] dark:hover:bg-[#d4a643] text-white dark:text-[#0B1220] font-bold rounded-xl transition-all shadow-md hover:shadow-lg dark:shadow-[0_0_20px_rgba(232,184,75,0.3)] dark:hover:shadow-[0_0_30px_rgba(232,184,75,0.5)]">
                      {isAr ? "إرسال استفسار إعلامي" : isJa ? "メディア問い合わせを送信" : isDe ? "Medienanfrage senden" : isEs ? "Enviar Consulta de Medios" : "Submit Media Enquiry"}
                    </Link>
                    <Link href="/contact" className="inline-flex justify-center items-center px-8 py-4 bg-white/80 dark:bg-transparent hover:bg-slate-100 dark:hover:bg-[#131C2E] text-[#17135B] dark:text-white font-bold rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all backdrop-blur-sm">
                      {isAr ? "اتصل بسانوتا" : isJa ? "サノタに問い合わせる" : isDe ? "Sanota kontaktieren" : isEs ? "Contactar a Sanota" : "Contact Sanota"}
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 border-t border-slate-200 dark:border-slate-800 bg-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#17135B] dark:text-white mb-6 leading-tight">
              {isAr ? (
                <>
                  انظر إلى ما أنجزته شركة سانوتا.<br className="hidden md:block" />
                  <span className="text-[#C59B27] dark:text-[#E8B84B]">تخيل ما يمكننا تطويره معك.</span>
                </>
              ) : isJa ? (
                <>
                  サノタのこれまでの実績をご覧ください。<br className="hidden md:block" />
                  <span className="text-[#C59B27] dark:text-[#E8B84B]">私たちが貴社と共に何を開発できるか、ぜひ想像してみてください。</span>
                </>
              ) : isDe ? (
                <>
                  Sehen Sie, was Sanota bereits erreicht hat. <br className="hidden md:block" />
                  <span className="text-[#C59B27] dark:text-[#E8B84B]">Stellen Sie sich vor, was wir gemeinsam mit Ihnen entwickeln können.</span>
                </>
              ) : isEs ? (
                <>
                  Mira lo que ha hecho Sanota. <br className="hidden md:block" />
                  <span className="text-[#C59B27] dark:text-[#E8B84B]">Imagina lo que podemos desarrollar contigo.</span>
                </>
              ) : (
                <>
                  See What Sanota Has Done. <br className="hidden md:block" />
                  <span className="text-[#C59B27] dark:text-[#E8B84B]">Imagine What We Can Develop With You.</span>
                </>
              )}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
              {m ? m.cta.description : "From machinery and industrial automation to smart agriculture, IoT, software and lifecycle support, Sanota brings multiple capabilities together to solve practical operational challenges."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link href="/tell-us-your-challenge" className="px-8 py-4 bg-[#C59B27] hover:bg-[#B38A22] dark:bg-[#E8B84B] dark:hover:bg-[#d4a643] text-white dark:text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center shadow-md">
                {m ? m.cta.primaryButton : "Tell Us Your Challenge"} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/products" className="px-8 py-4 bg-slate-100 dark:bg-[#0B1220] hover:bg-slate-200 dark:hover:bg-slate-800 text-[#17135B] dark:text-white font-bold rounded-lg border border-slate-300 dark:border-slate-700 transition-colors flex items-center justify-center">
                {m ? m.cta.secondaryButton : "Explore Products & Systems"}
              </Link>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm italic">{m ? m.cta.closingLine : "Real challenges. Integrated solutions. Engineering in action."}</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
