import { Link } from 'react-router-dom'

/**
 * Terebra wordmark: leaf mark + two-line "TEREBRA / Agri Services".
 * `tone` switches text colour for light vs dark (footer) backgrounds.
 */
export default function Logo({ tone = 'dark', className = '' }) {
  const wordTop = tone === 'light' ? 'text-white' : 'text-ink'
  const wordBottom = tone === 'light' ? 'text-white' : 'text-ink'

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Terebra Agri Services — home"
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-forest">
        <svg width="20" height="20" viewBox="0 0 32 32" aria-hidden="true">
          <path
            d="M16 6c5 0 9 3.6 9 8.6 0 5.4-4.2 9.4-9 11.4-4.8-2-9-6-9-11.4C7 9.6 11 6 16 6Z"
            fill="#7ed957"
          />
          <path
            d="M16 9v14M16 14c-2 0-3.6-1.2-4.4-3M16 17c2 0 3.6-1.2 4.4-3"
            stroke="#0e1f14"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block text-[15px] font-extrabold tracking-tightish ${wordTop}`}>
          TEREBRA
        </span>
        <span className={`block text-[11px] font-medium ${wordBottom} opacity-80`}>
          Agri Services
        </span>
      </span>
    </Link>
  )
}
