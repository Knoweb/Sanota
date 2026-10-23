"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Settings, Cpu, Activity, Sprout, Zap, ShieldCheck, Lightbulb, ClipboardList, BookOpen, ChevronRight, Download, HelpCircle, Mail, AlertTriangle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { insightsES } from "@/locales/es/insights";
import { insightsDE } from "@/locales/de/insights";
import { insightsJA } from "@/locales/ja/insights";

const defaultCategories = [
  {
    title: "Engineering & Industrial Automation",
    desc: "Understand how machinery, controls, sensors and automation can improve industrial operations.",
    icon: Settings,
    button: "Explore Engineering & Automation",
    topics: [
      "Identifying processes suitable for automation",
      "Improving production consistency",
      "Selecting control technologies",
      "Integrating machinery and automation",
      "Improving machine safety",
      "Planning an industrial-automation project",
      "Avoiding common automation-project mistakes"
    ]
  },
  {
    title: "IoT & Digital Transformation",
    desc: "Learn how connected technologies can create better visibility, control and decision-making.",
    icon: Activity,
    button: "Explore IoT & Digital Insights",
    topics: [
      "Understanding industrial IoT",
      "Connecting machinery to dashboards",
      "Selecting useful operational data",
      "Remote monitoring and alerts",
      "Integrating sensors and software",
      "Cloud-connected engineering systems",
      "Web and mobile applications for operations",
      "Protecting operational information"
    ]
  },
  {
    title: "Machinery Modernization",
    desc: "Explore how existing machinery can be improved through mechanical, electrical, automation and digital upgrades.",
    icon: Cpu,
    button: "Explore Modernization Insights",
    topics: [
      "When to modernize instead of replace",
      "Managing obsolete control components",
      "Adding automation to existing machinery",
      "Improving machine reliability",
      "Introducing sensors and monitoring",
      "Planning a control-system upgrade",
      "Extending useful equipment life"
    ]
  },
  {
    title: "Smart Agriculture",
    desc: "Understand how automation, sensors, irrigation, fertigation and digital monitoring can support agricultural operations.",
    icon: Sprout,
    button: "Explore Smart Agriculture Insights",
    topics: [
      "Controlled-environment agriculture",
      "Smart greenhouse systems",
      "Irrigation and fertigation automation",
      "Environmental monitoring",
      "Water-use visibility",
      "Remote agricultural monitoring",
      "Selecting practical agri-technology",
      "Preparing for an agricultural IoT project"
    ]
  },
  {
    title: "Energy & Resource Efficiency",
    desc: "Learn how monitoring and control can support the better use of energy, water and operational resources.",
    icon: Zap,
    button: "Explore Energy & Resource Insights",
    topics: [
      "Understanding where resources are used",
      "Energy and utility monitoring",
      "Pump and motor control",
      "Water-level and flow monitoring",
      "Detecting unusual operating conditions",
      "Using dashboards for resource decisions",
      "Connecting resource efficiency with maintenance"
    ]
  },
  {
    title: "Maintenance & Asset Lifecycle",
    desc: "Explore practical approaches to reliability, preventive maintenance, AMC and long-term technical support.",
    icon: ShieldCheck,
    button: "Explore Maintenance Insights",
    topics: [
      "Preventive versus reactive maintenance",
      "Preparing an Annual Maintenance Contract",
      "Assessing third-party machinery for AMC",
      "Maintenance documentation and reporting",
      "Managing component obsolescence",
      "Identifying modernization opportunities",
      "Planning the lifecycle of integrated systems",
      "Supporting automation, IoT and software after commissioning"
    ]
  },
  {
    title: "Product Development & Innovation",
    desc: "Learn how engineering ideas move from initial concepts to prototypes and practical products.",
    icon: Lightbulb,
    button: "Explore Product Development Insights",
    topics: [
      "Defining a product requirement",
      "Preparing for engineering design",
      "Developing a prototype",
      "Integrating mechanics, electronics and software",
      "Testing and validating a concept",
      "Improving an existing product",
      "Planning a pilot implementation",
      "Working with an engineering-development partner"
    ]
  },
  {
    title: "Project Planning & Implementation",
    desc: "Understand the decisions required to move an engineering concept towards a working solution.",
    icon: ClipboardList,
    button: "Explore Project Planning Insights",
    topics: [
      "Preparing a project requirement",
      "Defining project scope",
      "Coordinating multiple technical disciplines",
      "Planning installation and commissioning",
      "Managing site and operational constraints",
      "Preparing teams for system handover",
      "Training operators and maintenance personnel",
      "Planning post-project support"
    ]
  }
];

const defaultFeaturedInsights = [
  {
    title: "How to Explain an Engineering Requirement When You Do Not Know the Solution",
    summary: "You do not need to begin with a technical specification. Start by explaining what is happening now, what needs to improve and what result you want to achieve.",
    category: "Engineering Consultation"
  },
  {
    title: "Should You Modernize Existing Machinery or Replace It?",
    summary: "A practical look at equipment condition, performance, component availability, safety, integration needs and long-term operating value.",
    category: "Machinery Modernization"
  },
  {
    title: "Which Industrial Processes Are Suitable for Automation?",
    summary: "An introduction to identifying repetitive, inconsistent, hazardous or difficult-to-monitor processes that may benefit from automation.",
    category: "Industrial Automation"
  },
  {
    title: "What Should an Industrial IoT System Actually Monitor?",
    summary: "Useful monitoring begins with operational decisions. This article explains how to identify meaningful data, alerts and reports.",
    category: "IoT & Digital Transformation"
  },
  {
    title: "What Should Be Included in an Engineering AMC?",
    summary: "A practical guide to asset coverage, inspection schedules, response arrangements, documentation, exclusions and improvement planning.",
    category: "Maintenance & Asset Lifecycle"
  },
  {
    title: "From Idea to Prototype: Preparing for Product Development",
    summary: "Key information to consider before beginning engineering design, prototyping, testing and technical integration.",
    category: "Product Development"
  }
];

const filterLabels = [
  "All Insights", "Engineering", "Automation", "IoT & Software", "Modernization", "Smart Agriculture", "Energy", "Maintenance", "Product Development", "Project Planning"
];

const browseIndustries = [
  "Manufacturing & Industrial Automation",
  "Smart Agriculture & Agri-Technology",
  "Food & Beverage Processing",
  "Tea Industry",
  "Logistics, Warehousing & Material Handling",
  "Energy & Resource Efficiency",
  "Environmental & Waste Management",
  "Infrastructure & Smart Facilities",
  "Healthcare & Biomedical Engineering",
  "Research, Innovation & Product Development"
];

const technicalGuides = [
  "Engineering Requirement Preparation Checklist",
  "Industrial Automation Readiness Checklist",
  "Machinery Modernization Assessment Guide",
  "IoT Project Planning Checklist",
  "AMC Preparation Checklist",
  "Product Development Brief",
  "Site Visit Preparation Checklist",
  "Installation and Commissioning Readiness Guide"
];

const engineeringQuestions = [
  "Can an existing machine be automated?",
  "Should old equipment be modernized or replaced?",
  "How can production be monitored remotely?",
  "Can several independent systems be integrated?",
  "What information is required to develop custom machinery?",
  "How can sensors and software improve an operation?",
  "Can Sanota maintain equipment supplied by another company?",
  "What should be assessed before beginning an IoT project?",
  "How does an idea become an engineering prototype?",
  "What support is required after commissioning?"
];

const knowebTopics = [
  "Connecting machinery with software",
  "Designing useful operational dashboards",
  "Selecting sensors and communication methods",
  "Developing web and mobile interfaces",
  "Managing alerts and reports",
  "Integrating IoT platforms with existing operations",
  "Supporting connected systems throughout their lifecycle"
];

const practicalExperience = [
  "Address a real operational question",
  "Explain technical subjects clearly",
  "Help readers make better decisions",
  "Avoid unnecessary jargon",
  "Identify limitations and important considerations",
  "Connect knowledge to practical action",
  "Remain accurate and responsible",
  "Protect client confidentiality"
];

export default function InsightsPage() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const ins = isJa ? insightsJA : isDe ? insightsDE : isEs ? insightsES : null;

  const getTopics = (idx: number) => {
    if (isJa) {
      const jaTopics = [
        [
          "自動化に適したプロセスの特定",
          "生産品質・精度の安定化",
          "制御技術の選定",
          "機械と自動化技術の統合",
          "機械の安全性の向上",
          "産業用自動化プロジェクトの計画",
          "自動化プロジェクトにおける典型的な失敗の防止"
        ],
        [
          "産業用IoTの基礎理解",
          "機械設備とダッシュボードの連携",
          "有用な運用データの選定",
          "遠隔監視とアラート通知",
          "センサーとソフトウェアの統合",
          "クラウド連携型エンジニアリングシステム",
          "現場運用のためのWebおよびモバイルアプリ",
          "運用データのセキュリティと保護"
        ],
        [
          "設備更新ではなく近代化（リプレイス vs レトロフィット）を選択すべき時期",
          "老朽化した制御部品・陳腐化への対処",
          "既存機械への自動化の追加",
          "機械の信頼性の向上",
          "センサーと監視機能の導入",
          "制御システムアップグレードの計画",
          "設備の耐用年数の延長"
        ],
        [
          "環境制御型農業（CEA）",
          "スマート温室システム",
          "灌漑・液肥施用（養液土耕）の自動化",
          "環境モニタリング",
          "水利用の可視化と最適化",
          "遠隔営農監視",
          "実践的な農業技術の選定",
          "農業用IoTプロジェクトの準備"
        ],
        [
          "資源の消費実態の把握",
          "エネルギーおよびユーティリティの監視",
          "ポンプとモーターの最適制御",
          "水位および流量の監視",
          "異常運転状態の早期検知",
          "資源管理の意思決定のためのダッシュボード活用",
          "資源効率と保全メンテナンスの連携"
        ],
        [
          "予防保全 vs 事後保全",
          "年間保守契約（AMC）の策定準備",
          "他社製機械設備のAMC適合性評価",
          "保守記録の作成と報告",
          "部品の供給終了・陳腐化管理",
          "設備の近代化機会の特定",
          "統合システムのライフサイクル計画",
          "導入後の自動化・IoT・ソフトウェアサポート"
        ],
        [
          "製品要件の定義",
          "エンジニアリング設計への準備",
          "実用的なプロトタイプの開発",
          "機械・電子・ソフトウェアの統合",
          "コンセプトの試験と検証",
          "既存製品の改良",
          "パイロット導入の計画",
          "開発パートナーとの協業"
        ],
        [
          "プロジェクト要件定義書の作成",
          "プロジェクトスコープの定義",
          "複数技術分野の連携調整",
          "据付および試運転の計画",
          "現場および運用上の制約管理",
          "システム引き渡しに向けたチーム準備",
          "オペレーターおよび保守要員の教育訓練",
          "プロジェクト完了後のサポート計画"
        ]
      ];
      return jaTopics[idx] || defaultCategories[idx].topics;
    }
    if (isDe) {
      const deTopics = [
        [
          "Prozesse identifizieren, die für die Automatisierung geeignet sind",
          "Verbesserung der Produktionskonsistenz",
          "Auswahl der Steuerungstechnologien",
          "Integration von Maschinen und Automatisierung",
          "Verbesserung der Maschinensicherheit",
          "Planung eines industriellen Automatisierungsprojekts",
          "Vermeidung typischer Fehler bei Automatisierungsprojekten"
        ],
        [
          "Industrielles IoT verstehen",
          "Maschinen mit Dashboards verbinden",
          "Auswahl nützlicher Betriebsdaten",
          "Fernüberwachung und Warnmeldungen",
          "Integration von Sensoren und Software",
          "Cloud-verbundene Engineering-Systeme",
          "Web- und mobile Anwendungen für den Betrieb",
          "Schutz von Betriebsinformationen"
        ],
        [
          "Wann modernisieren statt ersetzen",
          "Umgang mit veralteten Steuerungskomponenten",
          "Bestehende Maschinen um Automatisierung erweitern",
          "Verbesserung der Maschinenzuverlässigkeit",
          "Einführung von Sensoren und Überwachung",
          "Planung eines Steuerungssystem-Upgrades",
          "Verlängerung der Nutzungsdauer von Anlagen"
        ],
        [
          "Landwirtschaft in kontrollierter Umgebung",
          "Intelligente Gewächshaussysteme",
          "Automatisierung von Bewässerung und Fertigation",
          "Umgebungsüberwachung",
          "Transparenz über den Wasserverbrauch",
          "Landwirtschaftliche Fernüberwachung",
          "Auswahl praxistauglicher Agrartechnologie",
          "Vorbereitung auf ein landwirtschaftliches IoT-Projekt"
        ],
        [
          "Verstehen, wo Ressourcen verbraucht werden",
          "Energie- und Versorgungsüberwachung",
          "Pumpen- und Motorsteuerung",
          "Überwachung von Wasserstand und Durchfluss",
          "Erkennung ungewöhnlicher Betriebsbedingungen",
          "Verwendung von Dashboards für Ressourcenentscheidungen",
          "Verbindung von Ressourceneffizienz und Wartung"
        ],
        [
          "Vorbeugende im Vergleich zu reaktiver Wartung",
          "Vorbereitung eines jährlichen Wartungsvertrags (AMC)",
          "Bewertung von Fremdmaschinen für AMC",
          "Wartungsdokumentation und Berichterstattung",
          "Umgang mit Bauteilobsoleszenz",
          "Identifizierung von Modernisierungspotenzialen",
          "Lebenszyklusplanung integrierter Systeme",
          "Betreuung von Automatisierung, IoT und Software nach der Inbetriebnahme"
        ],
        [
          "Definition von Produktanforderungen",
          "Vorbereitung auf das Engineering-Design",
          "Entwicklung eines Prototyps",
          "Integration von Mechanik, Elektronik und Software",
          "Testen und Validieren eines Konzepts",
          "Verbesserung eines bestehenden Produkts",
          "Planung einer Pilot-Implementierung",
          "Zusammenarbeit mit einem Entwicklungspartner"
        ],
        [
          "Vorbereitung einer Projektanforderung",
          "Definition des Projektumfangs",
          "Koordination mehrerer technischer Fachbereiche",
          "Planung von Installation und Inbetriebnahme",
          "Management von Standort- und Betriebsbeschränkungen",
          "Vorbereitung der Teams auf die Systemübergabe",
          "Schulung von Bedienern und Wartungspersonal",
          "Planung der Unterstützung nach dem Projekt"
        ]
      ];
      return deTopics[idx] || defaultCategories[idx].topics;
    }
    if (isEs) {
      const esTopics = [
        [
          "Identificación de procesos aptos para automatización",
          "Mejora de la consistencia en producción",
          "Selección de tecnologías de control",
          "Integración de maquinaria y automatización",
          "Mejora de la seguridad de las máquinas",
          "Planificación de un proyecto de automatización industrial",
          "Cómo evitar errores comunes en automatización"
        ],
        [
          "Comprensión del IoT industrial",
          "Conexión de maquinaria a cuadros de mando",
          "Selección de datos operativos útiles",
          "Monitoreo remoto y alertas automáticas",
          "Integración de sensores y software",
          "Sistemas de ingeniería conectados a la nube",
          "Aplicaciones web y móviles para operaciones",
          "Protección de la información operativa"
        ],
        [
          "Cuándo modernizar en lugar de sustituir",
          "Gestión de componentes de control obsoletos",
          "Incorporación de automatización a máquinas existentes",
          "Mejora de la confiabilidad de las máquinas",
          "Introducción de sensores y monitorización",
          "Planificación de la actualización de sistemas de control",
          "Extensión de la vida útil de los equipos"
        ],
        [
          "Agricultura en entornos controlados",
          "Sistemas de invernaderos inteligentes",
          "Automatización de riego y fertirrigación",
          "Monitoreo ambiental",
          "Visibilidad del uso de agua",
          "Monitoreo agrícola remoto",
          "Selección de tecnología agrícola práctica",
          "Preparación para un proyecto de IoT agrícola"
        ],
        [
          "Comprensión del consumo de recursos",
          "Monitoreo de energía y servicios públicos",
          "Control de bombas y motores",
          "Monitoreo de nivel y flujo de agua",
          "Detección de condiciones anómalas de operación",
          "Uso de tableros para decisiones de recursos",
          "Conexión de la eficiencia de recursos con el mantenimiento"
        ],
        [
          "Mantenimiento preventivo frente a correctivo",
          "Preparación de contratos de mantenimiento (AMC)",
          "Evaluación de maquinaria de terceros para AMC",
          "Documentación y reportes de mantenimiento",
          "Gestión de la obsolescencia de componentes",
          "Identificación de oportunidades de modernización",
          "Planificación del ciclo de vida de sistemas integrados",
          "Soporte de automatización, IoT y software tras la puesta en marcha"
        ],
        [
          "Definición de requerimientos de producto",
          "Preparación para el diseño de ingeniería",
          "Desarrollo de prototipos funcionales",
          "Integración de mecánica, electrónica y software",
          "Pruebas y validación de conceptos",
          "Mejora de un producto existente",
          "Planificación de una implementación piloto",
          "Colaboración con un socio de desarrollo de ingeniería"
        ],
        [
          "Preparación del pliego de condiciones de un proyecto",
          "Definición del alcance del proyecto",
          "Coordinación de múltiples disciplinas técnicas",
          "Planificación de montaje y puesta en servicio",
          "Gestión de restricciones operativas y de planta",
          "Preparación de equipos para la entrega del sistema",
          "Capacitación de operadores y personal de mantenimiento",
          "Planificación del soporte posterior al proyecto"
        ]
      ];
      return esTopics[idx] || defaultCategories[idx].topics;
    }
    return defaultCategories[idx].topics;
  };

  const filters = isJa ? [
    insightsJA.filters.all,
    insightsJA.filters.engineering,
    insightsJA.filters.automation,
    insightsJA.filters.iot,
    insightsJA.filters.modernization,
    insightsJA.filters.agri,
    insightsJA.filters.energy,
    insightsJA.filters.maintenance,
    insightsJA.filters.product,
    insightsJA.filters.projects
  ] : isDe ? [
    insightsDE.filters.all,
    insightsDE.filters.engineering,
    insightsDE.filters.automation,
    insightsDE.filters.iot,
    insightsDE.filters.modernization,
    insightsDE.filters.agri,
    insightsDE.filters.energy,
    insightsDE.filters.maintenance,
    insightsDE.filters.product,
    insightsDE.filters.projects
  ] : isEs ? [
    insightsES.filters.all,
    insightsES.filters.engineering,
    insightsES.filters.automation,
    insightsES.filters.iot,
    insightsES.filters.modernization,
    insightsES.filters.agri,
    insightsES.filters.energy,
    insightsES.filters.maintenance,
    insightsES.filters.product,
    insightsES.filters.projects
  ] : filterLabels;

  const articleSections = isJa ? [
    { title: "はじめに", desc: "記事で取り上げる運用上または技術的な課題について簡潔に説明します。" },
    { title: "なぜ重要なのか", desc: "対象となる業界や意思決定者にとって、なぜこの課題が重要なのかを明確にします。" },
    { title: "重要な検討事項", desc: "重要なエンジニアリング、運用、財務、または導入に関する要素を提示します。" },
    { title: "実践的なアプローチ", desc: "組織が要件を評価し、次のステップに備えるための実践的なアプローチを説明します。" },
    { title: "よくある課題と落とし穴", desc: "頻繁に直面する制約、リスク、または誤解を特定します。" },
    { title: "検討すべき主要な質問", desc: "意思決定を下す前に読者が考慮すべき簡潔な質問リストを提供します。" },
    { title: "Sanotaによる支援内容", desc: "関連するSanotaのサービス、製品、システム、または評価プロセスと課題を結びつけます。" },
    { title: "関連コンテンツ", desc: "関連する業界、サービス、製品、プロジェクト実績、および関連する洞察記事へのリンク。" }
  ] : isDe ? [
    { title: "Einführung", desc: "Erklären Sie kurz das im Artikel behandelte betriebliche oder technische Problem." },
    { title: "Warum es wichtig ist", desc: "Erläutern Sie, warum das Thema für die betreffende Branche oder den Entscheidungsträger relevant ist." },
    { title: "Wichtige Überlegungen", desc: "Stellen Sie die relevanten technischen, betrieblichen, finanziellen oder umsetzungsbezogenen Faktoren dar." },
    { title: "Praktischer Ansatz", desc: "Erklären Sie, wie eine Organisation die Anforderungen bewerten oder sich auf den nächsten Schritt vorbereiten kann." },
    { title: "Häufige Herausforderungen", desc: "Benennen Sie häufig auftretende Einschränkungen, Risiken oder Missverständnisse." },
    { title: "Wichtige Fragen", desc: "Geben Sie eine prägnante Liste von Fragen an, die der Leser vor einer Entscheidung berücksichtigen sollte." },
    { title: "Wie Sanota helfen kann", desc: "Verknüpfen Sie das Thema mit den relevanten Sanota-Dienstleistungen, Produkten, Systemen oder dem Bewertungsprozess." },
    { title: "Verwandte Inhalte", desc: "Verlinken Sie auf relevante Branchen, Dienstleistungen, Produkte, Projektberichte und weitere Einblicke." }
  ] : isEs ? [
    { title: "Introducción", desc: "Explique brevemente el problema operativo o técnico abordado en el artículo." },
    { title: "Por qué es importante", desc: "Explique por qué el problema es relevante para la industria o el responsable de la toma de decisiones." },
    { title: "Consideraciones clave", desc: "Presente los factores importantes de ingeniería, operativos, financieros o de implementación." },
    { title: "Enfoque práctico", desc: "Explique cómo una organización puede evaluar el requerimiento o prepararse para el siguiente paso." },
    { title: "Desafíos comunes", desc: "Identifique las limitaciones, riesgos o malentendidos que se encuentran con frecuencia." },
    { title: "Preguntas que debe hacerse", desc: "Proporcione una lista concisa de preguntas que el lector debe considerar antes de tomar una decisión." },
    { title: "Cómo puede ayudar Sanota", desc: "Conecte el tema con los servicios, productos, sistemas o procesos de evaluación pertinentes de Sanota." },
    { title: "Contenido relacionado", desc: "Enlace a industrias, servicios, productos, historias de proyectos y otros análisis pertinentes." }
  ] : [
    { title: "Introduction", desc: "Briefly explain the operational or technical issue addressed by the article." },
    { title: "Why It Matters", desc: "Explain why the issue is relevant to the intended industry or decision-maker." },
    { title: "Key Considerations", desc: "Present the important engineering, operational, financial or implementation factors." },
    { title: "Practical Approach", desc: "Explain how an organization can assess the requirement or prepare for the next step." },
    { title: "Common Challenges", desc: "Identify frequently encountered limitations, risks or misunderstandings." },
    { title: "Questions to Ask", desc: "Provide a concise list of questions the reader should consider before making a decision." },
    { title: "How Sanota Can Help", desc: "Connect the topic to the relevant Sanota services, products, systems or assessment process." },
    { title: "Related Content", desc: "Link to relevant industries, services, products, project stories and other insights." }
  ];

  const industriesList = isJa ? [
    "製造業＆産業オートメーション",
    "スマート農業＆アグリテック",
    "食品・飲料加工",
    "製茶業界",
    "物流・倉庫管理・マテリアルハンドリング",
    "エネルギー・資源効率化",
    "環境・廃棄物管理",
    "インフラ＆スマート施設",
    "医療・バイオメディカル工学",
    "研究・イノベーション＆製品開発"
  ] : isDe ? [
    "Fertigung & Industrieautomation",
    "Intelligente Landwirtschaft & Agrartechnologie",
    "Lebensmittel- und Getränkeverarbeitung",
    "Teeindustrie",
    "Logistik, Lagerhaltung & Materialtransport",
    "Energie- und Ressourceneffizienz",
    "Umwelt- und Abfallwirtschaft",
    "Infrastruktur & intelligente Gebäude",
    "Gesundheitswesen & Biomedizintechnik",
    "Forschung, Innovation & Produktentwicklung"
  ] : isEs ? [
    "Fabricación y automatización industrial",
    "Agricultura inteligente y agrotecnología",
    "Procesamiento de alimentos y bebidas",
    "Industria del té",
    "Logística, almacenamiento y manejo de materiales",
    "Eficiencia energética y de recursos",
    "Gestión ambiental y de residuos",
    "Infraestructura e instalaciones inteligentes",
    "Salud e ingeniería biomédica",
    "Investigación, innovación y desarrollo de productos"
  ] : browseIndustries;

  const knowebList = isJa ? [
    "産業機械とソフトウェアの連携",
    "実践的な運用ダッシュボードの設計・開発",
    "最適なセンサーと通信プロトコルの選定",
    "Webおよびモバイルインターフェースの開発",
    "アラート管理と自動レポート生成",
    "IoTプラットフォームと既存運用システムの統合",
    "コネクテッドシステムのライフサイクル全体にわたるサポート"
  ] : isDe ? [
    "Maschinen mit Software verbinden",
    "Entwicklung nützlicher operativer Dashboards",
    "Auswahl von Sensoren und Kommunikationsmethoden",
    "Entwicklung von Web- und mobilen Schnittstellen",
    "Verwaltung von Warnmeldungen und Berichten",
    "Integration von IoT-Plattformen in bestehende Abläufe",
    "Betreuung vernetzter Systeme während ihres gesamten Lebenszyklus"
  ] : isEs ? [
    "Conexión de maquinaria con software",
    "Diseño de tableros de control operativos útiles",
    "Selección de sensores y métodos de comunicación",
    "Desarrollo de interfaces web y móviles",
    "Gestión de alertas y reportes automáticos",
    "Integración de plataformas IoT con operaciones existentes",
    "Soporte de sistemas conectados a lo largo de su ciclo de vida"
  ] : knowebTopics;

  const practicalPrinciples = isJa ? [
    "現場の実際の運用課題に答える",
    "複雑な技術的テーマを分かりやすく解説する",
    "読者がより良い意思決定を行えるよう支援する",
    "不要な専門用語の羅列を避ける",
    "技術の限界や重要な留意点を明確に示す",
    "知識を現場の実践的な行動へとつなげる",
    "高い正確性とエンジニアリングの責任感を維持する",
    "クライアントの機密情報と知的財産を厳格に保護する"
  ] : isDe ? [
    "Eine echte betriebliche Frage beantworten",
    "Technische Themen verständlich erklären",
    "Lesern helfen, bessere Entscheidungen zu treffen",
    "Unnötigen Fachjargon vermeiden",
    "Grenzen und wichtige Aspekte aufzeigen",
    "Wissen mit praktischem Handeln verknüpfen",
    "Präzise und verantwortungsbewusst bleiben",
    "Vertraulichkeit der Kunden wahren"
  ] : isEs ? [
    "Responder a un problema operativo real",
    "Explicar temas técnicos con claridad",
    "Ayudar a tomar decisiones informadas",
    "Evitar tecnicismos innecesarios",
    "Identificar limitaciones y factores críticos",
    "Conectar el conocimiento con la acción práctica",
    "Mantener rigor técnico y responsabilidad",
    "Proteger la confidencialidad de los clientes"
  ] : practicalExperience;

  const newsletterIndustries = isJa ? [
    "製造業", "農業", "食品・飲料", "製茶", 
    "物流", "エネルギー・環境", "インフラ・施設", 
    "製品開発", "一般エンジニアリング"
  ] : isDe ? [
    "Fertigung", "Landwirtschaft", "Lebensmittel und Getränke", "Tee", 
    "Logistik", "Energie und Umwelt", "Infrastruktur und Anlagen", 
    "Produktentwicklung", "Allgemeines Ingenieurwesen"
  ] : isEs ? [
    "Fabricación", "Agricultura", "Alimentos y bebidas", "Té", 
    "Logística", "Energía y medio ambiente", "Infraestructura e instalaciones", 
    "Desarrollo de productos", "Ingeniería general"
  ] : [
    "Manufacturing", "Agriculture", "Food and beverage", "Tea", 
    "Logistics", "Energy and environment", "Infrastructure and facilities", 
    "Product development", "General engineering"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-transparent min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center">
          <div className="page-hero-bg">
            <Image
              src="/insights_hero_bg.webp"
              alt="Engineering & Technology Insights Background"
              fill
              priority
              sizes="100vw"
              quality={75}
              className="object-cover"
            />
          </div>
          <div className="page-hero-overlay" />
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-5"
            >
              {isJa ? "エンジニアリング＆テクノロジーの知見" : isDe ? "Einblicke in Engineering & Technologie" : isEs ? "Perspectivas de Ingeniería y Tecnología" : "Engineering & Technology Insights"}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-6xl font-black text-[#17135B] dark:text-white tracking-tight mb-6 leading-tight max-w-5xl mx-auto"
            >
              {isJa ? (
                <>進化を続ける産業のための<span className="text-[#2E5EAA]">実践的エンジニアリングインサイト</span></>
              ) : isDe ? (
                <>Praktische Einblicke in die Ingenieurwissenschaften für <span className="text-[#2E5EAA]">sich entwickelnde Branchen</span></>
              ) : isEs ? (
                <>Ideas prácticas de ingeniería para <span className="text-[#2E5EAA]">industrias en evolución</span></>
              ) : (
                <>Practical Engineering Insights for <span className="text-[#2E5EAA]">Evolving Industries</span></>
              )}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-4 font-medium leading-relaxed"
            >
              {ins ? ins.hero.subheading : "Ideas, technical perspectives and industry knowledge that help organizations make better operational decisions."}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              {ins ? ins.hero.description : "Sanota Insights explores the engineering, automation, IoT, software and maintenance considerations behind modern industrial and operational systems."}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            >
              <a
                href="#latest"
                className="px-8 py-4 bg-[#C59B27] hover:bg-[#B38A22] dark:bg-[#E8B84B] dark:hover:bg-[#d4a643] text-white dark:text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center shadow-md"
              >
                {ins ? ins.hero.primaryButton : "Explore Latest Insights"} <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#categories"
                className="px-8 py-4 bg-white/90 dark:bg-[#131C2E]/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-[#17135B] dark:text-white font-bold rounded-lg border border-slate-300 dark:border-slate-700 transition-colors flex items-center justify-center shadow-sm"
              >
                {ins ? ins.hero.secondaryButton : "Browse by Topic"}
              </a>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-8 lg:py-12 border-b border-slate-200 dark:border-slate-800/50 bg-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6">
              {ins ? ins.intro.title : "Turning Technical Knowledge into Practical Understanding"}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              {isJa ? "テクノロジーは、機械、製造工程、農業現場、施設、および各種資源の管理方法を急速に革新し続けています。" : isDe ? "Die Technologie verändert ständig die Art und Weise, wie Maschinen, Produktionsprozesse, landwirtschaftliche Betriebe, Anlagen und Ressourcen verwaltet werden." : isEs ? "La tecnología sigue cambiando la forma en que se gestionan la maquinaria, los procesos de producción, las operaciones agrícolas, las instalaciones y los recursos." : "Technology continues to change how machinery, production processes, agricultural operations, facilities and resources are managed."}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              {isJa ? "しかし、新技術の導入はツール自体にとらわれることなく、明確な現場運用の課題と目的から始まるべきです。" : isDe ? "Die Einführung neuer Technologien sollte jedoch mit einem klaren betrieblichen Bedarf beginnen – und nicht mit der Technologie allein." : isEs ? "Sin embargo, la adopción de tecnología debe comenzar con una necesidad operativa clara, no solo con la tecnología en sí." : "However, adopting technology should begin with a clear operational need—not with technology alone."}
            </p>
            <p className="text-slate-800 dark:text-slate-300 font-bold text-lg leading-relaxed border-l-4 border-[#C59B27] dark:border-[#E8B84B] pl-6 text-left max-w-3xl mx-auto">
              {ins ? ins.intro.description : "Sanota Insights provides practical information to help decision-makers, engineers, technical teams and business leaders better understand operational challenges, evaluate improvement opportunities and prepare for engineering and technology projects."}
            </p>
          </div>
        </section>

        {/* Insight Categories */}
        <section id="categories" className="py-10 lg:py-14 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                {isJa ? "カテゴリー別インサイト" : isDe ? "Kategorien von Einblicken" : isEs ? "Categorías de Perspectivas" : "Insight Categories"}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white">
                {isJa ? "テーマから探す" : isDe ? "Nach Themen entdecken" : isEs ? "Explorar por Tema" : "Explore by Topic"}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {defaultCategories.map((cat, idx) => {
                const categoryData = ins && ins.categories[idx] ? ins.categories[idx] : cat;
                const topics = getTopics(idx);
                return (
                  <div key={idx} className="glowing-card bg-white dark:bg-[#131C2E]/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:border-[#2E5EAA]/50 transition-colors flex flex-col shadow-sm dark:shadow-none">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-[#0B1220] border border-slate-200 dark:border-slate-700 flex items-center justify-center mr-5 shrink-0">
                        <cat.icon className="w-7 h-7 text-[#C59B27] dark:text-[#E8B84B]" />
                      </div>
                      <h4 className="text-2xl font-bold text-[#17135B] dark:text-white">{categoryData.title}</h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">{categoryData.desc}</p>
                    
                    <div className="glowing-card bg-slate-50 dark:bg-[#0B1220]/60 border border-slate-200 dark:border-slate-800/60 rounded-xl p-6 mb-8 flex-grow">
                      <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-4">
                        {isJa ? "主なトピック：" : isDe ? "Themen können sein:" : isEs ? "Los temas pueden incluir:" : "Topics may include:"}
                      </p>
                      <div className="space-y-3">
                        {topics.map((topic, tIdx) => (
                          <div key={tIdx} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C59B27] dark:bg-[#E8B84B] mt-2 mr-3 shrink-0" />
                            <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href="/tell-us-your-challenge" className="inline-flex items-center text-sm font-bold text-[#C59B27] dark:text-[#E8B84B] hover:text-[#B38A22] dark:hover:text-[#d4a643] transition-colors mt-auto">
                      {categoryData.button} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="py-10 lg:py-14 border-t border-slate-200 dark:border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                {isJa ? "注目のインサイト" : isDe ? "Ausgewählte Einblicke" : isEs ? "Perspectivas Destacadas" : "Featured Insights"}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white">
                {ins ? ins.featured.heading : "Recommended Reading"}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(ins ? ins.featured.articles : defaultFeaturedInsights).map((insight: any, idx) => (
                <div key={idx} className="glowing-card bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:bg-slate-50 dark:hover:bg-[#131C2E] transition-colors flex flex-col group shadow-sm dark:shadow-none">
                  <span className="text-[#C59B27] dark:text-slate-500 font-bold text-xs uppercase tracking-widest mb-3 block">{insight.category}</span>
                  <h4 className="text-xl font-bold text-[#17135B] dark:text-white mb-4 group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] transition-colors">{insight.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{insight.desc || insight.summary}</p>
                  <Link href="/tell-us-your-challenge" className="inline-flex items-center text-sm font-bold text-[#2E5EAA] hover:text-[#17135B] dark:hover:text-white transition-colors mt-auto">
                    {insight.linkText || (isJa ? "記事を読む" : isDe ? "Artikel lesen" : isEs ? "Leer artículo" : "Read Article")} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Insights */}
        <section id="latest" className="py-10 lg:py-14 border-t border-slate-200 dark:border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                  {isJa ? "最新のインサイト" : isDe ? "Neueste Einblicke" : isEs ? "Últimas Perspectivas" : "Latest Insights"}
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white">
                  {isJa ? "最新の技術記事とアップデート" : isDe ? "Neueste Artikel und technische Updates" : isEs ? "Últimos artículos y actualizaciones técnicas" : "Latest Articles and Technical Updates"}
                </h3>
              </div>
              <div className="w-full lg:w-1/3">
                <input 
                  type="text" 
                  placeholder={ins ? ins.filters.searchPlaceholder : "Search Sanota Insights"} 
                  className="w-full bg-white dark:bg-[#131C2E] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#C59B27] dark:focus:border-[#E8B84B] transition-colors shadow-sm"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-12">
              {filters.map((filter, idx) => (
                <button key={idx} className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${idx === 0 ? 'bg-[#C59B27] dark:bg-[#E8B84B] text-white dark:text-[#0B1220] shadow-sm' : 'bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-[#17135B] dark:hover:text-white shadow-sm'}`}>
                  {filter}
                </button>
              ))}
            </div>

            {/* Placeholder for Articles Grid */}
            <div className="bg-slate-50 dark:bg-[#0B1220] border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-16 text-center mb-10">
              <BookOpen className="w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto mb-4" />
              <p className="text-slate-700 dark:text-slate-400 font-medium">
                {isJa ? "記事フィードがここに表示されます。" : isDe ? "Der Artikel-Feed wird hier angezeigt." : isEs ? "El feed de artículos se mostrará aquí." : "Article feed will be populated here."}
              </p>
              <p className="text-slate-500 text-sm mt-2">
                {isJa ? "各カードにはタイトル、カテゴリー、公開日、読了時間、要約、画像、リンクが含まれます。" : isDe ? "Jede Karte enthält: Titel, Kategorie, Datum, Lesezeit, Zusammenfassung, Bild und Link." : isEs ? "Cada tarjeta contendrá: Título, Categoría, Fecha, Tiempo de lectura, Resumen, Imagen y Enlace." : "Each card will contain: Title, Category, Date, Reading time, Summary, Image, and Link."}
              </p>
            </div>

            <div className="text-center">
              <Link href="/tell-us-your-challenge" className="inline-flex items-center px-8 py-4 bg-white dark:bg-[#131C2E] hover:bg-slate-100 dark:hover:bg-slate-800 text-[#17135B] dark:text-white font-bold rounded-lg border border-slate-300 dark:border-slate-700 transition-colors shadow-sm">
                {ins ? ins.filters.viewAllButton : "View All Insights"} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Individual Article Structure */}
        <section className="py-10 lg:py-14 border-t border-slate-200 dark:border-slate-800/50 bg-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                {isJa ? "テンプレート" : isDe ? "Vorlage" : isEs ? "Plantilla" : "Template"}
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white">
                {isJa ? "個別記事の構成" : isDe ? "Aufbau der einzelnen Artikel" : isEs ? "Estructura del Artículo Individual" : "Individual Article Structure"}
              </h3>
            </div>
            
            <div className="glowing-card bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 shadow-sm dark:shadow-none">
              <h4 className="text-2xl font-bold text-[#17135B] dark:text-white mb-2">
                {isJa ? "【記事タイトル】" : isDe ? "[Artikeltitel]" : isEs ? "[Título del Artículo]" : "[Article Title]"}
              </h4>
              <p className="text-slate-500 text-sm mb-8 border-b border-slate-200 dark:border-slate-700 pb-6">
                {isJa
                  ? "カテゴリー：[カテゴリー名] • 公開日：[発行日] • 読了目安：[所要時間]"
                  : isDe 
                  ? "Kategorie: [Kategorie] • Veröffentlicht: [Veröffentlichungsdatum] • Lesezeit: [Geschätzte Zeit]" 
                  : isEs 
                  ? "Categoría: [Categoría de análisis] • Publicado: [Fecha de publicación] • Tiempo de lectura: [Tiempo estimado]" 
                  : "Category: [Insight category] • Published: [Publication date] • Reading time: [Estimated time]"}
              </p>
              
              <div className="space-y-8">
                {articleSections.map((section, idx) => (
                  <div key={idx}>
                    <h5 className="text-[#17135B] dark:text-white font-bold mb-2">{section.title}</h5>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{section.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <Link href="/contact" className="px-6 py-3 bg-[#C59B27] hover:bg-[#B38A22] dark:bg-[#E8B84B] dark:hover:bg-[#d4a643] text-white dark:text-[#0B1220] font-bold rounded-lg transition-colors shadow-md text-center">
                  {isJa ? "この要件について相談する" : isDe ? "Diese Anforderung besprechen" : isEs ? "Comentar esta necesidad" : "Discuss This Requirement"}
                </Link>
                <Link href="/tell-us-your-challenge" className="px-6 py-3 bg-slate-100 dark:bg-[#0B1220] hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#17135B] dark:text-white font-bold rounded-lg transition-colors text-center">
                  {isJa ? "課題・ご要望をお聞かせください" : isDe ? "Schildern Sie uns Ihre Herausforderung" : isEs ? "Cuéntanos tu desafío" : "Tell Us Your Challenge"}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Insights by Industry & Technical Guides */}
        <section className="py-10 lg:py-14 border-t border-slate-200 dark:border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Insights by Industry */}
              <div className="glowing-card bg-white dark:bg-[#131C2E]/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 shadow-sm dark:shadow-none">
                <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                  {isJa ? "業界別インサイト" : isDe ? "Einblicke nach Branchen" : isEs ? "Perspectivas por Industria" : "Insights by Industry"}
                </h2>
                <h3 className="text-2xl font-bold text-[#17135B] dark:text-white mb-4">
                  {isJa ? "お客様の運用環境に特化した実践知" : isDe ? "Wissen, das für Ihr Betriebsumfeld relevant ist" : isEs ? "Conocimiento relevante para su entorno operativo" : "Knowledge Relevant to Your Operating Environment"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  {isJa ? "業界別インサイトを見る：" : isDe ? "Entdecken Sie Einblicke für:" : isEs ? "Explore perspectivas desarrolladas para:" : "Explore insights developed for:"}
                </p>
                <div className="space-y-3 mb-10">
                  {industriesList.map((ind, idx) => (
                    <div key={idx} className="flex items-center text-slate-700 dark:text-slate-300 text-sm hover:text-[#2E5EAA] dark:hover:text-white transition-colors cursor-pointer">
                      <ChevronRight className="w-4 h-4 text-[#2E5EAA] mr-2" />
                      {ind}
                    </div>
                  ))}
                </div>
                <Link href="/industries" className="inline-flex items-center px-6 py-3 bg-white dark:bg-[#131C2E] hover:bg-slate-100 dark:hover:bg-slate-800 text-[#17135B] dark:text-white font-bold rounded-lg border border-slate-300 dark:border-slate-700 transition-colors shadow-sm">
                  {isJa ? "業界別にすべての記事を見る" : isDe ? "Einblicke nach Branchen durchsuchen" : isEs ? "Explorar perspectivas por industria" : "Browse Insights by Industry"} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Technical Guides */}
              <div className="glowing-card bg-white dark:bg-[#131C2E]/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 shadow-sm dark:shadow-none">
                <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                  {isJa ? "実践技術ガイド" : isDe ? "Technische Leitfäden" : isEs ? "Guías Técnicas" : "Technical Guides"}
                </h2>
                <h3 className="text-2xl font-bold text-[#17135B] dark:text-white mb-4">
                  {ins ? ins.technicalGuides.heading : "Practical Guides and Checklists"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  {ins ? ins.technicalGuides.subheading : "Sanota can provide downloadable resources to help organizations prepare for engineering and technology projects. Suggested guides include:"}
                </p>
                <div className="space-y-3 mb-10">
                  {(ins ? ins.technicalGuides.guides : technicalGuides).map((guide, idx) => (
                    <div key={idx} className="flex items-center text-slate-700 dark:text-slate-300 text-sm hover:text-[#C59B27] dark:hover:text-[#E8B84B] transition-colors cursor-pointer">
                      <Download className="w-4 h-4 text-[#C59B27] dark:text-[#E8B84B] mr-3" />
                      {guide}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-[#C59B27] hover:bg-[#B38A22] dark:bg-[#E8B84B] dark:hover:bg-[#d4a643] text-white dark:text-[#0B1220] font-bold rounded-lg transition-colors mb-4 shadow-md">
                  {ins ? ins.technicalGuides.button : "Explore Technical Guides"} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <p className="text-slate-500 text-xs italic">
                  {isJa
                    ? "注記：フォローアップ支援をご希望の場合、ダウンロード時に基本的な連絡先情報の入力をお願いする場合があります。送信前に利用目的を明示いたします。"
                    : isDe 
                    ? "Hinweis: Für Downloads können grundlegende Kontaktdaten erforderlich sein, wenn eine weiterführende Unterstützung angeboten wird. Besucher werden vor der Übermittlung ihrer Daten transparent informiert." 
                    : isEs 
                    ? "Nota: Las descargas pueden requerir datos de contacto básicos cuando se ofrezca asistencia de seguimiento. Se informará con total transparencia a los visitantes antes de enviar sus datos." 
                    : "Note: Downloads may require basic contact information where follow-up assistance is offered. Visitors should be clearly informed before submitting their details."}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Engineering Questions & Knoweb Insights */}
        <section className="py-10 lg:py-14 border-t border-slate-200 dark:border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Engineering Questions */}
              <div>
                <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                  {isJa ? "エンジニアリングQ&A" : isDe ? "Technische Fragen" : isEs ? "Preguntas de Ingeniería" : "Engineering Questions"}
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-10">
                  {ins ? ins.faqs.heading : "Questions We Frequently Help Clients Answer"}
                </h3>
                <div className="space-y-4 mb-10">
                  {(ins ? ins.faqs.questions : engineeringQuestions).map((q, idx) => (
                    <div key={idx} className="flex items-start bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm dark:shadow-none">
                      <HelpCircle className="w-5 h-5 text-[#2E5EAA] mr-3 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{q}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white dark:bg-[#131C2E] hover:bg-slate-100 dark:hover:bg-slate-800 text-[#17135B] dark:text-white font-bold rounded-lg border border-slate-300 dark:border-slate-700 transition-colors shadow-sm">
                  {ins ? ins.faqs.askButton : "Ask Sanota a Question"} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* Sanota + Knoweb */}
              <div>
                <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                  {isJa ? "Sanota + Knoweb 共同インサイト" : isDe ? "Sanota + Knoweb Einblicke" : isEs ? "Perspectivas Sanota + Knoweb" : "Sanota + Knoweb Insights"}
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6">
                  {isJa ? "エンジニアリングとデジタル技術の融合" : isDe ? "Wo Ingenieurwesen auf digitale Technologie trifft" : isEs ? "Donde la ingeniería se une a la tecnología digital" : "Where Engineering Meets Digital Technology"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                  {isJa ? "Knowebとの協業により、Sanotaは物理的な機械・工学システムとその上位デジタル構成要素の双方を網羅した包括的な知見を提供します。" : isDe ? "Durch die Zusammenarbeit mit Knoweb kann Sanota Perspektiven bieten, die sowohl physische Engineering-Systeme als auch deren digitale Komponenten umfassen." : isEs ? "A través de su colaboración con Knoweb, Sanota aporta perspectivas que abarcan tanto los sistemas físicos de ingeniería como sus componentes digitales." : "Through its collaboration with Knoweb, Sanota can provide perspectives covering both physical engineering systems and their digital components."}
                </p>
                <p className="text-[#17135B] dark:text-white font-bold mb-6">
                  {isJa ? "主なトピック：" : isDe ? "Themen können sein:" : isEs ? "Los temas pueden incluir:" : "Topics may include:"}
                </p>
                <div className="space-y-3 mb-10">
                  {knowebList.map((topic, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C59B27] dark:bg-[#E8B84B] mr-3 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
                <Link href="/tell-us-your-challenge" className="inline-flex items-center px-8 py-4 bg-white dark:bg-[#131C2E] hover:bg-slate-100 dark:hover:bg-slate-800 text-[#17135B] dark:text-white font-bold rounded-lg border border-slate-300 dark:border-slate-700 transition-colors shadow-sm">
                  {isJa ? "エンジニアリング＆デジタルの知見を見る" : isDe ? "Engineering- & digitale Einblicke entdecken" : isEs ? "Explorar perspectivas digitales y de ingeniería" : "Explore Engineering & Digital Insights"} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Knowledge & Disclaimer */}
        <section className="py-10 lg:py-14 border-t border-slate-200 dark:border-slate-800/50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Practical Experience */}
              <div className="glowing-card bg-white dark:bg-[#131C2E]/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 shadow-sm dark:shadow-none">
                <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                  {isJa ? "現場の実践経験から得た知見" : isDe ? "Wissen aus praktischer Erfahrung" : isEs ? "Conocimiento de la Experiencia Práctica" : "Knowledge from Practical Experience"}
                </h2>
                <h3 className="text-2xl font-bold text-[#17135B] dark:text-white mb-6">
                  {isJa ? "実際の運用ニーズに裏打ちされた洞察" : isDe ? "Einblicke basierend auf echten Betriebsanforderungen" : isEs ? "Perspectivas fundamentadas en requisitos reales de operation" : "Insights Informed by Real Operating Requirements"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  {isJa ? "Sanotaのインサイトは、実際のエンジニアリング経験、プロジェクトでの学び、および業界の深い知見に基づいて作成されています。すべての記事は以下の原則を追求しています：" : isDe ? "Die Inhalte von Sanota werden auf der Grundlage praktischer Erfahrungen, Erkenntnissen aus Projekten und relevantem Branchenwissen erstellt. Jeder Artikel zielt darauf ab:" : isEs ? "El contenido de Sanota se desarrolla a partir de experiencia práctica en ingeniería, aprendizajes de proyectos y conocimiento sectorial. Cada artículo persigue:" : "Sanota’s insight content should be developed using practical engineering experience, project learning and relevant industry knowledge. Every article should aim to:"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
                  {practicalPrinciples.map((principle, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#C59B27] dark:text-[#E8B84B] mr-2 mt-0.5 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{principle}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-50 dark:bg-[#0B1220] p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <p className="text-slate-600 dark:text-slate-400 text-xs italic">
                    {isJa
                      ? "記事が業界規格、法規制、性能数値、または外部研究に言及する場合、公開前に厳密に事実確認を行い、適切な出典を明記しています。"
                      : isDe 
                      ? "Wenn sich ein Artikel auf Normen, Vorschriften, Leistungsdaten oder externe Forschung bezieht, werden die Angaben vor der Veröffentlichung geprüft und entsprechend belegt." 
                      : isEs 
                      ? "Cuando un artículo haga referencia a normas, reglamentos, cifras de rendimiento o investigaciones externas, la información debe verificarse y citarse adecuadamente antes de su publicación." 
                      : "Where an article refers to standards, regulations, performance figures or external research, the information should be verified and appropriately referenced before publication."}
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="glowing-card bg-white dark:bg-[#131C2E]/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 flex flex-col justify-center shadow-sm dark:shadow-none">
                <AlertTriangle className="w-10 h-10 text-[#C59B27] dark:text-[#E8B84B] mb-6" />
                <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                  {isJa ? "免責事項" : isDe ? "Haftungsausschluss" : isEs ? "Descargo de Responsabilidad" : "Content Disclaimer"}
                </h2>
                <h3 className="text-2xl font-bold text-[#17135B] dark:text-white mb-6">
                  {isJa ? "重要なお知らせ" : isDe ? "Wichtige Information" : isEs ? "Información Importante" : "Important Information"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {isJa
                    ? "Sanota Insightsは、教育および計画検討のための一般的な情報を提供しています。具体的な工学的要件は、機器、稼働環境、設置場所、用途、適用される安全規格によって異なります。"
                    : isDe 
                    ? "Sanota Insights bietet allgemeine Informationen zu Bildungs- und Planungszwecken. Die technischen Anforderungen variieren je nach Ausrüstung, Betriebsbedingungen, Standort, Anwendung und geltenden Normen." 
                    : isEs 
                    ? "Sanota Insights ofrece información general con fines educativos y de planificación. Los requisitos técnicos varían según el equipo, las condiciones operativas, la ubicación, la aplicación y las normas aplicables." 
                    : "Sanota Insights provides general information for educational and planning purposes. Engineering requirements differ according to equipment, operating conditions, location, application and applicable standards."}
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  {isJa
                    ? "本記事に含まれる情報は、個別の現地技術診断、専門的設計、または承認された安全手順に代わるものではありません。"
                    : isDe 
                    ? "In einem Artikel veröffentlichte Informationen sollten nicht als Ersatz für eine standortspezifische technische Bewertung, fachgerechte Konstruktion oder anerkannte Sicherheitsverfahren verstanden werden." 
                    : isEs 
                    ? "La información contenida en un artículo no debe considerarse un sustituto de una evaluación técnica específica para el emplazamiento, un diseño profesional o procedimientos de seguridad aprobados." 
                    : "Information published in an article should not be treated as a substitute for a site-specific technical assessment, professional design or approved safety procedure."}
                </p>
                <Link href="/contact" className="inline-flex text-[#2E5EAA] font-bold hover:text-[#17135B] dark:hover:text-white transition-colors">
                  {isJa
                    ? "特定の課題・要件についてSanotaに相談する"
                    : isDe 
                    ? "Sanota für Beratung zu einer spezifischen Anforderung kontaktieren" 
                    : isEs 
                    ? "Contactar a Sanota para asesoramiento sobre una necesidad específica" 
                    : "Contact Sanota for advice relating to a specific requirement"} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Receive New Insights */}
        <section className="py-10 lg:py-14 border-t border-slate-200 dark:border-slate-800/50 bg-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Mail className="w-12 h-12 text-[#C59B27] dark:text-[#E8B84B] mx-auto mb-6" />
            <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
              {isJa ? "最新のインサイトを受け取る" : isDe ? "Neue Einblicke erhalten" : isEs ? "Recibir Nuevas Perspectivas" : "Receive New Insights"}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6">
              {ins ? ins.newsletter.heading : "Stay Informed"}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {ins ? ins.newsletter.subheading : "Receive selected engineering insights, project stories, product developments and company updates from Sanota."}
            </p>
            
            <form className="glowing-card bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 text-left shadow-sm dark:shadow-none" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-6">
                <input 
                  type="email" 
                  placeholder={ins ? ins.newsletter.placeholder : "Enter your email address"} 
                  className="w-full bg-slate-50 dark:bg-[#0B1220] border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-4 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#C59B27] dark:focus:border-[#E8B84B] transition-colors"
                  required
                />
              </div>
              
              <div className="mb-8">
                <p className="text-[#17135B] dark:text-white font-bold mb-4 text-sm">
                  {isJa ? "関心のある業界・分野：" : isDe ? "Brancheninteresse:" : isEs ? "Interés del sector:" : "Industry interest:"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {newsletterIndustries.map((interest, idx) => (
                    <label key={idx} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="form-checkbox text-[#C59B27] dark:text-[#E8B84B] rounded bg-white dark:bg-[#0B1220] border-slate-300 dark:border-slate-700" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <button type="submit" className="w-full sm:w-auto px-10 py-4 bg-[#C59B27] hover:bg-[#B38A22] dark:bg-[#E8B84B] dark:hover:bg-[#d4a643] text-white dark:text-[#0B1220] font-bold rounded-lg transition-colors shadow-md">
                  {ins ? ins.newsletter.button : "Subscribe"}
                </button>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input required type="checkbox" className="form-checkbox text-[#C59B27] dark:text-[#E8B84B] rounded bg-white dark:bg-[#0B1220] border-slate-300 dark:border-slate-700 mt-1 shrink-0" />
                  <span className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                    {ins ? ins.newsletter.consent : "I agree to receive relevant updates from Sanota. I understand that I may unsubscribe at any time."}{" "}
                    <Link href="/privacy" className="text-[#2E5EAA] hover:text-[#17135B] dark:hover:text-white">
                      {isJa ? "プライバシーポリシーを見る" : isDe ? "Datenschutzhinweise ansehen" : isEs ? "Ver aviso de privacidad" : "View Privacy Notice"}
                    </Link>
                  </span>
                </label>
              </div>
            </form>
          </div>
        </section>

        {/* Need Help & Final CTA */}
        <section className="py-10 lg:py-14 border-t border-slate-200 dark:border-slate-800 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <h2 className="text-[#C59B27] dark:text-[#E8B84B] font-bold tracking-widest uppercase text-sm mb-4">
                  {isJa ? "同様の課題でお困りですか？" : isDe ? "Benötigen Sie Hilfe bei einer ähnlichen Anforderung?" : isEs ? "¿Necesita ayuda con un requerimiento similar?" : "Need Help With a Similar Requirement?"}
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#17135B] dark:text-white mb-6">
                  {isJa ? "情報を現場の実践へとつなげる" : isDe ? "Informationen in Handeln verwandeln" : isEs ? "Convierta la información en acción" : "Turn Information into Action"}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                  {isJa ? "記事で取り上げた内容が貴社の課題に関連している場合は、現在の状況と達成したい目標についてぜひお聞かせください。" : isDe ? "Wenn sich ein Einblick auf eine Herausforderung in Ihrer Organisation bezieht, beschreiben Sie uns die aktuelle Situation und was Sie erreichen möchten." : isEs ? "Si un análisis se relaciona con un desafío de su organización, cuéntenos la situación actual y lo que desea lograr." : "If an insight relates to a challenge in your organization, tell us about the current situation and what you want to achieve."}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                  {isJa ? "Sanotaは、機械設計、自動化、IoT、ソフトウェア、近代化、保守などの分野から、最も適切なソリューションの道筋を導き出します。" : isDe ? "Sanota unterstützt Sie bei der Auswahl des passenden Weges in den Bereichen Engineering, Automatisierung, IoT, Software, Modernisierung oder Wartung." : isEs ? "Sanota le ayudará a identificar la vía más adecuada en ingeniería, automatización, IoT, software, modernización o mantenimiento." : "Sanota will help identify the appropriate engineering, automation, IoT, software, modernization or maintenance pathway."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/tell-us-your-challenge" className="px-6 py-3 bg-[#C59B27] hover:bg-[#B38A22] dark:bg-[#E8B84B] dark:hover:bg-[#d4a643] text-white dark:text-[#0B1220] font-bold rounded-lg transition-colors flex items-center justify-center shadow-md">
                    {isJa ? "課題・ご要望をお聞かせください" : isDe ? "Schildern Sie uns Ihre Herausforderung" : isEs ? "Cuéntanos tu desafío" : "Tell Us Your Challenge"} <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link href="/contact" className="px-6 py-3 bg-white dark:bg-[#0B1220] hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#17135B] dark:text-white font-bold rounded-lg transition-colors flex items-center justify-center shadow-sm">
                    {isJa ? "エンジニアリング相談を依頼する" : isDe ? "Ingenieurberatung anfordern" : isEs ? "Solicitar consulta de ingeniería" : "Request Engineering Consultation"}
                  </Link>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0B1220] border border-slate-200 dark:border-slate-800 rounded-3xl p-10 text-center shadow-sm dark:shadow-none">
                <h2 className="text-2xl font-bold text-[#17135B] dark:text-white mb-6">
                  {ins ? ins.cta.heading : "Have an Engineering Question?"}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-10">
                  {ins ? ins.cta.description : "Start with the challenge, concern or opportunity. Sanota will help you determine the appropriate next step."}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                  <Link href="/contact" className="px-6 py-3 bg-slate-100 dark:bg-[#131C2E] hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#17135B] dark:text-white font-bold rounded-lg transition-colors flex items-center justify-center">
                    {ins ? ins.cta.primaryButton : "Ask Sanota"}
                  </Link>
                  <Link href="/media" className="px-6 py-3 bg-slate-100 dark:bg-[#131C2E] hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#17135B] dark:text-white font-bold rounded-lg transition-colors flex items-center justify-center">
                    {ins ? ins.cta.secondaryButton : "Explore Completed Work"}
                  </Link>
                </div>
                <p className="text-slate-500 text-sm italic">
                  {ins ? ins.cta.closingLine : "Practical knowledge for better engineering decisions."}
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
