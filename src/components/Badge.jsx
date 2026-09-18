/** Status pill — green for in-service, neutral for under-assessment. */
export default function Badge({ tone = 'green', children }) {
  const toneClasses =
    tone === 'green'
      ? 'bg-badge-bg text-badge-fg'
      : 'bg-line/70 text-body'
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${toneClasses}`}
    >
      {children}
    </span>
  )
}
