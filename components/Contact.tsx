'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import TechBgPattern from './TechBgPattern'

const ease = [0.22, 1, 0.36, 1] as const

type FormState = 'idle' | 'sending' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  projectType: string
  budget: string
  message: string
}

function FloatingInput({
  label,
  type = 'text',
  value,
  onChange,
  name,
}: {
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  name: string
}) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0

  return (
    <div className="relative pt-5">
      <label
        className="absolute font-mono text-[11px] uppercase tracking-wider transition-all duration-300"
        style={{
          top: active ? '0px' : '20px',
          fontSize: active ? '10px' : '13px',
          color: active ? 'var(--accent-gold)' : 'rgba(236,230,219,0.42)',
        }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="input-field"
        style={{
          borderBottomColor: focused ? 'var(--accent-gold)' : 'rgba(200,165,106,0.25)',
        }}
      />
    </div>
  )
}

function FloatingSelect({
  label,
  options,
  value,
  onChange,
  name,
}: {
  label: string
  options: string[]
  value: string
  onChange: (v: string) => void
  name: string
}) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0

  return (
    <div className="relative pt-5">
      <label
        className="absolute font-mono uppercase tracking-wider transition-all duration-300 pointer-events-none"
        style={{
          top: active ? '0px' : '20px',
          fontSize: active ? '10px' : '13px',
          color: active ? 'var(--accent-gold)' : 'rgba(236,230,219,0.42)',
        }}
      >
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="input-field appearance-none cursor-pointer"
        style={{
          borderBottomColor: focused ? 'var(--accent-gold)' : 'rgba(200,165,106,0.25)',
          color: value ? 'var(--text-primary)' : 'transparent',
        }}
      >
        <option value="" />
        {options.map(o => <option key={o} value={o} style={{ background: 'var(--bg-elevated)' }}>{o}</option>)}
      </select>
    </div>
  )
}

function FloatingTextarea({
  label,
  value,
  onChange,
  name,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  name: string
}) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0

  return (
    <div className="relative pt-5">
      <label
        className="absolute font-mono uppercase tracking-wider transition-all duration-300"
        style={{
          top: active ? '0px' : '20px',
          fontSize: active ? '10px' : '13px',
          color: active ? 'var(--accent-gold)' : 'rgba(236,230,219,0.42)',
        }}
      >
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={4}
        className="input-field resize-none"
        style={{
          borderBottomColor: focused ? 'var(--accent-gold)' : 'rgba(200,165,106,0.25)',
        }}
      />
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', projectType: '', budget: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  const update = (field: keyof FormData) => (v: string) => setForm(prev => ({ ...prev, [field]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate send — replace with your EmailJS / Resend integration
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
  }

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden"
      style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}
    >
      <TechBgPattern />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px] py-24 md:py-28 lg:py-36">
        {/* Big CTA */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <h2
              className="font-display font-medium leading-none mb-6"
              style={{ fontSize: 'clamp(40px, 9vw, 120px)' }}
            >
              Let's build something
            </h2>
            <h2
              className="font-display font-medium italic leading-none mb-8"
              style={{ fontSize: 'clamp(40px, 9vw, 120px)', color: 'rgba(236,230,219,0.38)' }}
            >
              great together.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-base md:text-lg mb-8 md:mb-10"
            style={{ color: 'rgba(236,230,219,0.62)' }}
          >
            Currently available for freelance projects and collaborations.
          </motion.p>
          <motion.a
            href="#contact-form"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-mono text-sm uppercase tracking-wider font-medium transition-all duration-300 hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, var(--accent-gold), var(--accent-gold-bright))', color: '#171717' }}
          >
            Start a Project →
          </motion.a>
        </div>

        {/* Form section */}
        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 lg:gap-20">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="space-y-8"
          >
            <div className="label-tag mb-8">[10] GET IN TOUCH</div>

            {[
              { label: 'EMAIL', value: 'hasib@ebitans.com', icon: '✉' },
              { label: 'LINKEDIN', value: 'linkedin.com/in/hasibsoyad', icon: '↗' },
              { label: 'LOCATION', value: 'Dhaka, Bangladesh', icon: '◎' },
            ].map(item => (
              <div key={item.label}>
                <div className="font-mono text-[10px] uppercase tracking-wider mb-1" style={{ color: 'rgba(236,230,219,0.45)' }}>
                  {item.label}
                </div>
                <div className="flex items-center gap-2 text-base" style={{ color: 'var(--text-primary)' }}>
                  <span style={{ color: 'var(--accent-gold)' }}>{item.icon}</span>
                  {item.value}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="space-y-6"
          >
            <FloatingInput label="Your Name" name="name" value={form.name} onChange={update('name')} />
            <FloatingInput label="Email Address" type="email" name="email" value={form.email} onChange={update('email')} />
            <FloatingSelect
              label="Project Type"
              name="projectType"
              value={form.projectType}
              onChange={update('projectType')}
              options={['Web App', 'Mobile App', 'SaaS MVP', 'Consulting', 'CTO as a Service', 'Other']}
            />
            <FloatingSelect
              label="Budget Range"
              name="budget"
              value={form.budget}
              onChange={update('budget')}
              options={['$1–5k', '$5–15k', '$15–50k', '$50k+']}
            />
            <FloatingTextarea label="Tell me about your project" name="message" value={form.message} onChange={update('message')} />

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="w-full py-4 rounded-full font-mono text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                background: status === 'success' ? 'rgba(200,165,106,0.16)' : 'linear-gradient(135deg, var(--accent-gold), var(--accent-gold-bright))',
                color: status === 'success' ? 'var(--accent-gold)' : '#171717',
                border: status === 'success' ? '1px solid rgba(200,165,106,0.36)' : 'none',
              }}
            >
              {status === 'sending' && (
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {status === 'idle' && 'Send Message →'}
              {status === 'sending' && 'Sending...'}
              {status === 'success' && '✓ Message Sent!'}
              {status === 'error' && 'Try again →'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
