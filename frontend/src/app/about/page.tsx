"use client";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import dynamic from 'next/dynamic';
const Antigravity = dynamic(() => import("@/components/Antigravity"), { ssr: false });
import PixelCard from "@/components/PixelCard";
import { ArrowRight, Target, Compass, CheckCircle2, Factory, Cpu, Network, PenTool, Wrench, RefreshCw, BarChart4, Lightbulb, Users, Globe2, ShieldCheck, Cog, ClipboardCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { aboutES } from "@/locales/es/about";
import { aboutDE } from "@/locales/de/about";
import { aboutJA } from "@/locales/ja/about";

// Data Structures
const technicalDisciplines = [
  "Mechanical engineering", "Electrical and electronic engineering", "Industrial automation", 
  "PLC, HMI and control systems", "Sensors and instrumentation", "IoT and connected monitoring", 
  "Software and digital platforms", "Machinery fabrication and integration", "Product development", 
  "Retrofit and modernization", "Maintenance and lifecycle support"
];

const customerChallenges = [
  "A production problem", "An inefficient process", "An outdated or unreliable machine", 
  "A requirement to reduce manual work", "A need for better monitoring and control", "A product or machinery concept", 
  "A requirement to improve energy or resource use", "A need for maintenance or technical support", "An opportunity to introduce automation or digital technology"
];

const integratedCapabilities = [
  { title: "Engineering Design", desc: "We develop machinery, mechanical systems, electrical designs, control architectures and integrated technical solutions around customer requirements.", icon: PenTool },
  { title: "Custom Machinery and Product Development", desc: "We design and develop special-purpose machinery, processing equipment, testing systems, prototypes and customized products.", icon: Factory },
  { title: "Industrial Automation", desc: "We integrate PLCs, HMIs, sensors, actuators, motor controls, drives, servo systems and industrial safety functions.", icon: Cpu },
  { title: "IoT and Digital Integration", desc: "We connect machinery, assets and operating environments to cloud platforms, dashboards, mobile applications, alerts and reporting systems.", icon: Network },
  { title: "Retrofit and Modernization", desc: "We restore machinery, replace obsolete control systems, improve safety and introduce automation to extend equipment life and improve performance.", icon: RefreshCw },
  { title: "Project Implementation", desc: "We support procurement, fabrication, assembly, programming, installation, testing, integration, commissioning, training and handover.", icon: ClipboardCheck },
  { title: "AMC and Lifecycle Support", desc: "We provide planned maintenance, technical assistance, breakdown support, system upgrades and Annual Maintenance Contracts for Sanota-built and eligible third-party systems.", icon: ShieldCheck }
];

const industrySupport = [
  "Developing machinery for production and processing", "Automating industrial equipment and workflows", "Restoring non-operational and ageing machinery", 
  "Replacing outdated control systems", "Introducing connected monitoring and reporting", "Developing food and agricultural processing equipment", 
  "Supporting tea-processing modernization", "Improving material handling and asset visibility", "Developing waste and environmental solutions", 
  "Supporting technical education and research", "Collaborating on healthcare and specialized products", "Helping customers develop new products and prototypes"
];

const engineeringApproach = [
  { title: "Understand Before Designing", desc: "We begin by understanding the process, problem, operating conditions, limitations and expected outcome." },
  { title: "Integrate the Complete System", desc: "We consider the relationship between machinery, controls, electrical systems, software, people and operating procedures." },
  { title: "Modernize Where Practical", desc: "We evaluate whether existing machinery can be restored, retrofitted or improved before recommending complete replacement." },
  { title: "Design for Long-Term Use", desc: "We consider maintainability, operator usability, availability of components, future expansion and lifecycle support." },
  { title: "Remain Accountable Through Implementation", desc: "Our involvement can continue from initial assessment and design through development, installation, commissioning, training and maintenance." }
];

const knowebExpertise = [
  "Software development", "IoT connectivity", "Cloud platforms", "Web and mobile applications", 
  "Operational dashboards", "Enterprise systems", "Database development", "Digital reporting", 
  "Remote monitoring and control", "Data and systems integration"
];

const collaborationCapabilities = [
  "Requirement and feasibility analysis", "Engineering concept development", "Prototype design", 
  "Mechanical and electronic development", "Embedded systems", "Automation and control", 
  "IoT and software integration", "Testing and design improvement", "Pilot systems", 
  "Production engineering", "Technical support for commercialization"
];

const missionPoints = [
  "Combining engineering and digital capabilities", "Developing solutions around customer requirements", 
  "Supporting modernization and efficient resource use", "Taking responsibility from concept to implementation", 
  "Building long-term customer and technical partnerships", "Supporting innovation and industry development"
];

const guidingPrinciples = [
  { title: "Practicality", desc: "Solutions must be suitable for real operating conditions and implementation requirements." },
  { title: "Reliability", desc: "Systems must be designed to perform consistently and support long-term operation." },
  { title: "Integration", desc: "Engineering, automation and digital technologies should work as one coordinated system." },
  { title: "Innovation", desc: "New technologies should be applied where they create meaningful operational value." },
  { title: "Responsibility", desc: "We remain focused on the quality, safety, maintainability and performance of the solution." },
  { title: "Partnership", desc: "We work closely with customers and collaborators to achieve shared technical and operational objectives." },
  { title: "Continuous Improvement", desc: "We support the ongoing optimization, modernization and development of customer operations." }
];

const whyWorkWithUs = [
  { title: "One Accountable Partner", desc: "Customers can access mechanical engineering, electrical systems, automation, IoT, software and implementation support through one coordinated relationship.", icon: CheckCircle2 },
  { title: "Multi-Industry Experience", desc: "Our work across diverse sectors helps us understand different operating environments and develop adaptable solutions.", icon: Globe2 },
  { title: "Custom Engineering Capability", desc: "We can develop specialized solutions where standard machinery or technology does not fully meet the requirement.", icon: Wrench },
  { title: "Retrofit and Modernization Expertise", desc: "We help customers extend machinery life, replace obsolete controls and improve existing operations.", icon: RefreshCw },
  { title: "Physical and Digital Integration", desc: "We connect machinery and operating systems with monitoring, software, dashboards and data.", icon: Network },
  { title: "End-to-End Delivery", desc: "Our support can cover assessment, design, development, installation, commissioning, training and lifecycle care.", icon: Cog },
  { title: "Long-Term Technical Support", desc: "We offer maintenance, Annual Maintenance Contracts, troubleshooting, upgrades and performance-improvement support.", icon: ShieldCheck }
];

const atAGlance = [
  { title: "Established in 2010", desc: "Engineering and technology experience developed across changing industrial requirements." },
  { title: "1,250+ Client Engagements", desc: "Experience supporting organizations through products, projects, technical services and engineering requirements." },
  { title: "Multi-Industry Experience", desc: "Solutions developed across manufacturing, agriculture, food processing, tea, logistics, energy, environmental management, infrastructure and healthcare." },
  { title: "Integrated Technical Capability", desc: "Mechanical engineering, electrical and electronic systems, automation, IoT and software working together." },
  { title: "Local Strength with International Potential", desc: "Sri Lankan engineering capability supporting local industries and international customers, projects and partnerships." },
  { title: "Complete Lifecycle Support", desc: "From operational assessment and design through project delivery, AMC and continuous improvement." }
];

const technicalDisciplinesES = [
  "Ingeniería Mecánica", "Ingeniería eléctrica y electrónica", "Automatización industrial",
  "PLC, HMI y sistemas de control", "Sensores e instrumentación", "IoT y monitorización conectada",
  "Software y plataformas digitales", "Fabricación e integración de maquinaria", "Desarrollo de productos",
  "Rehabilitación y modernización", "Mantenimiento y soporte del ciclo de vida"
];

const customerChallengesES = [
  "Un problema de producción", "Un proceso ineficiente", "Una máquina obsoleta o poco fiable",
  "La necesidad de reducir trabajo manual", "Mejor supervisión y control de datos", "Un concepto de producto o prototipo",
  "Optimización de energía o recursos", "Mantenimiento técnico urgente o preventivo", "Una oportunidad para incorporar automatización"
];

const integratedCapabilitiesES = [
  { title: "Diseño de Ingeniería", desc: "Desarrollamos maquinaria, sistemas mecánicos, diseños eléctricos, arquitecturas de control y soluciones técnicas integradas según requerimientos.", icon: PenTool },
  { title: "Maquinaria a Medida y Desarrollo de Productos", desc: "Diseñamos y construimos maquinaria especializada, equipos de procesamiento, sistemas de prueba y prototipos funcionales.", icon: Factory },
  { title: "Automatización Industrial", desc: "Integramos PLC, HMI, sensores, actuadores, controles de motor, variadores de frecuencia y sistemas de seguridad.", icon: Cpu },
  { title: "IoT e Integración Digital", desc: "Conectamos maquinaria a plataformas en la nube, paneles de control, aplicaciones móviles, alertas e informes con Knoweb.", icon: Network },
  { title: "Rehabilitación y Modernización", desc: "Restauramos maquinaria, reemplazamos controles obsoletos y mejoramos la seguridad para prolongar la vida útil de los equipos.", icon: RefreshCw },
  { title: "Implementación de Proyectos", desc: "Apoyo integral en compras, fabricación, ensamblaje, instalación, pruebas, puesta en marcha y capacitación técnica.", icon: ClipboardCheck },
  { title: "AMC y Soporte del Ciclo de Vida", desc: "Mantenimiento planificado, contratos anuales, asistencia de averías y modernizaciones continuas.", icon: ShieldCheck }
];

const industrySupportES = [
  "Desarrollo de maquinaria nacional para producción y procesamiento", "Automatización de equipos y flujos de trabajo industriales", "Restauración de maquinaria obsoleta y fuera de servicio",
  "Sustitución de sistemas de control descontinuados", "Introducción de monitorización remota y paneles de control", "Equipos especializados para la industria del té y agroalimentaria",
  "Mejora en manipulación de materiales y logística interna", "Soluciones para gestión de residuos y efluentes ambientales", "Formación técnica y transferencia de conocimientos",
  "Apoyo a la educación e investigación técnica", "Colaboración en productos especializados y sanitarios", "Ayudar a clientes a desarrollar nuevos productos y prototipos"
];

const engineeringApproachES = [
  { title: "Comprender Antes de Diseñar", desc: "Comenzamos por comprender el proceso, el problema, las condiciones de operación, las limitaciones y el resultado esperado." },
  { title: "Integrar el Sistema Completo", desc: "Consideramos la relación entre maquinaria, controles, sistemas eléctricos, software, operadores y procedimientos." },
  { title: "Modernizar Donde Sea Factible", desc: "Evaluamos si los equipos existentes pueden mejorarse antes de recomendar una sustitución completa y costosa." },
  { title: "Diseño para Uso a Largo Plazo", desc: "Priorizamos la mantenibilidad, facilidad para el operador, disponibilidad de repuestos y escalabilidad." },
  { title: "Responsabilidad Total en la Entrega", desc: "Nos mantenemos involucrados desde la evaluación y el diseño hasta la puesta en marcha, capacitación y mantenimiento." }
];

const knowebExpertiseES = [
  "Desarrollo de software", "Conectividad IoT", "Plataformas en la nube", "Aplicaciones web y móviles",
  "Paneles de control operativo", "Sistemas empresariales", "Bases de datos", "Informes digitales",
  "Monitorización y control remoto", "Integración de datos y sistemas"
];

const collaborationCapabilitiesES = [
  "Análisis de requerimientos y viabilidad", "Desarrollo de conceptos de ingeniería", "Diseño de prototipos",
  "Desarrollo mecánico y electrónico", "Sistemas embebidos", "Automatización y control",
  "Integración de IoT y software", "Pruebas y mejora de diseño", "Sistemas piloto",
  "Ingeniería de producción", "Soporte técnico para comercialización"
];

const missionPointsES = [
  "Combinar capacidades de ingeniería y digitales", "Desarrollar soluciones adaptadas a los clientes",
  "Apoyar la modernización y el uso eficiente de recursos", "Asumir la responsabilidad desde el concepto hasta la entrega",
  "Construir alianzas duraderas con clientes y socios técnicos", "Impulsar la innovación y el desarrollo industrial"
];

const guidingPrinciplesES = [
  { title: "Practicidad", desc: "Las soluciones deben ser aptas para las condiciones reales de operación y ejecución." },
  { title: "Fiabilidad", desc: "Los sistemas deben diseñarse para un rendimiento constante y a largo plazo." },
  { title: "Integración", desc: "La ingeniería, automatización y tecnologías digitales deben operar coordinadas." },
  { title: "Innovación", desc: "Aplicamos nuevas tecnologías donde aporten valor operativo real y medible." },
  { title: "Responsabilidad", desc: "Enfoque constante en la calidad, seguridad, mantenibilidad y rendimiento." },
  { title: "Colaboración", desc: "Trabajamos estrechamente con clientes y socios para alcanzar metas compartidas." },
  { title: "Mejora Continua", desc: "Respaldamos la optimización y modernización constante de cada operación." }
];

const whyWorkWithUsES = [
  { title: "Un Socio Responsable", desc: "Acceso a ingeniería mecánica, electricidad, automatización, IoT y software a través de un único interlocutor coordinado.", icon: CheckCircle2 },
  { title: "Experiencia Multisectorial", desc: "Nuestra experiencia en diversos sectores nos permite comprender múltiples entornos y crear soluciones adaptables.", icon: Globe2 },
  { title: "Capacidad de Ingeniería a Medida", desc: "Desarrollamos soluciones especializadas cuando la maquinaria estándar del mercado no satisface las necesidades.", icon: Wrench },
  { title: "Modernización y Retrofit", desc: "Ayudamos a extender la vida útil de equipos existentes, renovando controles y mejorando procesos.", icon: RefreshCw },
  { title: "Integración Física y Digital", desc: "Conectamos la maquinaria operativa con monitorización inteligente, software y paneles de mando.", icon: Network },
  { title: "Entrega de Extremo a Extremo", desc: "Acompañamos desde la evaluación y diseño hasta la instalación, puesta en marcha y mantenimiento continuo.", icon: Cog },
  { title: "Soporte Técnico a Largo Plazo", desc: "Ofrecemos mantenimiento, contratos AMC, resolución de averías y modernizaciones continuas.", icon: ShieldCheck }
];

const atAGlanceES = [
  { title: "Fundada en 2010", desc: "Más de una década de experiencia en constante evolución técnica adaptándose a las necesidades de la industria." },
  { title: "Más de 1.250 Proyectos", desc: "Historial comprobado respaldando organizaciones a través de proyectos, productos y servicios técnicos." },
  { title: "Experiencia Multisectorial", desc: "Soluciones desarrolladas en manufactura, agricultura, té, procesamiento de alimentos, logística, energía y salud." },
  { title: "Capacidad Técnica Integrada", desc: "Ingeniería mecánica, electricidad, electrónica, automatización, IoT y plataformas digitales trabajando al unísono." },
  { title: "Fuerza Local y Alcance Global", desc: "Capacidad de ingeniería esrilanquesa respaldando industrias locales y clientes internacionales." },
  { title: "Soporte Completo del Ciclo de Vida", desc: "Desde la evaluación y diseño hasta la entrega de proyectos, contratos AMC y mejora continua." }
];

const technicalDisciplinesDE = [
  "Maschinenbau", "Elektrotechnik und Elektronik", "Industrieautomatisierung",
  "SPS-, HMI- und Steuerungssysteme", "Sensoren und Instrumentierung", "IoT und vernetzte Überwachung",
  "Software und digitale Plattformen", "Maschinenbau und -integration", "Produktentwicklung",
  "Nachrüstung und Modernisierung", "Wartung und Lebenszyklus-Support"
];

const customerChallengesDE = [
  "Ein Produktionsproblem", "Ein ineffizienter Prozess", "Eine veraltete oder unzuverlässige Maschine",
  "Die Anforderung, manuelle Arbeit zu reduzieren", "Bedarf an besserer Überwachung und Steuerung", "Ein Produkt- oder Maschinenkonzept",
  "Eine Anforderung zur Verbesserung der Energie- oder Ressourceneffizienz", "Bedarf an Wartung oder technischer Unterstützung", "Eine Gelegenheit zur Einführung von Automatisierung oder digitaler Technologie"
];

const integratedCapabilitiesDE = [
  { title: "Konstruktionstechnik", desc: "Wir entwickeln Maschinen, mechanische Systeme, elektrische Konstruktionen, Steuerungsarchitekturen und integrierte technische Lösungen nach Kundenanforderungen.", icon: PenTool },
  { title: "Sondermaschinenbau und Produktentwicklung", desc: "Wir entwerfen und entwickeln Sondermaschinen, Verarbeitungsanlagen, Testsysteme, Prototypen und kundenspezifische Produkte.", icon: Factory },
  { title: "Industrieautomation", desc: "Wir integrieren SPSen, HMIs, Sensoren, Aktoren, Motorsteuerungen, Antriebe, Servosysteme und industrielle Sicherheitsfunktionen.", icon: Cpu },
  { title: "IoT und digitale Integration", desc: "Wir verbinden Maschinen, Anlagen und Betriebsumgebungen mit Cloud-Plattformen, Dashboards, mobilen Anwendungen, Alarmen und Berichtssystemen.", icon: Network },
  { title: "Nachrüstung und Modernisierung", desc: "Wir überholen Maschinen, ersetzen veraltete Steuerungssysteme, verbessern die Sicherheit und führen Automatisierung ein, um die Lebensdauer der Anlagen zu verlängern und die Leistung zu steigern.", icon: RefreshCw },
  { title: "Projektumsetzung", desc: "Wir unterstützen Beschaffung, Fertigung, Montage, Programmierung, Installation, Prüfung, Integration, Inbetriebnahme, Schulung und Übergabe.", icon: ClipboardCheck },
  { title: "AMC und Lifecycle-Support", desc: "Wir bieten geplante Wartung, technische Unterstützung, Störungsbehebung, System-Upgrades und jährliche Wartungsverträge für Sanota- und berechtigte Fremdsysteme an.", icon: ShieldCheck }
];

const industrySupportDE = [
  "Entwicklung von Maschinen für Produktion und Verarbeitung", "Automatisierung von Industrieanlagen und Arbeitsabläufen", "Instandsetzung nicht betriebsbereiter und veralteter Maschinen",
  "Austausch veralteter Steuerungssysteme", "Einführung vernetzter Überwachung und Berichterstattung", "Entwicklung von Anlagen zur Lebensmittel- und Agrarverarbeitung",
  "Unterstützung der Modernisierung der Teeverarbeitung", "Verbesserung der Materialhandhabung und Anlagentransparenz", "Entwicklung von Abfall- und Umweltlösungen",
  "Unterstützung der technischen Ausbildung und Forschung", "Zusammenarbeit bei medizinischen und spezialisierten Produkten", "Unterstützung von Kunden bei der Entwicklung neuer Produkte und Prototypen"
];

const engineeringApproachDE = [
  { title: "Verstehen vor dem Entwerfen", desc: "Wir beginnen mit dem Verständnis des Prozesses, des Problems, der Betriebsbedingungen, der Einschränkungen und des erwarteten Ergebnisses." },
  { title: "Integration des Gesamtsystems", desc: "Wir berücksichtigen die Wechselwirkungen zwischen Maschinen, Steuerungen, elektrischen Systemen, Software, Personal und Betriebsabläufen." },
  { title: "Modernisieren, wo es sinnvoll ist", desc: "Bevor wir einen kompletten Austausch empfehlen, prüfen wir, ob die vorhandenen Maschinen wiederhergestellt, nachgerüstet oder verbessert werden können." },
  { title: "Design für den Langzeiteinsatz", desc: "Wir berücksichtigen Wartungsfreundlichkeit, Bedienerfreundlichkeit, Verfügbarkeit von Komponenten, zukünftige Erweiterungsmöglichkeiten und Lebenszyklusunterstützung." },
  { title: "Verantwortungsvolle Umsetzung", desc: "Unser Engagement erstreckt sich von der ersten Bewertung und Planung über Entwicklung, Installation, Inbetriebnahme, Schulung und Wartung." }
];

const knowebExpertiseDE = [
  "Softwareentwicklung", "IoT-Konnektivität", "Cloud-Plattformen", "Web- und mobile Anwendungen",
  "Operative Dashboards", "Unternehmenssysteme", "Datenbankentwicklung", "Digitale Berichterstattung",
  "Fernüberwachung und -steuerung", "Daten- und Systemintegration"
];

const collaborationCapabilitiesDE = [
  "Anforderungs- und Machbarkeitsanalyse", "Entwicklung von Ingenieurkonzepten", "Prototypendesign",
  "Mechanische und elektronische Entwicklung", "Eingebettete Systeme", "Automatisierung und Steuerung",
  "IoT- und Softwareintegration", "Prüfung und Designverbesserung", "Pilotsysteme",
  "Produktionsentwicklung", "Technische Unterstützung bei der Kommerzialisierung"
];

const missionPointsDE = [
  "Kombination von Ingenieur- und Digitalkapazitäten", "Entwicklung kundenspezifischer Lösungen",
  "Unterstützung bei Modernisierung und Ressourceneffizienz", "Verantwortung vom Konzept bis zur Umsetzung",
  "Aufbau langfristiger Kunden- und Technikpartnerschaften", "Förderung von Innovation und industrieller Entwicklung"
];

const guidingPrinciplesDE = [
  { title: "Praxisnähe", desc: "Lösungen müssen für reale Betriebsbedingungen und Umsetzungsanforderungen geeignet sein." },
  { title: "Zuverlässigkeit", desc: "Systeme müssen auf gleichbleibende Leistung und langfristigen Betrieb ausgelegt sein." },
  { title: "Integration", desc: "Ingenieurwesen, Automatisierung und digitale Technologien müssen als koordiniertes System funktionieren." },
  { title: "Innovation", desc: "Neue Technologien sollten dort eingesetzt werden, wo sie echten operativen Mehrwert schaffen." },
  { title: "Verantwortung", desc: "Fokus auf Qualität, Sicherheit, Wartbarkeit und Leistungsfähigkeit der Lösung." },
  { title: "Partnerschaft", desc: "Enge Zusammenarbeit mit Kunden und Partnern zur Erreichung gemeinsamer Ziele." },
  { title: "Kontinuierliche Verbesserung", desc: "Unterstützung der kontinuierlichen Optimierung und Weiterentwicklung von Kundenabläufen." }
];

const whyWorkWithUsDE = [
  { title: "Ein verantwortlicher Partner", desc: "Zugang zu Maschinenbau, Elektrik, Automatisierung, IoT, Software und Support aus einer Hand.", icon: CheckCircle2 },
  { title: "Branchenübergreifende Erfahrung", desc: "Erfahrung in vielfältigen Sektoren hilft uns, unterschiedliche Betriebsumgebungen zu verstehen.", icon: Globe2 },
  { title: "Maßgeschneiderte Ingenieurkompetenz", desc: "Entwicklung von Speziallösungen, wo Standardmaschinen oder -technik nicht ausreichen.", icon: Wrench },
  { title: "Retrofit- und Modernisierungskompetenz", desc: "Lebensdauer von Anlagen verlängern, veraltete Steuerungen ersetzen und bestehende Abläufe optimieren.", icon: RefreshCw },
  { title: "Physische und digitale Integration", desc: "Maschinen und Betriebssysteme mit intelligenter Überwachung, Dashboards und Daten vernetzen.", icon: Network },
  { title: "Ganzheitliche Projektabwicklung", desc: "Von der Bewertung und Konstruktion bis zur Installation, Inbetriebnahme, Schulung und Lifecycle-Betreuung.", icon: Cog },
  { title: "Langfristiger technischer Support", desc: "Wartung, AMC-Verträge, Störungsbehebung, Upgrades und Leistungsoptimierung.", icon: ShieldCheck }
];

const atAGlanceDE = [
  { title: "Gegründet 2010", desc: "Ingenieur- und Technologieerfahrung gewachsen an sich wandelnden industriellen Anforderungen." },
  { title: "1.250+ Kundenprojekte", desc: "Erfolgreiche Unterstützung von Unternehmen durch Produkte, Projekte und technische Dienstleistungen." },
  { title: "Branchenübergreifende Expertise", desc: "Lösungen in Fertigung, Landwirtschaft, Teeverarbeitung, Lebensmittel, Logistik, Energie und Gesundheit." },
  { title: "Integrierte Ingenieurkompetenz", desc: "Maschinenbau, Elektrotechnik, Elektronik, Automatisierung, IoT und Software nahtlos vereint." },
  { title: "Lokale Stärke & globale Reichweite", desc: "Srilankische Ingenieurkompetenz zur Unterstützung lokaler Industrien und internationaler Partner." },
  { title: "Vollständiger Lifecycle-Support", desc: "Von der Betriebsanalyse und Konstruktion über Projektabwicklung bis zu Wartungsverträgen (AMC)." }
];


const technicalDisciplinesJA = [
  "機械工学", "電気電子工学", "産業オートメーション", 
  "PLC、HMI、制御システム", "センサーおよび計装", "IoTとコネクテッドモニタリング", 
  "ソフトウェアとデジタルプラットフォーム", "機械の製造および統合", "製品開発", 
  "レトロフィットおよび近代化", "保守およびライフサイクルサポート"
];

const customerChallengesJA = [
  "生産上の課題", "非効率なプロセス", "老朽化または信頼性の低い機械", 
  "手作業の削減要求", "より優れた監視と制御の必要性", "製品または機械のコンセプト", 
  "エネルギーまたは資源利用の改善要求", "保守または技術サポートの必要性", "自動化またはデジタル技術導入の機会"
];

const integratedCapabilitiesJA = [
  { title: "エンジニアリング設計", desc: "顧客の要求に応じた機械、機械システム、電気設計、制御アーキテクチャ、統合技術ソリューションを開発します。", icon: PenTool },
  { title: "特注機械および製品開発", desc: "専用機械、加工設備、試験システム、プロトタイプ、カスタマイズ製品を設計・開発します。", icon: Factory },
  { title: "産業オートメーション", desc: "PLC、HMI、センサー、アクチュエータ、モーター制御、ドライブ、サーボシステム、産業安全機能を統合します。", icon: Cpu },
  { title: "IoTとデジタル統合", desc: "機械、資産、運用環境をクラウドプラットフォーム、ダッシュボード、モバイルアプリ、アラート、レポートシステムに接続します。", icon: Network },
  { title: "レトロフィットおよび近代化", desc: "機械のオーバーホール、老朽化制御システムの刷新、安全性向上、自動化導入により機器寿命を延ばし性能を向上させます。", icon: RefreshCw },
  { title: "プロジェクト実装", desc: "調達、製造、組立、プログラミング、設置、試験、統合、試運転、トレーニング、引き渡しをサポートします。", icon: ClipboardCheck },
  { title: "AMCおよびライフサイクルサポート", desc: "サノタ製システムおよび対象サードパーティ製機器に対して、計画保守、技術支援、故障対応、アップグレード、年間保守契約（AMC）を提供します。", icon: ShieldCheck }
];

const industrySupportJA = [
  "生産および加工用機械の開発", "産業機器およびワークフローの自動化", "稼働停止および老朽化した機械の復旧", 
  "旧式制御システムの刷新", "コネクテッド監視およびレポートの導入", "食品および農業加工機器の開発", 
  "製茶加工の近代化サポート", "マテリアルハンドリングおよび資産の可視性向上", "廃棄物および環境ソリューションの開発", 
  "技術教育および研究のサポート", "ヘルスケアおよび特殊製品での協働", "顧客の新製品およびプロトタイプ開発の支援"
];

const engineeringApproachJA = [
  { title: "設計する前に理解する", desc: "プロセス、課題、運用環境、制約条件、期待される成果を深く理解することから始めます。" },
  { title: "システム全体を統合する", desc: "機械、制御、電気システム、ソフトウェア、運用担当者、作業手順の関係性を包括的に考慮します。" },
  { title: "実用的な場合は近代化する", desc: "全面的な更新を推奨する前に、既存設備を復旧・レトロフィット・改善可能かどうかを評価します。" },
  { title: "長期使用を見据えた設計", desc: "保守性、操作性、部品調達の容易さ、将来の拡張性、ライフサイクルサポートを考慮します。" },
  { title: "導入を通じて責任を持ち続ける", desc: "初期評価と設計から開発、設置、試運転、トレーニング、保守に至るまで一貫して支援します。" }
];

const knowebExpertiseJA = [
  "ソフトウェア開発", "IoTコネクティビティ", "クラウドプラットフォーム", "Webおよびモバイルアプリケーション", 
  "運用ダッシュボード", "エンタープライズシステム", "データベース開発", "デジタルレポート", 
  "リモート監視および制御", "データとシステムの統合"
];

const collaborationCapabilitiesJA = [
  "要件および実現可能性の分析", "エンジニアリングコンセプト開発", "プロトタイプ設計", 
  "機械および電子開発", "組込みシステム", "自動化および制御", 
  "IoTおよびソフトウェア統合", "テストと設計改善", "パイロットシステム", 
  "生産技術・量産化エンジニアリング", "商業化に向けた技術サポート"
];

const missionPointsJA = [
  "エンジニアリングとデジタルの融合", "顧客要件に応じた最適なソリューション開発", 
  "近代化と資源の効率的利用の推進", "コンセプトから導入までの包括的責任", 
  "長期的な顧客および技術パートナーシップの構築", "産業の革新と発展の支援"
];

const guidingPrinciplesJA = [
  { title: "実用性", desc: "実際の運用環境と導入要件に即した最適なソリューションを提供します。" },
  { title: "信頼性", desc: "安定した性能を発揮し、長期的な稼働を支えるシステムを設計します。" },
  { title: "統合", desc: "エンジニアリング、自動化、デジタル技術が調和した1つのシステムとして機能させます。" },
  { title: "イノベーション", desc: "真の運用価値を生み出す分野に新技術を適用します。" },
  { title: "責任感", desc: "品質、安全性、保守性、システムの性能向上に注力します。" },
  { title: "パートナーシップ", desc: "共通の技術・運用目標を達成するためにお客様や協力者と緊密に連携します。" },
  { title: "継続的改善", desc: "顧客の事業の継続的な最適化、近代化、発展をサポートします。" }
];

const whyWorkWithUsJA = [
  { title: "一元的に責任を持つパートナー", desc: "機械工学、電気システム、自動化、IoT、ソフトウェア、導入サポートを1つの窓口で包括的に提供します。", icon: CheckCircle2 },
  { title: "多様な業界での実績", desc: "多岐にわたる分野での経験により、異なる運用環境を素早く理解し適応性の高いソリューションを開発できます。", icon: Globe2 },
  { title: "特注エンジニアリング力", desc: "標準的な機械や技術では満たせない固有の課題に対して専用のソリューションを開発します。", icon: Wrench },
  { title: "レトロフィットと近代化のノウハウ", desc: "機械の寿命を延ばし、旧式制御を最新化し、既存設備の運用効率を向上させます。", icon: RefreshCw },
  { title: "物理システムとデジタルの統合", desc: "機械や運用システムをスマートな監視、ソフトウェア、ダッシュボード、データとシームレスに連携させます。", icon: Network },
  { title: "エンドツーエンドの提供体制", desc: "評価、設計、開発、設置、試運転、オペレータートレーニング、ライフサイクルケアまで支援します。", icon: Cog },
  { title: "長期的な技術サポート", desc: "定期保守、年間保守契約（AMC）、トラブルシューティング、アップグレード、性能改善を提供します。", icon: ShieldCheck }
];

const atAGlanceJA = [
  { title: "2010年設立", desc: "変化する産業要件に対応しながら培われたエンジニアリングと技術の確かな経験。" },
  { title: "1,250件以上の支援実績", desc: "製品、プロジェクト、技術サービスを通じて多様な組織をサポートしてきた確固たる実績。" },
  { title: "多様な産業への展開", desc: "製造、農業、食品加工、製茶、物流、エネルギー、環境管理、インフラ、ヘルスケアでの実績。" },
  { title: "統合された技術力", desc: "機械工学、電気・電子システム、自動化、IoT、ソフトウェアが融合した強固な実行力。" },
  { title: "現地での強みとグローバルな視野", desc: "スリランカの高度なエンジニアリング力で現地産業と国際的な顧客・パートナーを支援。" },
  { title: "完全なライフサイクルサポート", desc: "運用評価・設計からプロジェクト納品、年間保守契約（AMC）、継続的改善まで包括対応。" }
];

export default function AboutPage() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const ab = isJa ? aboutJA : isDe ? aboutDE : isEs ? aboutES : null;

  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePrinciple(prev => (prev + 1) % guidingPrinciples.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow">
        
        {/* 1. Page Hero */}
        <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-transparent min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: "url('/about_hero_bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#050B14]/60 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B14]/20 to-[#050B14]/90 z-0" />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-5"
            >
              {ab ? ab.hero.heading : "About Sanota"}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-8 leading-tight max-w-5xl mx-auto"
            >
              {ab ? (
                ab.hero.subheading
              ) : (
                <>
                  Practical Engineering. Connected Technology. <span className="text-[#E8B84B]">Lasting Operational Value.</span>
                </>
              )}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-4xl mx-auto mb-6 font-medium leading-relaxed"
            >
              {ab ? ab.hero.description : "Sanota is an integrated engineering and technology solutions company that helps industries design, develop, automate, modernize, maintain and improve machinery, products, processes and operational systems."}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-slate-400 max-w-4xl mx-auto mb-6 leading-relaxed"
            >
              {ab ? ab.hero.footnote : "Established in Sri Lanka in 2010, we combine engineering experience, practical implementation and digital technology to develop solutions around real operational requirements."}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/tell-us-your-challenge" className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center">
                {ab ? ab.hero.primaryButton : "Discuss Your Requirement"} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/media" className="px-8 py-4 bg-[#131C2E]/80 hover:bg-slate-800 text-white dark:text-white font-bold rounded-lg border border-slate-700 transition-colors flex items-center justify-center">
                {ab ? ab.hero.secondaryButton : "Explore Our Projects"}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. Who We Are */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden border-t border-slate-200/60 dark:border-transparent">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8B84B]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 }
                  }
                }}
                className="lg:w-1/2"
              >
                <motion.h2 variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center">
                  <span className="w-8 h-px bg-[#E8B84B] mr-4" /> {ab ? ab.whoWeAre.heading : "Who We Are"}
                </motion.h2>
                <motion.h3 variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6 leading-tight">
                  {ab ? ab.whoWeAre.title : "Engineering Solutions Built Around Real Requirements"}
                </motion.h3>
                <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                  {ab ? ab.whoWeAre.description : "Sanota (Pvt) Ltd works with organizations to understand operational challenges and develop practical engineering solutions that improve productivity, reliability, safety, visibility and resource efficiency."}
                </motion.p>
                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="bg-white/80 dark:bg-[#0B1220]/50 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 mb-8 hover:border-[#2E5EAA]/50 transition-colors shadow-sm dark:shadow-none">
                  <p className="text-slate-500 dark:text-slate-400 mb-4 font-bold text-sm tracking-wide uppercase">
                    {ab ? ab.whoWeAre.disciplinesTitle : "Our technical disciplines include:"}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(isJa ? technicalDisciplinesJA : isDe ? technicalDisciplinesDE : isEs ? technicalDisciplinesES : technicalDisciplines).map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#C59B27] to-amber-600 mt-2 mr-3 shrink-0 shadow-[0_0_5px_rgba(232,184,75,0.5)]" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="relative p-6 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-gradient-to-br from-[#F5F3EF] dark:from-[#131C2E]/60 to-white/80 dark:to-[#0B1220]/60 overflow-hidden group shadow-sm dark:shadow-none">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#C59B27] dark:from-[#E8B84B] to-transparent" />
                  <p className="text-slate-600 dark:text-slate-300 italic text-sm leading-relaxed relative z-10 font-medium">
                    {ab ? `"${ab.whoWeAre.closing}"` : '"This integrated capability allows Sanota to take responsibility for more than an individual machine or isolated technology. We consider how the complete system must operate, how it will be implemented and how it can be supported over the long term."'}
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/50 group"
              >
                <motion.img 
                  src="/about_hero_bg.jpg" 
                  alt="Who We Are" 
                  animate={{ scale: [1, 1.05, 1], x: [0, -10, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 bg-[#2E5EAA]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#0B1220]/80 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="flex items-center">
                    <Factory className="w-8 h-8 text-[#E8B84B] mr-4" />
                    <div>
                      <p className="text-white font-bold text-lg">{isJa ? "統合された技術力" : isDe ? "Integrierte Kompetenz" : isEs ? "Capacidad Integrada" : "Integrated Capability"}</p>
                      <p className="text-slate-400 text-sm">{isJa ? "機械、電気、デジタル" : isDe ? "Mechanisch, Elektrisch & Digital" : isEs ? "Mecánica, Eléctrica y Digital" : "Mechanical, Electrical, & Digital"}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 3. Our Story */}
        <section className="py-8 lg:py-12 bg-slate-50/60 dark:bg-[#0B1220]/30 relative overflow-hidden border-t border-slate-200 dark:border-slate-800/40">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2E5EAA]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 relative h-[650px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/50 group"
              >
                <motion.img 
                  src="/electronics_engineering_story.jpg" 
                  alt="Our Story" 
                  animate={{ scale: [1.05, 1, 1.05], y: [0, -10, 0] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#0B1220]/80 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="flex items-center">
                    <div className="text-3xl font-black text-[#E8B84B] mr-4">1,250+</div>
                    <div>
                      <p className="text-white font-bold text-lg">{isJa ? "顧客エンゲージメント" : isDe ? "Kundenprojekte" : isEs ? "Proyectos Ejecutados" : "Client Engagements"}</p>
                      <p className="text-slate-300 text-sm">{isJa ? "2010年設立以来" : isDe ? "Seit 2010" : isEs ? "Desde 2010" : "Since 2010"}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 }
                  }
                }}
                className="lg:w-1/2"
              >
                <motion.h2 variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center">
                  <span className="w-8 h-px bg-[#E8B84B] mr-4" /> {ab ? ab.ourHistory.heading : "Our Story"}
                </motion.h2>
                <motion.h3 variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6 leading-tight">
                  {ab ? ab.ourHistory.title : "Developing Engineering Solutions Since 2010"}
                </motion.h3>
                <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  <motion.p variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                    {ab ? ab.ourHistory.paragraph1 : "Sanota was founded in 2010 by Mr. Sahan C. Ranasinghe with the objective of identifying real industrial and operational problems and developing practical technical solutions to address them."}
                  </motion.p>
                  <motion.p variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                    {ab ? ab.ourHistory.paragraph2 : "Since its establishment, Sanota has expanded its capabilities across machinery development, industrial automation, electronics, IoT, software, product development and integrated engineering systems."}
                  </motion.p>
                  <motion.p variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                    {isJa ? "当社は製造業、農業、食品加工業、茶業、物流業、エネルギー業、環境管理業、インフラ、医療、研究など、多岐にわたる分野で実績を築いてきました。" : isDe ? "Das Unternehmen hat in einer Vielzahl von Branchen gearbeitet und Anforderungen in Fertigung, Landwirtschaft, Lebensmittelverarbeitung, Tee, Logistik, Energie, Umweltmanagement, Infrastruktur, Gesundheitswesen und Forschung unterstützt." : isEs ? "La empresa ha trabajado en una amplia gama de sectores, respaldando requerimientos en manufactura, agricultura, procesamiento de alimentos, té, logística, energía, gestión ambiental, infraestructura, salud e investigación." : "The company has worked across a wide range of sectors, supporting requirements in manufacturing, agriculture, food processing, tea, logistics, energy, environmental management, infrastructure, healthcare and research."}
                  </motion.p>
                  <motion.p variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                    {isJa ? (
                      <>サノタは<strong className="text-[#17135B] dark:text-white">1,250件を超える顧客エンゲージメント</strong>を通じて、新システムの開発、既存業務の改善、老朽化した機械の近代化、そして標準製品では満たせないニーズに対する専門的ソリューションの提供において豊富な実績を培ってきました。</>
                    ) : isDe ? (
                      <>Durch mehr als <strong className="text-[#17135B] dark:text-white">1.250 Kundenprojekte</strong> hat Sanota Erfahrung in der Entwicklung neuer Systeme, der Optimierung bestehender Abläufe und der Modernisierung veralteter Maschinen gesammelt.</>
                    ) : isEs ? (
                      <>A través de más de <strong className="text-[#17135B] dark:text-white">1.250 proyectos con clientes</strong>, Sanota ha adquirido la experiencia para desarrollar nuevos sistemas, optimizar operaciones existentes, modernizar maquinaria y crear soluciones especializadas que no siempre se satisfacen con productos comerciales estándar.</>
                    ) : (
                      <>Through more than <strong className="text-[#17135B] dark:text-white">1,250 client engagements</strong>, Sanota has gained experience in developing new systems, improving existing operations, modernizing ageing machinery and creating specialized solutions for requirements that cannot always be met through standard products.</>
                    )}
                  </motion.p>
                  <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="bg-gradient-to-r from-[#2E5EAA]/10 dark:from-[#2E5EAA]/20 to-transparent p-5 rounded-xl border-l-2 border-[#2E5EAA]">
                    <p className="text-[#17135B] dark:text-white font-medium text-base">
                      {isJa ? "今日、サノタは国内外の顧客、プロジェクト、パートナーシップを支援できる能力を持つスリランカのエンジニアリング・テクノロジー企業としての地位を確立し続けています。" : isDe ? "Heute stärkt Sanota weiterhin seine Rolle als srilankisches Engineering- und Technologieunternehmen mit der Fähigkeit, sowohl lokale als auch internationale Kunden, Projekte und Partnerschaften zu unterstützen." : isEs ? "Hoy, Sanota continúa fortaleciendo su papel como una empresa de ingeniería y tecnología de Sri Lanka con la capacidad de apoyar tanto a clientes, proyectos y asociaciones locales como internacionales." : "Today, Sanota continues to strengthen its role as a Sri Lankan engineering and technology company with the capability to support both local and international customers, projects and partnerships."}
                    </p>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        
        <div className="relative w-full">
          <div className="sticky top-0 w-full h-screen z-0 opacity-40 pointer-events-none">
            <Antigravity
              count={50}
              magnetRadius={6}
              ringRadius={7}
              waveSpeed={0.4}
              waveAmplitude={1}
              particleSize={1.5}
              lerpSpeed={0.05}
              color="#E8B84B"
              autoAnimate
              particleVariance={1}
              rotationSpeed={0}
              depthFactor={1}
              pulseSpeed={3}
              particleShape="capsule"
              fieldStrength={10}
            />
          </div>
          <div className="relative z-10 -mt-[100vh]">
{/* 4. What We Do */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 lg:mb-12 max-w-3xl mx-auto"
            >
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center">
                <span className="w-6 h-px bg-[#C59B27] dark:bg-[#E8B84B] mr-3" /> {ab ? ab.whatWeDo.heading : "What We Do"} <span className="w-6 h-px bg-[#C59B27] dark:bg-[#E8B84B] ml-3" />
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-[#17135B] dark:text-white mb-6">
                {ab ? ab.whatWeDo.title : "From Operational Challenge to Engineered Solution"}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                {ab ? ab.whatWeDo.intro : "Customers do not always need to approach Sanota with a completed technical specification. They may come to us with:"}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 lg:mb-12">
              {(isJa ? customerChallengesJA : isDe ? customerChallengesDE : isEs ? customerChallengesES : customerChallenges).map((challenge, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative group w-full h-full rounded-2xl p-[1px] overflow-hidden shadow-lg"
                >
                  <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#2E5EAA_360deg)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white dark:bg-[#131C2E]/80 backdrop-blur-sm w-full h-full p-6 flex items-start rounded-[calc(1rem-1px)] border border-slate-200 dark:border-slate-700/50 group-hover:border-transparent transition-colors z-10 shadow-sm dark:shadow-none">
                    <CheckCircle2 className="w-6 h-6 text-[#2E5EAA] mr-4 shrink-0 mt-0.5 group-hover:text-[#E8B84B] transition-colors" />
                    <p className="text-slate-600 dark:text-slate-300 font-medium group-hover:text-[#17135B] dark:group-hover:text-white transition-colors">{challenge}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center space-y-6 bg-gradient-to-r from-[#F5F3EF] dark:from-[#0B1220] via-white dark:via-[#131C2E]/80 to-[#F5F3EF] dark:to-[#0B1220] border border-slate-200 dark:border-slate-700/50 rounded-3xl p-10 shadow-lg dark:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#C59B27] dark:via-[#E8B84B] to-transparent opacity-50" />
              <p className="text-[#17135B] dark:text-white text-xl font-bold leading-relaxed">
                {isJa ? "私たちの役割は、要件を綿密に調査し、運用環境を深く理解し、適切なエンジニアリングソリューションを策定することです。" : isDe ? "Unsere Aufgabe ist es, die Anforderungen zu analysieren, die Betriebsumgebung zu verstehen und eine angemessene technische Lösung zu formulieren." : isEs ? "Nuestra función es estudiar el requerimiento, comprender el entorno operativo y formular una respuesta de ingeniería adecuada." : "Our role is to study the requirement, understand the operating environment and develop an appropriate engineering response."}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
                {isJa ? "プロジェクトに応じて、機械設計、製造、電気システム、自動化、センサー、IoT、ソフトウェア、ダッシュボード、設置、試運転、保守、またはこれらを統合した能力が含まれます。" : isDe ? "Je nach Projekt kann dies Maschinenkonstruktion, Fertigung, Elektrotechnik, Automatisierung, Sensorik, IoT, Software, Dashboards, Installation, Inbetriebnahme, Wartung oder eine Kombination dieser Disziplinen umfassen." : isEs ? "Según el proyecto, esto puede incluir diseño y fabricación de maquinaria, sistemas eléctricos, automatización, sensores, IoT, software, paneles de control, instalación, puesta en marcha, mantenimiento o una combinación integrada de estas disciplinas." : "Depending on the project, this may involve machinery design, fabrication, electrical systems, automation, sensors, IoT, software, dashboards, installation, commissioning, maintenance or a combination of these capabilities."}
              </p>
              <Link href="/services" className="inline-flex items-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-all hover:scale-105 shadow-xl">
                {ab ? ab.whatWeDo.button : "Explore Our Services"} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 5. Our Integrated Capabilities */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden border-t border-slate-200 dark:border-slate-800/40">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#E8B84B]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 lg:mb-12"
            >
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center">
                <span className="w-6 h-px bg-[#C59B27] dark:bg-[#E8B84B] mr-3" /> {ab ? ab.capabilities.heading : "Our Integrated Capabilities"} <span className="w-6 h-px bg-[#C59B27] dark:bg-[#E8B84B] ml-3" />
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-[#17135B] dark:text-white mb-6">
                {ab ? ab.capabilities.subheading : "One Connected Engineering Approach"}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                {isJa ? "サノタの最大の強みは、異なるエンジニアリングおよびテクノロジー分野を1つの統合ソリューションとして包括的に調整できる能力にあります。" : isDe ? "Die Kernstärke von Sanota liegt in der Fähigkeit, verschiedene Engineering- und Technologiedisziplinen in einer einzigen integrierten Lösung zu koordinieren." : isEs ? "La principal fortaleza de Sanota es la capacidad de coordinar diferentes disciplinas de ingeniería y tecnología dentro de una misma solución integral." : "Sanota's principal strength is the ability to coordinate different engineering and technology disciplines within one solution."}
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {(isJa ? integratedCapabilitiesJA : isDe ? integratedCapabilitiesDE : isEs ? integratedCapabilitiesES : integratedCapabilities).map((cap, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group rounded-3xl p-[1px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0 flex flex-col"
                >
                  <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#E8B84B_360deg)] animate-[spin_6s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white dark:bg-[#131C2E]/80 backdrop-blur-md w-full h-full p-8 flex flex-col rounded-[calc(1.5rem-1px)] border border-slate-200 dark:border-slate-700/50 group-hover:border-transparent transition-colors z-10 flex-grow shadow-sm dark:shadow-none">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F5F3EF] dark:from-[#0B1220] to-white dark:to-[#131C2E] border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 shadow-inner group-hover:shadow-[0_0_15px_rgba(232,184,75,0.3)] transition-all">
                      <cap.icon className="w-7 h-7 text-[#C59B27] dark:text-[#E8B84B]" />
                    </div>
                    <h4 className="text-xl font-bold text-[#17135B] dark:text-white mb-4 group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] transition-colors">{cap.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 & 7. Supporting Industries & Engineering Approach */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden border-t border-slate-200 dark:border-slate-800/40">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2E5EAA]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              
              {/* Supporting Sri Lankan Industries */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center">
                  <span className="w-8 h-px bg-[#C59B27] dark:bg-[#E8B84B] mr-4" /> {ab ? ab.sriLankaSupport.heading : "Supporting Industries"}
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6 leading-tight">
                  {ab ? ab.sriLankaSupport.title : "Engineering Progress Across Diverse Sectors"}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                  {isJa ? "サノタは、スリランカ国内および海外の幅広い産業分野に対してエンジニアリングおよび技術サポートを提供してきました。" : isDe ? "Sanota hat technische und ingenieurmäßige Unterstützung für eine Vielzahl von Branchen in Sri Lanka und international bereitgestellt." : isEs ? "Sanota ha extendido apoyo técnico y de ingeniería a través de una amplia gama de industrias en Sri Lanka e internacionalmente." : "Sanota has extended engineering and technical support across a broad range of industries in Sri Lanka."}
                </p>
                
                <p className="text-slate-500 dark:text-slate-400 mb-6 font-bold uppercase tracking-widest text-xs">
                  {isJa ? "私たちの主な支援実績：" : isDe ? "Unsere Arbeit umfasste unter anderem:" : isEs ? "Nuestro trabajo ha incluido:" : "Our work has included:"}
                </p>
                <div className="space-y-4 mb-8">
                  {(isJa ? industrySupportJA : isDe ? industrySupportDE : isEs ? industrySupportES : industrySupport).map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#2E5EAA] mr-3 mt-0.5 shrink-0 group-hover:text-[#E8B84B] transition-colors" />
                      <span className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-[#F5F3EF] dark:from-[#131C2E]/60 to-white dark:to-[#0B1220]/60 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 mb-8 relative overflow-hidden group shadow-sm dark:shadow-none">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#2E5EAA] to-[#E8B84B]" />
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 font-medium">
                    {isJa ? "これらの活動を通じて、サノタは現地のエンジニアリング開発、産業の生産性向上、技術導入、付加価値創出、輸入代替の機会に貢献しています。" : isDe ? "Durch diese Aktivitäten trägt Sanota zur lokalen Ingenieurentwicklung, industriellen Produktivität, Technologieeinführung, Wertschöpfung und Importsubstitution bei." : isEs ? "A través de estas actividades, Sanota contribuye al desarrollo de la ingeniería local, productividad industrial, adopción de tecnología, adición de valor y sustitución de importaciones." : "Through these activities, Sanota contributes to local engineering development, industrial productivity, technology adoption, value addition and import-substitution opportunities."}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed italic">
                    {isJa ? "多様な産業での実績により、ある運用環境で培った知見や技術を別の分野へ柔軟に応用・転移させることができます。" : isDe ? "Unsere Erfahrung in verschiedenen Branchen ermöglicht es uns, relevantes Wissen und Technologien von einer Betriebsumgebung auf eine andere zu übertragen." : isEs ? "Nuestra experiencia en diferentes sectores nos permite transferir conocimientos y tecnologías relevantes de un entorno operativo a otro." : "Our experience across different industries also enables us to transfer relevant knowledge and technologies from one operational environment to another."}
                  </p>
                </div>

                <Link href="/industries" className="inline-flex items-center px-8 py-4 bg-[#17135B] dark:bg-[#131C2E] hover:bg-[#0f0d45] dark:hover:bg-slate-800 border border-[#17135B] dark:border-slate-700 text-white font-bold rounded-lg transition-all hover:scale-105">
                  {ab ? ab.sriLankaSupport.button : "Explore Industries"} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>

              {/* Our Engineering Approach */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center">
                  {ab ? ab.engineeringApproach.heading : "Our Engineering Approach"} <span className="w-8 h-px bg-[#C59B27] dark:bg-[#E8B84B] ml-4" />
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6 leading-tight">
                  {ab ? ab.engineeringApproach.title : "Practical Solutions Designed for Implementation"}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                  {isJa ? "サノタは、優れたエンジニアリングソリューションとは顧客の実際の運用環境において確実に機能するものでなければならないという確信を持ってすべての案件に取り組んでいます。" : isDe ? "Sanota geht jedes Projekt mit dem Verständnis an, dass eine erfolgreiche technische Lösung in der realen Betriebsumgebung des Kunden zuverlässig funktionieren muss." : isEs ? "Sanota aborda cada proyecto comprendiendo que una solución de ingeniería exitosa debe funcionar de manera fiable dentro del entorno operativo real del cliente." : "Sanota approaches every project with an understanding that a successful engineering solution must work reliably within the customer’s actual operating environment."}
                </p>
                
                <p className="text-[#C59B27] dark:text-[#E8B84B] font-bold mb-8 uppercase tracking-widest text-xs">
                  {isJa ? "私たちのアプローチは5つの原則に基づいています：" : isDe ? "Unser Ansatz basiert auf fünf Prinzipien:" : isEs ? "Nuestro enfoque se guía por cinco principios:" : "Our approach is guided by five principles:"}
                </p>
                
                <div className="space-y-0 relative before:absolute before:inset-0 before:ml-[23px] before:w-0.5 before:bg-gradient-to-b before:from-slate-700 before:to-transparent">
                  {(isJa ? engineeringApproachJA : isDe ? engineeringApproachDE : isEs ? engineeringApproachES : engineeringApproach).map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-6 pb-10 group"
                    >
                      <div className="relative z-10 w-12 h-12 rounded-full bg-[#F5F3EF] dark:bg-[#131C2E] border-[3px] border-slate-300 dark:border-slate-700 flex items-center justify-center shrink-0 group-hover:border-[#C59B27] dark:group-hover:border-[#E8B84B] group-hover:bg-[#C59B27]/20 dark:group-hover:bg-[#E8B84B]/20 transition-all duration-300 shadow-sm dark:shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        <span className="text-slate-500 dark:text-slate-400 font-black text-sm group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] transition-colors">{idx + 1}</span>
                      </div>
                      <div className="pt-1.5 group-hover:translate-x-2 transition-transform duration-300">
                        <h4 className="text-[#17135B] dark:text-white font-bold text-xl mb-2 group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] transition-colors">{item.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 8 & 9. Sanota and Knoweb & Innovation */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden border-t border-slate-200 dark:border-slate-800/40">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Sanota and Knoweb */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-700/50 shadow-xl dark:shadow-2xl flex flex-col lg:flex-row group bg-white dark:bg-[#131C2E]/80 backdrop-blur-md"
            >
              <div className="relative w-full lg:w-[45%] h-64 lg:h-auto overflow-hidden">
                <motion.img 
                  src="/featured_iot_1789116892994.jpg" 
                  alt="Knoweb Integration" 
                  animate={{ scale: [1.05, 1, 1.05], x: [0, 10, 0] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>
              <div className="p-8 lg:p-12 xl:p-16 lg:w-[55%] flex flex-col justify-center">
                <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-3">
                  {ab ? ab.knoweb.heading : "Sanota and Knoweb"}
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-5">
                  {ab ? ab.knoweb.title : "Engineering Connected by Digital Technology"}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                  {ab ? ab.knoweb.description : "Sanota's integrated engineering capability is supported by Knoweb, an affiliated information technology company under common ownership."}
                </p>
                
                <div className="bg-slate-50 dark:bg-[#0B1220]/60 backdrop-blur-md rounded-2xl p-6 mb-6 border border-slate-200 dark:border-slate-700/50">
                  <p className="text-slate-500 dark:text-slate-400 font-bold mb-4 text-sm uppercase tracking-wider">
                    {isJa ? "Knowebの専門領域：" : isDe ? "Knoweb bringt Fachwissen ein in:" : isEs ? "Knoweb aporta experiencia especializada en:" : "Knoweb contributes specialist expertise in:"}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(isJa ? knowebExpertiseJA : isDe ? knowebExpertiseDE : isEs ? knowebExpertiseES : knowebExpertise).map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C59B27] dark:bg-[#E8B84B] mr-3 shrink-0 shadow-[0_0_5px_rgba(232,184,75,0.5)]" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8 font-medium">
                  {isJa ? "この緊密な連携により、サノタは物理的なエンジニアリングシステムとデジタル技術を高度に融合できます。機械はセンサー、自動化、クラウド、ダッシュボード、アラート、トレーサビリティを備えたネットワーク運用システムの一部となります。" : isDe ? "Diese Zusammenarbeit ermöglicht es Sanota, physische Systeme mit digitalen Technologien zu verbinden. Eine Maschine wird so Teil eines vernetzten Gesamtsystems mit Sensoren, Automatisierung, Cloud, Dashboards und Reporting." : isEs ? "Esta relación permite a Sanota combinar sistemas de ingeniería física con tecnologías digitales. Una máquina puede formar parte de un sistema operativo conectado con sensores, automatización, nube, paneles, alertas y gestión." : "This relationship enables Sanota to combine physical engineering systems with digital technologies. A machine can therefore become part of a connected operational system incorporating sensors, automation, cloud access, dashboards, alerts, traceability and management reporting."}
                </p>

                <div>
                  <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-all hover:scale-105 shadow-xl text-sm">
                    {ab ? ab.knoweb.button : "Explore Digital Integration"} <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Innovation and Collaboration */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-700/50 shadow-xl dark:shadow-2xl flex flex-col lg:flex-row-reverse group bg-white dark:bg-[#131C2E]/80 backdrop-blur-md"
            >
              <div className="relative w-full lg:w-[45%] h-64 lg:h-auto overflow-hidden">
                <motion.img 
                  src="/featured_industrial_1789116846117.jpg" 
                  alt="Innovation" 
                  animate={{ scale: [1, 1.05, 1], y: [0, 10, 0] }}
                  transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>
              
              <div className="p-8 lg:p-12 xl:p-16 lg:w-[55%] flex flex-col justify-center">
                <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-3">
                  {ab ? ab.innovation.heading : "Innovation and Collaboration"}
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-5">
                  {ab ? ab.innovation.title : "Turning Ideas into Practical Solutions"}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                  {ab ? ab.innovation.description : "Sanota works with businesses, inventors, universities, researchers, institutions and technology partners to develop solutions for specialized and emerging requirements."}
                </p>
                
                <div className="bg-slate-50 dark:bg-[#0B1220]/60 backdrop-blur-md rounded-2xl p-6 mb-6 border border-slate-200 dark:border-slate-700/50">
                  <p className="text-slate-500 dark:text-slate-400 font-bold mb-4 text-sm uppercase tracking-wider">
                    {isJa ? "協創・共同開発の対応力：" : isDe ? "Unsere Kooperationskapazitäten umfassen:" : isEs ? "Nuestra capacidad de colaboración incluye:" : "Our collaborative capability includes:"}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-3">
                    {(isJa ? collaborationCapabilitiesJA : isDe ? collaborationCapabilitiesDE : isEs ? collaborationCapabilitiesES : collaborationCapabilities).map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C59B27] dark:text-[#E8B84B] mr-3 shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-medium mb-8">
                  {isJa ? "このアプローチにより、サノタは単なるサプライヤーではなく、頼もしいエンジニアリング開発パートナーとして貢献します。" : isDe ? "Dieser Ansatz ermöglicht es Sanota, nicht nur als Lieferant, sondern als Entwicklungspartner aufzutreten." : isEs ? "Este enfoque permite a Sanota contribuir no solo como proveedor, sino también como socio de desarrollo de ingeniería." : "This approach allows Sanota to contribute not only as a supplier, but also as an engineering development partner."}
                </p>

                <div>
                  <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-bold rounded-lg transition-all hover:scale-105 shadow-xl text-sm">
                    {ab ? ab.innovation.button : "Explore a Collaboration"} <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 10 & 11. Vision & Mission */}
        <section className="py-8 lg:py-12 bg-gradient-to-b from-slate-50 dark:from-[#0B1220] to-white dark:to-[#050B14] relative overflow-hidden border-t border-slate-200 dark:border-slate-800/40">
          <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#E8B84B]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Vision */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#F5F3EF] dark:bg-[#131C2E] border border-slate-200 dark:border-slate-700 shadow-inner mb-8">
                  <Target className="w-10 h-10 text-[#C59B27] dark:text-[#E8B84B]" />
                </div>
                <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center lg:justify-start">
                  <span className="w-6 h-px bg-[#C59B27] dark:bg-[#E8B84B] mr-3 hidden lg:block" /> {ab ? ab.vision.title : "Our Vision"}
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold text-[#17135B] dark:text-white mb-6 leading-tight drop-shadow-md">
                  {isJa ? "実践的なエンジニアリングとインテリジェントなテクノロジーを通じて産業を進化させる" : isDe ? "Industrien durch praktische Ingenieurskunst und intelligente Technologie voranbringen" : isEs ? "Avanzar en las Industrias a Través de la Ingeniería Práctica y la Tecnología Inteligente" : "To Advance Industries Through Practical Engineering and Intelligent Technology"}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xl leading-relaxed border-l-2 border-[#C59B27]/50 dark:border-[#E8B84B]/50 pl-5">
                  {ab ? ab.vision.text : "Our vision is to become a trusted engineering and technology partner for industries seeking practical, reliable, sustainable and future-ready operational solutions."}
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[2.5rem] p-[1px] overflow-hidden shadow-2xl group"
              >
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#2E5EAA_360deg)] animate-[spin_5s_linear_infinite]" />
                <div className="relative bg-white dark:bg-[#131C2E]/90 backdrop-blur-md w-full h-full p-10 lg:p-12 rounded-[calc(2.5rem-1px)] border border-slate-200 dark:border-slate-700/50 z-10 shadow-lg dark:shadow-none">
                  <Compass className="w-12 h-12 text-[#2E5EAA] mb-6" />
                  <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                    {ab ? ab.mission.title : "Our Mission"}
                  </h2>
                  <p className="text-[#17135B] dark:text-white text-xl font-bold leading-relaxed mb-8">
                    {ab ? ab.mission.text : "Our mission is to understand real operational challenges and deliver integrated engineering solutions that create measurable and long-term value for our customers."}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs mb-6">
                    {isJa ? "私たちはこの使命を以下を通じて推進します：" : isDe ? "Wir verfolgen diese Mission durch:" : isEs ? "Perseguimos esta misión mediante:" : "We pursue this mission by:"}
                  </p>
                  <div className="space-y-4">
                    {(isJa ? missionPointsJA : isDe ? missionPointsDE : isEs ? missionPointsES : missionPoints).map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C59B27] dark:text-[#E8B84B] mr-3 mt-0.5 shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300 text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 12. What Guides Our Work */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 lg:mb-12"
            >
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center">
                <span className="w-6 h-px bg-[#C59B27] dark:bg-[#E8B84B] mr-3" /> {isJa ? "私たちの指針" : isDe ? "Was unsere Arbeit leitet" : isEs ? "Lo que Guía Nuestro Trabajo" : "What Guides Our Work"} <span className="w-6 h-px bg-[#C59B27] dark:bg-[#E8B84B] ml-3" />
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-[#17135B] dark:text-white">
                {isJa ? "基本原則" : isDe ? "Grundlegende Prinzipien" : isEs ? "Principios Fundamentales" : "Core Principles"}
              </h3>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
              {(isJa ? guidingPrinciplesJA : isDe ? guidingPrinciplesDE : isEs ? guidingPrinciplesES : guidingPrinciples).map((principle, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                  className="relative group w-[230px] h-[230px] shrink-0 shadow-lg rounded-full"
                >
                  <PixelCard active={activePrinciple === idx} variant="yellow" className="w-full h-full rounded-full border border-slate-200 dark:border-slate-700/50 group-hover:border-[#C59B27]/60 dark:group-hover:border-[#E8B84B]/60 shadow-sm dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] bg-white dark:bg-[#131C2E]/70 backdrop-blur-md flex flex-col items-center justify-center text-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C59B27] dark:bg-[#E8B84B] mb-3 shadow-[0_0_10px_rgba(232,184,75,0.8)] relative z-10" />
                    <h4 className="text-lg font-bold text-[#17135B] dark:text-white mb-2 group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] transition-colors leading-tight relative z-10 px-4">
                      {principle.title}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors relative z-10 px-5">
                      {principle.desc}
                    </p>
                  </PixelCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. Why Organizations Work With Sanota */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden border-t border-slate-200 dark:border-slate-800/40">
          <div className="absolute left-1/4 bottom-0 w-[400px] h-[400px] bg-[#2E5EAA]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 lg:mb-12"
            >
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center">
                <span className="w-6 h-px bg-[#C59B27] dark:bg-[#E8B84B] mr-3" /> {isJa ? "サノタのアドバンテージ" : isDe ? "Der Sanota-Vorteil" : isEs ? "La Ventaja Sanota" : "The Sanota Advantage"} <span className="w-6 h-px bg-[#C59B27] dark:bg-[#E8B84B] ml-3" />
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-[#17135B] dark:text-white">
                {isJa ? "サノタが選ばれる理由" : isDe ? "Warum Organisationen mit Sanota zusammenarbeiten" : isEs ? "¿Por qué las organizaciones trabajan con Sanota?" : "Why Organizations Work With Sanota"}
              </h3>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {(isJa ? whyWorkWithUsJA : isDe ? whyWorkWithUsDE : isEs ? whyWorkWithUsES : whyWorkWithUs).map((reason, idx) => {
                const cardColors = [
                  "#00F0FF", // Electric Blue
                  "#FF0055", // Magenta
                  "#00FF66", // Neon Green
                  "#FFB800", // Golden
                  "#B026FF", // Purple
                  "#FF5E00", // Orange
                  "#00F5A0"  // Cyan/Teal
                ];
                const color = cardColors[idx];
                
                return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative bg-white dark:bg-[#131C2E]/70 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 group w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-24px)] flex-shrink-0 flex flex-col overflow-hidden shadow-sm dark:shadow-none"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `radial-gradient(circle at top right, ${color}, transparent)` }} />
                  <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: color, boxShadow: `0 0 15px ${color}` }} />
                  
                  <div className="w-16 h-16 rounded-2xl bg-[#F5F3EF] dark:bg-[#0B1220] border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner relative z-10" style={{ borderColor: `${color}40`, boxShadow: `inset 0 0 20px ${color}10` }}>
                    <reason.icon className="w-8 h-8 transition-colors" style={{ color: color, filter: `drop-shadow(0 0 8px ${color}80)` }} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-[#17135B] dark:text-white mb-4 transition-colors relative z-10">
                    {reason.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors relative z-10">
                    {reason.desc}
                  </p>
                </motion.div>
              )})}
            </div>
          </div>
        </section>

        {/* 14. Sanota at a Glance */}
        <section className="py-8 lg:py-12 bg-transparent relative overflow-hidden border-t border-slate-200 dark:border-slate-800/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 lg:mb-12"
            >
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center">
                <span className="w-6 h-px bg-[#C59B27] dark:bg-[#E8B84B] mr-3" /> {isJa ? "基本データ" : isDe ? "Wichtigste Fakten" : isEs ? "Datos Clave" : "Key Facts"} <span className="w-6 h-px bg-[#C59B27] dark:bg-[#E8B84B] ml-3" />
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-[#17135B] dark:text-white">
                {ab ? ab.atAGlance.heading : "Sanota at a Glance"}
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(isJa ? atAGlanceJA : isDe ? atAGlanceDE : isEs ? atAGlanceES : atAGlance).map((fact, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 text-center hover:bg-slate-50 dark:hover:bg-[#0B1220]/80 hover:border-[#C59B27]/40 dark:hover:border-[#E8B84B]/40 transition-colors shadow-sm dark:shadow-none"
                >
                  <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-amber-500 mb-4">{fact.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{fact.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 15. Closing Call to Action */}
        <section className="py-24 lg:py-32 bg-transparent relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] dark:from-[#050B14] via-[#FAF8F5]/60 dark:via-[#050B14]/80 to-transparent pointer-events-none" />
            <div className="absolute left-1/2 top-0 w-full h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C59B27] dark:via-[#E8B84B] to-transparent opacity-30" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-[#17135B] dark:text-white mb-8 leading-tight tracking-tight drop-shadow-lg"
            >
              {isJa ? (
                <>
                  貴社の事業に最適なソリューションを <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#4B85E8]">共に開発しましょう</span>
                </>
              ) : isDe ? (
                <>
                  Entwickeln wir die passende Lösung <br className="hidden md:block" /> für Ihren <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#4B85E8]">Betrieb</span>
                </>
              ) : isEs ? (
                <>
                  Desarrollemos la Solución Ideal <br className="hidden md:block" /> para su <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#4B85E8]">Operación</span>
                </>
              ) : (
                <>
                  Let's Develop the Right Solution <br className="hidden md:block" /> for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5EAA] to-[#4B85E8]">Operation</span>
                </>
              )}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-slate-300 text-xl md:text-2xl mb-8 leading-relaxed font-medium"
            >
              {ab ? ab.cta.description : "Whether you are planning a new engineering project, improving a production process, developing a product, modernizing machinery, introducing automation or seeking dependable maintenance support, Sanota can help identify a practical way forward."}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 dark:text-slate-400 text-lg mb-12 max-w-3xl mx-auto"
            >
              {isJa ? "お客様の運用の課題、ご要望、構想についてぜひお聞かせください。当社の専門エンジニアチームが最適なアプローチをご提案します。" : isDe ? "Erzählen Sie uns von Ihrer betrieblichen Herausforderung, Anforderung oder Chance. Unser Team verbindet Sie mit den passenden technischen Experten." : isEs ? "Cuéntenos su desafío, requerimiento u oportunidad operativa. Nuestro equipo lo conectará con los especialistas técnicos y de ingeniería pertinentes." : "Tell us about your operational challenge, requirement or opportunity. Our team will connect you with the appropriate engineering and technical expertise."}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-5 mb-8 lg:mb-12"
            >
              <Link href="/tell-us-your-challenge" className="group relative inline-flex items-center justify-center px-8 py-5 bg-[#E8B84B] text-[#0B1220] font-bold rounded-xl overflow-hidden shadow-[0_0_40px_rgba(232,184,75,0.3)] transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
                <Target className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                {ab ? ab.cta.primaryButton : "Discuss Your Requirement"}
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-5 bg-white dark:bg-[#0B1220]/60 backdrop-blur-md text-[#17135B] dark:text-white font-bold rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#131C2E]/80 hover:border-[#2E5EAA]/50 transition-all hover:scale-105 shadow-lg dark:shadow-xl">
                {ab ? ab.cta.secondaryButton : "Request a Technical Consultation"} <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 sm:gap-10 pt-8 border-t border-slate-200 dark:border-slate-800/50"
            >
              <Link href="/services" className="text-sm font-bold tracking-wider uppercase text-slate-400 hover:text-[#C59B27] dark:hover:text-[#E8B84B] transition-colors">
                {isJa ? "サービスを見る" : isDe ? "Dienstleistungen erkunden" : isEs ? "Explorar Nuestros Servicios" : "Explore Our Services"}
              </Link>
              <Link href="/media" className="text-sm font-bold tracking-wider uppercase text-slate-400 hover:text-[#C59B27] dark:hover:text-[#E8B84B] transition-colors">
                {isJa ? "プロジェクト実績" : isDe ? "Unsere Projekte ansehen" : isEs ? "Ver Nuestros Proyectos" : "View Our Projects"}
              </Link>
              <Link href="/services" className="text-sm font-bold tracking-wider uppercase text-slate-400 hover:text-[#C59B27] dark:hover:text-[#E8B84B] transition-colors">
                {isJa ? "AMC評価をリクエスト" : isDe ? "AMC-Bewertung anfordern" : isEs ? "Solicitar Evaluación AMC" : "Request an AMC Assessment"}
              </Link>
              <Link href="/contact" className="text-sm font-bold tracking-wider uppercase text-slate-400 hover:text-[#C59B27] dark:hover:text-[#E8B84B] transition-colors">
                {isJa ? "パートナーシップの相談" : isDe ? "Partnerschaft erkunden" : isEs ? "Explorar una Alianza" : "Explore a Partnership"}
              </Link>
            </motion.div>
          </div>
        </section>

      
          </div>
        </div>
</main>
      <Footer />
    </div>
  );
}
