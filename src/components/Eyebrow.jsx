/** Small green uppercase label shown above section titles. */
export default function Eyebrow({ children, className = '' }) {
  return <span className={`eyebrow ${className}`}>{children}</span>
}
