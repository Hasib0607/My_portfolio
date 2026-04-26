'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '@/lib/data'
import TechBgPattern from './TechBgPattern'

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <div ref={ref} className="font-display font-medium leading-none" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
      {count}{suffix}
    </div>
  )
}

const ease = [0.22, 1, 0.36, 1] as const

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      className="relative w-full overflow-hidden py-20 md:py-24 lg:py-32"
      style={{
        borderTop: '1px solid rgba(200,165,106,0.12)',
        borderBottom: '1px solid rgba(200,165,106,0.12)',
        background: 'var(--bg-primary)',
      }}
    >
      <TechBgPattern />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-16"
        >
          <div className="label-tag mb-4">[04] BY THE NUMBERS</div>
          <h2
            className="font-display font-medium leading-none"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            A decade of shipping.
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="group relative py-8 pr-8 cursor-default"
              style={{ borderBottom: '1px solid rgba(200,165,106,0.16)' }}
            >
              <motion.div
                className="transition-colors duration-300 group-hover:text-[var(--accent-gold)]"
                style={{ color: 'var(--text-primary)' }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </motion.div>
              <div
                className="font-mono text-xs uppercase tracking-wider mt-3"
                style={{ color: 'rgba(236,230,219,0.62)' }}
              >
                {stat.label}
              </div>
              {/* Hover line */}
              <div
                className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-[var(--accent-gold)] transition-transform duration-500 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
