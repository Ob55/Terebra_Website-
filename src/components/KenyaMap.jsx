import { useState } from 'react'
import { locations, reference } from '../data/locations.js'
import { countyPaths, project, MAP_WIDTH, MAP_HEIGHT } from '../data/kenyaGeo.js'
import useReveal from '../hooks/useReveal.js'

// Counties where services are live get the deeper fill.
const liveCounties = new Set(
  locations.filter((l) => l.status === 'in-service' && l.county).map((l) => l.county),
)

const assessmentAreas = locations.flatMap((l) => l.areas ?? [])
const sites = locations.filter((l) => l.status === 'in-service')

/**
 * Map of Kenya drawn from real county boundaries (see data/kenyaGeo.js).
 * Service sites and areas under assessment are plotted from their actual
 * coordinates, so the pins land where the places are.
 */
export default function KenyaMap({ className = '' }) {
  const ref = useReveal({ threshold: 0.25 })
  const [active, setActive] = useState(null)

  return (
    <div ref={ref} className={`reveal relative ${className}`} data-variant="scale">
      <svg
        viewBox={`-2 -2 ${MAP_WIDTH + 4} ${MAP_HEIGHT + 4}`}
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label="Map of Kenya showing Terebra service locations in Makueni, Nyeri and Nakuru counties, and further production areas under assessment"
      >
        {/* Outer border: thick strokes are painted over by the fills below,
            so only the national outline survives. */}
        <g fill="none" stroke="#0e1f14" strokeWidth="0.9" strokeLinejoin="round">
          {Object.entries(countyPaths).map(([name, d]) => (
            <path key={name} d={d} />
          ))}
        </g>

        {/* County fills + hairline internal boundaries */}
        <g stroke="#b7d3a8" strokeWidth="0.16">
          {Object.entries(countyPaths).map(([name, d]) => (
            <path
              key={name}
              d={d}
              fill={liveCounties.has(name) ? '#bfe3ae' : '#e8f1e1'}
              className="transition-[fill] duration-ui ease-soft"
            />
          ))}
        </g>

        {/* Areas under assessment */}
        {assessmentAreas.map((area) => {
          const { x, y } = project(area.lon, area.lat)
          return (
            <circle
              key={area.name}
              cx={x}
              cy={y}
              r="1.5"
              fill="#ffffff"
              stroke="#3f9a22"
              strokeWidth="0.7"
              strokeDasharray="1.3 0.9"
            >
              <title>{area.name} — under assessment</title>
            </circle>
          )
        })}

        {/* Nairobi, for orientation */}
        {(() => {
          const { x, y } = project(reference.lon, reference.lat)
          return (
            <g>
              <circle cx={x} cy={y} r="0.9" fill="#0e1f14" />
              <text x={x + 2} y={y + 1.2} fontSize="3" fill="#0e1f14" fontWeight="600">
                {reference.name}
              </text>
            </g>
          )
        })()}

        {/* Live service sites */}
        {sites.map((site, i) => {
          const { x, y } = project(site.lon, site.lat)
          const isActive = active === site.name
          return (
            <g
              key={site.name}
              onMouseEnter={() => setActive(site.name)}
              onMouseLeave={() => setActive(null)}
              className="cursor-default"
            >
              <circle
                cx={x}
                cy={y}
                r="2"
                fill="#57b733"
                className="map-ping"
                style={{ animationDelay: `${i * 800}ms` }}
              />
              <circle
                cx={x}
                cy={y}
                r={isActive ? 2.4 : 1.9}
                fill="#3f9a22"
                stroke="#ffffff"
                strokeWidth="0.7"
                className="transition-all duration-ui ease-soft"
              />
              <text
                x={x}
                y={y + (site.labelDy ?? -3.4)}
                fontSize="3.1"
                fontWeight="700"
                textAnchor="middle"
                fill="#0e1f14"
                className="transition-opacity duration-ui"
                style={{ opacity: isActive ? 1 : 0.85 }}
              >
                {site.county}
              </text>
              <title>{site.name}</title>
            </g>
          )
        })}
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-body">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-700" /> Services in use
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full border border-dashed border-brand-700 bg-white" />
          Production areas under assessment
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-[#bfe3ae]" /> Counties we operate in
        </span>
      </div>
    </div>
  )
}
