import React from "react";

export function FlagUK({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 30"
      className={`shrink-0 overflow-hidden rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.15)] border border-black/10 ${className}`}
      aria-label="United Kingdom Flag"
    >
      <clipPath id="uk-clip">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="uk-diag">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-diag)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

export function FlagSpain({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 750 500"
      className={`shrink-0 overflow-hidden rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.15)] border border-black/10 ${className}`}
      aria-label="Spain Flag"
    >
      <rect width="750" height="500" fill="#AA151B" />
      <rect width="750" height="250" y="125" fill="#F1BF00" />
      <g transform="translate(190, 250)">
        <rect x="-32" y="-45" width="64" height="78" rx="14" fill="#AA151B" stroke="#F1BF00" strokeWidth="4" />
        <rect x="-22" y="-34" width="44" height="54" rx="7" fill="#F1BF00" />
        <circle cx="0" cy="-56" r="12" fill="#AA151B" stroke="#F1BF00" strokeWidth="3" />
        <circle cx="0" cy="-56" r="5" fill="#F1BF00" />
        <rect x="-48" y="-40" width="8" height="72" rx="2" fill="#ffffff" stroke="#AA151B" strokeWidth="1.5" />
        <rect x="40" y="-40" width="8" height="72" rx="2" fill="#ffffff" stroke="#AA151B" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function FlagJapan({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 600"
      className={`shrink-0 overflow-hidden rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.15)] border border-slate-300 dark:border-slate-600 ${className}`}
      aria-label="Japan Flag"
    >
      <rect width="900" height="600" fill="#ffffff" />
      <circle cx="450" cy="300" r="180" fill="#BC002D" />
    </svg>
  );
}

export function FlagGermany({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 5 3"
      className={`shrink-0 overflow-hidden rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.15)] border border-black/10 ${className}`}
      aria-label="Germany Flag"
    >
      <rect width="5" height="1" y="0" fill="#000000" />
      <rect width="5" height="1" y="1" fill="#DD0000" />
      <rect width="5" height="1" y="2" fill="#FFCE00" />
    </svg>
  );
}

export function FlagUAE({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 600"
      className={`shrink-0 overflow-hidden rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.15)] border border-black/10 ${className}`}
      aria-label="United Arab Emirates Flag"
    >
      <rect width="1200" height="200" y="0" fill="#00732F" />
      <rect width="1200" height="200" y="200" fill="#FFFFFF" />
      <rect width="1200" height="200" y="400" fill="#000000" />
      <rect width="300" height="600" x="0" y="0" fill="#FF0000" />
    </svg>
  );
}

interface CountryFlagProps {
  code: string;
  className?: string;
}

export default function CountryFlag({ code, className = "w-5 h-3.5" }: CountryFlagProps) {
  const c = code.toLowerCase();
  switch (c) {
    case "en":
    case "gb":
    case "uk":
      return <FlagUK className={className} />;
    case "es":
      return <FlagSpain className={className} />;
    case "ja":
    case "jp":
      return <FlagJapan className={className} />;
    case "de":
      return <FlagGermany className={className} />;
    case "ar":
    case "ae":
      return <FlagUAE className={className} />;
    default:
      return null;
  }
}
