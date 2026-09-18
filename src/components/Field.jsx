/**
 * Accessible labelled form control. Renders an input, textarea, or select
 * based on `as`. Shows an inline error message wired up via aria-describedby.
 */
export default function Field({
  as = 'input',
  name,
  label,
  error,
  required = false,
  tone = 'light',
  className = '',
  children,
  ...rest
}) {
  const id = `field-${name}`
  const describedBy = error ? `${id}-error` : undefined

  const labelColor = tone === 'dark' ? 'text-white/80' : 'text-ink'
  const controlBase =
    tone === 'dark'
      ? 'bg-white/5 border-white/15 text-white placeholder:text-white/40'
      : 'bg-surface border-line text-ink placeholder:text-body/50'

  const controlClasses = `w-full rounded-lg border px-3.5 py-2.5 text-sm transition-colors focus:border-brand-600 ${controlBase} ${
    error ? 'border-red-400' : ''
  }`

  return (
    <div className={className}>
      <label htmlFor={id} className={`mb-1.5 block text-sm font-medium ${labelColor}`}>
        {label}
        {required && <span className="text-brand-800"> *</span>}
      </label>

      {as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy}
          className={controlClasses}
          {...rest}
        />
      ) : as === 'select' ? (
        <select
          id={id}
          name={name}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy}
          className={controlClasses}
          {...rest}
        >
          {children}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy}
          className={controlClasses}
          {...rest}
        />
      )}

      {error && (
        <p id={describedBy} className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
