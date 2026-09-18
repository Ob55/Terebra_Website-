import useReveal from '../hooks/useReveal.js'

/**
 * Wraps content in the standard fade-and-rise entrance.
 * `delay` staggers siblings (40–90ms reads best); `variant` picks the
 * direction — 'up' (default), 'left', 'right', 'scale' or 'none'.
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = useReveal()

  return (
    <Tag
      ref={ref}
      data-variant={variant}
      className={`reveal ${className}`}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
