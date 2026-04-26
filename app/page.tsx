'use client'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Preloader from '@/components/Preloader'
import Hero from '@/components/Hero'
import HeroAlt from '@/components/HeroAlt'
import Marquee from '@/components/Marquee'
import Stats from '@/components/Stats'
import Ventures from '@/components/Ventures'
import About from '@/components/About'
import Services from '@/components/Services'
import Timeline from '@/components/Timeline'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

const Portfolio = dynamic(() => import('@/components/Portfolio'), {
  ssr: false,
  loading: () => (
    <div className="h-screen flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
      <span className="font-mono text-sm text-[var(--accent-gold)]">Loading portfolio...</span>
    </div>
  ),
})

const HERO_VARIANT: 'classic' | 'alt' = 'classic'

export default function Page() {
  const [preloaderDone, setPreloaderDone] = useState(false)
  useSmoothScroll()

  useEffect(() => {
    if (!preloaderDone) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [preloaderDone])

  return (
    <>
      <Preloader onComplete={() => setPreloaderDone(true)} />

      <main style={{ opacity: preloaderDone ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        {HERO_VARIANT === 'classic' ? <Hero /> : <HeroAlt />}
        <Marquee />
        <Stats />
        <Ventures />
        <About />
        <Services />
        <Portfolio />
        <Timeline />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
