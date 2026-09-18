/**
 * Long-form text column for the legal pages. Kept narrow for readability and
 * pulled to the left of the measure, in line with the rest of the site.
 */
export default function Prose({ className = '', children }) {
  return (
    <div
      className={`max-w-2xl [&_a]:font-medium [&_a]:text-brand-800 [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:text-xl [&_h2:first-of-type]:mt-8 [&_p]:mt-3 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-body ${className}`}
    >
      {children}
    </div>
  )
}
