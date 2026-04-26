'use client'
import { motion } from 'framer-motion'
import { services } from '@/lib/data'
import TechBgPattern from './TechBgPattern'

const ease = [0.22, 1, 0.36, 1] as const

function ServiceIcon({ type }: { type: string }) {
  const color = 'var(--accent-gold)'
  const icons: Record<string, JSX.Element> = {
    web: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={color} strokeWidth={1.5}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M2 7h20" />
      </svg>
    ),
    mobile: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={color} strokeWidth={1.5}>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" fill={color} />
      </svg>
    ),
    rocket: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={color} strokeWidth={1.5}>
        <path d="M12 2C12 2 8 6 8 12H16C16 6 12 2 12 2Z" />
        <path d="M8 12L6 20M16 12L18 20M9 20H15" />
        <circle cx="12" cy="9" r="1.5" fill={color} />
      </svg>
    ),
    compass: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={color} strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
      </svg>
    ),
    consulting: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke={color} strokeWidth={1.5}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
  }
  return icons[type] || icons.web
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden py-24 md:py-28 lg:py-36"
      style={{ background: 'var(--bg-primary)' }}
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
          <div className="label-tag mb-4">[06] SERVICES</div>
          <h2
            className="font-display font-medium leading-none mb-4"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          >
            What I build.
          </h2>
          <p className="text-lg max-w-lg" style={{ color: 'rgba(236,230,219,0.72)' }}>
            End-to-end product development and technical leadership.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              whileHover={{ y: -4, borderColor: 'rgba(200,165,106,0.28)' }}
              className={`relative group rounded-2xl p-8 cursor-default transition-all duration-300 ${
                service.id === 'fullstack'
                  ? 'lg:col-span-2 lg:row-span-2'
                  : service.id === 'cto'
                  ? 'lg:col-span-2'
                  : ''
              }`}
              style={{
                background: `linear-gradient(135deg, ${service.gradient === 'from-accent-gold/8 to-transparent' ? 'rgba(200,165,106,0.12)' : service.gradient === 'from-accent-cyan/5 to-transparent' ? 'rgba(184,139,85,0.09)' : 'var(--bg-elevated)'} 0%, var(--bg-primary) 100%)`,
                border: '1px solid rgba(200,165,106,0.14)',
                minHeight: service.id === 'fullstack' ? '280px' : '160px',
              }}
            >
              <div className="h-full flex flex-col">
                {/* Icon */}
                <div className="mb-4">
                  <ServiceIcon type={service.icon} />
                </div>

                {/* Title */}
                <h3
                  className="font-display font-medium mb-3"
                  style={{
                    fontSize: service.id === 'fullstack' ? 'clamp(22px, 2.5vw, 32px)' : '20px',
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm md:text-base leading-relaxed mb-4 flex-1"
                  style={{ color: 'rgba(236,230,219,0.72)' }}
                >
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded font-mono text-[10px] uppercase tracking-wider"
                      style={{
                        background: 'rgba(200,165,106,0.08)',
                        color: 'rgba(236,230,219,0.62)',
                        border: '1px solid rgba(200,165,106,0.18)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Badge */}
                {service.badge && (
                  <span
                    className="absolute top-4 right-4 px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider"
                    style={{
                      background: 'rgba(200,165,106,0.14)',
                      border: '1px solid rgba(200,165,106,0.36)',
                      color: 'var(--accent-gold)',
                    }}
                  >
                    {service.badge}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
