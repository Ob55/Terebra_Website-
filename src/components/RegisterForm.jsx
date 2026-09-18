import Field from './Field.jsx'
import Button from './Button.jsx'
import { Honeypot, FormStatus } from './FormBits.jsx'
import { useFormSubmit } from '../hooks/useFormSubmit.js'

/** "Register on the platform" form (Platform page). */
export default function RegisterForm() {
  const { status, errors, formError, handleSubmit } = useFormSubmit({
    required: ['name', 'email', 'role'],
  })

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Full name" placeholder="Your name" required error={errors.name} />
        <Field name="organisation" label="Organisation" placeholder="Company or institution" />
        <Field
          type="email"
          name="email"
          label="Email"
          placeholder="you@company.com"
          required
          error={errors.email}
        />
        <Field name="phone" label="Phone" placeholder="+254 7XX XXX XXX" />
      </div>

      <Field
        as="select"
        name="role"
        label="I am a"
        required
        defaultValue=""
        error={errors.role}
      >
        <option value="" disabled>
          Select your role
        </option>
        <option>Client / investor</option>
        <option>Landowner</option>
        <option>Outgrower / producer</option>
        <option>Partner or supplier</option>
        <option>Other</option>
      </Field>

      <Field
        as="textarea"
        name="interest"
        label="Tell us about your interest"
        placeholder="What you want to use the platform for"
      />

      <label className="flex items-start gap-2.5 text-xs leading-relaxed text-body">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 rounded border-line text-brand-600" />
        <span>
          I agree the Terebra Agri Services may use this information to set up my platform access
          and contact me. See our privacy notice.
        </span>
      </label>

      <FormStatus status={status} formError={formError} />

      <div>
        <Button type="submit" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Registering…' : 'Register interest'}
        </Button>
      </div>
    </form>
  )
}
