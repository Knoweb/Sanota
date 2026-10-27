"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Phone, Mail, MapPin, CheckCircle2, AlertTriangle,
  Send, Upload, Info, MessageSquare, Briefcase, Cog, Globe, PhoneCall
} from "lucide-react";
import { submitContactEnquiry, submitCallRequest, ContactFormData, CallRequestData } from "@/lib/api";
import dynamic from 'next/dynamic';
import { useLanguage } from "@/context/LanguageContext";
import { contactES } from "@/locales/es/contact";
import { contactDE } from "@/locales/de/contact";
import { contactJA } from "@/locales/ja/contact";
import { contactAR } from "@/locales/ar/contact";
import { HERO_BLUR_DATA } from "@/lib/heroBlurData";
const GradientWaves = dynamic(() => import("@/components/GradientWaves"), { ssr: false });

const contactOptions = [
  { title: "Engineering & Project Enquiries", desc: "Contact us about machinery, automation, new systems, engineering design, product development, modernization or integrated project requirements.", button: "Submit an Engineering Enquiry", icon: Cog },
  { title: "AMC & Maintenance Enquiries", desc: "Request an assessment for preventive maintenance, technical support or an Annual Maintenance Contract for Sanota-built or eligible third-party systems.", button: "Request an AMC Assessment", icon: Briefcase },
  { title: "General Enquiries", desc: "Contact Sanota regarding company information, administration or enquiries that do not relate to a specific technical requirement.", button: "Send a General Enquiry", icon: Globe },
  { title: "Partnership & Supplier Enquiries", desc: "Contact us regarding technology partnerships, joint development, supplier opportunities, distribution or project collaboration.", button: "Submit a Partnership Enquiry", icon: MessageSquare },
  { title: "Media & Publication Enquiries", desc: "Contact us about exhibitions, interviews, technical articles, project features, media use or company activities.", button: "Submit a Media Enquiry", icon: Info },
];

const contactOptionsES = [
  { title: "Consultas sobre ingeniería y proyectos", desc: "Contáctenos para maquinaria, automatización, diseño de ingeniería, nuevos sistemas, modernización o proyectos integrados.", button: "Enviar consulta de ingeniería", icon: Cog },
  { title: "Mantenimiento y contratos de servicio", desc: "Solicite una evaluación para mantenimiento preventivo, soporte técnico o contrato AMC para sistemas propios o de terceros elegibles.", button: "Solicitar evaluación de AMC", icon: Briefcase },
  { title: "Consultas generales", desc: "Póngase en contacto con Sanota para información corporativa, administrativa o consultas no vinculadas a un proyecto técnico.", button: "Enviar consulta general", icon: Globe },
  { title: "Asociaciones y proveedores", desc: "Hablemos sobre alianzas tecnológicas, desarrollo conjunto, distribución, suministros o colaboración en proyectos.", button: "Enviar consulta de colaboración", icon: MessageSquare },
  { title: "Prensa y publicaciones", desc: "Exposiciones, entrevistas, artículos técnicos, conferencias y reportajes sobre nuestras soluciones.", button: "Enviar consulta de prensa", icon: Info },
];

const contactOptionsDE = [
  { title: "Anfragen zu Ingenieurwesen und Projekten", desc: "Kontaktieren Sie uns bezüglich Maschinen, Automatisierung, neuen Systemen, Konstruktion, Produktentwicklung, Modernisierung oder integrierten Projektanforderungen.", button: "Technische Anfrage einreichen", icon: Cog },
  { title: "Wartungs- und Instandhaltungsanfragen", desc: "Fordern Sie eine Bewertung für vorbeugende Wartung, technischen Support oder einen jährlichen Wartungsvertrag an.", button: "AMC-Bewertung anfordern", icon: Briefcase },
  { title: "Allgemeine Anfragen", desc: "Wenden Sie sich bei Fragen zum Unternehmen, zur Verwaltung oder bei Anfragen, die nicht mit einer spezifischen technischen Anforderung zusammenhängen, an Sanota.", button: "Allgemeine Anfrage senden", icon: Globe },
  { title: "Partnerschafts- und Lieferantenanfragen", desc: "Kontaktieren Sie uns bezüglich Technologiepartnerschaften, gemeinsamer Entwicklung, Lieferantenmöglichkeiten, Vertrieb oder Projektkooperationen.", button: "Partnerschaftsanfrage senden", icon: MessageSquare },
  { title: "Medien- und Publikationsanfragen", desc: "Kontaktieren Sie uns bezüglich Ausstellungen, Interviews, Fachartikeln, Projektvorstellungen, Mediennutzung oder Unternehmensaktivitäten.", button: "Medienanfrage einreichen", icon: Info },
];

const directContact = {
  telephone: [
    { label: "Main office & Technical enquiries", value: "+94 740 70 99 89" },
  ],
  email: [
    { label: "General enquiries", value: "info@sanotaglobal.com" },
    { label: "Engineering and project enquiries", value: "engineering@sanotaglobal.com" },
    { label: "AMC and maintenance", value: "support@sanotaglobal.com" },
    { label: "Partnership and media enquiries", value: "partners@sanotaglobal.com" },
  ],
};

const directContactES = {
  telephone: [
    { label: "Oficina principal y consultas técnicas", value: "+94 740 70 99 89" },
  ],
  email: [
    { label: "Consultas generales", value: "info@sanotaglobal.com" },
    { label: "Consultas sobre ingeniería y proyectos", value: "engineering@sanotaglobal.com" },
    { label: "Mantenimiento y soporte técnico (AMC)", value: "support@sanotaglobal.com" },
    { label: "Alianzas y medios de comunicación", value: "partners@sanotaglobal.com" },
  ],
};

const directContactDE = {
  telephone: [
    { label: "Hauptbüro & Technische Anfragen", value: "+94 740 70 99 89" },
  ],
  email: [
    { label: "Allgemeine Anfragen", value: "info@sanotaglobal.com" },
    { label: "Engineering- & Projektanfragen", value: "engineering@sanotaglobal.com" },
    { label: "AMC & Wartung", value: "support@sanotaglobal.com" },
    { label: "Partnerschaften & Medienanfragen", value: "partners@sanotaglobal.com" },
  ],
};

const whatHappensNext = [
  { step: "1", title: "We Receive Your Enquiry", desc: "Your message is recorded and assigned a reference number." },
  { step: "2", title: "We Review the Requirement", desc: "The enquiry is reviewed to identify the relevant industry, service and technical capability." },
  { step: "3", title: "We Direct It to the Right Team", desc: "The requirement is assigned to the appropriate engineering, automation, IoT, software or maintenance team." },
  { step: "4", title: "We Contact You", desc: "A representative contacts you to clarify the requirement and agree on the next step." },
  { step: "5", title: "We Determine the Way Forward", desc: "The next step may involve a discussion, document review, site visit or technical assessment." },
];

const whatHappensNextES = [
  { step: "1", title: "Recibimos su consulta", desc: "Su mensaje se registra y se le asigna un número de referencia único." },
  { step: "2", title: "Revisamos el requisito", desc: "Identificamos el área técnica, industria y capacidades requeridas." },
  { step: "3", title: "Asignamos al equipo adecuado", desc: "La consulta se remite al equipo de ingeniería o mantenimiento especialista." },
  { step: "4", title: "Nos comunicamos con usted", desc: "Un representante le contactará por el método preferido para definir el siguiente paso." },
  { step: "5", title: "Definimos la ruta de acción", desc: "Reunión técnica, revisión de planos o evaluación in situ según sea necesario." },
];

const whatHappensNextDE = [
  { step: "1", title: "Wir erhalten Ihre Anfrage", desc: "Ihre Nachricht wird aufgezeichnet und mit einer Referenznummer versehen." },
  { step: "2", title: "Wir prüfen die Anforderungen", desc: "Die Anfrage wird geprüft, um die relevante Branche, Dienstleistung und technische Kompetenz zu ermitteln." },
  { step: "3", title: "Wir leiten es an das richtige Team weiter", desc: "Die Anforderung wird dem entsprechenden Engineering-, Automatisierungs-, IoT-, Software- oder Wartungsteam zugewiesen." },
  { step: "4", title: "Wir kontaktieren Sie", desc: "Ein Mitarbeiter wird sich mit Ihnen in Verbindung setzen, um die Anforderungen zu klären und das nächste Vorgehen abzustimmen." },
  { step: "5", title: "Wir legen das weitere Vorgehen fest", desc: "Der nächste Schritt kann eine Diskussion, eine Dokumentenprüfung, ein Online-Meeting oder ein Vor-Ort-Besuch sein." },
];

const inputClass = "w-full bg-white dark:bg-[#050B14] border border-slate-300 dark:border-slate-700/60 rounded-xl px-4 py-3.5 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#C59B27] dark:focus:border-[#E8B84B]/60 focus:bg-white dark:focus:bg-[#0A1525] transition-all duration-200 text-sm";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M21.582 6.186a2.6 2.6 0 0 0-1.838-1.854c-1.62-.434-8.125-.434-8.125-.434s-6.505 0-8.125.434a2.6 2.6 0 0 0-1.838 1.854c-.434 1.637-.434 5.062-.434 5.062s0 3.425.434 5.062a2.6 2.6 0 0 0 1.838 1.854c1.62.434 8.125.434 8.125.434s6.505 0 8.125-.434a2.6 2.6 0 0 0 1.838-1.854c.434-1.637.434-5.062.434-5.062s0-3.425-.434-5.062zM9.545 15.568V8.432l6.455 3.568-6.455 3.568z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);


const contactOptionsJA = [
  { title: "エンジニアリング＆プロジェクトのお問い合わせ", desc: "機械、自動化、新システム、設計、製品開発、近代化、または統合プロジェクト要件についてお問い合わせください。", button: "エンジニアリングの問い合わせを送信", icon: Cog },
  { title: "AMC＆保守メンテナンスのお問い合わせ", desc: "サノタ製または対象となる第三者製機器の予防保守、技術サポート、または年間保守契約（AMC）の評価を依頼します。", button: "AMC評価をリクエスト", icon: Briefcase },
  { title: "一般的なお問い合わせ", desc: "会社情報、総務、または特定の技術要件に関係しない一般的なお問い合わせはこちらから。", button: "一般的な問い合わせを送信", icon: Globe },
  { title: "提携＆サプライヤーのお問い合わせ", desc: "技術提携、共同開発、サプライヤーとしての機会、代理店販売、プロジェクト協業についてご相談ください。", button: "パートナーシップの問い合わせを送信", icon: MessageSquare },
  { title: "メディア＆出版のお問い合わせ", desc: "展示会、取材、技術記事、プロジェクト紹介、メディア素材の利用、企業活動について。", button: "メディア問い合わせを送信", icon: Info },
];

const directContactJA = {
  telephone: [
    { label: "代表窓口＆技術相談", value: "+94 740 70 99 89" },
  ],
  email: [
    { label: "一般的なお問い合わせ", value: "info@sanotaglobal.com" },
    { label: "エンジニアリング＆プロジェクト", value: "engineering@sanotaglobal.com" },
    { label: "AMC＆保守サポート", value: "support@sanotaglobal.com" },
    { label: "提携＆メディア関係", value: "partners@sanotaglobal.com" },
  ],
};

const whatHappensNextJA = [
  { step: "1", title: "お問い合わせを受領", desc: "お客様のメッセージが記録され、固有の参照番号が発行されます。" },
  { step: "2", title: "要件を精査", desc: "該当する業界、必要なサービス、および技術領域を特定するために精査します。" },
  { step: "3", title: "最適なチームに割り当て", desc: "機械、自動化、IoT、ソフトウェア、保守の専門チームに引き継がれます。" },
  { step: "4", title: "担当者よりご連絡", desc: "ご要望の詳細を確認し、次のステップについて合意するためご連絡します。" },
  { step: "5", title: "進め方を決定", desc: "協議、図面・書類確認、オンライン面談、または現地視察へと進みます。" },
];

const contactOptionsAR = [
  { title: "استفسارات هندسية ومشاريع", desc: "تواصلوا معنا بخصوص الآلات، والأتمتة، والأنظمة الجديدة، والتصميم الهندسي، وتطوير المنتجات، والتحديث، أو متطلبات المشاريع المتكاملة.", button: "إرسال استفسار هندسي", icon: Cog },
  { title: "عقود الصيانة السنوية ودعم الصيانة", desc: "اطلب تقييماً للصيانة الوقائية أو الدعم الفني أو عقد الصيانة السنوي (AMC) لأنظمة سانوتا أو معدات الطرف الثالث المؤهلة.", button: "طلب تقييم AMC", icon: Briefcase },
  { title: "استفسارات عامة", desc: "اتصل بشركة سانوتا بخصوص معلومات الشركة أو الإدارة أو الاستفسارات التي لا تتعلق بمتطلبات فنية محددة.", button: "إرسال استفسار عام", icon: Globe },
  { title: "استفسارات الشراكة والموردين", desc: "تواصلوا معنا بخصوص الشراكات التقنية، والتطوير المشترك، وفرص التوريد، والتوزيع، أو التعاون في المشاريع.", button: "إرسال استفسار عن الشراكة", icon: MessageSquare },
  { title: "استفسارات وسائل الإعلام والنشر", desc: "تواصلوا معنا بخصوص المعارض، والمقابلات، والمقالات التقنية، وميزات المشاريع، والاستخدام الإعلامي، أو أنشطة الشركة.", button: "إرسال استفسار إعلامي", icon: Info },
];

const directContactAR = {
  telephone: [
    { label: "المكتب الرئيسي والاستفسارات الفنية", value: "+94 740 70 99 89" },
  ],
  email: [
    { label: "استفسارات عامة", value: "info@sanotaglobal.com" },
    { label: "استفسارات هندسية ومشاريع", value: "engineering@sanotaglobal.com" },
    { label: "عقود الصيانة والإصلاح (AMC)", value: "support@sanotaglobal.com" },
    { label: "استفسارات الشراكة والإعلام", value: "partners@sanotaglobal.com" },
  ],
};

const whatHappensNextAR = [
  { step: "1", title: "نتلقى استفسارك", desc: "يتم تسجيل رسالتك وتخصيص رقم مرجعي رسمي لها." },
  { step: "2", title: "نقوم بمراجعة المتطلبات", desc: "تتم مراجعة الاستفسار لتحديد الصناعة والخدمة والقدرة التقنية ذات الصلة." },
  { step: "3", title: "نوجهها إلى الفريق المناسب", desc: "يتم إسناد المتطلبات إلى الفريق المناسب في مجالات الهندسة، أو الأتمتة، أو إنترنت الأشياء، أو البرمجيات، أو الصيانة." },
  { step: "4", title: "نتصل بك", desc: "سيتصل بك أحد الممثلين لتوضيح المتطلبات والاتفاق على الخطوة التالية." },
  { step: "5", title: "نحدد الطريق للمضي قدماً", desc: "قد تتضمن الخطوة التالية مناقشة فنية، أو مراجعة للوثائق، أو اجتماعاً عبر الإنترنت، أو زيارة للموقع." },
];

export default function ContactPage() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const isDe = language === "de";
  const isJa = language === "ja";
  const isAr = language === "ar";
  const c = isAr ? contactAR : isJa ? contactJA : isDe ? contactDE : isEs ? contactES : null;

  const currentContactOptions = isAr ? contactOptionsAR : isJa ? contactOptionsJA : isDe ? contactOptionsDE : isEs ? contactOptionsES : contactOptions;
  const currentDirectContact = isAr ? directContactAR : isJa ? directContactJA : isDe ? directContactDE : isEs ? directContactES : directContact;
  const currentWhatHappensNext = isAr ? whatHappensNextAR : isJa ? whatHappensNextJA : isDe ? whatHappensNextDE : isEs ? whatHappensNextES : whatHappensNext;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    jobTitle: "",
    country: "Sri Lanka",
    email: "",
    phone: "",
    enquiryType: "",
    subject: "",
    message: "",
    consentAccurate: false,
    consentNoObligation: false,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [connectionError, setConnectionError] = useState('');
  const [enquiryRef, setEnquiryRef] = useState('');

  const updateData = (fields: Partial<ContactFormData>) => setFormData(prev => ({ ...prev, ...fields }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formStatus === 'submitting') return;
    setFormStatus('submitting');
    setConnectionError('');
    try {
      const result = await submitContactEnquiry(formData);
      if (result.success) {
        setEnquiryRef(result.referenceNumber);
        setFormStatus('success');
      }
    } catch (err: any) {
      setConnectionError(err.message || (c ? c.messages.sendError : 'Your enquiry could not be submitted because of a connection problem. Please try again.'));
      setFormStatus('error');
    }
  };

  const [callData, setCallData] = useState<CallRequestData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    reason: "",
  });
  const [callStatus, setCallStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [callError, setCallError] = useState('');
  const [callRef, setCallRef] = useState('');

  const updateCallData = (fields: Partial<CallRequestData>) => setCallData(prev => ({ ...prev, ...fields }));

  const handleCallSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (callStatus === 'submitting') return;
    setCallStatus('submitting');
    setCallError('');
    try {
      const result = await submitCallRequest(callData);
      if (result.success) {
        setCallRef(result.referenceNumber);
        setCallStatus('success');
      }
    } catch (err: any) {
      setCallError(err.message || (c ? c.messages.sendError : 'Your request could not be submitted because of a connection problem. Please try again.'));
      setCallStatus('error');
    }
  };

  const enquiryTypes = isAr ? (c?.form.fields.queryTypes || [
    "متطلبات هندسية أو متطلبات المشروع",
    "الآلات أو الأتمتة",
    "إنترنت الأشياء أو البرمجيات",
    "تطوير المنتجات",
    "التحديث أو التعديل",
    "عقد صيانة سنوي أو عقد صيانة",
    "تدريب فني",
    "استفسار عن الشراكة أو الموردين",
    "استفسارات وسائل الإعلام",
    "استفسارات عامة",
    "أخرى"
  ]) : isJa ? (c?.form.fields.queryTypes || [
    "エンジニアリングまたはプロジェクト要件",
    "機械または自動化",
    "IoTまたはソフトウェア",
    "製品開発",
    "改修または近代化",
    "AMCまたはメンテナンス",
    "トレーニング",
    "提携先またはサプライヤーに関するお問い合わせ",
    "メディアからの問い合わせ",
    "一般的なお問い合わせ",
    "その他"
  ]) : isDe ? (c?.form.fields.queryTypes || [
    "Technische oder Projektanforderungen",
    "Maschinen oder Automatisierung",
    "IoT oder Software",
    "Produktentwicklung",
    "Nachrüstung oder Modernisierung",
    "Wartungsvertrag oder Instandhaltung",
    "Ausbildung",
    "Anfrage nach Partnerschaften oder Lieferanten",
    "Medienanfrage",
    "Allgemeine Anfrage",
    "Andere"
  ]) : isEs ? (c?.form.fields.queryTypes || [
    "Requisito de ingeniería o del proyecto",
    "Maquinaria o automatización",
    "IoT o software",
    "Desarrollo de productos",
    "Rehabilitación o modernización",
    "AMC o mantenimiento",
    "Capacitación",
    "Consulta sobre colaboración o proveedores",
    "Consulta de los medios de comunicación",
    "Consulta general",
    "Otro"
  ]) : [
    "Engineering or project requirement",
    "Machinery or automation",
    "IoT or software",
    "Product development",
    "Retrofit or modernization",
    "AMC or maintenance",
    "Training",
    "Partnership or supplier enquiry",
    "Media enquiry",
    "General enquiry",
    "Other"
  ];

  const responseMethods = isAr ? [
    { label: "مكالمة هاتفية", value: "Telephone call" },
    { label: "بريد إلكتروني", value: "Email" },
    { label: "اجتماع عبر الإنترنت", value: "Online meeting" },
    { label: "لا تفضيل محدد", value: "No preference" }
  ] : isJa ? [
    { label: "電話", value: "Telephone call" },
    { label: "メール", value: "Email" },
    { label: "オンライン面談", value: "Online meeting" },
    { label: "特に指定なし", value: "No preference" }
  ] : isDe ? [
    { label: "Telefonanruf", value: "Telephone call" },
    { label: "E-Mail", value: "Email" },
    { label: "Online-Meeting", value: "Online meeting" },
    { label: "Keine Präferenz", value: "No preference" }
  ] : isEs ? [
    { label: "Llamada telefónica", value: "Telephone call" },
    { label: "Correo electrónico", value: "Email" },
    { label: "Reunión virtual", value: "Online meeting" },
    { label: "Sin preferencia", value: "No preference" }
  ] : [
    { label: "Telephone call", value: "Telephone call" },
    { label: "Email", value: "Email" },
    { label: "Online meeting", value: "Online meeting" },
    { label: "No preference", value: "No preference" }
  ];

  const contactTimes = isAr ? [
    { label: "صباحاً (8:30 – 12:00)", value: "Morning" },
    { label: "بعد الظهر (12:00 – 17:30)", value: "Afternoon" },
    { label: "في أي وقت خلال ساعات العمل", value: "Any time during business hours" }
  ] : isJa ? [
    { label: "午前 (8:30 – 12:00)", value: "Morning" },
    { label: "午後 (12:00 – 17:30)", value: "Afternoon" },
    { label: "営業時間内ならいつでも", value: "Any time during business hours" }
  ] : isDe ? [
    { label: "Vormittag", value: "Morning" },
    { label: "Nachmittag", value: "Afternoon" },
    { label: "Jederzeit während der Geschäftszeiten", value: "Any time during business hours" }
  ] : isEs ? [
    { label: "Mañana", value: "Morning" },
    { label: "Tarde", value: "Afternoon" },
    { label: "Cualquier momento en horario laboral", value: "Any time during business hours" }
  ] : [
    { label: "Morning", value: "Morning" },
    { label: "Afternoon", value: "Afternoon" },
    { label: "Any time during business hours", value: "Any time during business hours" }
  ];

  return (
    <div className="flex flex-col min-h-screen relative bg-transparent">
      {/* Lightweight Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-80 dark:block hidden">
        <GradientWaves
          horizonColor="#1E2B47"
          waveColor="#2E5EAA"
          crestColor="#60A5FA"
          speed={0.3}
          amplitude={1.5}
          waveScale={0.5}
          waveRatio={0.9}
          swell={20}
          turbulence={10}
          tilt={1.2}
          zoom={1}
          height={4.5}
          fogDepth={20}
          detail="low"
          brightness={1.2}
          opacity={1}
          grain={0}
          grainIntensity={0}
          enableMouse={false}
        />
      </div>

      <Header />
      <main className="flex-grow">

        {/* ── Hero ── */}
        <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 overflow-hidden border-b border-slate-200 dark:border-slate-800/60 min-h-[65vh] flex flex-col justify-center">
          <div className="page-hero-bg">
            <Image
              src="/contact_hero_bg.webp"
              alt="Contact Sanota Background"
              fill
              priority
              unoptimized
              placeholder="blur"
              blurDataURL={HERO_BLUR_DATA.contact_hero_bg}
              className="object-cover"
            />
          </div>
          <div className="page-hero-overlay" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-black text-[#C59B27] dark:text-[#E8B84B] uppercase tracking-[0.3em] mb-5"
            >
              {isAr ? "اتصل بسانوتا" : isJa ? "サノタへのお問い合わせ" : isDe ? "Kontakt zu Sanota" : isEs ? "Contactar con Sanota" : "Contact Sanota"}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#17135B] dark:text-white tracking-tight mb-6 leading-tight max-w-5xl mx-auto"
            >
              {c ? (
                c.hero.heading
              ) : (
                <>
                  Let&apos;s Discuss Your{" "}
                  <span className="text-[#C59B27] dark:text-[#E8B84B]">Requirement</span>
                </>
              )}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-4 font-medium leading-relaxed"
            >
              {c ? c.hero.subheading : "Contact Sanota about an operational challenge, engineering project, new system, modernization requirement or long-term technical support."}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              {c ? c.hero.description : "You do not need to prepare a complete technical specification. Tell us what is happening, what needs improvement or what you want to develop."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
            >
              <Link
                href="/tell-us-your-challenge"
                className="px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-black rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg shadow-[#E8B84B]/20 hover:shadow-[#E8B84B]/40 hover:-translate-y-0.5 group"
              >
                {c ? c.hero.primaryButton : "Tell Us Your Challenge"} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#contact-form"
                className="px-8 py-4 bg-white/90 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 text-[#17135B] dark:text-white font-black rounded-xl border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all duration-300 flex items-center justify-center backdrop-blur-sm shadow-sm"
              >
                {c ? c.hero.secondaryButton : "Request a Call"} <PhoneCall className="ml-2 w-5 h-5" />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-[#C59B27]/80 dark:text-[#E8B84B]/70 font-bold text-xs tracking-widest uppercase"
            >
              {c ? c.hero.supportLine : (
                <>Engineering <span className="mx-2 text-slate-300 dark:text-slate-700">•</span> Automation <span className="mx-2 text-slate-300 dark:text-slate-700">•</span> IoT <span className="mx-2 text-slate-300 dark:text-slate-700">•</span> Software <span className="mx-2 text-slate-300 dark:text-slate-700">•</span> Project Execution <span className="mx-2 text-slate-300 dark:text-slate-700">•</span> AMC</>
              )}
            </motion.p>
          </div>
        </section>

        {/* ── Technical Enquiry Callout ── */}
        <section className="py-14 relative z-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[2rem] bg-white dark:bg-[#131C2E]/60 border border-slate-200 dark:border-slate-700/50 backdrop-blur-xl shadow-xl dark:shadow-2xl p-8 md:p-10 group"
            >
              {/* Animated Glow Background */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8B84B]/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 translate-y-1/4 -translate-x-1/4 pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="lg:w-2/3">
                  <div className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-3 py-1 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] dark:bg-[#E8B84B] animate-pulse shadow-[0_0_6px_#E8B84B]" />
                    <span className="text-slate-600 dark:text-slate-300 text-[10px] font-bold tracking-[0.2em] uppercase">
                      {isAr ? "مسار استفسار موجه" : isJa ? "ガイド付きプロセス" : isDe ? "Geführter Prozess" : isEs ? "Proceso Guiado" : "Guided Process"}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#17135B] dark:text-white mb-4 leading-tight">
                    {isAr ? (
                      <>هل تواجه تحدياً فنياً أو <br className="hidden xl:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-amber-600 dark:to-amber-500">تشغيلياً؟</span></>
                    ) : isJa ? (
                      <>技術的または<br className="hidden xl:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-amber-600 dark:to-amber-500">運用上の課題をお持ちですか？</span></>
                    ) : isDe ? (
                      <>Haben Sie eine technische oder <br className="hidden xl:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-amber-600 dark:to-amber-500">betriebliche Herausforderung?</span></>
                    ) : isEs ? (
                      <>¿Tiene un Desafío Técnico u <br className="hidden xl:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-amber-600 dark:to-amber-500">Operativo?</span></>
                    ) : (
                      <>Have a Technical or <br className="hidden xl:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-amber-600 dark:to-amber-500">Operational Challenge?</span></>
                    )}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed mb-6 max-w-2xl">
                    {isAr ? (
                      <>بالنسبة للمتطلبات الهندسية، فإن أسرع طريقة لتقديم المعلومات اللازمة هي من خلال نموذج <strong className="text-[#17135B] dark:text-white font-bold bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-md border border-slate-200 dark:border-white/10 mx-1">أخبرنا عن التحدي</strong> الموجه. سيساعدك هذا على شرح ما يلي بدقة:</>
                    ) : isJa ? (
                      <>エンジニアリング要件の場合、必要な情報を最も迅速に提供できるのは、ガイド付きフォーム<strong className="text-[#17135B] dark:text-white font-bold bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-md border border-slate-200 dark:border-white/10 mx-1">課題を相談する</strong>です。以下の内容を正確に説明できます：</>
                    ) : isDe ? (
                      <>Für Engineering-Anforderungen ist der schnellste Weg, die erforderlichen Informationen bereitzustellen, unser geführtes Formular <strong className="text-[#17135B] dark:text-white font-bold bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-md border border-slate-200 dark:border-white/10 mx-1">Schildern Sie uns Ihre Herausforderung</strong>. Es hilft Ihnen, Folgendes genau zu beschreiben:</>
                    ) : isEs ? (
                      <>Para requisitos de ingeniería, la forma más rápida de proporcionar la información necesaria es a través de nuestro formulario guiado <strong className="text-[#17135B] dark:text-white font-bold bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-md border border-slate-200 dark:border-white/10 mx-1">Cuéntenos su desafío</strong>. Le ayuda a explicar con precisión:</>
                    ) : (
                      <>For engineering requirements, the fastest way to provide necessary information is through the guided <strong className="text-[#17135B] dark:text-white font-bold bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-md border border-slate-200 dark:border-white/10 mx-1">Tell Us Your Challenge</strong> form. It helps you accurately explain:</>
                    )}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {(isAr ? ["الوضع الحالي وما يحدث الآن", "ما لا يعمل بالشكل المطلوب", "ما ترغب في تحسينه أو تطويره"] : isJa ? ["現在何が起こっているか", "何が意図通りに動作していないか", "何を改善したいか"] : isDe ? ["Was aktuell passiert", "Was nicht wie vorgesehen funktioniert", "Was Sie verbessern möchten"] : isEs ? ["Qué está sucediendo actualmente", "Qué no está funcionando", "Qué desea mejorar"] : ["What is happening now", "What is not working", "What you want to improve"]).map((item, i) => (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        key={i}
                        className="flex items-center bg-slate-50 dark:bg-[#0A101A]/40 border border-slate-200 dark:border-slate-700/40 rounded-lg px-3.5 py-2.5 hover:border-[#C59B27] dark:hover:border-[#E8B84B]/40 hover:bg-slate-100 dark:hover:bg-[#131C2E] transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#C59B27]/10 dark:bg-[#E8B84B]/10 flex items-center justify-center mr-2.5 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] dark:text-[#E8B84B]" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-200 font-medium text-[13px]">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 w-full lg:w-auto flex justify-start lg:justify-end">
                  <Link
                    href="/tell-us-your-challenge"
                    className="relative group/btn overflow-hidden px-7 py-3.5 bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-amber-600 dark:to-amber-500 text-white dark:text-[#0A101A] font-black rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(232,184,75,0.3)] flex items-center justify-center w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center text-sm uppercase tracking-wider">
                      {isAr ? "أخبرنا عن التحدي الذي تواجهه" : isJa ? "課題を相談する" : isDe ? "Schildern Sie uns Ihre Herausforderung" : isEs ? "Cuéntenos su desafío" : "Tell Us Your Challenge"}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Contact Options ── */}
        <section className="py-10 lg:py-14 bg-transparent border-b border-slate-200 dark:border-slate-800/60 relative z-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 lg:mb-12">
              <p className="text-xs font-black text-[#C59B27] dark:text-[#E8B84B] uppercase tracking-[0.3em] mb-4">
                {isAr ? "خيارات الاتصال" : isJa ? "お問い合わせ方法" : isDe ? "Kontaktwege" : isEs ? "Opciones de Contacto" : "Contact Options"}
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-[#17135B] dark:text-white">
                {c ? c.routes.heading : "Choose the Right Contact Route"}
              </h2>
            </div>

            {/* Top 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {currentContactOptions.slice(0, 3).map((opt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group relative bg-white dark:bg-[#0A101A]/60 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 flex flex-col overflow-hidden transition-all duration-500 hover:border-[#C59B27] dark:hover:border-[#E8B84B]/40 hover:-translate-y-2 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E8B84B]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12" />

                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#F5F3EF] dark:bg-gradient-to-br dark:from-[#131C2E] dark:to-[#050B14] border border-slate-200 dark:border-slate-700/50 flex items-center justify-center mb-6 group-hover:border-[#C59B27] dark:group-hover:border-[#E8B84B]/50 group-hover:shadow-[0_0_20px_rgba(232,184,75,0.2)] transition-all duration-500 shadow-sm shrink-0">
                    <opt.icon className="w-7 h-7 text-[#C59B27] dark:text-[#E8B84B] group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <h4 className="relative z-10 text-xl font-black text-[#17135B] dark:text-white mb-4 group-hover:text-[#C59B27] dark:group-hover:text-amber-100 transition-all duration-300">{opt.title}</h4>

                  <p className="relative z-10 text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors duration-300">{opt.desc}</p>

                  <div className="relative z-10 mt-auto pt-6 border-t border-slate-200 dark:border-slate-700/50 group-hover:border-slate-300 dark:group-hover:border-slate-600/50 transition-colors duration-300">
                    <a href="#contact-form" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#E8B84B] transition-colors group/link w-full justify-between">
                      {opt.button}
                      <span className="w-8 h-8 rounded-full bg-[#C59B27]/10 dark:bg-[#E8B84B]/10 flex items-center justify-center group-hover/link:bg-[#C59B27] dark:group-hover/link:bg-[#E8B84B] text-[#C59B27] dark:text-[#E8B84B] group-hover/link:text-white dark:group-hover/link:text-[#0A101A] transition-all duration-300 shrink-0">
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom 2 centered */}
            <div className="flex flex-col md:flex-row justify-center gap-6">
              {currentContactOptions.slice(3).map((opt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx + 3) * 0.1, duration: 0.5 }}
                  className="group relative bg-white dark:bg-[#0A101A]/60 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 flex flex-col overflow-hidden transition-all duration-500 hover:border-[#C59B27] dark:hover:border-[#E8B84B]/40 hover:-translate-y-2 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] w-full md:max-w-[calc(33.333%+0.75rem)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E8B84B]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12" />

                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#F5F3EF] dark:bg-gradient-to-br dark:from-[#131C2E] dark:to-[#050B14] border border-slate-200 dark:border-slate-700/50 flex items-center justify-center mb-6 group-hover:border-[#C59B27] dark:group-hover:border-[#E8B84B]/50 group-hover:shadow-[0_0_20px_rgba(232,184,75,0.2)] transition-all duration-500 shadow-sm shrink-0">
                    <opt.icon className="w-7 h-7 text-[#C59B27] dark:text-[#E8B84B] group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <h4 className="relative z-10 text-xl font-black text-[#17135B] dark:text-white mb-4 group-hover:text-[#C59B27] dark:group-hover:text-amber-100 transition-all duration-300">{opt.title}</h4>

                  <p className="relative z-10 text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors duration-300">{opt.desc}</p>

                  <div className="relative z-10 mt-auto pt-6 border-t border-slate-200 dark:border-slate-700/50 group-hover:border-slate-300 dark:group-hover:border-slate-600/50 transition-colors duration-300">
                    <a href="#contact-form" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#E8B84B] transition-colors group/link w-full justify-between">
                      {opt.button}
                      <span className="w-8 h-8 rounded-full bg-[#C59B27]/10 dark:bg-[#E8B84B]/10 flex items-center justify-center group-hover/link:bg-[#C59B27] dark:group-hover/link:bg-[#E8B84B] text-[#C59B27] dark:text-[#E8B84B] group-hover/link:text-white dark:group-hover/link:text-[#0A101A] transition-all duration-300 shrink-0">
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                      </span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Direct Contact Info ── */}
        <section className="py-10 lg:py-14 bg-transparent border-b border-slate-200 dark:border-slate-800/60 relative z-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 lg:mb-12">
              <p className="text-xs font-black text-[#C59B27] dark:text-[#E8B84B] uppercase tracking-[0.3em] mb-4">
                {c ? c.directInfo.title : "Direct Contact"}
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-[#17135B] dark:text-white">
                {isAr ? "تواصل مع سانوتا مباشرة" : isJa ? "サノタに直接問い合わせる" : isDe ? "Sanota direkt kontaktieren" : isEs ? "Contacte con Sanota Directamente" : "Contact Sanota Directly"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
              {/* Telephone */}
              <div className="group relative pl-8 py-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-[#C59B27] dark:hover:border-[#E8B84B] transition-all duration-500">
                <div className="absolute -left-[2px] top-1/4 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-[#C59B27] dark:via-[#E8B84B] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_15px_#E8B84B]" />

                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-700 flex items-center justify-center mr-5 group-hover:bg-[#C59B27]/10 dark:group-hover:bg-[#E8B84B]/10 group-hover:border-[#C59B27]/40 dark:group-hover:border-[#E8B84B]/40 transition-colors duration-500 shadow-md">
                    <Phone className="w-6 h-6 text-[#C59B27] dark:text-slate-400 group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <h4 className="text-2xl font-black text-[#17135B] dark:text-white transition-all duration-500">
                    {isAr ? "الهاتف" : isJa ? "お電話" : isDe ? "Telefon" : isEs ? "Teléfono" : "Telephone"}
                  </h4>
                </div>

                <div className="space-y-8">
                  {currentDirectContact.telephone.map((item, idx) => (
                    <div key={idx} className="transform group-hover:translate-x-2 transition-transform duration-500" style={{ transitionDelay: `${idx * 100}ms` }}>
                      <span className="block text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">{item.label}</span>
                      <a href={`tel:${item.value.replace(/\s+/g, '')}`} className="text-[#17135B] dark:text-white text-lg hover:text-[#C59B27] dark:hover:text-[#E8B84B] transition-colors font-semibold tracking-wide">{item.value}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="group relative pl-8 py-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-[#C59B27] dark:hover:border-[#E8B84B] transition-all duration-500">
                <div className="absolute -left-[2px] top-1/4 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-[#C59B27] dark:via-[#E8B84B] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_15px_#E8B84B]" />

                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-700 flex items-center justify-center mr-5 group-hover:bg-[#C59B27]/10 dark:group-hover:bg-[#E8B84B]/10 group-hover:border-[#C59B27]/40 dark:group-hover:border-[#E8B84B]/40 transition-colors duration-500 shadow-md">
                    <Mail className="w-6 h-6 text-[#C59B27] dark:text-slate-400 group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <h4 className="text-2xl font-black text-[#17135B] dark:text-white transition-all duration-500">
                    {isAr ? "البريد الإلكتروني" : isJa ? "メール" : isDe ? "E-Mail" : isEs ? "Correo Electrónico" : "Email"}
                  </h4>
                </div>

                <div className="space-y-8">
                  {currentDirectContact.email.map((item, idx) => (
                    <div key={idx} className="transform group-hover:translate-x-2 transition-transform duration-500" style={{ transitionDelay: `${idx * 100}ms` }}>
                      <span className="block text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">{item.label}</span>
                      <a href={`mailto:${item.value}`} className="text-[#C59B27] dark:text-[#E8B84B] text-[15px] hover:underline transition-colors font-semibold tracking-wide break-all">{item.value}</a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Address */}
              <div className="group relative pl-8 py-4 border-l-2 border-slate-200 dark:border-slate-800 hover:border-[#C59B27] dark:hover:border-[#E8B84B] transition-all duration-500 flex flex-col h-full">
                <div className="absolute -left-[2px] top-1/4 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-[#C59B27] dark:via-[#E8B84B] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_15px_#E8B84B]" />

                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-700 flex items-center justify-center mr-5 group-hover:bg-[#C59B27]/10 dark:group-hover:bg-[#E8B84B]/10 group-hover:border-[#C59B27]/40 dark:group-hover:border-[#E8B84B]/40 transition-colors duration-500 shadow-md">
                    <MapPin className="w-6 h-6 text-[#C59B27] dark:text-slate-400 group-hover:text-[#C59B27] dark:group-hover:text-[#E8B84B] group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <h4 className="text-2xl font-black text-[#17135B] dark:text-white transition-all duration-500">
                    {c ? c.directInfo.address.title : "Office Address"}
                  </h4>
                </div>

                <div className="transform group-hover:translate-x-2 transition-transform duration-500 mb-8">
                  <p className="text-slate-700 dark:text-slate-200 text-[15px] leading-relaxed font-medium tracking-wide">
                    Sanota (Private) Limited (PV 74540)<br />
                    441/2C Wackwella Road<br />
                    Galle 80000, Sri Lanka<br />
                    <span className="text-xs text-slate-500">Workshop: Bataganwila, Galle</span>
                  </p>
                </div>

                <div className="transform group-hover:translate-x-2 transition-transform duration-500 delay-100 mb-10">
                  <span className="block text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-1.5">
                    {isAr ? "ساعات العمل" : isJa ? "営業時間" : isDe ? "Geschäftszeiten" : isEs ? "Horario de Atención" : "Business Hours"}
                  </span>
                  <p className="text-[#17135B] dark:text-white text-[15px] font-semibold tracking-wide">
                    {isAr ? "الإثنين – الجمعة: 8:30 صباحاً – 5:30 مساءً" : isJa ? "月〜金: 8:30 – 17:30" : isDe ? "Mo–Fr: 8:30 – 17:30 Uhr" : isEs ? "Lun–Vie: 8:30 AM – 5:30 PM" : "Mon–Fri: 8:30 AM – 5:30 PM"}
                  </p>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-3 transform group-hover:translate-x-2 transition-transform duration-500 delay-200">
                  <a href="https://maps.google.com/?q=Sanota+Pvt+Ltd+Galle" target="_blank" rel="noreferrer" className="flex-1 py-3 px-4 bg-transparent border border-[#C59B27] dark:border-[#E8B84B]/50 hover:bg-[#C59B27] dark:hover:bg-[#E8B84B] hover:border-[#C59B27] dark:hover:border-[#E8B84B] text-[#C59B27] dark:text-[#E8B84B] hover:text-white dark:hover:text-[#0A101A] font-black rounded-lg transition-all duration-300 text-xs uppercase tracking-widest text-center">
                    {c ? c.directInfo.actions.getDirections : "Get Directions"}
                  </a>
                  <button onClick={() => alert(isAr ? "شركة سانوتا (الخاصة) المحدودة\nرقم 16، طريق ويويلوالا، باتاغانويلا، غالي، سريلانكا.\nالهاتف: +94 740 70 99 89\nالبريد الإلكتروني: info@sanotaglobal.com" : isJa ? "Sanota (Pvt) Ltd\nNo 16, Wewelwala Road, Bataganwila, Galle, Sri Lanka.\n電話: +94 740 70 99 89\nメール: info@sanotaglobal.com" : isDe ? "Sanota (Pvt) Ltd\nNo 16, Wewelwala Road, Bataganwila, Galle, Sri Lanka.\nTelefon: +94 740 70 99 89\nE-Mail: info@sanotaglobal.com" : isEs ? "Sanota (Pvt) Ltd\nNo 16, Wewelwala Road, Bataganwila, Galle, Sri Lanka.\nTeléfono: +94 740 70 99 89\nEmail: info@sanotaglobal.com" : "Sanota (Pvt) Ltd\nNo 16, Wewelwala Road, Bataganwila, Galle.\nPhone: +94 740 70 99 89\nEmail: info@sanotaglobal.com")} className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white font-bold rounded-lg transition-all duration-300 text-xs uppercase tracking-widest text-center">
                    {c ? c.directInfo.actions.saveContact : "Save Details"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Urgent Enquiries (Priority Channel) ── */}
        <section className="py-20 relative z-10 border-b border-slate-200 dark:border-slate-800/60">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-emerald-50/50 dark:bg-[#131C2E] border-2 border-emerald-500/30 dark:border-emerald-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-xl dark:shadow-[0_0_40px_rgba(16,185,129,0.05)]"
            >
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/[0.04] to-transparent pointer-events-none" />

              <div className="flex flex-col lg:flex-row gap-10 md:gap-14 items-start relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#050B14] border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-md dark:shadow-[0_0_25px_rgba(52,211,153,0.15)] group-hover:shadow-[0_0_40px_rgba(52,211,153,0.35)] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-50" />
                  <div className="absolute inset-0 bg-emerald-500/10 animate-pulse" />
                  <AlertTriangle className="w-8 h-8 text-emerald-600 dark:text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.9)] relative z-10" />
                </div>

                <div className="flex-grow">
                  <p className="text-emerald-700 dark:text-emerald-400 font-black text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center">
                    {isAr ? "قناة الدعم الفني العاجل" : isJa ? "優先サポート窓口" : isDe ? "Prioritärer Supportkanal" : isEs ? "Canal de Soporte Prioritario" : "Priority Support Channel"}
                  </p>

                  <h3 className="text-2xl md:text-3xl font-black text-[#17135B] dark:text-white mb-4 tracking-tight">
                    {c ? c.urgentSupport.heading : "Is an Operational System Currently Affected?"}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8 max-w-4xl">
                    {isAr ? (
                      <>إذا كان استفسارك يتعلق بتوقف حالي للآلات، أو انقطاع في الإنتاج، أو مشكلة فنية عاجلة، فضع علامة واضحة عليه كـ <strong className="text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/30 ml-1">دعم فني عاجل</strong>.</>
                    ) : isJa ? (
                      <>現在発生している機械の停止、生産の中断、または緊急の技術的トラブルに関するお問い合わせの場合は、明確に<strong className="text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/30 ml-1">緊急技術サポート</strong>と指定してください。</>
                    ) : isDe ? (
                      <>Wenn sich Ihre Anfrage auf einen aktuellen Maschinenstillstand, eine Produktionsunterbrechung oder ein zeitkritisches technisches Problem bezieht, kennzeichnen Sie sie bitte deutlich als <strong className="text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/30 ml-1">Dringender technischer Support</strong>.</>
                    ) : isEs ? (
                      <>Si su consulta se refiere a una parada actual de maquinaria, interrupción de producción o problema técnico crítico, márquela claramente como <strong className="text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/30 ml-1">Soporte Técnico Urgente</strong>.</>
                    ) : (
                      <>If your enquiry relates to a current machinery stoppage, production interruption or time-sensitive technical issue, clearly mark it as <strong className="text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/30 ml-1">Urgent Technical Support</strong>.</>
                    )}
                  </p>

                  <div className="mb-10">
                    <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[11px] mb-5">
                      {isAr ? "يرجى تقديم المعلومات التالية:" : isJa ? "以下の情報をご用意ください：" : isDe ? "Bitte halten Sie folgende Informationen bereit:" : isEs ? "Por favor tenga a mano la siguiente información:" : "Please have this information ready:"}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                      {(isAr ? [
                        "الاسم الكامل واسم الشركة",
                        "رقم هاتف صالح للتواصل",
                        "موقع المنشأة أو المشروع",
                        "المعدات أو النظام المعني",
                        "وصف موجز للمشكلة",
                        "هل المعدات تعمل حالياً أم متوقفة",
                        "صور الخطأ أو تقارير الأعطال ذات الصلة"
                      ] : isJa ? [
                        "お名前と会社名",
                        "ご連絡先電話番号",
                        "設備の設置場所",
                        "対象機器またはシステム",
                        "問題の簡潔な説明",
                        "機器が現在稼働中かどうか",
                        "関連写真またはエラー情報"
                      ] : isDe ? [
                        "Ihr Name und Firmenname",
                        "Eine Kontakttelefonnummer",
                        "Standort der Anlage",
                        "Betroffenes Gerät oder System",
                        "Kurze Beschreibung des Problems",
                        "Ob das Gerät derzeit in Betrieb ist",
                        "Relevante Fotos oder Fehlercodes"
                      ] : isEs ? [
                        "Su nombre y empresa",
                        "Un número de teléfono de contacto",
                        "Ubicación de la instalación",
                        "Equipo o sistema involucrado",
                        "Breve descripción del problema",
                        "Si el equipo se encuentra actualmente en operación",
                        "Fotografías relevantes o códigos de error"
                      ] : [
                        "Your name and company",
                        "A telephone number",
                        "Site location",
                        "Equipment or system involved",
                        "Brief description of the issue",
                        "Whether the equipment is currently operating",
                        "Relevant photographs or error information"
                      ]).map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400/80 mt-1.5 mr-3 shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a href="#contact-form" className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] flex items-center justify-center text-xs uppercase tracking-widest group">
                      {c ? c.urgentSupport.primaryButton : "Submit Urgent Technical Enquiry"}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="tel:+94740709989" className="px-6 py-3.5 bg-white dark:bg-[#050B14] hover:bg-slate-50 dark:hover:bg-[#0A101A] border border-emerald-500/40 hover:border-emerald-500/60 text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 font-black rounded-xl transition-all duration-300 flex items-center justify-center text-xs uppercase tracking-widest shadow-sm">
                      {c ? c.urgentSupport.callButton : "Call Technical Support"} <Phone className="w-4 h-4 ml-3" />
                    </a>
                  </div>

                  <div className="bg-white/80 dark:bg-[#050B14]/50 border-l-2 border-emerald-500/40 py-3.5 px-5 rounded-r-xl shadow-sm">
                    <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed mb-1.5 tracking-wide">
                      <strong className="text-emerald-700 dark:text-emerald-400 font-bold tracking-widest uppercase text-[10px] mr-2">
                        {isAr ? "إشعار هام:" : isJa ? "重要なお知らせ:" : isDe ? "Wichtiger Hinweis:" : isEs ? "Aviso importante:" : "Important notice:"}
                      </strong>
                      {isAr ? "لا يضمن تقديم الاستفسار العاجل حضوراً فورياً أو وقت استجابة محدداً دون وجود ترتيب مسبق لعقد الصيانة." : isJa ? "緊急の問い合わせを送信しても、事前の保守契約がない場合、即時の駆けつけや特定の対応時間は保証されません。" : isDe ? "Das Absenden einer dringenden Anfrage garantiert kein sofortiges Erscheinen oder feste Reaktionszeiten ohne vorherigen Wartungsvertrag." : isEs ? "El envío de una consulta urgente no garantiza la asistencia presencial inmediata ni un tiempo de respuesta específico sin un contrato previo de servicio." : "Urgent-enquiry submission does not guarantee immediate attendance or a specific response time."}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed tracking-wide">
                      {c ? c.urgentSupport.notice : "For safety-related situations, follow your organization's approved safety, isolation and emergency procedures before seeking technical assistance."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Contact Form + Sidebar ── */}
        <section id="contact-form" className="py-10 lg:py-14 bg-transparent border-b border-slate-200 dark:border-slate-800/60 relative z-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16">

              {/* Main Form */}
              <div className="lg:col-span-2">
                <div className="mb-10">
                  <p className="text-xs font-black text-[#C59B27] dark:text-[#E8B84B] uppercase tracking-[0.3em] mb-4">
                    {isAr ? "نموذج الاتصال" : isJa ? "お問い合わせフォーム" : isDe ? "Kontaktformular" : isEs ? "Formulario de Contacto" : "Contact Form"}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-black text-[#17135B] dark:text-white mb-4">
                    {c ? c.form.heading : "Send Us a Message"}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">
                    {c ? c.form.subheading : "Complete the form and select the enquiry type that best matches your requirement."}
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white dark:bg-[#131C2E] border border-green-500/40 rounded-3xl p-12 text-center shadow-xl"
                    >
                      <div className="w-20 h-20 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-2xl font-black text-[#17135B] dark:text-white mb-4">
                        {c ? c.confirmation.heading : "Thank You for Contacting Sanota"}
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 text-lg mb-3">
                        {isAr ? "تم استلام استفسارك بنجاح." : isJa ? "お問い合わせを正常に受け付けました。" : isDe ? "Ihre Anfrage ist erfolgreich bei uns eingegangen." : isEs ? "Su consulta ha sido recibida correctamente." : "Your enquiry has been received successfully."}
                      </p>
                      <p className="text-[#C59B27] dark:text-[#E8B84B] font-mono font-bold mb-8">
                        {c ? c.confirmation.refText : "Reference:"} {enquiryRef}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                        {c ? c.confirmation.body : "The Sanota team will review the information and direct it to the appropriate department. A representative will contact you using the details provided."}
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/" className="px-6 py-3 bg-[#E8B84B] text-[#0B1220] font-black rounded-xl hover:bg-[#d4a643] transition-colors">
                          {c ? c.confirmation.homeButton : "Return to Homepage"}
                        </Link>
                        <Link href="/media" className="px-6 py-3 bg-slate-100 dark:bg-[#050B14] text-[#17135B] dark:text-white border border-slate-300 dark:border-slate-700 font-black rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                          {c ? c.confirmation.workButton : "Explore Sanota's Work"}
                        </Link>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 space-y-10 shadow-xl"
                    >
                      {/* Your Details */}
                      <div>
                        <h4 className="text-lg font-black text-[#17135B] dark:text-white mb-1 pb-4 border-b border-slate-200 dark:border-slate-700/60">
                          {isAr ? "بياناتك الشخصية" : isJa ? "お客様情報" : isDe ? "Ihre Angaben" : isEs ? "Sus Datos" : "Your Details"}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                              {c ? c.form.fields.fullName : "Full name"} <span className="text-red-500">*</span>
                            </label>
                            <input required type="text" className={inputClass} placeholder={isAr ? "الاسم الكامل" : isJa ? "お名前" : isDe ? "Ihr vollständiger Name" : isEs ? "Su nombre completo" : "Your full name"} value={formData.name} onChange={e => updateData({ name: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                              {c ? c.form.fields.company : "Company or organization"} <span className="text-red-500">*</span>
                            </label>
                            <input required type="text" className={inputClass} placeholder={isAr ? "الشركة أو المنظمة" : isJa ? "貴社名・組織名" : isDe ? "Ihr Unternehmen" : isEs ? "Su empresa u organización" : "Your company"} value={formData.company} onChange={e => updateData({ company: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                              {c ? c.form.fields.jobTitle : "Job title"}
                            </label>
                            <input type="text" className={inputClass} placeholder={isAr ? "المسمى الوظيفي" : isJa ? "お役職・専門分野" : isDe ? "Ihre Position / Funktion" : isEs ? "Su puesto o especialidad" : "Your role"} value={formData.jobTitle} onChange={e => updateData({ jobTitle: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                              {c ? c.form.fields.country : "Country"}
                            </label>
                            <input type="text" className={inputClass} value={formData.country} onChange={e => updateData({ country: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                              {c ? c.form.fields.email : "Email address"} <span className="text-red-500">*</span>
                            </label>
                            <input required type="email" className={inputClass} placeholder="you@company.com" value={formData.email} onChange={e => updateData({ email: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                              {c ? c.form.fields.phone : "Telephone number"} <span className="text-red-500">*</span>
                            </label>
                            <input required type="tel" className={inputClass} placeholder="+94 77 000 0000" value={formData.phone} onChange={e => updateData({ phone: e.target.value })} />
                          </div>
                        </div>
                      </div>

                      {/* Enquiry Details */}
                      <div>
                        <h4 className="text-lg font-black text-[#17135B] dark:text-white mb-1 pb-4 border-b border-slate-200 dark:border-slate-700/60">
                          {isAr ? "تفاصيل الاستفسار" : isJa ? "お問い合わせ内容" : isDe ? "Details zur Anfrage" : isEs ? "Detalles de la Consulta" : "Enquiry Details"}
                        </h4>
                        <div className="space-y-5 mt-6">
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                              {c ? c.form.fields.queryType : "Type of enquiry"} <span className="text-red-500">*</span>
                            </label>
                            <select required className={inputClass + " appearance-none cursor-pointer"} value={formData.enquiryType} onChange={e => updateData({ enquiryType: e.target.value })}>
                              <option value="">{isAr ? "اختر نوع الاستفسار" : isJa ? "選択してください" : isDe ? "Bitte auswählen" : isEs ? "Seleccione una opción" : "Select an option"}</option>
                              {enquiryTypes.map((type, idx) => (
                                <option key={idx} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                              {c ? c.form.fields.subject : "Subject"} <span className="text-red-500">*</span>
                            </label>
                            <input required type="text" className={inputClass} placeholder={isAr ? "موضوع الاستفسار بإيجاز" : isJa ? "お問い合わせの件名" : isDe ? "Kurzer Betreff Ihrer Anfrage" : isEs ? "Breve asunto de su consulta" : "Brief subject of your enquiry"} value={formData.subject} onChange={e => updateData({ subject: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                              {c ? c.form.fields.message : "Your message"} <span className="text-red-500">*</span>
                            </label>
                            <textarea
                              required
                              rows={6}
                              className={inputClass + " resize-none"}
                              placeholder={c ? c.form.fields.messagePlaceholder : "Briefly explain what is happening, what you need or what you would like to discuss."}
                              value={formData.message} onChange={e => updateData({ message: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Supporting Files */}
                      <div>
                        <h4 className="text-lg font-black text-[#17135B] dark:text-white mb-1 pb-4 border-b border-slate-200 dark:border-slate-700/60">
                          {c ? c.form.fields.files : "Supporting Files"}
                        </h4>
                        <div className="mt-6">
                          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                            {isAr ? "يمكنك إرفاق الصور الفوتوغرافية، أو مقاطع الفيديو، أو الرسومات، أو تفاصيل المعدات، أو المستندات ذات الصلة." : isJa ? "写真、図面、機器の仕様書、その他の関連書類を添付してください。" : isDe ? "Fügen Sie Fotos, Zeichnungen, Gerätedaten oder sonstige Unterlagen bei." : isEs ? "Adjunte fotografías, planos, especificaciones de equipos u otros documentos relevantes." : "Attach photographs, videos, drawings, equipment details or other relevant documents."}
                          </p>
                          <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-8 text-center hover:border-[#C59B27] dark:hover:border-[#E8B84B]/50 transition-colors cursor-pointer bg-slate-50 dark:bg-[#050B14]" onClick={() => fileInputRef.current?.click()}>
                            <input
                              type="file"
                              ref={fileInputRef}
                              className="hidden"
                              multiple
                              accept=".jpg,.jpeg,.png,.pdf,.docx,.xlsx,.mp4"
                              onChange={(e) => {
                                if (e.target.files) {
                                  updateData({ supportingFiles: Array.from(e.target.files) });
                                }
                              }}
                            />
                            <Upload className="w-8 h-8 text-slate-400 dark:text-slate-500 mx-auto mb-3" />
                            <p className="text-[#17135B] dark:text-white font-bold mb-1">
                              {formData.supportingFiles && formData.supportingFiles.length > 0
                                ? (isAr ? `${formData.supportingFiles.length} ملف(ات) محددة` : isJa ? `${formData.supportingFiles.length} 件のファイルを選択済み` : isDe ? `${formData.supportingFiles.length} Datei(en) ausgewählt` : isEs ? `${formData.supportingFiles.length} archivo(s) seleccionado(s)` : `${formData.supportingFiles.length} File(s) Selected`)
                                : (isAr ? "انقر لإضافة ملفات" : isJa ? "クリックしてファイルを追加" : isDe ? "Hier klicken, um Dateien hinzuzufügen" : isEs ? "Haga clic para agregar archivos" : "Click to Add Files")}
                            </p>
                            <p className="text-slate-500 text-xs">
                              {isAr ? "الحد الأقصى لحجم الملف: 20 ميجابايت" : isJa ? "最大ファイルサイズ: 20MB" : isDe ? "Maximale Dateigröße: 20 MB" : isEs ? "Tamaño máximo de archivo: 20 MB" : "Maximum file size: 20MB"}
                            </p>
                          </div>
                          <div className="flex items-start mt-4 bg-slate-50 dark:bg-[#050B14] p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                            <Info className="w-4 h-4 text-[#C59B27] dark:text-[#E8B84B] shrink-0 mt-0.5 mr-2" />
                            <p className="text-slate-600 dark:text-slate-400 text-xs">
                              {c ? c.form.fields.fileNote : "Please do not upload passwords, login details or documents you are not authorized to share."}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Preferences */}
                      <div>
                        <h4 className="text-lg font-black text-[#17135B] dark:text-white mb-1 pb-4 border-b border-slate-200 dark:border-slate-700/60">
                          {isAr ? "تفضيلات الاتصال" : isJa ? "ご希望の連絡方法" : isDe ? "Präferenzen" : isEs ? "Preferencias" : "Preferences"}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                          <div>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                              {c ? c.form.fields.preferredMethod : "Preferred Response Method"}
                            </p>
                            <div className="space-y-3">
                              {responseMethods.map((opt, idx) => (
                                <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                                  <input type="radio" name="responseMethod" className="w-4 h-4 accent-[#C59B27] dark:accent-[#E8B84B]" value={opt.value} checked={formData.preferredResponseMethod === opt.value} onChange={e => updateData({ preferredResponseMethod: e.target.value })} />
                                  <span className="text-slate-600 dark:text-slate-300 text-sm group-hover:text-[#17135B] dark:group-hover:text-white transition-colors">{opt.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                              {c ? c.form.fields.preferredTime : "Preferred Contact Time"}
                            </p>
                            <div className="space-y-3">
                              {contactTimes.map((opt, idx) => (
                                <label key={idx} className="flex items-center space-x-3 cursor-pointer group">
                                  <input type="radio" name="contactTime" className="w-4 h-4 accent-[#C59B27] dark:accent-[#E8B84B]" value={opt.value} checked={formData.preferredContactTime === opt.value} onChange={e => updateData({ preferredContactTime: e.target.value })} />
                                  <span className="text-slate-600 dark:text-slate-300 text-sm group-hover:text-[#17135B] dark:group-hover:text-white transition-colors">{opt.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Consent */}
                      <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800/60">
                        <label className="flex items-start space-x-3 cursor-pointer group">
                          <input required type="checkbox" className="w-4 h-4 mt-0.5 accent-[#C59B27] dark:accent-[#E8B84B] shrink-0" checked={formData.consentAccurate} onChange={e => updateData({ consentAccurate: e.target.checked })} />
                          <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">
                            {c ? c.form.fields.consent : "I confirm that the information submitted is accurate to the best of my knowledge and that I am authorized to share any attached material."}
                          </span>
                        </label>
                        <label className="flex items-start space-x-3 cursor-pointer group">
                          <input required type="checkbox" className="w-4 h-4 mt-0.5 accent-[#C59B27] dark:accent-[#E8B84B] shrink-0" checked={formData.consentNoObligation} onChange={e => updateData({ consentNoObligation: e.target.checked })} />
                          <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">
                            {isAr ? "أدرك أن تقديم هذا الاستفسار لا ينشئ التزاماً تعاقدياً. قد تطلب شركة سانوتا معلومات إضافية أو تقييماً قبل التوصية بحل." : isJa ? "この問い合わせを送信しても契約上の義務が発生しないことを理解します。サノタは、推奨事項を提示する前に追加情報を要求する場合があります。" : isDe ? "Ich verstehe, dass das Absenden dieser Anfrage keine vertragliche Verpflichtung begründet. Sanota kann weitere Informationen anfordern, bevor eine Empfehlung ausgesprochen wird." : isEs ? "Entiendo que el envío de esta consulta no crea una obligación contractual. Sanota puede solicitar información adicional antes de recomendar una solución." : "I understand that submitting this enquiry does not create a contractual obligation. Sanota may request further information before recommending a solution."}
                          </span>
                        </label>
                      </div>

                      {formStatus === 'error' && (
                        <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-4 mt-4">
                          <p className="text-red-500 dark:text-red-400 text-sm">{connectionError}</p>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
                        <button
                          disabled={formStatus === 'submitting'}
                          type="submit"
                          className="w-full sm:w-auto px-10 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-black rounded-xl transition-all duration-300 flex items-center justify-center disabled:opacity-60 shadow-lg shadow-[#E8B84B]/20 hover:shadow-[#E8B84B]/40 hover:-translate-y-0.5 group"
                        >
                          {formStatus === 'submitting'
                            ? (isAr ? 'جارٍ الإرسال…' : isJa ? '送信中…' : isDe ? 'Wird gesendet…' : isEs ? 'Enviando…' : 'Submitting…')
                            : (c ? c.form.fields.submitButton : 'Submit Enquiry')}
                          {formStatus !== 'submitting' && <Send className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />}
                        </button>
                        <button type="reset" onClick={() => {
                          setFormData({ name: "", company: "", jobTitle: "", country: "Sri Lanka", email: "", phone: "", enquiryType: "", subject: "", message: "", consentAccurate: false, consentNoObligation: false });
                          setFormStatus('idle');
                        }} className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-transparent dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#17135B] dark:hover:text-white font-bold rounded-xl transition-colors">
                          {c ? c.form.fields.clearButton : "Clear Form"}
                        </button>
                        <Link href="/privacy" className="sm:ml-auto text-sm text-[#C59B27] dark:text-[#E8B84B]/70 hover:underline transition-colors font-medium">
                          {c ? c.form.fields.privacyLink : "View Privacy Notice"}
                        </Link>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* Sidebar */}
              <div className="space-y-6 lg:space-y-8 lg:pl-4">

                {/* Request a Call */}
                <div id="request-call" className="bg-white dark:bg-gradient-to-b dark:from-[#0A101A] dark:to-[#050B14] border-t-2 border-[#C59B27] dark:border-[#E8B84B]/40 border-l border-r border-b border-slate-200 dark:border-slate-800/80 rounded-2xl p-7 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8B84B]/10 rounded-full blur-[40px] pointer-events-none" />

                  <h3 className="text-xl font-black text-[#17135B] dark:text-white mb-2 relative z-10 flex items-center">
                    <Phone className="w-5 h-5 text-[#C59B27] dark:text-[#E8B84B] mr-2" />
                    {c ? c.requestCall.heading : "Request a Call Back"}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed relative z-10 border-b border-slate-200 dark:border-slate-800/50 pb-5">
                    {c ? c.requestCall.subheading : "Provide your details and a representative will contact you to discuss your requirement."}
                  </p>

                  {callStatus === 'success' ? (
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6 text-center shadow-sm">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                      <p className="text-[#17135B] dark:text-white font-bold mb-1">
                        {isAr ? "تم استلام طلبك بنجاح" : isJa ? "リクエストを受領しました" : isDe ? "Anfrage eingegangen" : isEs ? "Solicitud Recibida" : "Request Received"}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                        {isAr ? "سيتصل بك أحد ممثلينا قريباً." : isJa ? "担当者よりまもなくご連絡いたします。" : isDe ? "Wir werden uns in Kürze mit Ihnen in Verbindung setzen." : isEs ? "Nos comunicaremos con usted a la brevedad." : "We will contact you shortly."}
                      </p>
                      <p className="text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold tracking-wider">Ref: {callRef}</p>
                    </div>
                  ) : (
                    <form className="space-y-3.5 relative z-10" onSubmit={handleCallSubmit}>
                      <input required type="text" placeholder={isAr ? "الاسم الكامل" : isJa ? "お名前" : isDe ? "Vollständiger Name" : isEs ? "Nombre completo" : "Full name"} className="w-full bg-slate-50 dark:bg-[#131C2E]/50 border border-slate-300 dark:border-slate-700/60 rounded-xl px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#C59B27] dark:focus:border-[#E8B84B]/50 transition-colors text-sm" value={callData.name} onChange={e => updateCallData({ name: e.target.value })} />
                      <input required type="text" placeholder={isAr ? "الشركة" : isJa ? "貴社名" : isDe ? "Unternehmen" : isEs ? "Empresa" : "Company"} className="w-full bg-slate-50 dark:bg-[#131C2E]/50 border border-slate-300 dark:border-slate-700/60 rounded-xl px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#C59B27] dark:focus:border-[#E8B84B]/50 transition-colors text-sm" value={callData.company} onChange={e => updateCallData({ company: e.target.value })} />
                      <div className="grid grid-cols-2 gap-3">
                        <input required type="tel" placeholder={isAr ? "رقم الهاتف" : isJa ? "電話番号" : isDe ? "Telefonnummer" : isEs ? "Teléfono" : "Phone"} className="w-full bg-slate-50 dark:bg-[#131C2E]/50 border border-slate-300 dark:border-slate-700/60 rounded-xl px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#C59B27] dark:focus:border-[#E8B84B]/50 transition-colors text-sm" value={callData.phone} onChange={e => updateCallData({ phone: e.target.value })} />
                        <input required type="email" placeholder={isAr ? "البريد الإلكتروني" : isJa ? "メールアドレス" : isDe ? "E-Mail" : isEs ? "Correo" : "Email"} className="w-full bg-slate-50 dark:bg-[#131C2E]/50 border border-slate-300 dark:border-slate-700/60 rounded-xl px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#C59B27] dark:focus:border-[#E8B84B]/50 transition-colors text-sm" value={callData.email} onChange={e => updateCallData({ email: e.target.value })} />
                      </div>
                      <select required className="w-full bg-slate-50 dark:bg-[#131C2E]/50 border border-slate-300 dark:border-slate-700/60 rounded-xl px-4 py-3 text-[#17135B] dark:text-white focus:outline-none focus:border-[#C59B27] dark:focus:border-[#E8B84B]/50 transition-colors text-sm appearance-none cursor-pointer" value={callData.preferredContactTime} onChange={e => updateCallData({ preferredContactTime: e.target.value })}>
                        <option value="" className="text-slate-400 dark:text-slate-500">
                          {isAr ? "الوقت المفضل للاتصال" : isJa ? "希望する連絡時間帯" : isDe ? "Bevorzugte Kontaktzeit" : isEs ? "Horario de contacto preferido" : "Preferred contact time"}
                        </option>
                        <option value="Morning (8:30 AM - 12:00 PM)">{isAr ? "صباحاً (8:30 – 12:00)" : isJa ? "午前 (8:30 – 12:00)" : isDe ? "Vormittags (8:30 – 12:00 Uhr)" : isEs ? "Mañana (8:30 AM - 12:00 PM)" : "Morning (8:30 AM - 12:00 PM)"}</option>
                        <option value="Afternoon (12:00 PM - 5:30 PM)">{isAr ? "بعد الظهر (12:00 – 17:30)" : isJa ? "午後 (12:00 – 17:30)" : isDe ? "Nachmittags (12:00 – 17:30 Uhr)" : isEs ? "Tarde (12:00 PM - 5:30 PM)" : "Afternoon (12:00 PM - 5:30 PM)"}</option>
                        <option value="Any time during business hours">{isAr ? "في أي وقت خلال ساعات العمل" : isJa ? "営業時間内であればいつでも" : isDe ? "Jederzeit während der Geschäftszeiten" : isEs ? "Cualquier momento en horario laboral" : "Any time during business hours"}</option>
                      </select>
                      <input type="text" placeholder={isAr ? "سبب موجز للاتصال" : isJa ? "ご用件の簡単な概要" : isDe ? "Kurzer Grund des Anrufs" : isEs ? "Breve motivo de la llamada" : "Brief reason for the call"} className="w-full bg-slate-50 dark:bg-[#131C2E]/50 border border-slate-300 dark:border-slate-700/60 rounded-xl px-4 py-3 text-[#17135B] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#C59B27] dark:focus:border-[#E8B84B]/50 transition-colors text-sm" value={callData.reason} onChange={e => updateCallData({ reason: e.target.value })} />

                      {callStatus === 'error' && (
                        <p className="text-red-500 dark:text-red-400 text-xs mt-2 bg-red-100 dark:bg-red-950/30 p-2 rounded-lg">{callError}</p>
                      )}

                      <button disabled={callStatus === 'submitting'} type="submit" className="w-full py-3.5 bg-gradient-to-r from-[#C59B27] dark:from-[#E8B84B] to-amber-500 text-white dark:text-[#0A101A] font-black rounded-xl transition-all duration-300 text-sm shadow-[0_0_15px_rgba(232,184,75,0.2)] hover:shadow-[0_0_25px_rgba(232,184,75,0.4)] mt-4 disabled:opacity-60 flex items-center justify-center group">
                        {callStatus === 'submitting'
                          ? (isAr ? 'جارٍ الإرسال...' : isJa ? '送信中...' : isDe ? 'Wird gesendet...' : isEs ? 'Enviando...' : 'Submitting...')
                          : (c ? c.requestCall.button : 'Request Call Back')}
                        {callStatus !== 'submitting' && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                      </button>
                    </form>
                  )}
                </div>

                {/* What Happens Next */}
                <div className="bg-white dark:bg-[#050B14]/80 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-2xl p-7 shadow-lg">
                  <h3 className="text-lg font-black text-[#17135B] dark:text-white mb-1">
                    {c ? c.whatHappensNext.heading : "What Happens Next?"}
                  </h3>
                  <p className="text-slate-500 text-xs mb-6 uppercase tracking-widest font-bold">
                    {isAr ? "مسار واضح من الاستفسار إلى التنفيذ" : isJa ? "明確な実行ステップ" : isDe ? "Ein klarer Weg zum Handeln" : isEs ? "Una ruta de acción clara" : "A clear route to action"}
                  </p>
                  <div className="relative">
                    {/* Animated vertical line */}
                    <div className="absolute left-[15px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <motion.div
                        className="w-full h-[40%] bg-gradient-to-b from-transparent via-[#C59B27] dark:via-[#E8B84B] to-transparent"
                        animate={{ y: ['-100%', '350%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    <div className="space-y-6 relative z-10">
                      {currentWhatHappensNext.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-4 group">
                          <motion.div
                            animate={{
                              borderColor: ['#94a3b8', '#C59B27', '#94a3b8', '#94a3b8'],
                              boxShadow: ['0 0 0 rgba(232,184,75,0)', '0 0 15px rgba(232,184,75,0.6)', '0 0 0 rgba(232,184,75,0)', '0 0 0 rgba(232,184,75,0)']
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: idx * 0.75,
                              times: [0, 0.1, 0.3, 1]
                            }}
                            className="w-8 h-8 rounded-full bg-slate-50 dark:bg-[#0A101A] border border-slate-300 dark:border-slate-600 flex items-center justify-center shrink-0 shadow-sm"
                          >
                            <motion.span
                              animate={{ color: ['#64748b', '#C59B27', '#64748b', '#64748b'] }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: idx * 0.75,
                                times: [0, 0.1, 0.3, 1]
                              }}
                              className="text-slate-600 dark:text-slate-400 text-xs font-black"
                            >
                              {step.step}
                            </motion.span>
                          </motion.div>
                          <div className="pt-1.5">
                            <h4 className="text-[#17135B] dark:text-slate-200 font-bold text-sm mb-1">{step.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visit Sanota */}
                <div className="bg-white dark:bg-[#050B14]/80 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-2xl p-7 shadow-lg">
                  <h3 className="text-lg font-black text-[#17135B] dark:text-white mb-5 flex items-center">
                    <MapPin className="w-5 h-5 text-[#C59B27] dark:text-slate-400 mr-2" />
                    {isAr ? "زيارة سانوتا" : isJa ? "サノタへのアクセス" : isDe ? "Sanota besuchen" : isEs ? "Visitar Sanota" : "Visit Sanota"}
                  </h3>
                  <div className="bg-slate-100 dark:bg-[#131C2E] h-40 rounded-xl border border-slate-200 dark:border-slate-700/60 mb-5 overflow-hidden relative group">
                    <iframe
                      src="https://maps.google.com/maps?q=No%2016,%20Wewelwala%20Road,%20Bataganwila,%20Galle&t=&z=14&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    ></iframe>
                  </div>
                  <p className="text-[#17135B] dark:text-slate-300 text-sm mb-1 font-semibold tracking-wide">Sanota (Pvt) Ltd</p>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mb-5">No 16, Wewelwala Road,<br />Bataganwila, Galle.</p>

                  <div className="space-y-3">
                    <a href="https://maps.google.com/?q=Sanota+Pvt+Ltd+Galle" target="_blank" rel="noreferrer" className="w-full py-3 bg-slate-100 hover:bg-slate-200 dark:bg-[#131C2E] dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[#17135B] dark:text-white font-bold rounded-xl transition-colors text-xs flex items-center justify-center shadow-sm">
                      {isAr ? "فتح في خرائط Google" : isJa ? "Googleマップで開く" : isDe ? "In Google Maps öffnen" : isEs ? "Abrir en Google Maps" : "Open in Google Maps"}
                    </a>
                    <p className="text-slate-500 text-[10px] uppercase tracking-wider text-center mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                      {isAr ? "يرجى ترتيب الزيارات مسبقاً" : isJa ? "ご来訪は事前にご予約ください" : isDe ? "Besuche sollten im Voraus vereinbart werden" : isEs ? "Las visitas deben coordinarse con antelación" : "Visits should be arranged in advance"}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Social / Connect ── */}
        <section className="py-8 lg:py-12 bg-transparent border-b border-slate-200 dark:border-slate-800/60 relative z-10 overflow-hidden">

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <p className="text-xs font-black text-[#C59B27] dark:text-[#E8B84B] uppercase tracking-[0.3em] mb-4">
              {isAr ? "تواصل مع سانوتا" : isJa ? "サノタとつながる" : isDe ? "Mit Sanota verbinden" : isEs ? "Conéctese con Sanota" : "Connect With Sanota"}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#17135B] dark:text-white mb-5 tracking-tight">
              {isAr ? "تابع أعمالنا وآخر التطورات" : isJa ? "活動・最新情報をフォロー" : isDe ? "Verfolgen Sie unsere Arbeit" : isEs ? "Siga Nuestro Trabajo" : "Follow Our Work"}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              {isAr ? "تابعونا للاطلاع على قصص المشاريع، وتطوير المنتجات، ومقاطع الفيديو الهندسية، وأخبار الشركة." : isJa ? "プロジェクトストーリー、製品開発、エンジニアリング動画、企業ニュースの最新情報をお届けします。" : isDe ? "Bleiben Sie auf dem Laufenden über Projektberichte, Technologie-Entwicklungen, Engineering-Videos und Unternehmensneuigkeiten." : isEs ? "Manténgase al día sobre proyectos, desarrollos tecnológicos, videos de ingeniería y novedades corporativas." : "Stay connected for project stories, product developments, engineering videos and company news."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
              {[
                { name: 'LinkedIn', icon: LinkedinIcon, link: 'https://www.linkedin.com/company/sanotalk/?originalSubdomain=lk', hoverClass: 'hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]', iconColor: 'text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300', glowColor: 'bg-blue-500' },
                { name: 'Instagram', icon: InstagramIcon, link: 'https://www.instagram.com/sanota_lk/', hoverClass: 'hover:border-pink-500/50 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]', iconColor: 'text-pink-600 dark:text-pink-500 group-hover:text-pink-700 dark:group-hover:text-pink-400', glowColor: 'bg-pink-500' },
                { name: 'Facebook', icon: FacebookIcon, link: 'https://web.facebook.com/SanotaPrivateLimited/?_rdc=1&_rdr#', hoverClass: 'hover:border-blue-600/50 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]', iconColor: 'text-blue-600 dark:text-blue-500 group-hover:text-blue-700 dark:group-hover:text-blue-400', glowColor: 'bg-blue-600' }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.link}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className={`bg-white dark:bg-[#050B14]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-3xl px-6 py-7 flex flex-col items-center justify-center transition-colors duration-300 group relative overflow-hidden shadow-md dark:shadow-none ${social.hoverClass}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Dynamic hover glow behind icon */}
                    <div className={`absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 ${social.glowColor} rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                    <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#131C2E] border border-slate-200 dark:border-slate-700/50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-md relative z-10">
                      <Icon className={`w-6 h-6 transition-colors duration-300 ${social.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-[#17135B] dark:text-white relative z-10">{social.name}</h3>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/media" className="inline-flex items-center px-8 py-4 bg-white dark:bg-[#0A101A] hover:bg-slate-50 dark:hover:bg-[#131C2E] border border-slate-200 dark:border-slate-700 hover:border-[#C59B27] dark:hover:border-[#E8B84B]/40 text-[#17135B] dark:text-white font-black rounded-2xl transition-all duration-500 group shadow-lg hover:shadow-[0_0_30px_rgba(232,184,75,0.15)]">
                <span className="text-[#C59B27] dark:text-[#E8B84B] mr-3 group-hover:text-amber-500 transition-colors">
                  {isAr ? "زيارة المركز الإعلامي" : isJa ? "メディアセンターを見る" : isDe ? "Mediathek besuchen" : isEs ? "Visitar el Centro de Medios" : "Visit the Media Centre"}
                </span>
                <ArrowRight className="w-4 h-4 text-[#17135B] dark:text-white group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-10 lg:py-14 bg-transparent relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white dark:bg-[#131C2E]/20 backdrop-blur-sm border border-slate-200 dark:border-slate-800/40 rounded-3xl p-10 md:p-14 shadow-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#17135B] dark:text-white mb-4 tracking-tight">
              {isAr ? (
                <>ابدأ <span className="text-[#C59B27] dark:text-[#E8B84B]">بالمتطلبات</span></>
              ) : isJa ? (
                <>まずは<span className="text-[#C59B27] dark:text-[#E8B84B]">ご要件のご相談</span>から</>
              ) : isDe ? (
                <>Starten Sie mit der <span className="text-[#C59B27] dark:text-[#E8B84B]">Anforderung</span></>
              ) : isEs ? (
                <>Comience con el <span className="text-[#C59B27] dark:text-[#E8B84B]">Requisito</span></>
              ) : (
                <>Start With the <span className="text-[#C59B27] dark:text-[#E8B84B]">Requirement</span></>
              )}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mb-10 leading-relaxed max-w-2xl mx-auto">
              {isAr ? "سواء كنت بحاجة إلى حل مشكلة في الآلات، أو أتمتة عملية ما، أو تطوير نظام جديد، أو ترتيب الدعم الفني المستمر — فإن شركة سانوتا مستعدة لفهم متطلباتك." : isJa ? "機械のトラブル解決、プロセスの自動化、新しいシステムの開発、または継続的な技術サポートの手配など、どのようなご要望でもサノタはお伺いする準備ができています。" : isDe ? "Ganz gleich, ob Sie ein Maschinenproblem lösen, einen Prozess automatisieren, ein neues System entwickeln oder kontinuierlichen technischen Support vereinbaren möchten — Sanota ist bereit, Ihre Anforderungen zu verstehen." : isEs ? "Ya sea que necesite resolver un problema de maquinaria, automatizar un proceso, desarrollar un nuevo sistema o coordinar soporte técnico continuo — Sanota está lista para comprender sus necesidades." : "Whether you need to solve a machinery problem, automate a process, develop a new system or arrange ongoing technical support — Sanota is ready to understand your requirement."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <Link href="/tell-us-your-challenge" className="w-full sm:w-auto px-8 py-4 bg-[#E8B84B] hover:bg-[#d4a643] text-[#0B1220] font-black rounded-xl transition-all duration-300 flex items-center justify-center shadow-[0_0_20px_rgba(232,184,75,0.15)] hover:shadow-[0_0_30px_rgba(232,184,75,0.3)] hover:-translate-y-0.5 group text-sm">
                {isAr ? "أخبرنا عن التحدي الذي تواجهه" : isJa ? "課題・ご相談をお聞かせください" : isDe ? "Schildern Sie uns Ihre Herausforderung" : isEs ? "Cuéntanos tu desafío" : "Tell Us Your Challenge"} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <a href="#contact-form" className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-[#050B14] dark:hover:bg-[#0A101A] text-[#17135B] dark:text-slate-300 dark:hover:text-white font-black rounded-xl border border-slate-300 dark:border-slate-700/60 hover:border-slate-400 dark:hover:border-slate-500/60 transition-all duration-300 flex items-center justify-center shadow-sm text-sm">
                {isAr ? "اتصل بسانوتا" : isJa ? "Sanotaへ問い合わせる" : isDe ? "Kontakt zu Sanota" : isEs ? "Contactar con Sanota" : "Contact Sanota"}
              </a>
            </div>
            <p className="text-slate-500 dark:text-slate-600 text-xs italic tracking-wide">
              {isAr ? "من التحديات التشغيلية إلى الحلول الهندسية المتكاملة." : isJa ? "運用上の課題から、統合されたエンジニアリングソリューションへ。" : isDe ? "Von der betrieblichen Herausforderung zur integrierten Engineering-Lösung." : isEs ? "Desde el desafío operativo hasta la solución de ingeniería integrada." : "From operational challenge to integrated engineering solution."}
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
