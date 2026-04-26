'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/lib/data'
import TechBgPattern from './TechBgPattern'

const ease = [0.22, 1, 0.36, 1] as const

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setActive(prev => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const goTo = (i: number) => {
    setDirection(i > active ? 1 : -1)
    setActive(i)
  }

  const current = testimonials[active]

  return (
    <section
      className="relative w-full overflow-hidden py-24 md:py-28 lg:py-36"
      style={{ background: 'var(--bg-primary)' }}
    >
      <TechBgPattern />

      <div className="relative z-10 max-w-[960px] mx-auto px-6 md:px-10 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 md:mb-14 lg:mb-16"
        >
          <div className="label-tag inline-block mb-4">[09] TESTIMONIALS</div>
          <h2 className="font-display font-medium leading-none" style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}>
            Kind words from clients.
          </h2>
        </motion.div>

        {/* Quote area */}
        <div className="relative min-h-[260px] md:min-h-[300px] lg:min-h-[320px] flex flex-col items-center justify-center">
          {/* Decorative quote mark */}
          <div
            className="absolute -top-8 left-1/2 -translate-x-1/2 font-display select-none pointer-events-none"
            style={{ fontSize: '160px', lineHeight: 1, color: 'rgba(200,165,106,0.12)' }}
          >
            "
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.6, ease }}
              className="relative z-10 flex flex-col items-center"
            >
              <p
                className="font-display font-medium mb-10 leading-relaxed"
                style={{ fontSize: 'clamp(18px, 2.5vw, 28px)', color: 'rgba(236,230,219,0.92)' }}
              >
                "{current.quote}"
              </p>

              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-mono text-sm font-medium flex-shrink-0"
                  style={{ background: 'rgba(200,165,106,0.16)', border: '1px solid rgba(200,165,106,0.36)', color: 'var(--accent-gold)' }}
                >
                  {current.initials}
                </div>

                {/* Name & role */}
                <div className="text-left">
                  <div className="font-display font-medium text-base">{current.name}</div>
                  <div className="font-mono text-sm" style={{ color: 'rgba(236,230,219,0.62)' }}>
                    {current.role} · {current.company}
                  </div>
                </div>

                {/* Stars */}
                <div className="ml-auto flex gap-1">
                  {[0, 1, 2, 3, 4].map(s => (
                    <span key={s} className="text-[var(--accent-gold)] text-base">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? '28px' : '6px',
                height: '4px',
                background: i === active ? 'var(--accent-gold)' : 'rgba(236,230,219,0.24)',
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
