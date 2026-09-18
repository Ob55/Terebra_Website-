import Card from './Card.jsx'
import { serviceIcons } from './icons/Icons.jsx'

/** Value-chain service card: icon chip, title, body. */
export default function ServiceCard({ icon, title, body }) {
  const Icon = serviceIcons[icon]
  return (
    <Card className="flex flex-col gap-3 transition-shadow hover:shadow-card">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-badge-bg text-brand-700">
        {Icon ? <Icon width={20} height={20} /> : null}
      </span>
      <h3 className="text-lg text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-body">{body}</p>
    </Card>
  )
}
