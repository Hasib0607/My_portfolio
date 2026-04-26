'use client'
import { motion } from 'framer-motion'
import TechBgPattern from './TechBgPattern'

const ease = [0.22, 1, 0.36, 1] as const

function InfoChip({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div
      className={`px-4 py-2 rounded-full font-mono text-[11px] tracking-wide ${className}`}
      style={{
        border: '1px solid rgba(200,165,106,0.18)',
        background: 'rgba(23,23,23,0.78)',
        color: 'rgba(236,230,219,0.72)',
      }}
    >
      {text}
    </div>
  )
}

export default function HeroAlt() {
  return (
    <section
      id="hero-alt"
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: 'var(--bg-primary)' }}
    >
      <TechBgPattern />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,165,106,1) 1px, transparent 1px), linear-gradient(to right, rgba(200,165,106,1) 1px, transparent 1px)',
          backgroundSize: '62px 62px',
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px] py-16 md:py-20">
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <div className="font-display font-medium text-2xl md:text-3xl">hasib.design</div>
          <div className="hidden md:flex items-center gap-3">
            <InfoChip text="email: hasib@ebitans.com" />
            <button
              className="px-6 py-3 rounded-full font-mono text-sm font-medium transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, var(--accent-gold), var(--accent-gold-bright))',
                color: '#171717',
              }}
            >
              hit me up ↗
            </button>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-wrap gap-3 mb-6"
          >
            <InfoChip text="I'm fun & I get the job done" />
            <InfoChip text="I'm a visual builder" />
            <InfoChip text="Based in Dhaka" className="hidden md:block" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-display font-medium leading-[0.95] select-none"
            style={{ fontSize: 'clamp(58px, 13vw, 180px)' }}
          >
            I&apos;m Hasib
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="max-w-3xl text-lg md:text-4xl leading-tight mt-4 md:mt-6"
            style={{ color: 'rgba(236,230,219,0.48)' }}
          >
            Full-stack product builder with a strong focus on clean UX, strong systems, and shipped outcomes.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <p className="font-display text-4xl md:text-6xl leading-none" style={{ color: 'rgba(236,230,219,0.72)' }}>
              Want help building your next product?
            </p>
          </div>

          <button
            className="self-start md:self-auto px-8 py-4 rounded-full font-display text-2xl transition-all duration-300 hover:translate-x-1"
            style={{
              border: '1px solid rgba(200,165,106,0.22)',
              background: 'rgba(23,23,23,0.72)',
              color: 'var(--text-primary)',
            }}
          >
            Let&apos;s talk! →
          </button>
        </motion.div>

        <div className="mt-10 md:mt-14 flex items-center justify-center">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
            style={{ background: 'rgba(200,165,106,0.14)', border: '1px solid rgba(200,165,106,0.28)' }}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent-gold)]">available for work</span>
          </div>
        </div>
      </div>
    </section>
  )
}

