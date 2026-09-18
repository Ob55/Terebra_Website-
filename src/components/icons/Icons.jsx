// Lightweight inline SVG icon set — no icon dependency.
// Each icon inherits `currentColor` so callers control colour via text classes.

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconStrategy(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 20h18" />
      <path d="M12 20V8" />
      <path d="M12 8l5-3M12 8L7 5" />
      <circle cx="12" cy="4" r="1.6" />
    </svg>
  )
}

export function IconInfrastructure(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 21V9l8-5 8 5v12" />
      <path d="M9 21v-6h6v6" />
      <path d="M4 13h16" />
    </svg>
  )
}

export function IconManage(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21h18" />
      <path d="M6 21v-8M12 21V7M18 21v-5" />
      <path d="M4 9l6-4 4 3 6-4" />
    </svg>
  )
}

export function IconHarvest(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21h18" />
      <rect x="6" y="12" width="12" height="9" rx="1.5" />
      <path d="M9 12V9a3 3 0 0 1 6 0v3" />
    </svg>
  )
}

export function IconOutgrower(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="9" r="3" />
      <path d="M2.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.5a3 3 0 0 1 0 5.5" />
      <path d="M17 14.5a5.5 5.5 0 0 1 4.5 5.5" />
    </svg>
  )
}

export function IconCompliance(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function IconLeaf(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20C4 11 11 5 20 4c1 9-5 16-14 16Z" />
      <path d="M4 20c4-6 8-9 13-11" />
    </svg>
  )
}

export function IconDrop(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3s6 6.5 6 10.5A6 6 0 0 1 6 13.5C6 9.5 12 3 12 3Z" />
    </svg>
  )
}

export function IconChart(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4v16h16" />
      <path d="M8 16l3-4 3 2 4-6" />
    </svg>
  )
}

export function IconTruck(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6h11v9H3z" />
      <path d="M14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </svg>
  )
}

export function IconSun(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </svg>
  )
}

export function IconSeed(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22V10" />
      <path d="M12 14c-3 0-5-2-5-5 3 0 5 2 5 5Z" />
      <path d="M12 11c0-3 2-5 5-5 0 3-2 5-5 5Z" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export function IconArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  )
}

export function IconPhone(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z" />
    </svg>
  )
}

// Map service-data icon keys to components so pages stay declarative.
export const serviceIcons = {
  strategy: IconStrategy,
  infrastructure: IconInfrastructure,
  manage: IconManage,
  harvest: IconHarvest,
  outgrower: IconOutgrower,
  compliance: IconCompliance,
}

// Icon row shown under the Home hero.
export const heroStepIcons = [
  IconSeed,
  IconLeaf,
  IconDrop,
  IconManage,
  IconTruck,
  IconChart,
  IconSun,
  IconCompliance,
]
