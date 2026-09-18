import Field from './Field.jsx'
import Button from './Button.jsx'
import { Honeypot, FormStatus } from './FormBits.jsx'
import { useFormSubmit } from '../hooks/useFormSubmit.js'

export default function ContactForm() {
  const { status, errors, formError, handleSubmit } = useFormSubmit({
    required: ['name', 'email', 'message'],
  })

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Honeypot />
      <Field name="name" label="Full name" placeholder="Your name" required error={errors.name} />
      <Field
        name="organisation"
        label="Organisation"
        placeholder="Company or institution"
      />
      <Field
        as="input"
        type="email"
        name="email"
        label="Email"
        placeholder="you@company.com"
        required
        error={errors.email}
      />
      <Field as="select" name="interest" label="I am interested in" defaultValue="Farming or sourcing in Kenya">
        <option>Farming or sourcing in Kenya</option>
        <option>Land access and tenure</option>
        <option>Utilities and infrastructure</option>
        <option>Outgrower programmes</option>
        <option>The Terebra platform</option>
        <option>Something else</option>
      </Field>
      <Field
        as="textarea"
        name="message"
        label="Message"
        placeholder="Tell us briefly about your plans"
        required
        error={errors.message}
      />

      <label className="flex items-start gap-2.5 text-xs leading-relaxed text-body">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 rounded border-line text-brand-600" />
        <span>
          I agree that Terebra Agri Services may use the information I provide to respond to my
          enquiry. See our privacy notice.
        </span>
      </label>

      <FormStatus status={status} formError={formError} />

      <div>
        <Button type="submit" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </Button>
      </div>
    </form>
  )
}
