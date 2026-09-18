import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from './useReveal.js'

/**
 * Counts a numeric value up when it first scrolls into view.
 * Accepts display strings like '40+', '3', '28 / 28' — only the leading
 * number animates, the rest of the string is preserved.
 */
export default function useCountUp(display, duration = 1100) {
  const match = String(display).match(/^(\D*)(\d[\d,.]*)(.*)$/s)
  const target = match ? Number(match[2].replace(/,/g, '')) : null
  const decimals = match && match[2].includes('.') ? match[2].split('.')[1].length : 0

  const ref = useRef(null)
  const [value, setValue] = useState(target === null ? null : 0)

  useEffect(() => {
    const el = ref.current
    if (!el || target === null) return

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setValue(target)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        observer.disconnect()

        const start = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3) // ease-out cubic
          setValue(target * eased)
          if (t < 1) window.requestAnimationFrame(tick)
        }
        window.requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  const text =
    target === null || value === null
      ? display
      : `${match[1]}${value.toFixed(decimals)}${match[3]}`

  return [ref, text]
}
