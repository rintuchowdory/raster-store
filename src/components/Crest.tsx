interface CrestProps {
  id: string
  className?: string
}

/**
 * The RASTER crest: a varsity-style seal built from the shop's own tools —
 * crossed squeegees stand in for the crossed rifles/oars of a classic
 * collegiate crest. Used as the wordmark's badge in the header, as a hero
 * stamp, and in the footer.
 */
export function Crest({ id, className }: CrestProps) {
  const topArc = `${id}-top`
  const bottomArc = `${id}-bottom`

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="60" r="49" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />

      <path id={topArc} d="M 16,66 A 44,44 0 0 1 104,66" fill="none" />
      <path id={bottomArc} d="M 24,82 A 36,36 0 0 0 96,82" fill="none" />

      <text fontSize="11" fill="currentColor" fontWeight="700" letterSpacing="2">
        <textPath href={`#${topArc}`} startOffset="50%" textAnchor="middle">
          RASTER
        </textPath>
      </text>
      <text fontSize="7.5" fill="currentColor" opacity="0.8" letterSpacing="1.5">
        <textPath href={`#${bottomArc}`} startOffset="50%" textAnchor="middle">
          PRINT CO · EST 24
        </textPath>
      </text>

      {/* crossed squeegees, in place of the crossed rifles/oars on a classic crest */}
      <g stroke="currentColor" fill="currentColor">
        <g transform="rotate(45 60 60)">
          <rect x="58" y="26" width="4" height="62" rx="1.5" />
          <rect x="51" y="24" width="18" height="7" rx="1.5" />
          <rect x="54" y="86" width="12" height="6" rx="1.5" opacity="0.85" />
        </g>
        <g transform="rotate(-45 60 60)">
          <rect x="58" y="26" width="4" height="62" rx="1.5" />
          <rect x="51" y="24" width="18" height="7" rx="1.5" />
          <rect x="54" y="86" width="12" height="6" rx="1.5" opacity="0.85" />
        </g>
      </g>
      <circle cx="60" cy="60" r="3.5" fill="currentColor" />
    </svg>
  )
}
