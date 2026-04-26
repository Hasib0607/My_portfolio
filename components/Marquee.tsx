'use client'
import { motion } from 'framer-motion'
import { techStack } from '@/lib/data'

const items = [...techStack, ...techStack]

export default function Marquee() {
  return (
    <div
      className="relative w-full overflow-hidden py-12 md:py-20"
      style={{
        borderTop: '1px solid rgba(200,165,106,0.12)',
        borderBottom: '1px solid rgba(200,165,106,0.12)',
        background: 'var(--bg-primary)',
      }}
    >
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="font-display font-medium mx-8 md:mx-16 transition-colors duration-300 hover:text-[var(--accent-gold)] cursor-default"
              style={{
                fontSize: 'clamp(36px, 6vw, 80px)',
                color: 'rgba(236,230,219,0.24)',
              }}
            >
              {item}
            </span>
            <span
              className="font-display"
              style={{
                fontSize: 'clamp(24px, 4vw, 48px)',
                color: 'rgba(200,165,106,0.48)',
              }}
            >
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
