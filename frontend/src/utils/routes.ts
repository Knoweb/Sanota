import { LanguageCode } from "@/context/LanguageContext";

export type PageKey =
  | "home"
  | "industries"
  | "services"
  | "products"
  | "media"
  | "about"
  | "contact"
  | "challenge"
  | "insights";

export const ROUTE_MAP: Record<LanguageCode, Record<PageKey, string>> = {
  en: {
    home: "/",
    industries: "/industries",
    services: "/services",
    products: "/products",
    media: "/media",
    about: "/about",
    contact: "/contact",
    challenge: "/tell-us-your-challenge",
    insights: "/insights",
  },
  es: {
    home: "/inicio",
    industries: "/industrias",
    services: "/servicios",
    products: "/productos",
    media: "/medios",
    about: "/nosotros",
    contact: "/contacto",
    challenge: "/cuentanos-tu-desafio",
    insights: "/perspectivas",
  },
  de: {
    home: "/startseite",
    industries: "/branchen",
    services: "/dienstleistungen",
    products: "/produkte",
    media: "/medien",
    about: "/ueber-uns",
    contact: "/kontakt",
    challenge: "/ihre-herausforderung",
    insights: "/einblicke",
  },
  ja: {
    home: "/ホーム",
    industries: "/産業",
    services: "/サービス",
    products: "/製品",
    media: "/メディア",
    about: "/会社概要",
    contact: "/お問い合わせ",
    challenge: "/課題について相談する",
    insights: "/インサイト",
  },
  ar: {
    home: "/الرئيسية",
    industries: "/الصناعات",
    services: "/الخدمات",
    products: "/المنتجات",
    media: "/الإعلام",
    about: "/من-نحن",
    contact: "/اتصل-بنا",
    challenge: "/أخبرنا-عن-تحديك",
    insights: "/الرؤى",
  },
};

function safeDecode(str: string): string {
  try {
    return decodeURIComponent(str);
  } catch {
    return str;
  }
}

// Aliases mapping for flexible path detection
const PATH_ALIASES: Record<string, PageKey> = {
  // Home
  "": "home",
  "/": "home",
  "/es": "home",
  "/de": "home",
  "/ja": "home",
  "/ar": "home",
  "/en": "home",
  "/inicio": "home",
  "/startseite": "home",
  "/ホーム": "home",
  "/الرئيسية": "home",

  // Industries
  "/industries": "industries",
  "/industrias": "industries",
  "/es/industrias": "industries",
  "/es/industries": "industries",
  "/branchen": "industries",
  "/industrien": "industries",
  "/de/branchen": "industries",
  "/de/industrien": "industries",
  "/de/industries": "industries",
  "/産業": "industries",
  "/産業分野": "industries",
  "/ja/産業": "industries",
  "/ja/産業分野": "industries",
  "/ja/industries": "industries",
  "/الصناعات": "industries",
  "/صناعات": "industries",
  "/ar/الصناعات": "industries",
  "/ar/industries": "industries",
  "/en/industries": "industries",

  // Services
  "/services": "services",
  "/servicios": "services",
  "/es/servicios": "services",
  "/es/services": "services",
  "/dienstleistungen": "services",
  "/de/dienstleistungen": "services",
  "/de/services": "services",
  "/サービス": "services",
  "/ja/サービス": "services",
  "/ja/services": "services",
  "/الخدمات": "services",
  "/خدمات": "services",
  "/ar/الخدمات": "services",
  "/ar/services": "services",
  "/en/services": "services",

  // Products
  "/products": "products",
  "/productos": "products",
  "/es/productos": "products",
  "/es/products": "products",
  "/produkte": "products",
  "/de/produkte": "products",
  "/de/products": "products",
  "/製品": "products",
  "/製品・システム": "products",
  "/製品とシステム": "products",
  "/ja/製品": "products",
  "/ja/製品・システム": "products",
  "/ja/製品とシステム": "products",
  "/ja/products": "products",
  "/المنتجات": "products",
  "/المنتجات-والأنظمة": "products",
  "/ar/المنتجات": "products",
  "/ar/المنتجات-والأنظمة": "products",
  "/ar/products": "products",
  "/en/products": "products",

  // Media
  "/media": "media",
  "/medios": "media",
  "/es/medios": "media",
  "/es/media": "media",
  "/medien": "media",
  "/de/medien": "media",
  "/de/media": "media",
  "/メディア": "media",
  "/ja/メディア": "media",
  "/ja/media": "media",
  "/الإعلام": "media",
  "/الاعلام": "media",
  "/الوسائط": "media",
  "/ar/الإعلام": "media",
  "/ar/الاعلام": "media",
  "/ar/الوسائط": "media",
  "/ar/media": "media",
  "/en/media": "media",

  // About
  "/about": "about",
  "/nosotros": "about",
  "/sobre-nosotros": "about",
  "/es/nosotros": "about",
  "/es/sobre-nosotros": "about",
  "/es/about": "about",
  "/ueber-uns": "about",
  "/uber-uns": "about",
  "/de/ueber-uns": "about",
  "/de/uber-uns": "about",
  "/de/about": "about",
  "/会社概要": "about",
  "/私たちについて": "about",
  "/ja/会社概要": "about",
  "/ja/私たちについて": "about",
  "/ja/about": "about",
  "/من-نحن": "about",
  "/عن-سانوتا": "about",
  "/نبذة-عنا": "about",
  "/ar/من-نحن": "about",
  "/ar/عن-سانوتا": "about",
  "/ar/نبذة-عنا": "about",
  "/ar/about": "about",
  "/en/about": "about",

  // Contact
  "/contact": "contact",
  "/contacto": "contact",
  "/es/contacto": "contact",
  "/es/contact": "contact",
  "/kontakt": "contact",
  "/de/kontakt": "contact",
  "/de/contact": "contact",
  "/お問い合わせ": "contact",
  "/ja/お問い合わせ": "contact",
  "/ja/contact": "contact",
  "/اتصل-بنا": "contact",
  "/تواصل-معنا": "contact",
  "/ar/اتصل-بنا": "contact",
  "/ar/تواصل-معنا": "contact",
  "/ar/contact": "contact",
  "/en/contact": "contact",

  // Challenge
  "/tell-us-your-challenge": "challenge",
  "/cuentanos-tu-desafio": "challenge",
  "/es/cuentanos-tu-desafio": "challenge",
  "/es/tell-us-your-challenge": "challenge",
  "/ihre-herausforderung": "challenge",
  "/de/ihre-herausforderung": "challenge",
  "/de/tell-us-your-challenge": "challenge",
  "/課題について相談する": "challenge",
  "/課題": "challenge",
  "/ja/課題について相談する": "challenge",
  "/ja/課題": "challenge",
  "/ja/tell-us-your-challenge": "challenge",
  "/أخبرنا-عن-تحديك": "challenge",
  "/اخبرنا-عن-تحديك": "challenge",
  "/أخبرنا-عن-التحدي": "challenge",
  "/تحديك": "challenge",
  "/ar/أخبرنا-عن-تحديك": "challenge",
  "/ar/اخبرنا-عن-تحديك": "challenge",
  "/ar/أخبرنا-عن-التحدي": "challenge",
  "/ar/تحديك": "challenge",
  "/ar/tell-us-your-challenge": "challenge",
  "/en/tell-us-your-challenge": "challenge",

  // Insights
  "/insights": "insights",
  "/perspectivas": "insights",
  "/es/perspectivas": "insights",
  "/es/insights": "insights",
  "/einblicke": "insights",
  "/de/einblicke": "insights",
  "/de/insights": "insights",
  "/インサイト": "insights",
  "/ja/インサイト": "insights",
  "/ja/insights": "insights",
  "/الرؤى": "insights",
  "/الرؤى-والتحليلات": "insights",
  "/ar/الرؤى": "insights",
  "/ar/الرؤى-والتحليلات": "insights",
  "/ar/insights": "insights",
  "/en/insights": "insights",
};

// Explicit language mappings for paths without prefix
const PATH_LANG_MAP: Record<string, LanguageCode> = {
  // Spanish
  "/inicio": "es",
  "/industrias": "es",
  "/servicios": "es",
  "/productos": "es",
  "/medios": "es",
  "/nosotros": "es",
  "/sobre-nosotros": "es",
  "/contacto": "es",
  "/cuentanos-tu-desafio": "es",
  "/perspectivas": "es",

  // German
  "/startseite": "de",
  "/branchen": "de",
  "/industrien": "de",
  "/dienstleistungen": "de",
  "/produkte": "de",
  "/medien": "de",
  "/ueber-uns": "de",
  "/uber-uns": "de",
  "/kontakt": "de",
  "/ihre-herausforderung": "de",
  "/einblicke": "de",

  // Japanese
  "/ホーム": "ja",
  "/産業": "ja",
  "/産業分野": "ja",
  "/サービス": "ja",
  "/製品": "ja",
  "/製品・システム": "ja",
  "/製品とシステム": "ja",
  "/メディア": "ja",
  "/会社概要": "ja",
  "/私たちについて": "ja",
  "/お問い合わせ": "ja",
  "/課題について相談する": "ja",
  "/課題": "ja",
  "/インサイト": "ja",

  // Arabic
  "/الرئيسية": "ar",
  "/الصناعات": "ar",
  "/صناعات": "ar",
  "/الخدمات": "ar",
  "/خدمات": "ar",
  "/المنتجات": "ar",
  "/المنتجات-والأنظمة": "ar",
  "/الإعلام": "ar",
  "/الاعلام": "ar",
  "/الوسائط": "ar",
  "/من-نحن": "ar",
  "/عن-سانوتا": "ar",
  "/نبذة-عنا": "ar",
  "/اتصل-بنا": "ar",
  "/تواصل-معنا": "ar",
  "/أخبرنا-عن-تحديك": "ar",
  "/اخبرنا-عن-تحديك": "ar",
  "/أخبرنا-عن-التحدي": "ar",
  "/تحديك": "ar",
  "/الرؤى": "ar",
  "/الرؤى-والتحليلات": "ar",

  // English
  "/industries": "en",
  "/services": "en",
  "/products": "en",
  "/media": "en",
  "/about": "en",
  "/contact": "en",
  "/tell-us-your-challenge": "en",
  "/insights": "en",
};

/**
 * Detect language from current URL pathname
 */
export function detectLanguageFromPath(pathname: string): LanguageCode | null {
  if (!pathname) return null;
  const decoded = safeDecode(pathname);
  const clean = decoded.replace(/\/$/, "") || "/";

  // 1. Direct path match without prefix
  if (PATH_LANG_MAP[clean]) {
    return PATH_LANG_MAP[clean];
  }

  // 2. Fallback check for old prefixes if someone still visits with /es/, /ja/, etc.
  if (clean === "/es" || clean.startsWith("/es/")) return "es";
  if (clean === "/de" || clean.startsWith("/de/")) return "de";
  if (clean === "/ja" || clean.startsWith("/ja/")) return "ja";
  if (clean === "/ar" || clean.startsWith("/ar/")) return "ar";
  if (clean === "/en" || clean.startsWith("/en/")) return "en";

  return null;
}

/**
 * Identify the logical PageKey from any pathname
 */
export function identifyPageKey(pathname: string): PageKey | null {
  if (!pathname) return "home";
  const decoded = safeDecode(pathname);
  const clean = decoded.replace(/\/$/, "") || "/";
  if (PATH_ALIASES[clean]) {
    return PATH_ALIASES[clean];
  }
  return null;
}

/**
 * Get the target localized URL when switching languages from the current pathname
 */
export function getLocalizedPath(currentPathname: string, targetLang: LanguageCode): string {
  const decoded = safeDecode(currentPathname || "/");
  const clean = decoded.replace(/\/$/, "") || "/";

  // Check blog-details dynamic route
  const blogMatch = clean.match(/^(?:\/(?:es|de|ja|ar|en))?\/blog-details(?:\/(.+))?$/);
  if (blogMatch) {
    const slug = blogMatch[1] || "";
    const slugSuffix = slug ? `/${slug}` : "";
    return `/blog-details${slugSuffix}`;
  }

  // Identify known page
  const pageKey = identifyPageKey(clean);
  if (pageKey) {
    return ROUTE_MAP[targetLang][pageKey];
  }

  // Fallback
  return clean;
}

/**
 * Helper to get the localized URL for a canonical English path under the given language
 */
export function getLocalizedHref(canonicalPath: string, lang: LanguageCode): string {
  const decoded = safeDecode(canonicalPath || "/");
  const clean = decoded.replace(/\/$/, "") || "/";
  const pageKey = identifyPageKey(clean);
  if (pageKey) {
    return ROUTE_MAP[lang][pageKey];
  }
  return clean;
}
