'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { timeline } from '@/lib/data'
import TechBgPattern from './TechBgPattern'

const ease = [0.22, 1, 0.36, 1] as const

function MilestoneCard({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isLeft = item.side === 'left'

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 ${
        isLeft ? '' : 'md:direction-rtl'
      }`}
    >
      {/* Left side */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className={`${isLeft ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}
      >
        <div
          className="font-mono font-medium mb-2"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--accent-gold)' }}
        >
          {item.year}
        </div>
        <h3 className="font-display font-medium text-xl md:text-2xl mb-1">{item.role}</h3>
        <div className="font-mono text-sm mb-3" style={{ color: 'rgba(236,230,219,0.62)' }}>
          {item.company}
        </div>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(236,230,219,0.72)' }}>
          {item.description}
        </p>
      </motion.div>

      {/* Center dot (desktop) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`absolute left-1/2 top-3 -translate-x-1/2 hidden md:block`}
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background: 'var(--accent-gold)',
            boxShadow: '0 0 12px rgba(200,165,106,0.5)',
          }}
        />
      </motion.div>
    </div>
  )
}

export default function Timeline() {
  const outerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start center', 'end center'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      id="journey"
      ref={outerRef}
      className="relative w-full overflow-hidden py-24 md:py-28 lg:py-36"
      style={{ background: 'var(--bg-primary)' }}
    >
      <TechBgPattern />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 xl:px-[120px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-14 md:mb-16 lg:mb-20"
        >
          <div className="label-tag mb-4 inline-block">[08] JOURNEY</div>
          <h2 className="font-display font-medium leading-none" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
            A decade of building.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] hidden md:block" style={{ background: 'rgba(200,165,106,0.2)' }}>
            <motion.div
              className="absolute top-0 left-0 w-full origin-top"
              style={{
                height: lineHeight,
                background: 'linear-gradient(to bottom, var(--accent-gold), rgba(200,165,106,0.34))',
              }}
            />
          </div>

          {/* Mobile vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-[1px] md:hidden" style={{ background: 'rgba(200,165,106,0.2)' }} />

          {timeline.map((item, i) => (
            <MilestoneCard key={item.year + item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
