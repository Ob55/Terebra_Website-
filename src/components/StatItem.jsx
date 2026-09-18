import useCountUp from '../hooks/useCountUp.js'

/** Single figure + label in the stats band. The figure counts up on reveal. */
export default function StatItem({ value, label }) {
  const [ref, display] = useCountUp(value)

  return (
    <div ref={ref} className="border-t-2 border-line pt-5">
      <div className="text-4xl font-extrabold tracking-tightish text-ink tabular-nums sm:text-5xl">
        {display}
      </div>
      <p className="mt-2 text-sm leading-snug text-body">{label}</p>
    </div>
  )
}
