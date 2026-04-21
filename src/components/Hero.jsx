import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function WestminsterSign({ street, district, rotate = 0, delay = 0 }) {
  return (
    <motion.div
      style={{ rotate, fontFamily: "'Barlow Condensed', sans-serif" }}
      className="inline-block shadow-[2px_3px_12px_rgba(0,0,0,0.18)]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="bg-white border border-black/15" style={{ minWidth: 300 }}>
        {/* Top row: street name left, district right */}
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 gap-6">
          <span className="font-black text-black text-2xl uppercase leading-none tracking-wide">
            {street}
          </span>
          <span className="font-black text-2xl uppercase leading-none tracking-wide whitespace-nowrap" style={{ color: '#860B04' }}>
            {district}
          </span>
        </div>
        {/* Dividing line */}
        <div className="h-[2px] bg-black" />
        {/* Bottom row: City of Westminster */}
        <div className="px-4 py-1.5 text-center">
          <span className="font-bold text-xs uppercase tracking-[0.18em]" style={{ color: '#860B04' }}>
            City of Westminster
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section ref={ref} className="relative min-h-screen pt-16 flex flex-col justify-center overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto w-full px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left — text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="font-serif font-black text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.15] tracking-tight text-black mb-8"
          >
            Your business<br />
            is brilliant.<br />
            <em className="not-italic bg-[#d4ff3f]">We make sure</em><br />
            the internet knows.
          </motion.h1>

          <motion.p variants={item} className="font-sans text-lg text-black/50 max-w-md mb-12 leading-relaxed">
            We build websites, grow social audiences and tighten up branding — the full digital picture for your business, handled properly.
          </motion.p>

          <motion.div variants={item}>
            <a
              href="#contact"
              className="inline-flex items-center bg-black text-white font-sans font-bold text-[11px] tracking-[0.15em] uppercase px-10 py-5 hover:bg-[#d4ff3f] hover:text-black transition-colors"
            >
              Contact us
            </a>
          </motion.div>
        </motion.div>

        {/* Right — street signs */}
        <div className="hidden lg:flex flex-col items-center gap-6">
          <WestminsterSign street="Great Titchfield Street" district="W1W" rotate={-2} delay={0.5} />
          <WestminsterSign street="Fitzrovia" district="W1T" rotate={1.5} delay={0.65} />
          <WestminsterSign street="Charlotte Street" district="W1T" rotate={-1} delay={0.8} />
        </div>
      </motion.div>

      <div className="border-t border-black/8" />
    </section>
  )
}
