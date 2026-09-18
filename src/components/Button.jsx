import { Link } from 'react-router-dom'

const variants = {
  // vivid lime pill — primary CTA
  primary: 'bg-brand text-forest hover:bg-brand-500 shadow-sm hover:shadow-lift',
  // dark pill
  dark: 'bg-forest text-white hover:bg-forest-800 hover:shadow-lift',
  // outline on light backgrounds
  outline:
    'border border-line bg-transparent text-ink hover:border-ink/30 hover:bg-ink/[0.02]',
  // outline on dark backgrounds
  ghostLight: 'border border-white/25 bg-transparent text-white hover:bg-white/10',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-[15px]',
}

/**
 * Pill button that renders as a router <Link>, an external <a>, or a <button>
 * depending on the props passed (`to`, `href`, or neither).
 * Micro-motion: lifts 2px on hover and presses back down on click.
 */
export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-micro ease-soft hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
