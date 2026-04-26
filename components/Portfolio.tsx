'use client'
import { useRef, useState, useCallback } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { projects, type ProjectCategory } from '@/lib/data'
import { useIsMobile, usePrefersReducedMotion } from '@/hooks/useMediaQuery'
import TechBgPattern from './TechBgPattern'

const CATEGORIES: ProjectCategory[] = ['All', 'Web', 'Mobile', 'SaaS', 'E-commerce']
const CARD_WIDTH = 440
const CARD_GAP = 24
const ease = [0.22, 1, 0.36, 1] as const

function ProjectCard({
  project,
  isCenter,
}: {
  project: typeof projects[0]
  isCenter: boolean
}) {
  return (
    <motion.div
      layout
      animate={{ scale: isCenter ? 1.04 : 1 }}
      transition={{ duration: 0.4 }}
      className="flex-shrink-0 rounded-2xl overflow-hidden cursor-default"
      style={{
        width: CARD_WIDTH,
        background: 'var(--bg-elevated)',
        border: '1px solid rgba(200,165,106,0.16)',
      }}
    >
      {/* Image area */}
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{ height: '260px', background: 'var(--bg-tertiary)' }}
      >
        {project.image.includes('placeholder') ? (
          <div
            className="font-display text-6xl font-medium"
            style={{ color: 'rgba(200,165,106,0.22)' }}
          >
            {project.name.charAt(0)}
          </div>
        ) : (
          <img
            src={project.image}
            alt={`${project.name} logo`}
            className="max-h-[170px] w-[80%] object-contain"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] to-transparent" />
      </div>

      {/* Details */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display font-medium text-xl">{project.name}</h3>
          <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: 'rgba(236,230,219,0.52)' }}>
            {project.year}
          </span>
        </div>
        <p className="text-sm mb-4" style={{ color: 'rgba(236,230,219,0.68)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span
              key={tech}
              className="px-2 py-1 rounded font-mono text-[10px] uppercase tracking-wider"
              style={{
                background: 'rgba(200,165,106,0.08)',
                border: '1px solid rgba(200,165,106,0.18)',
                color: 'rgba(236,230,219,0.62)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function MobilePortfolio({ filtered }: { filtered: typeof projects }) {
  return (
    <div className="space-y-6">
      <AnimatePresence mode="popLayout">
        {filtered.map(project => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: 'var(--bg-elevated)', border: '1px solid rgba(200,165,106,0.16)' }}
          >
            <div
              className="flex items-center justify-center"
              style={{ height: '200px', background: 'var(--bg-tertiary)' }}
            >
              {project.image.includes('placeholder') ? (
                <span className="font-display text-5xl font-medium" style={{ color: 'rgba(200,165,106,0.28)' }}>
                  {project.name.charAt(0)}
                </span>
              ) : (
                <img
                  src={project.image}
                  alt={`${project.name} logo`}
                  className="max-h-[120px] w-[78%] object-contain"
                />
              )}
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display font-medium text-lg">{project.name}</h3>
                <span className="font-mono text-[10px]" style={{ color: 'rgba(236,230,219,0.52)' }}>{project.year}</span>
              </div>
              <p className="text-sm mb-3" style={{ color: 'rgba(236,230,219,0.68)' }}>{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded font-mono text-[10px]" style={{ background: 'rgba(200,165,106,0.08)', color: 'rgba(236,230,219,0.62)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')
  const [centerIndex, setCenterIndex] = useState(0)
  const outerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const reducedMotion = usePrefersReducedMotion()

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  })

  const trackWidth = filtered.length * (CARD_WIDTH + CARD_GAP)
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(trackWidth - (typeof window !== 'undefined' ? window.innerWidth * 0.6 : 600))]
  )

  const handleCategory = useCallback((cat: ProjectCategory) => {
    setActiveCategory(cat)
    setCenterIndex(0)
  }, [])

  const currentProject = filtered[centerIndex] || filtered[0]

  return (
    <section
      id="portfolio"
      className="relative w-full"
      style={{ background: 'var(--bg-primary)' }}
    >
      {isMobile || reducedMotion ? (
        // Mobile layout
        <div className="py-24 px-6">
          <TechBgPattern />
          <div className="relative z-10">
            <div className="label-tag mb-4">[07] SELECTED WORK</div>
            <h2 className="font-display font-medium leading-none mb-8" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
              Selected work.
            </h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategory(cat)}
                  className="px-4 py-2 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-300"
                  style={{
                    background: activeCategory === cat ? 'var(--accent-gold)' : 'rgba(200,165,106,0.08)',
                    color: activeCategory === cat ? '#171717' : 'rgba(236,230,219,0.72)',
                    border: '1px solid rgba(200,165,106,0.18)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <MobilePortfolio filtered={filtered} />
          </div>
        </div>
      ) : (
        // Desktop pinned horizontal scroll
        <div ref={outerRef} style={{ height: `${filtered.length * 70}vh` }}>
          <div className="sticky top-0 h-screen overflow-hidden flex">
            {/* Left pinned info */}
            <div className="w-[40%] flex-shrink-0 flex flex-col justify-center px-16 xl:px-[120px] relative">
              <TechBgPattern />
              <div className="relative z-10">
                <div className="label-tag mb-6">[07] SELECTED WORK</div>
                <h2 className="font-display font-medium leading-none mb-8" style={{ fontSize: 'clamp(32px, 3.5vw, 56px)' }}>
                  Selected<br />work.
                </h2>

                {/* Filter chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategory(cat)}
                      className="px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all duration-300"
                      style={{
                        background: activeCategory === cat ? 'var(--accent-gold)' : 'rgba(200,165,106,0.08)',
                        color: activeCategory === cat ? '#171717' : 'rgba(236,230,219,0.72)',
                        border: '1px solid rgba(200,165,106,0.18)',
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Current project info */}
                {currentProject && (
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="font-display font-medium text-2xl mb-2">{currentProject.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {currentProject.techStack.map(t => (
                        <span key={t} className="px-2 py-1 rounded font-mono text-[10px]" style={{ background: 'rgba(200,165,106,0.08)', color: 'rgba(236,230,219,0.62)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={currentProject.link}
                      className="inline-flex items-center gap-2 font-mono text-sm text-[var(--accent-gold)] hover:text-[var(--accent-gold-bright)] transition-colors"
                    >
                      Case Study ↗
                    </a>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right scroll track */}
            <div className="flex-1 flex items-center overflow-hidden">
              <motion.div
                style={{ x }}
                className="flex gap-6 pl-8"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((project, i) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      onViewportEnter={() => setCenterIndex(i)}
                      transition={{ duration: 0.5 }}
                    >
                      <ProjectCard project={project} isCenter={centerIndex === i} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
