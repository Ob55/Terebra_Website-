import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

/**
 * Build-time entry. `prerender.js` calls this once per route and bakes the
 * result into a static HTML file, so crawlers and agents that do not run
 * JavaScript still get the real page.
 */
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
