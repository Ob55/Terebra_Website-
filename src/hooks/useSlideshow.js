import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from './useReveal.js'

/**
 * Advances an index on a timer and hands back manual controls.
 * Holds still when the tab is hidden, and never auto-advances for visitors
 * who have asked for reduced motion — they get the first frame and the dots.
 */
export default function useSlideshow(count, interval = 6500) {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const timer = useRef(null)

  useEffect(() => {
    if (count < 2 || !playing || prefersReducedMotion()) return undefined

    const tick = () => setIndex((i) => (i + 1) % count)
    timer.current = window.setInterval(tick, interval)

    const onVisibility = () => {
      if (document.hidden) {
        window.clearInterval(timer.current)
      } else {
        timer.current = window.setInterval(tick, interval)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      window.clearInterval(timer.current)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [count, interval, playing])

  /** Jump to a slide and restart the clock from there. */
  const goTo = (i) => {
    setIndex(i)
    setPlaying(false)
    window.setTimeout(() => setPlaying(true), 50)
  }

  return { index, goTo }
}
