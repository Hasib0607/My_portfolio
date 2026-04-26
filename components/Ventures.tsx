'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { ventures } from '@/lib/data'
import { useIsMobile, usePrefersReducedMotion } from '@/hooks/useMediaQuery'
import TechBgPattern from './TechBgPattern'

const ease = [0.22, 1, 0.36, 1] as const

function QRCard({ color }: { color: string }) {
  const grid = Array.from({ length: 64 }, (_, i) => (i * 7 + 3) % 3 !== 0)
  return (
    <div className="grid grid-cols-8 gap-1 p-2">
      {grid.map((filled, i) => (
        <div
          key={i}
          className="aspect-square rounded-[2px]"
          style={{
            background: filled ? color : 'transparent',
            border: filled ? 'none' : '1px solid rgba(255,154,60,0.1)',
          }}
        />
      ))}
    </div>
  )
}

function VentureCard({ venture }: { venture: typeof ventures[0] }) {
  return (
    <div
      className="rounded-2xl overflow-hidden relative"
      style={{
        aspectRatio: '4/3',
        background: `linear-gradient(135deg, ${venture.accentColor}18 0%, transparent 100%)`,
        border: '1px solid rgba(200,165,106,0.16)',
      }}
    >
      <div className="absolute top-4 left-4 flex gap-1.5">
        {[0, 1, 2].map(d => (
          <div key={d} className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
        ))}
      </div>
      <div
        className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-wider"
        style={{ color: 'rgba(236,230,219,0.42)' }}
      >
        STEP {venture.step}/04
      </div>

      <div className="absolute inset-0 flex items-center justify-center p-8">
        {venture.logo && (
          <img
            src={venture.logo}
            alt={`${venture.title} logo`}
            className="absolute top-10 left-1/2 -translate-x-1/2 max-h-14 w-auto object-contain opacity-95"
          />
        )}
        {venture.cardType === 'stats' && venture.stats && (
          <div className="w-full space-y-4 pt-14">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider mb-1" style={{ color: 'rgba(236,230,219,0.52)' }}>ROLE</div>
              <div className="font-display font-medium text-base" style={{ color: 'var(--text-primary)' }}>{venture.stats.role}</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider mb-1" style={{ color: 'rgba(236,230,219,0.52)' }}>CLIENTS</div>
                <div className="font-display font-medium text-3xl" style={{ color: venture.accentColor }}>{venture.stats.clients}</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider mb-1" style={{ color: 'rgba(236,230,219,0.52)' }}>FOUNDED</div>
                <div className="font-display font-medium text-3xl" style={{ color: 'var(--text-primary)' }}>{venture.stats.founded}</div>
              </div>
            </div>
          </div>
        )}

        {venture.cardType === 'tags' && venture.tags && (
          <div className="w-full space-y-4 pt-14">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider mb-3" style={{ color: 'rgba(236,230,219,0.52)' }}>STACK:</div>
              <div className="flex flex-wrap gap-2">
                {venture.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider" style={{ background: `${venture.accentColor}15`, border: `1px solid ${venture.accentColor}30`, color: venture.accentColor }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="font-mono text-xs tracking-wider" style={{ color: venture.accentColor }}>
              STATUS · {venture.status}
            </div>
          </div>
        )}

        {venture.cardType === 'qr' && <div className="pt-12"><QRCard color={venture.accentColor} /></div>}

        {venture.cardType === 'commerce' && (
          <div className="w-full space-y-4 pt-14">
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-lg" style={{ background: `linear-gradient(135deg, ${venture.accentColor}20, ${venture.accentColor}05)`, border: '1px solid rgba(200,165,106,0.14)' }} />
              ))}
            </div>
            <div className="text-center">
              <div className="font-mono text-[10px] uppercase tracking-wider mb-1" style={{ color: 'rgba(236,230,219,0.52)' }}>GMV</div>
              <div className="font-display font-medium text-3xl" style={{ color: venture.accentColor }}>{venture.gmv}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function VentureStep({
  venture,
  index,
  total,
  scrollYProgress,
}: {
  venture: typeof ventures[0]
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const start = index / total
  const end = (index + 1) / total

  const opacity = useTransform(
    scrollYProgress,
    [start - 0.05, start + 0.1, end - 0.1, end + 0.05],
    [0, 1, 1, 0]
  )
  const y = useTransform(
    scrollYProgress,
    [start - 0.05, start + 0.1, end - 0.1, end + 0.05],
    [60, 0, 0, -60]
  )
  const scale = useTransform(
    scrollYProgress,
    [start - 0.05, start + 0.1, end - 0.1, end + 0.05],
    [0.94, 1, 1, 0.96]
  )

  return (
    <motion.div
      key={venture.id}
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center"
    >
      <div className="grid grid-cols-2 gap-16 w-full">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6">
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full"
              style={{ background: venture.accentColor }}
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: venture.accentColor }}>
              {venture.eyebrow}
            </span>
          </div>
          <h3 className="font-display font-medium mb-6 leading-none" style={{ fontSize: 'clamp(48px, 5vw, 72px)' }}>
            {venture.title}
          </h3>
          <p className="text-lg leading-relaxed max-w-md" style={{ color: 'rgba(236,230,219,0.72)' }}>
            {venture.description}
          </p>
        </div>
        <div className="flex items-center">
          <VentureCard venture={venture} />
        </div>
      </div>
    </motion.div>
  )
}

function MobileVentures() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-16 xl:px-[120px] py-24 md:py-32">
      <div className="mb-16">
        <div className="label-tag mb-4">[05] VENTURES</div>
        <h2 className="font-display font-medium leading-none" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
          Four brands,<br />one builder.
        </h2>
      </div>
      <div className="space-y-24">
        {ventures.map((v) => (
          <motion.div
            key={v.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full"
                  style={{ background: v.accentColor }}
                />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: v.accentColor }}>
                  {v.eyebrow}
                </span>
              </div>
              <h3 className="font-display font-medium mb-4 leading-none" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
                {v.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(236,230,219,0.72)' }}>
                {v.description}
              </p>
            </div>
            <VentureCard venture={v} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function DesktopVentures() {
  const outerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const headerOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.3])
  const lineScaleX = scrollYProgress

  return (
    <div ref={outerRef} className="relative" style={{ height: `${ventures.length * 120}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <TechBgPattern />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(200,165,106,1) 1px, transparent 1px), linear-gradient(to right, rgba(200,165,106,1) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </motion.div>

        <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-16 xl:px-[120px] flex flex-col">
          <motion.div style={{ opacity: headerOpacity }} className="flex items-end justify-between pt-12 pb-8">
            <div>
              <div className="label-tag mb-3">[05] VENTURES</div>
              <h2 className="font-display font-medium leading-none" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
                Four brands, one builder.
              </h2>
            </div>
            <span className="font-mono text-sm" style={{ color: 'rgba(236,230,219,0.42)' }}>04 steps</span>
          </motion.div>

          <div className="relative flex-1">
            {ventures.map((venture, i) => (
              <VentureStep
                key={venture.id}
                venture={venture}
                index={i}
                total={ventures.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          <div className="flex items-center gap-4 pb-8">
            <span className="font-mono text-[10px]" style={{ color: 'rgba(236,230,219,0.5)' }}>01</span>
            <div className="flex-1 h-[1px] relative" style={{ background: 'rgba(200,165,106,0.2)' }}>
              <motion.div
                className="absolute left-0 top-0 h-full bg-[var(--accent-gold)]"
                style={{ scaleX: lineScaleX, originX: 0, width: '100%' }}
              />
            </div>
            <span className="font-mono text-[10px]" style={{ color: 'rgba(236,230,219,0.5)' }}>04</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Ventures() {
  const isMobile = useIsMobile()
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section style={{ background: 'var(--bg-primary)' }}>
      {isMobile || reducedMotion ? <MobileVentures /> : <DesktopVentures />}
    </section>
  )
}
