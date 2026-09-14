import React from 'react';

interface LogoProps {
  variant?: 'full' | 'monogram' | 'compact' | 'light' | 'circle';
  theme?: 'dark' | 'light';
  layout?: 'vertical' | 'horizontal';
  className?: string;
  height?: number;
  showCircle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'circle',
  theme = 'dark',
  layout,
  className = '',
  height = 52,
  showCircle = true
}) => {
  const isLight = theme === 'light' || variant === 'light';
  const effectiveLayout = layout || (variant === 'compact' ? 'horizontal' : 'vertical');

  // Colors matching 36005.jpg
  const navyColor = '#0B1B2B';
  const goldColor = '#C5A059';
  const hColor = isLight ? navyColor : '#FFFFFF';
  const haughTextColor = isLight ? navyColor : '#FFFFFF';
  const taglineTextColor = isLight ? '#475569' : '#94A3B8';

  // 1. Full Circular Badge Emblem (Matching 36005.jpg inside a circular emblem)
  if (variant === 'circle' || showCircle && variant === 'full') {
    return (
      <div className={`inline-flex items-center justify-center select-none ${className}`}>
        <svg
          width={height * 1.5}
          height={height * 1.5}
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg transition-transform hover:scale-[1.03] duration-300"
        >
          {/* Outer Gold Border Ring */}
          <circle cx="160" cy="160" r="154" fill="#FFFFFF" stroke="#C5A059" strokeWidth="4" />
          <circle cx="160" cy="160" r="148" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

          {/* MONOGRAM GROUP (H + A) */}
          <g id="monogram">
            {/* H Left Stem (Navy) */}
            <path d="M 112 55 H 134 V 145 H 112 Z" fill="#0B1B2B" />
            <path d="M 104 55 H 142 V 60 H 104 Z" fill="#0B1B2B" />
            <path d="M 104 140 H 142 V 145 H 104 Z" fill="#0B1B2B" />

            {/* H Right Stem (Navy) */}
            <path d="M 186 55 H 208 V 145 H 186 Z" fill="#0B1B2B" />
            <path d="M 178 55 H 216 V 60 H 178 Z" fill="#0B1B2B" />
            <path d="M 178 140 H 216 V 145 H 178 Z" fill="#0B1B2B" />

            {/* H Crossbar (Navy) */}
            <path d="M 134 96 H 186 V 106 H 134 Z" fill="#0B1B2B" />

            {/* Gold Interlocking A */}
            <path
              d="M 160 62 L 132 145 H 148 L 160 106 L 172 145 H 188 L 160 62 Z"
              fill="#C5A059"
            />
            {/* A Right Leg Overlap Accent */}
            <path d="M 170 141 H 192 V 145 H 170 Z" fill="#C5A059" />
            {/* A Crossbar */}
            <path d="M 148 118 H 172 L 169 125 H 151 Z" fill="#C5A059" />
          </g>

          {/* BRAND NAME: HAUGH */}
          <text
            x="160"
            y="196"
            fontFamily="'Playfair Display', 'Cinzel', 'Georgia', serif"
            fontSize="36"
            fontWeight="800"
            fill="#0B1B2B"
            textAnchor="middle"
            letterSpacing="9"
          >
            HAUGH
          </text>

          {/* ADVISORY ROW WITH DIVIDER LINES */}
          <line x1="60" y1="222" x2="105" y2="222" stroke="#C5A059" strokeWidth="2" />
          <text
            x="160"
            y="227"
            fontFamily="'Playfair Display', 'Cinzel', 'Georgia', serif"
            fontSize="14"
            fontWeight="700"
            fill="#C5A059"
            textAnchor="middle"
            letterSpacing="7"
          >
            ADVISORY
          </text>
          <line x1="215" y1="222" x2="260" y2="222" stroke="#C5A059" strokeWidth="2" />

          {/* TAGLINE: INSIGHT. STRATEGY. GROWTH. */}
          <text
            x="160"
            y="262"
            fontFamily="'Inter', sans-serif"
            fontSize="9"
            fontWeight="700"
            fill="#334155"
            textAnchor="middle"
            letterSpacing="4"
          >
            INSIGHT. STRATEGY. GROWTH.
          </text>
        </svg>
      </div>
    );
  }

  // 2. Monogram Icon Only in a Rounded Circle
  if (variant === 'monogram') {
    return (
      <div className={`inline-flex items-center justify-center select-none ${className}`}>
        <svg
          width={height}
          height={height}
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="80" cy="80" r="76" fill="#FFFFFF" stroke="#C5A059" strokeWidth="3" />
          {/* H Left Stem */}
          <path d="M 46 32 H 64 V 128 H 46 Z" fill="#0B1B2B" />
          <path d="M 40 32 H 70 V 36 H 40 Z" fill="#0B1B2B" />
          <path d="M 40 124 H 70 V 128 H 40 Z" fill="#0B1B2B" />

          {/* H Right Stem */}
          <path d="M 96 32 H 114 V 128 H 96 Z" fill="#0B1B2B" />
          <path d="M 90 32 H 120 V 36 H 90 Z" fill="#0B1B2B" />
          <path d="M 90 124 H 120 V 128 H 90 Z" fill="#0B1B2B" />

          {/* H Crossbar */}
          <path d="M 64 76 H 96 V 84 H 64 Z" fill="#0B1B2B" />

          {/* Gold Interlocking A */}
          <path
            d="M 80 40 L 56 128 H 70 L 80 94 L 90 128 H 104 L 80 40 Z"
            fill="#C5A059"
          />
          <path d="M 90 124 H 106 V 128 H 90 Z" fill="#C5A059" />
          <path d="M 68 102 H 92 L 89 108 H 71 Z" fill="#C5A059" />
        </svg>
      </div>
    );
  }

  // 3. Compact Horizontal (for Header / Navbar) with Circular Badge Emblem + Brand Name
  if (effectiveLayout === 'horizontal') {
    return (
      <div className={`inline-flex items-center space-x-3 select-none ${className}`}>
        {/* Rounded Circular Emblem Badge */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#C5A059] flex items-center justify-center p-1 shadow-md shrink-0">
          <svg
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* H Left Stem */}
            <path d="M 42 22 H 62 V 138 H 42 Z" fill="#0B1B2B" />
            <path d="M 36 22 H 68 V 26 H 36 Z" fill="#0B1B2B" />
            <path d="M 36 134 H 68 V 138 H 36 Z" fill="#0B1B2B" />

            {/* H Right Stem */}
            <path d="M 98 22 H 118 V 138 H 98 Z" fill="#0B1B2B" />
            <path d="M 92 22 H 124 V 26 H 92 Z" fill="#0B1B2B" />
            <path d="M 92 134 H 124 V 138 H 92 Z" fill="#0B1B2B" />

            {/* H Crossbar */}
            <path d="M 62 76 H 98 V 84 H 62 Z" fill="#0B1B2B" />

            {/* Gold Interlocking A */}
            <path
              d="M 80 32 L 54 138 H 68 L 80 94 L 92 138 H 106 L 80 32 Z"
              fill="#C5A059"
            />
            <path d="M 90 134 H 108 V 138 H 90 Z" fill="#C5A059" />
            <path d="M 66 102 H 94 L 91 108 H 69 Z" fill="#C5A059" />
          </svg>
        </div>

        {/* Text Block Next to Circle Emblem */}
        <div className="flex flex-col justify-center leading-none">
          <span
            className="font-serif text-lg sm:text-xl font-bold tracking-[0.2em] text-left"
            style={{ color: haughTextColor }}
          >
            HAUGH
          </span>

          <div className="flex items-center space-x-1.5 mt-1">
            <span className="w-2.5 h-[1px]" style={{ backgroundColor: goldColor }}></span>
            <span
              className="font-serif text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: goldColor }}
            >
              ADVISORY
            </span>
            <span className="w-2.5 h-[1px]" style={{ backgroundColor: goldColor }}></span>
          </div>
        </div>
      </div>
    );
  }

  // 4. Vertical Layout with Rounded Circle Emblem Frame (for Hero, Modals, Footer)
  return (
    <div className={`inline-flex flex-col items-center select-none text-center ${className}`}>
      {/* Rounded Circle Logo Container */}
      <div className="p-3 sm:p-4 rounded-full bg-white border-2 border-[#C5A059] shadow-xl mb-3 flex items-center justify-center">
        <svg
          width={height * 1.3}
          height={height * 1.3}
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* MONOGRAM GROUP (H + A) */}
          <g id="monogram">
            <path d="M 92 35 H 114 V 125 H 92 Z" fill="#0B1B2B" />
            <path d="M 84 35 H 122 V 40 H 84 Z" fill="#0B1B2B" />
            <path d="M 84 120 H 122 V 125 H 84 Z" fill="#0B1B2B" />

            <path d="M 166 35 H 188 V 125 H 166 Z" fill="#0B1B2B" />
            <path d="M 158 35 H 196 V 40 H 158 Z" fill="#0B1B2B" />
            <path d="M 158 120 H 196 V 125 H 158 Z" fill="#0B1B2B" />

            <path d="M 114 76 H 166 V 86 H 114 Z" fill="#0B1B2B" />

            <path
              d="M 140 42 L 112 125 H 128 L 140 86 L 152 125 H 168 L 140 42 Z"
              fill="#C5A059"
            />
            <path d="M 150 121 H 172 V 125 H 150 Z" fill="#C5A059" />
            <path d="M 128 98 H 152 L 149 105 H 131 Z" fill="#C5A059" />
          </g>

          {/* HAUGH */}
          <text
            x="140"
            y="172"
            fontFamily="'Playfair Display', 'Cinzel', serif"
            fontSize="32"
            fontWeight="800"
            fill="#0B1B2B"
            textAnchor="middle"
            letterSpacing="8"
          >
            HAUGH
          </text>

          {/* ADVISORY ROW */}
          <line x1="40" y1="198" x2="85" y2="198" stroke="#C5A059" strokeWidth="2" />
          <text
            x="140"
            y="203"
            fontFamily="'Playfair Display', 'Cinzel', serif"
            fontSize="13"
            fontWeight="700"
            fill="#C5A059"
            textAnchor="middle"
            letterSpacing="6"
          >
            ADVISORY
          </text>
          <line x1="195" y1="198" x2="240" y2="198" stroke="#C5A059" strokeWidth="2" />

          {/* INSIGHT. STRATEGY. GROWTH. */}
          <text
            x="140"
            y="238"
            fontFamily="'Inter', sans-serif"
            fontSize="8.5"
            fontWeight="700"
            fill="#334155"
            textAnchor="middle"
            letterSpacing="3"
          >
            INSIGHT. STRATEGY. GROWTH.
          </text>
        </svg>
      </div>

      {/* HAUGH ADVISORY label for vertical context if theme requires */}
      {theme === 'dark' && (
        <span className="font-serif text-sm font-bold text-[#C5A059] tracking-[0.25em] uppercase">
          HAUGH ADVISORY
        </span>
      )}
    </div>
  );
};
