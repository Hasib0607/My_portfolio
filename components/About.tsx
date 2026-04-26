'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import TechBgPattern from './TechBgPattern'

const ease = [0.22, 1, 0.36, 1] as const

const paragraphs = [
  "It started at NSU — late nights, bad coffee, and a text editor that crashed more than it compiled. But something clicked. Code wasn't just logic; it was leverage. One person could build something used by thousands. That idea never left me.",
  "At Grameenphone, I built internal tools used by entire departments. At eCourier, I led backend infrastructure that handled thousands of deliveries a day. Enterprise taught me that scale isn't just a technical problem — it's an organizational one.",
  "In 2019, I stopped waiting for permission and founded eBitans. The agency model let me work across industries, shipping products for clients from Bangladesh to Europe. That's where most of those 500+ projects happened.",
  "Today I run four ventures, lead a growing team, and still write code every week. Not because I have to — because I genuinely love it. The problem-solving never gets old.",
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden lg:overflow-visible py-24 md:py-28 lg:py-36"
      style={{ background: 'var(--bg-primary)' }}
    >
      <TechBgPattern />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 lg:gap-20 items-start">

          {/* LEFT — polaroid photo */}
          <div className="relative flex justify-center lg:justify-start lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease }}
              className="relative w-full max-w-[320px]"
            >
              {/* Back polaroid */}
              <div
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid rgba(200,165,106,0.12)',
                  transform: 'rotate(4deg) translate(12px, 8px)',
                }}
              />

              {/* Main polaroid */}
              <motion.div
                whileHover={{ rotate: 0 }}
                initial={{ rotate: -3 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative rounded-lg p-3 pb-16"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid rgba(200,165,106,0.16)',
                  maxWidth: '320px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                }}
              >
                {/* Photo area */}
                <div
                  className="w-full aspect-[3/4] rounded flex items-center justify-center overflow-hidden"
                  style={{ background: 'var(--bg-tertiary)' }}
                >
                  <img
                    src="/images/portrait-about.png"
                    alt="Hasib Ahmed Soyad portrait"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Caption */}
                <div className="pt-4 text-center">
                  <span
                    className="font-body italic text-sm"
                    style={{ color: 'rgba(236,230,219,0.62)', fontStyle: 'italic' }}
                  >
                    hello, i'm hasib
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT — text */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="mb-4"
            >
              <div className="label-tag">[01] ABOUT</div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="font-display font-medium leading-none mb-10"
              style={{ fontSize: 'clamp(36px, 4.5vw, 72px)' }}
            >
              Not just another<br />developer.
            </motion.h2>

            <div className="space-y-6 mb-12">
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease }}
                  className="text-base md:text-lg leading-relaxed max-w-xl"
                  style={{ color: 'rgba(236,230,219,0.72)' }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-8"
            >
              <svg viewBox="0 0 200 60" className="w-40 h-16" fill="none">
                <path
                  d="M10 40 C20 20, 40 10, 60 30 S90 50, 110 30 S150 5, 190 25"
                  stroke="var(--accent-gold)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d="M30 45 C50 35, 80 50, 100 38 S140 20, 170 40"
                  stroke="var(--accent-gold)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </motion.div>

            <motion.a
              href="/cv.pdf"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="btn-secondary"
            >
              Download Resume ↗
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
