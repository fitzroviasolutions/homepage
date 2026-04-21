import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    num: '01',
    title: 'Marylebone Deli',
    category: 'Web Design · Branding',
    year: '2024',
    desc: 'Full rebrand and e-commerce site for a beloved local deli — 3× uplift in online orders.',
    accent: '#d4ff3f',
    bg: '#141408',
  },
  {
    num: '02',
    title: 'Fitzrovia Property Group',
    category: 'Web Design · Automation',
    year: '2024',
    desc: 'Property portal with automated lead nurturing and CRM sync, cutting admin time by 60%.',
    accent: '#7b8cff',
    bg: '#08081a',
  },
  {
    num: '03',
    title: 'Studio Nour',
    category: 'Social Media · SEO',
    year: '2023',
    desc: "Grew a Mayfair interior studio's Instagram from 1.2k to 18k followers in 8 months.",
    accent: '#ff7b7b',
    bg: '#1a0808',
  },
  {
    num: '04',
    title: 'Kingly Street Market',
    category: 'Branding · Social Media',
    year: '2023',
    desc: 'Visual identity and social strategy for a Carnaby Street collective of independent retailers.',
    accent: '#7bffb3',
    bg: '#08140a',
  },
]

export default function Work() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="work" ref={ref} className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="flex items-end justify-between mb-16 gap-4 flex-wrap border-b border-white/10 pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif font-black text-4xl md:text-5xl text-white tracking-tight">
            Selected work
          </h2>
          <a href="#contact" className="font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors flex items-center gap-1.5">
            Work with us <ArrowUpRight size={13} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="group cursor-pointer"
              style={{ background: p.bg }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image band */}
              <div className="relative h-52 overflow-hidden flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 60% 40%, ${p.accent}, transparent 70%)` }}
                />
                <span className="font-serif font-black text-[8rem] leading-none select-none opacity-[0.06]" style={{ color: p.accent }}>
                  {p.num}
                </span>
              </div>

              {/* Text */}
              <div className="p-8 border-t border-white/5 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-sans text-[10px] font-bold tracking-[0.15em] uppercase" style={{ color: p.accent }}>{p.category}</span>
                    <span className="text-white/15">·</span>
                    <span className="font-sans text-[10px] text-white/25">{p.year}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white mb-2">{p.title}</h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed max-w-xs">{p.desc}</p>
                </div>
                <ArrowUpRight size={16} className="text-white/25 group-hover:text-white/60 transition-colors mt-1 flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
