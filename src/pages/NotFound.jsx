import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl">This page isn’t on the map.</h1>
      <p className="mx-auto mt-4 max-w-md text-body">
        The page you’re looking for doesn’t exist or has moved. Let’s get you back on the ground.
      </p>
      <div className="mt-8 flex justify-center">
        <Button to="/">Back to home</Button>
      </div>
    </Section>
  )
}
