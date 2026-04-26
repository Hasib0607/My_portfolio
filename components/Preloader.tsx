'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BOOT_LINES = [
  '> initializing portfolio.exe',
  '> loading core modules....... ok',
  '> compiling 500+ projects.... ok',
  '> injecting creativity........ ok',
  '> welcome, visitor_',
]

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [done, setDone] = useState(false)
  const progressRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Stagger boot lines
    BOOT_LINES.forEach((_, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, i])
      }, i * 380 + 200)
    })

    // Smooth progress counter
    let p = 0
    progressRef.current = setInterval(() => {
      p += Math.random() * 3 + 1
      if (p >= 100) {
        p = 100
        clearInterval(progressRef.current!)
        setTimeout(() => {
          setExiting(true)
          setTimeout(() => {
            setDone(true)
            onComplete()
          }, 900)
        }, 400)
      }
      setProgress(Math.min(p, 100))
    }, 30)

    return () => {
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [onComplete])

  if (done) return null

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: 'var(--bg-primary)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(200,165,106,1) 1px, transparent 1px), linear-gradient(to right, rgba(200,165,106,1) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          {/* Version tag */}
          <div className="absolute top-8 right-8 font-mono text-[10px] text-[var(--text-muted)]/70 tracking-wider">
            HAS.SYS v10.0
          </div>

          {/* Main content */}
          <div className="w-full max-w-lg px-6 mx-auto">
            {/* Boot lines */}
            <div className="space-y-2 mb-8">
              {BOOT_LINES.map((line, i) => {
                const isVisible = visibleLines.includes(i)
                const isActive = visibleLines[visibleLines.length - 1] === i
                if (!isVisible) return null
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`font-mono text-sm md:text-base flex items-center gap-1 ${
                      isActive ? 'text-[var(--accent-gold)]' : 'text-[var(--text-primary)]/70'
                    }`}
                  >
                    {line}
                    {isActive && (
                      <span className="inline-block w-2 h-4 bg-[var(--accent-gold)] animate-[blink_1s_step-end_infinite]" />
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[var(--text-muted)]/80 uppercase tracking-wider">
                  loading
                </span>
                <span className="font-mono text-[10px] text-[var(--accent-gold)]">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, var(--accent-gold), var(--accent-gold-bright))',
                    width: `${progress}%`,
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="exit"
          className="fixed inset-0 z-[200] pointer-events-none"
          initial={{ opacity: 1 }}
        >
          {/* Left panel */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1/2"
            style={{ background: 'var(--bg-primary)' }}
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* Right panel */}
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-1/2"
            style={{ background: 'var(--bg-primary)' }}
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
