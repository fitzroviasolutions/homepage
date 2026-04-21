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
    <section ref={ref} className="relative min-h-screen overflow-hidden pt-16">
      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto flex min-h-[calc(100vh-4rem)] w-full items-center px-8 py-24"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.h1
            variants={item}
            className="mb-8 font-serif font-black text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.15] tracking-tight text-black"
          >
            Your business
            <br />
            is brilliant.
            <br />
            <em className="not-italic bg-[#d4ff3f]">We make sure</em>
            <br />
            the internet knows.
          </motion.h1>

          <motion.p variants={item} className="mb-12 max-w-md font-sans text-lg leading-relaxed text-black/50">
            We design, build, and manage websites, sharpen brands, and help businesses make better digital decisions.
          </motion.p>

          <motion.div variants={item}>
            <a
              href="#contact"
              className="inline-flex items-center bg-black px-10 py-5 font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-white transition-colors hover:bg-[#d4ff3f] hover:text-black"
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
