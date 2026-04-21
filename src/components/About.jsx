import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin } from 'lucide-react'

const stats = [
  { value: '50+', label: 'Projects shipped' },
  { value: '6', label: 'Years in business' },
  { value: '40+', label: 'Happy clients' },
  { value: '100%', label: 'Based in London' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="about" ref={ref} className="py-28 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs text-[#d4ff3f] tracking-[0.2em] uppercase mb-4">About us</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-8">
            Small team.{' '}
            <br />
            <span className="text-white/30">Big ambitions.</span>
          </h2>
          <div className="space-y-5 text-white/60 text-base leading-relaxed">
            <p>
              We're a tight-knit team of designers, developers, and strategists based in the heart of Fitzrovia.
              We work with ambitious businesses — from independents to scale-ups — who want their digital presence to do real work.
            </p>
            <p>
              No bloated retainers, no account managers you never meet, no outsourcing to people who don't care.
              Just smart, crafted work from people who are invested in your success.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-8 text-white/35 text-sm">
            <MapPin size={14} className="text-[#d4ff3f]" />
            Fitzrovia, London W1
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-7 flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <span className="text-4xl font-semibold text-white tracking-tight">{s.value}</span>
              <span className="text-white/40 text-sm">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
