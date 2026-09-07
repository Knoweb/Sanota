"use client";

export default function AnimatedLogo() {
  return (
    <span
      className="flex items-center select-none"
      style={{ fontFamily: "'Times New Roman', Georgia, serif" }}
    >
      {/* Full logo as a single SVG for precise control */}
      <svg
        width="180"
        height="44"
        viewBox="0 0 180 44"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible", display: "block" }}
      >
        {/* SAN text */}
        <text
          x="0"
          y="36"
          fontFamily="'Times New Roman', Georgia, serif"
          fontSize="38"
          fontWeight="900"
          fill="#1a3a8a"
          letterSpacing="1"
        >
          SAN
        </text>

        {/* Animated O — centered at x=108, y=22 (mid-height of text) */}
        {/* Outer orbit ring */}
        <circle cx="108" cy="22" r="16" stroke="#c8a228" strokeWidth="2" fill="none" opacity="0.85" />

        {/* Inner ring */}
        <circle cx="108" cy="22" r="8" stroke="#c8a228" strokeWidth="1" fill="none" opacity="0.4" />

        {/* Horizontal lines extending through ring */}
        <line x1="88" y1="22" x2="100" y2="22" stroke="#c8a228" strokeWidth="1.2" opacity="0.6" />
        <line x1="116" y1="22" x2="128" y2="22" stroke="#c8a228" strokeWidth="1.2" opacity="0.6" />

        {/* Center dot */}
        <circle cx="108" cy="22" r="2.5" fill="#E8B84B" />

        {/* Orbiting dot 1 — large dot on outer ring, clockwise */}
        <circle cx="108" cy="6" r="3" fill="#E8B84B">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 108 22"
            to="360 108 22"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Orbiting dot 2 — smaller, opposite side, outer ring */}
        <circle cx="108" cy="38" r="2" fill="#c8a228" opacity="0.8">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 108 22"
            to="360 108 22"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Orbiting dot 3 — on inner ring, counter-clockwise, offset */}
        <circle cx="108" cy="14" r="2" fill="#E8B84B" opacity="0.9">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="90 108 22"
            to="-270 108 22"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* TA text */}
        <text
          x="127"
          y="36"
          fontFamily="'Times New Roman', Georgia, serif"
          fontSize="38"
          fontWeight="900"
          fill="#1a3a8a"
          letterSpacing="1"
        >
          TA
        </text>
      </svg>
    </span>
  );
}
