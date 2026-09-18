import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'

export default function NotFound() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,36rem)_minmax(0,1fr)] lg:items-end lg:gap-16">
        <Reveal>
          <p className="eyebrow">404</p>
          <h1 className="mt-3 text-4xl">This page isn’t on the map.</h1>
          <p className="mt-4 max-w-md text-body">
            The page you’re looking for doesn’t exist or has moved. Let’s get you back on the
            ground.
          </p>
        </Reveal>
        <Reveal delay={90} className="lg:justify-self-end">
          <Button to="/">Back to home</Button>
        </Reveal>
      </div>
    </Section>
  )
}
