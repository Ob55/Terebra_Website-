/**
 * Page container: centred max-width with horizontal padding.
 * Content inside stays LEFT-aligned by default (per design guardrail) —
 * the container centres on the page, not the text.
 */
export default function Container({ as: Tag = 'div', className = '', children }) {
  return (
    <Tag className={`mx-auto w-full max-w-container px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  )
}
