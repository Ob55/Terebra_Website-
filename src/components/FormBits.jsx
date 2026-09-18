/** Hidden honeypot field — bots fill it, humans never see it. */
export function Honeypot() {
  return (
    <div className="absolute left-[-9999px]" aria-hidden="true">
      <label>
        Do not fill this in
        <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  )
}

const messages = {
  success: {
    tone: 'good',
    text: 'Thanks — your message is on its way. We’ll get back to you within two working days.',
  },
  unconfigured: {
    tone: 'good',
    text: 'Thanks — your details were captured. (Delivery isn’t wired up in this environment yet.)',
  },
  error: {
    tone: 'bad',
    text: 'Please check the highlighted fields and try again.',
  },
}

/** Inline status banner shown after a submit attempt. */
export function FormStatus({ status, formError }) {
  const preset = messages[status]
  if (!preset && !formError) return null

  const text = formError || preset?.text
  const tone = formError ? 'bad' : preset?.tone

  return (
    <p
      role="status"
      className={`rounded-lg px-4 py-3 text-sm ${
        tone === 'good'
          ? 'bg-badge-bg text-badge-fg'
          : 'bg-red-50 text-red-600'
      }`}
    >
      {text}
    </p>
  )
}
