import { useState } from 'react'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Shared form submission logic for every form on the site.
 *
 * - Validates required fields + email format client-side.
 * - Drops bot submissions silently via a honeypot field (`company_website`).
 * - POSTs JSON to VITE_FORM_ENDPOINT (Formspree/Getform-style). When the
 *   endpoint is not configured it returns a friendly "not configured" status
 *   instead of throwing, so the UI degrades gracefully in development.
 *
 * @param {object} opts
 * @param {string[]} opts.required  names of required fields
 * @param {string}   [opts.emailField='email'] field to validate as an email
 */
export function useFormSubmit({ required = [], emailField = 'email' } = {}) {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error | unconfigured
  const [errors, setErrors] = useState({})
  const [formError, setFormError] = useState('')

  function validate(values) {
    const next = {}
    for (const name of required) {
      if (!String(values[name] ?? '').trim()) next[name] = 'This field is required.'
    }
    if (emailField && values[emailField] && !EMAIL_RE.test(values[emailField])) {
      next[emailField] = 'Enter a valid email address.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setFormError('')
    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form).entries())

    // Honeypot — real users never fill this hidden field.
    if (values.company_website) {
      setStatus('success')
      form.reset()
      return
    }

    if (!validate(values)) {
      setStatus('error')
      return
    }

    if (!ENDPOINT) {
      // No backend wired up yet — acknowledge without a network call.
      setStatus('unconfigured')
      form.reset()
      return
    }

    setStatus('submitting')
    try {
      delete values.company_website
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(`Request failed with ${res.status}`)
      setStatus('success')
      setErrors({})
      form.reset()
    } catch {
      setStatus('error')
      setFormError('Something went wrong sending your message. Please try again or email us directly.')
    }
  }

  return { status, errors, formError, handleSubmit }
}
