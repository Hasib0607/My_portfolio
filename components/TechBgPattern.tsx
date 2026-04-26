'use client'
import { useEffect, useRef } from 'react'

const TECH_ITEMS = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go', 'Rust',
  'Docker', 'AWS', 'K8s', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis',
  'Flutter', 'Swift', 'Kotlin', 'Vue', 'Angular', 'Svelte', 'Tailwind',
  'Git', 'Linux', 'Nginx', 'Terraform', 'CI/CD', 'REST', 'gRPC',
  '{}', '()', '=>', '[]', '//', '<!-- -->', '<>', '&&', '||', '/*',
  '01', '10', '::1', 'npm', 'yarn', 'pnpm', 'bun', 'deno', 'webpack',
  'JSX', 'TSX', 'API', 'SDK', 'ORM', 'JWT', 'OAuth', 'TLS', 'CDN',
]

interface PatternItem {
  text: string
  x: number
  y: number
  fontSize: number
  opacity: number
  rotation: number
}

export default function TechBgPattern({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const items: PatternItem[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      items.length = 0

      const cols = Math.ceil(canvas.width / 120)
      const rows = Math.ceil(canvas.height / 80)

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() > 0.45) continue
          const text = TECH_ITEMS[Math.floor(Math.random() * TECH_ITEMS.length)]
          items.push({
            text,
            x: c * 120 + Math.random() * 60,
            y: r * 80 + Math.random() * 40,
            fontSize: Math.random() > 0.7 ? 14 : Math.random() > 0.5 ? 11 : 9,
            opacity: 0.03 + Math.random() * 0.05,
            rotation: (Math.random() - 0.5) * 20 * (Math.PI / 180),
          })
        }
      }
      draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = `400 ${12}px 'JetBrains Mono', monospace`

      for (const item of items) {
        ctx.save()
        ctx.translate(item.x, item.y)
        ctx.rotate(item.rotation)
        ctx.font = `400 ${item.fontSize}px 'JetBrains Mono', monospace`
        ctx.fillStyle = `rgba(200, 165, 106, ${item.opacity})`
        ctx.fillText(item.text, 0, 0)
        ctx.restore()
      }
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
