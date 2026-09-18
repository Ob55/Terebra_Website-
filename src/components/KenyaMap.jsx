import { locations } from '../data/locations.js'

/**
 * Stylised map of Kenya with plotted service points.
 * The outline is a simplified silhouette (decorative, not survey-accurate);
 * points are positioned by the percentage coords in locations.js.
 */
export default function KenyaMap({ className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-card bg-muted ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label="Map of Kenya showing Terebra service locations">
        {/* Simplified Kenya silhouette */}
        <path
          d="M33 16 L60 14 L62 22 L74 30 L84 44 L70 58 L66 76 L58 86 L48 80 L44 66 L30 60 L22 50 L26 40 L20 32 L24 22 Z"
          fill="#d8ead0"
          stroke="#b9d6ac"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />

        {/* Nairobi reference marker */}
        <g>
          <circle cx="50" cy="58" r="1.1" fill="#0e1f14" />
          <text x="52.5" y="59.4" fontSize="3.4" fill="#0e1f14" fontWeight="600">
            Nairobi
          </text>
        </g>

        {/* Service + assessment points */}
        {locations.map((loc) => {
          const isService = loc.status === 'in-service'
          return (
            <circle
              key={loc.name}
              cx={loc.x}
              cy={loc.y}
              r={isService ? 1.8 : 1.6}
              fill={isService ? '#57b733' : 'none'}
              stroke={isService ? '#3f9a22' : '#57b733'}
              strokeWidth="0.8"
              strokeDasharray={isService ? '0' : '1.4 1'}
            />
          )
        })}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-3 left-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-body">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-brand-600" /> Services in use
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full border border-brand-600" /> Potential production areas
        </span>
      </div>
    </div>
  )
}
