import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

/* Unique abstract mockup per project */
function DeliMockup({ accent }) {
  return (
    <div className="w-full h-48 rounded-xl overflow-hidden relative" style={{ background: '#1a1a0a' }}>
      {/* Hero banner */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-[#2a2a08] to-[#1a1a0e] flex items-center px-5 gap-4">
        <div className="w-10 h-10 rounded-full border-2 flex-shrink-0" style={{ borderColor: accent + '80' }} />
        <div className="space-y-1.5 flex-1">
          <div className="h-2.5 rounded-full w-3/4" style={{ background: accent + '60' }} />
          <div className="h-1.5 rounded-full w-1/2 bg-white/15" />
        </div>
        <div className="w-16 h-6 rounded-full text-[8px] font-bold flex items-center justify-center" style={{ background: accent, color: '#080808' }}>Shop now</div>
      </div>
      {/* Product grid */}
      <div className="absolute inset-x-0 bottom-0 h-20 grid grid-cols-4 gap-1.5 px-3 pb-2 pt-1">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-md overflow-hidden relative" style={{ background: `hsl(${55 + i * 8}, 40%, ${10 + i * 3}%)` }}>
            <div className="absolute bottom-1 left-1 right-1 h-1 rounded-full bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  )
}

function PropertyMockup({ accent }) {
  return (
    <div className="w-full h-48 rounded-xl overflow-hidden relative" style={{ background: '#0a0a18' }}>
      {/* Nav line */}
      <div className="absolute top-0 inset-x-0 h-8 flex items-center px-4 gap-3 border-b border-white/5">
        <div className="w-12 h-1.5 rounded-full bg-white/20" />
        <div className="flex-1" />
        {[...Array(3)].map((_, i) => <div key={i} className="w-8 h-1.5 rounded-full bg-white/10" />)}
        <div className="w-12 h-5 rounded-full text-[7px] font-bold flex items-center justify-center ml-2" style={{ background: accent, color: '#080808' }}>List</div>
      </div>
      {/* Property cards */}
      <div className="absolute inset-x-3 top-10 bottom-3 grid grid-cols-2 gap-2">
        {[
          { price: '£2.4M', beds: '4 bed', area: 'Fitzrovia' },
          { price: '£895k', beds: '2 bed', area: 'Marylebone' },
        ].map((p, i) => (
          <div key={i} className="rounded-lg overflow-hidden border border-white/8" style={{ background: '#0e0e20' }}>
            <div className="h-14 relative overflow-hidden" style={{ background: `hsl(240, 30%, ${8 + i * 4}%)` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="absolute bottom-1.5 left-2">
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-sm" style={{ background: accent, color: '#080808' }}>{p.price}</span>
              </div>
            </div>
            <div className="p-2 space-y-1">
              <div className="text-[8px] text-white/60 font-medium">{p.area}</div>
              <div className="text-[7px] text-white/30">{p.beds} · Guide price</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StudioMockup({ accent }) {
  return (
    <div className="w-full h-48 rounded-xl overflow-hidden relative" style={{ background: '#180a0a' }}>
      {/* Instagram-style grid */}
      <div className="absolute inset-0 grid grid-cols-3 gap-px bg-black/40">
        {[
          { bg: '#1a0808', line1: '80%', line2: '50%' },
          { bg: '#1f0d0a', line1: '60%', line2: '70%' },
          { bg: '#180808', line1: '90%', line2: '40%' },
          { bg: '#1c0a0a', line1: '70%', line2: '55%' },
          { bg: '#200e0a', line1: '85%', line2: '45%' },
          { bg: '#160808', line1: '65%', line2: '75%' },
        ].map((cell, i) => (
          <div key={i} className="relative overflow-hidden" style={{ background: cell.bg }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            {/* Simulated interior photo lines */}
            <div className="absolute left-2 right-2 bottom-3 space-y-1">
              <div className="h-px rounded-full" style={{ width: cell.line1, background: accent + '40' }} />
              <div className="h-px rounded-full bg-white/10" style={{ width: cell.line2 }} />
            </div>
            {i === 4 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border flex items-center justify-center" style={{ borderColor: accent + '80' }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: accent }} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Follower counter overlay */}
      <div className="absolute bottom-2 right-2 rounded-lg px-2.5 py-1.5 bg-black/70 backdrop-blur border border-white/10">
        <div className="text-[9px] font-bold text-white">18.4k</div>
        <div className="text-[7px] text-white/40">followers</div>
      </div>
    </div>
  )
}

function MarketMockup({ accent }) {
  return (
    <div className="w-full h-48 rounded-xl overflow-hidden relative" style={{ background: '#0a180a' }}>
      {/* Brand logo area */}
      <div className="absolute inset-x-0 top-0 h-16 flex items-center justify-center border-b border-white/5" style={{ background: '#0c1a0c' }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm rotate-45 border-2" style={{ borderColor: accent }} />
          <div className="space-y-1">
            <div className="h-2.5 w-24 rounded-full" style={{ background: accent + '80' }} />
            <div className="h-1.5 w-16 rounded-full bg-white/15" />
          </div>
        </div>
      </div>
      {/* Social posts row */}
      <div className="absolute inset-x-3 bottom-3 top-20 grid grid-cols-3 gap-2">
        {[accent + '30', '#ffffff12', accent + '18'].map((bg, i) => (
          <div key={i} className="rounded-lg border border-white/8 overflow-hidden" style={{ background: bg }}>
            <div className="h-10 border-b border-white/5" style={{ background: `rgba(255,255,255,0.03)` }} />
            <div className="p-1.5 space-y-1">
              <div className="h-1 rounded-full bg-white/20 w-full" />
              <div className="h-1 rounded-full bg-white/10 w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const MOCKUPS = [DeliMockup, PropertyMockup, StudioMockup, MarketMockup]

const projects = [
  {
    title: 'Marylebone Deli',
    category: 'Web Design · Branding',
    year: '2024',
    desc: 'Full rebrand and e-commerce site for a beloved local deli, resulting in a 3× uplift in online orders.',
    color: '#111108',
    accent: '#d4ff3f',
  },
  {
    title: 'Fitzrovia Property Group',
    category: 'Web Design · Automation',
    year: '2024',
    desc: 'Property portal with automated lead nurturing and CRM sync, cutting admin time by 60%.',
    color: '#0c0c18',
    accent: '#7b8cff',
  },
  {
    title: 'Studio Nour',
    category: 'Social Media · SEO',
    year: '2023',
    desc: "Grew a Mayfair interior studio's Instagram from 1.2k to 18k followers in 8 months.",
    color: '#180c0c',
    accent: '#ff7b7b',
  },
  {
    title: 'Kingly Street Market',
    category: 'Branding · Social Media',
    year: '2023',
    desc: 'Visual identity and ongoing social strategy for a Carnaby Street collective of independent retailers.',
    color: '#0c180c',
    accent: '#7bffb3',
  },
]

export default function Work() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="work" ref={ref} className="py-28 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        className="flex items-end justify-between mb-16 gap-4 flex-wrap"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div>
          <p className="text-xs text-[#d4ff3f] tracking-[0.2em] uppercase mb-4">Selected work</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            Projects we're proud of.
          </h2>
        </div>
        <a href="#contact" className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1 border-b border-white/20 pb-0.5 hover:border-white/60">
          Work with us <ArrowUpRight size={14} />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => {
          const Mockup = MOCKUPS[i]
          return (
            <motion.div
              key={p.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5"
              style={{ background: p.color }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-15 transition-opacity duration-500 group-hover:opacity-30 pointer-events-none"
                style={{ background: p.accent }}
              />

              {/* Mockup image area */}
              <div className="relative p-4 pb-0">
                <Mockup accent={p.accent} />
              </div>

              {/* Text content */}
              <div className="relative p-6 pt-5 flex items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xs font-medium" style={{ color: p.accent }}>{p.category}</p>
                    <span className="text-white/15">·</span>
                    <p className="text-xs text-white/25">{p.year}</p>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1.5">{p.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed max-w-xs">{p.desc}</p>
                </div>
                <motion.div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border border-white/10"
                  whileHover={{ scale: 1.1 }}
                  style={{ background: p.accent + '18' }}
                >
                  <ArrowUpRight size={14} className="text-white/50" />
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
