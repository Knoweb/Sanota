export type LanguageCode = "en" | "es" | "ja" | "de" | "ar";

export interface NavTranslations {
  home: string;
  about: string;
  services: string;
  industries: string;
  products: string;
  insights: string;
  media: string;
  contact: string;
  tellUsYourChallenge: string;
  switchTheme: string;
  selectLanguage: string;
}

export interface Translations {
  nav: NavTranslations;
  common: {
    readMore: string;
    exploreMore: string;
    viewAll: string;
    contactUs: string;
    learnMore: string;
  };
}

export const translations: Record<LanguageCode, Translations> = {
  en: {
    nav: {
      home: "Home",
      industries: "Industries",
      services: "Services",
      products: "Products & Systems",
      media: "Media",
      about: "About",
      contact: "Contact",
      tellUsYourChallenge: "Tell Us Your Challenge",
      switchTheme: "Switch Theme",
      selectLanguage: "Language",
      insights: "Insights",
    },
    common: {
      readMore: "Read More",
      exploreMore: "Explore More",
      viewAll: "View All",
      contactUs: "Contact Us",
      learnMore: "Learn More",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      industries: "Industrias",
      services: "Servicios",
      products: "Productos y Sistemas",
      media: "Medios",
      about: "Nosotros",
      contact: "Contacto",
      tellUsYourChallenge: "Cuéntanos Tu Desafío",
      switchTheme: "Cambiar Tema",
      selectLanguage: "Idioma",
      insights: "Perspectivas",
    },
    common: {
      readMore: "Leer Más",
      exploreMore: "Explorar Más",
      viewAll: "Ver Todo",
      contactUs: "Contáctenos",
      learnMore: "Más Información",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      industries: "産業分野",
      services: "サービス",
      products: "製品・システム",
      media: "メディア",
      about: "会社概要",
      contact: "お問い合わせ",
      tellUsYourChallenge: "課題について相談する",
      switchTheme: "テーマ切替",
      selectLanguage: "言語",
      insights: "インサイト",
    },
    common: {
      readMore: "続きを読む",
      exploreMore: "詳しく見る",
      viewAll: "すべて見る",
      contactUs: "お問い合わせ",
      learnMore: "詳細を見る",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      industries: "Branchen",
      services: "Dienstleistungen",
      products: "Produkte & Systeme",
      media: "Medien",
      about: "Über Uns",
      contact: "Kontakt",
      tellUsYourChallenge: "Schildern Sie Ihre Herausforderung",
      switchTheme: "Design Wechseln",
      selectLanguage: "Sprache",
      insights: "Einblicke",
    },
    common: {
      readMore: "Mehr Lesen",
      exploreMore: "Mehr Erfahren",
      viewAll: "Alle Anzeigen",
      contactUs: "Kontaktieren Sie Uns",
      learnMore: "Details Ansehen",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      industries: "الصناعات",
      services: "الخدمات",
      products: "المنتجات والأنظمة",
      media: "الإعلام",
      about: "من نحن",
      contact: "اتصل بنا",
      tellUsYourChallenge: "أخبرنا عن تحديك",
      switchTheme: "تبديل المظهر",
      selectLanguage: "اللغة",
      insights: "الرؤى والتحليلات",
    },
    common: {
      readMore: "اقرأ المزيد",
      exploreMore: "استكشف المزيد",
      viewAll: "عرض الكل",
      contactUs: "اتصل بنا",
      learnMore: "تعرّف على المزيد",
    },
  },
};
