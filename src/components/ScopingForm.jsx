import Field from './Field.jsx'
import Button from './Button.jsx'
import { Honeypot, FormStatus } from './FormBits.jsx'
import { useFormSubmit } from '../hooks/useFormSubmit.js'

/** Lead form for the "Book a scoping call" landing page. */
export default function ScopingForm() {
  const { status, errors, formError, handleSubmit } = useFormSubmit({
    required: ['name', 'email'],
  })

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <Honeypot />
      <Field name="name" label="Full name" placeholder="Your name" required error={errors.name} />
      <Field
        type="email"
        name="email"
        label="Email"
        placeholder="you@company.com"
        required
        error={errors.email}
      />
      <Field name="phone" label="Phone (optional)" placeholder="+254 7XX XXX XXX" />
      <Field
        as="textarea"
        name="goal"
        label="What do you want to grow?"
        placeholder="A sentence or two about your plans"
      />

      <FormStatus status={status} formError={formError} />

      <Button type="submit" size="lg" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Booking…' : 'Book a scoping call'}
      </Button>
      <p className="text-xs text-body">
        No obligation. We reply within two working days.
      </p>
    </form>
  )
}
