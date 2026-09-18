import { useEffect, useState } from 'react'
import { heroImages, heroSrcSet } from '../data/heroImages.js'

/**
 * The photographs behind the hero. Every frame is stacked and cross-faded, so
 * nothing reflows and only `opacity`/`transform` animate.
 *
 * Only the first frame is in the markup on load — the rest mount one at a time,
 * shortly before they are needed, so the first view costs one photograph
 * rather than the whole set.
 */
export default function HeroSlideshow({ index = 0, className = '' }) {
  const [ready, setReady] = useState(() => new Set([0]))

  useEffect(() => {
    const next = (index + 1) % heroImages.length
    if (ready.has(index) && ready.has(next)) return undefined

    // Warm the frame after the current one, once the page has settled.
    const schedule = window.requestIdleCallback ?? ((fn) => window.setTimeout(fn, 1200))
    const cancel = window.cancelIdleCallback ?? window.clearTimeout
    const handle = schedule(
      () =>
        setReady((prev) => {
          const updated = new Set(prev)
          updated.add(index)
          updated.add(next)
          return updated
        }),
      { timeout: 2500 },
    )

    return () => cancel(handle)
  }, [index, ready])

  return (
    <div className={`absolute inset-0 overflow-hidden bg-forest ${className}`} aria-hidden="true">
      {heroImages.map((image, i) => {
        if (!ready.has(i)) return null
        const { src, srcSet, sizes } = heroSrcSet(image.slug)
        const isActive = i === index
        return (
          <img
            key={image.slug}
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt=""
            fetchpriority={i === 0 ? 'high' : 'low'}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-soft ${
              isActive ? 'opacity-100' : 'opacity-0'
            } ${isActive ? 'hero-drift' : ''}`}
          />
        )
      })}
    </div>
  )
}
