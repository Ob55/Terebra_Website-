import { Link } from 'react-router-dom'

/**
 * Terebra wordmark — the supplied logo artwork (public/logo.png).
 * `tone="light"` swaps in the variant whose "Agri Services" line is white,
 * for use on the forest-green footer and other dark bands.
 */
export default function Logo({ tone = 'dark', className = '', imgClassName = '' }) {
  const src = tone === 'light' ? '/logo-light.png' : '/logo.png'

  return (
    <Link
      to="/"
      className={`group inline-flex items-center ${className}`}
      aria-label="Terebra Agri Services — home"
    >
      <img
        src={src}
        alt="Terebra Agri Services"
        width={706}
        height={168}
        className={`h-8 w-auto transition-transform duration-ui ease-soft group-hover:scale-[1.03] sm:h-9 ${imgClassName}`}
      />
    </Link>
  )
}
