'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import TechBgPattern from './TechBgPattern'

const ROLES = [
  'Full-Stack Developer',
  'CTO @ eBitans',
  'Tech Entrepreneur',
  'Founder × 4',
]

const NAME_LINE1 = 'HASIB'.split('')
const NAME_LINE2_SMALL = 'AHMED'
const NAME_LINE2_MAIN = 'SOYAD'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleVisible, setRoleVisible] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false)
      setTimeout(() => {
        setRoleIndex(prev => (prev + 1) % ROLES.length)
        setRoleVisible(true)
      }, 400)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] flex items-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background layers */}
      <TechBgPattern className="opacity-100" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,165,106,1) 1px, transparent 1px), linear-gradient(to right, rgba(200,165,106,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated blobs */}
      <motion.div
        animate={{ x: [0, 20, -10, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,165,106,0.11) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <motion.div
        animate={{ x: [0, -20, 10, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(184,139,85,0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Main content */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 xl:px-[120px] pt-20 md:pt-24 pb-12 md:pb-16"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-0">
          {/* LEFT COLUMN */}
          <div className="w-full flex-1 lg:pr-8">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                border: '1px solid rgba(200,165,106,0.28)',
                background: 'rgba(200,165,106,0.08)',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-gold)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-gold)]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent-gold)]">
                Available for Freelance
              </span>
            </motion.div>

            {/* Name mega text */}
            <div className="mb-6">
              <div className="flex overflow-hidden">
                {NAME_LINE1.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.06, ease }}
                    className="font-display font-medium text-[var(--text-primary)] leading-none select-none"
                    style={{ fontSize: 'clamp(42px, 8.5vw, 128px)' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease }}
                className="flex items-center gap-4 md:gap-6 leading-none italic select-none"
                style={{ color: 'rgba(236,230,219,0.24)' }}
              >
                <span
                  className="font-display font-medium"
                  style={{ fontSize: 'clamp(18px, 3.4vw, 34px)'}}
                >
                  {NAME_LINE2_SMALL}
                </span>
                <span
                  className="font-display font-medium"
                  style={{ fontSize: 'clamp(30px, 5.8vw, 68px)' }}
                >
                  {NAME_LINE2_MAIN}
                </span>
              </motion.div>
            </div>

            {/* Role rotator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="flex items-center gap-4 mb-7"
            >
              <div className="w-8 h-[1px] bg-[var(--accent-gold)]" />
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: roleVisible ? 1 : 0, y: roleVisible ? 0 : -8 }}
                transition={{ duration: 0.35 }}
                className="font-mono text-sm uppercase tracking-wider text-[var(--accent-gold)]"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </motion.div>

            {/* Pitch paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.7, ease }}
              className="text-base md:text-lg mb-10 max-w-xl leading-relaxed"
              style={{ color: 'rgba(236,230,219,0.62)' }}
            >
              Building scalable digital products for 10+ years.{' '}
              <span style={{ color: 'rgba(236,230,219,0.9)' }}>
                500+ projects shipped.
              </span>{' '}
              Founder of eBitans, WaveBox, Nirapod QR &amp; eCommerceX.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.7, ease }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-mono text-sm uppercase tracking-wider font-medium transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-gold), var(--accent-gold-bright))',
                  color: '#171717',
                }}
              >
                View my work
                <span className="transition-transform duration-300 group-hover:translate-y-[2px]">↓</span>
              </a>
              <a
                href="/cv.pdf"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-mono text-sm uppercase tracking-wider font-medium transition-all duration-300"
                style={{
                  border: '1px solid rgba(200,165,106,0.28)',
                  color: 'var(--text-primary)',
                }}
              >
                Download CV
                <span className="transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">↗</span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease }}
            className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[520px] flex-shrink-0 self-center lg:self-auto lg:ml-auto lg:-mr-10 xl:-mr-[120px]"
          >
            <motion.div
              style={{
                scale: portraitScale,
                aspectRatio: '3/4',
                border: '1px solid rgba(200,165,106,0.2)',
                background: 'linear-gradient(135deg, rgba(200,165,106,0.11) 0%, transparent 50%, rgba(184,139,85,0.09) 100%)',
              }}
              className="relative rounded-3xl overflow-hidden"
            >
              {/* Portrait image */}
              <div className="absolute inset-0 flex items-end justify-center">
                <div
                  className="relative h-full w-[92%] overflow-hidden"
                  style={{
                    filter: 'drop-shadow(0 0 45px rgba(200,165,106,0.18))',
                  }}
                >
                  <img
                    src="/images/portrait-hero.png"
                    alt="Hasib Ahmed Soyad portrait"
                    className="absolute bottom-0 left-1/2 sm:left-[58%] lg:left-2/3 h-[82%] sm:h-[90%] lg:h-[95%] pl-10 w-auto max-w-none object-contain"
                    style={{ transform: 'translateX(-50%) scaleX(-1)' }}
                  />
                </div>
              </div>

              {/* Corner details */}
              <div
                className="absolute top-4 right-4 text-right font-mono leading-tight"
                style={{ fontSize: '9px', color: 'rgba(236,230,219,0.42)' }}
              >
                <div>REC ●</div>
                <div>2026</div>
              </div>
              <div
                className="absolute bottom-4 right-4 font-mono"
                style={{ fontSize: '9px', color: 'rgba(236,230,219,0.36)' }}
              >
                HA.SYD_01
              </div>

              {/* Floating stat pills */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm"
                style={{
                  background: 'rgba(23,23,23,0.82)',
                  border: '1px solid rgba(200,165,106,0.2)',
                }}
              >
                <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                  10+ YEARS
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-6 right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm"
                style={{
                  background: 'rgba(200,165,106,0.14)',
                  border: '1px solid rgba(200,165,106,0.36)',
                }}
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent-gold)]">
                  500+ PROJECTS
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-6 left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm"
                style={{
                  background: 'rgba(23,23,23,0.82)',
                  border: '1px solid rgba(200,165,106,0.2)',
                }}
              >
                <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                  4 VENTURES
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(236,230,219,0.45)' }}>
            Scroll
          </span>
          <div className="relative w-[1px] h-10 overflow-hidden" style={{ background: 'rgba(236,230,219,0.18)' }}>
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 w-full h-1 rounded-full bg-[var(--accent-gold)]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
