'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const FULL_NAME = 'HASIB AHMED SOYAD · '
const MARQUEE_TEXT = FULL_NAME.repeat(8)

function LiveClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const dhaka = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
      setTime(`${dhaka} DHK`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="font-mono text-sm" style={{ color: 'rgba(236,230,219,0.45)' }}>
      {time}
    </span>
  )
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
      style={{ border: '1px solid rgba(200,165,106,0.2)', color: 'rgba(236,230,219,0.62)' }}
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid rgba(200,165,106,0.12)' }}>
      {/* Name marquee */}
      <div className="relative overflow-hidden py-10" aria-hidden="true">
        <motion.div
          className="whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          style={{
            display: 'inline-block',
            fontSize: 'clamp(64px, 12vw, 160px)',
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            color: 'rgba(236,230,219,0.05)',
            letterSpacing: '0.02em',
          }}
        >
          {MARQUEE_TEXT + MARQUEE_TEXT}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px] py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Social icons */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <SocialIcon href="https://linkedin.com/in/hasibsoyad" label="LinkedIn">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </SocialIcon>
          <SocialIcon href="https://github.com/hasibsoyad" label="GitHub">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </SocialIcon>
          <SocialIcon href="https://twitter.com/hasibsoyad" label="Twitter">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </SocialIcon>
          <SocialIcon href="https://instagram.com/hasibsoyad" label="Instagram">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </SocialIcon>
        </motion.div>

        {/* Copyright */}
        <div className="font-mono text-[11px] text-center" style={{ color: 'rgba(236,230,219,0.45)' }}>
          © 2026 Hasib Ahmed Soyad · Built with Next.js &amp; caffeine
        </div>

        {/* Live clock */}
        <LiveClock />
      </div>
    </footer>
  )
}
