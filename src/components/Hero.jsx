import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'


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
        className="max-w-7xl mx-auto w-full px-8 py-24"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
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
      </motion.div>

      <div className="border-t border-black/8" />
    </section>
  )
}
