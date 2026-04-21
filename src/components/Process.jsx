import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We dig into your business, your audience, and what success actually looks like for you. No templates, no assumptions.',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'A clear plan of attack — channels, timelines, deliverables. We agree everything before a pixel gets pushed.',
  },
  {
    num: '03',
    title: 'Create',
    desc: "This is where it comes alive. Fast iteration, real collaboration. You're never left in the dark.",
  },
  {
    num: '04',
    title: 'Launch & Grow',
    desc: "Ship it, measure it, improve it. We don't disappear after launch — we're in it for the long haul.",
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="process" ref={ref} className="bg-[#f7f7f5] border-t border-black/5 py-28">
      <div className="px-6 max-w-7xl mx-auto w-full">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff3f] border border-black/20 inline-block" />
            <p className="text-xs text-black/40 tracking-[0.2em] uppercase">How it works</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0a0a0a] tracking-tight leading-tight max-w-lg">
            Simple process,{' '}
            <span className="text-black/30">exceptional results.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-black/8" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 rounded-full bg-white border border-black/10 flex items-center justify-center relative z-10 shadow-sm">
                    <span className="font-mono text-sm font-semibold text-[#0a0a0a]">{step.num}</span>
                  </div>
                </div>
                <h3 className="text-[#0a0a0a] font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-black/45 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
