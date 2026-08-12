import { Garment } from '../data/products'

interface GarmentSVGProps {
  garment: Garment
  color: string
  patternId: string
  bg: string
}

/**
 * Stylised garment silhouette filled with a halftone dot pattern in the
 * selected colourway, standing in for product photography. A small
 * registration crosshair marks where the print sits on the garment —
 * it's a real placement reference, not decoration.
 */
export function GarmentSVG({ garment, color, patternId, bg }: GarmentSVGProps) {
  const dotId = `dots-${patternId}`

  const dotsDef = (
    <pattern
      id={dotId}
      width="8"
      height="8"
      patternUnits="userSpaceOnUse"
    >
      <rect width="8" height="8" fill={bg} />
      <circle cx="2" cy="2" r="1.5" fill={color} />
    </pattern>
  )

  if (garment === 'mug') {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
        <defs>{dotsDef}</defs>
        <rect x="52" y="55" width="88" height="105" rx="6" fill={`url(#${dotId})`} />
        <path
          d="M140,85 a28,28 0 0 1 0,50"
          fill="none"
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
        />
        <g stroke={bg} strokeWidth="1" opacity="0.9">
          <line x1="96" y1="98" x2="96" y2="112" />
          <line x1="89" y1="105" x2="103" y2="105" />
        </g>
      </svg>
    )
  }

  const isHoodie = garment === 'hoodie'

  return (
    <svg viewBox="0 0 200 220" className="w-full h-full" aria-hidden="true">
      <defs>{dotsDef}</defs>

      {/* sleeves */}
      <polygon
        points={isHoodie ? '55,55 20,85 40,150 55,120' : '55,55 25,78 45,102 55,72'}
        fill={`url(#${dotId})`}
      />
      <polygon
        points={isHoodie ? '145,55 180,85 160,150 145,120' : '145,55 175,78 155,102 145,72'}
        fill={`url(#${dotId})`}
      />

      {/* body */}
      <rect x="55" y="52" width="90" height="150" fill={`url(#${dotId})`} />

      {/* hood or collar */}
      {isHoodie ? (
        <>
          <rect x="68" y="14" width="64" height="48" rx="28" fill={`url(#${dotId})`} />
          {/* varsity ribbing stripe across the chest */}
          <rect x="55" y="78" width="90" height="5" fill={bg} opacity="0.85" />
          <rect x="55" y="86" width="90" height="2.5" fill={bg} opacity="0.5" />
          <rect
            x="80"
            y="150"
            width="40"
            height="32"
            rx="4"
            fill="none"
            stroke={bg}
            strokeWidth="1.5"
            opacity="0.6"
          />
        </>
      ) : (
        <polygon points="82,52 100,68 118,52 108,52 100,60 92,52" fill={bg} />
      )}

      {/* registration crosshair — marks the print position on the chest */}
      <g stroke={bg} strokeWidth="1" opacity="0.9">
        <line x1="100" y1="92" x2="100" y2="108" />
        <line x1="92" y1="100" x2="108" y2="100" />
      </g>
      <circle cx="100" cy="100" r="10" fill="none" stroke={bg} strokeWidth="1" opacity="0.5" />
    </svg>
  )
}
