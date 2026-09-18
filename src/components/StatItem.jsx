/** Single figure + label in the Home stats band. */
export default function StatItem({ value, label }) {
  return (
    <div>
      <div className="text-4xl font-extrabold tracking-tightish text-ink">{value}</div>
      <p className="mt-2 text-sm leading-snug text-body">{label}</p>
    </div>
  )
}
