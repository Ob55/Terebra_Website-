import Button from './Button.jsx'

/**
 * Centred call-to-action band (e.g. "Ready to farm in Kenya, properly?").
 * This is one of the few intentionally centred blocks in the design.
 */
export default function CTABand({ title, cta = 'Book a scoping call', to = '/contact' }) {
  return (
    <div className="mx-auto max-w-xl text-center">
      <h2 className="text-3xl leading-[1.15] sm:text-4xl">{title}</h2>
      <div className="mt-8 flex justify-center">
        <Button to={to} size="lg">
          {cta}
        </Button>
      </div>
    </div>
  )
}
