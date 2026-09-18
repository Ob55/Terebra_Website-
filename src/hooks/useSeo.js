import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL, SITE_NAME, pageMeta } from '../data/site.js'

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [, name] = selector.match(/\[(?:name|property)="([^"]+)"\]/) || []
    el.setAttribute(selector.includes('property=') ? 'property' : 'name', name)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

/**
 * Keeps <title>, the meta description, the canonical URL and the Open Graph
 * tags in step with the current route. A client-rendered SPA has one HTML
 * shell, so without this every page shares the homepage's metadata.
 */
export default function useSeo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = pageMeta[pathname] || {
      title: `Page not found — ${SITE_NAME}`,
      description: pageMeta['/'].description,
    }
    const known = Boolean(pageMeta[pathname])
    const url = SITE_URL + (pathname === '/' ? '/' : pathname)

    document.title = meta.title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="twitter:title"]', 'content', meta.title)
    setMeta('meta[name="twitter:description"]', 'content', meta.description)

    // Unknown routes render the 404 page — keep them out of the index.
    setMeta('meta[name="robots"]', 'content', known ? 'index, follow' : 'noindex, follow')

    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', url)
  }, [pathname])
}
