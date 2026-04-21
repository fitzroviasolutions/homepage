import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

const TICKER_ITEMS = [
  'Web Design', 'Automation', 'Social Media', 'Branding', 'SEO',
  'E-Commerce', 'Copywriting', 'Strategy', 'Web Design', 'Automation',
  'Social Media', 'Branding', 'SEO', 'E-Commerce',
]

function Ticker() {
  return (
    <div className="overflow-hidden border-y border-white/8 py-3 bg-[#0e0e0e]">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} className="text-xs font-medium tracking-[0.2em] text-white/30 uppercase flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-[#d4ff3f] inline-block" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

/* Dot-grid SVG backdrop */
function DotGrid() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.07)" />
        </pattern>
        <radialGradient id="dotfade" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="dotmask">
          <rect width="100%" height="100%" fill="url(#dotfade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" mask="url(#dotmask)" />
    </svg>
  )
}

/* Floating orbs / geometric shapes */
const floaters = [
  { size: 320, x: '72%', y: '12%', color: '#d4ff3f', opacity: 0.06, duration: 18, delay: 0 },
  { size: 200, x: '8%',  y: '55%', color: '#ffffff', opacity: 0.04, duration: 22, delay: 3 },
  { size: 140, x: '85%', y: '65%', color: '#d4ff3f', opacity: 0.08, duration: 16, delay: 6 },
  { size: 80,  x: '18%', y: '20%', color: '#ffffff', opacity: 0.05, duration: 20, delay: 1 },
]

function FloatingShapes() {
  return (
    <>
      {floaters.map((f, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: f.size,
            height: f.size,
            left: f.x,
            top: f.y,
            background: `radial-gradient(circle, ${f.color} 0%, transparent 70%)`,
            opacity: f.opacity,
            filter: 'blur(40px)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      {/* Thin ring */}
      <motion.div
        className="absolute rounded-full border border-white/8 pointer-events-none"
        style={{ width: 480, height: 480, left: '60%', top: '5%' }}
        animate={{ rotate: 360, scale: [1, 1.04, 1] }}
        transition={{ rotate: { duration: 60, repeat: Infinity, ease: 'linear' }, scale: { duration: 14, repeat: Infinity, ease: 'easeInOut' } }}
      />
      <motion.div
        className="absolute rounded-full border border-[#d4ff3f]/10 pointer-events-none"
        style={{ width: 240, height: 240, left: '62%', top: '14%' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      />
    </>
  )
}

/* Floating UI card mockup */
function MockCard() {
  return (
    <motion.div
      className="absolute right-[6%] top-[22%] hidden lg:block pointer-events-none"
      initial={{ opacity: 0, y: 30, rotate: 4 }}
      animate={{ opacity: 1, y: 0, rotate: 4 }}
      transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: 'center' }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Card frame */}
        <div className="w-64 rounded-2xl bg-[#111]/90 backdrop-blur border border-white/10 overflow-hidden shadow-2xl">
          {/* Browser bar */}
          <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/5 bg-[#0c0c0c]">
            <span className="w-2 h-2 rounded-full bg-red-500/60" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <span className="w-2 h-2 rounded-full bg-green-500/60" />
            <div className="flex-1 mx-2 h-3 rounded-sm bg-white/5 text-[8px] text-white/20 flex items-center px-1.5 overflow-hidden">
              marylebone-deli.co.uk
            </div>
          </div>
          {/* Content */}
          <div className="p-4">
            <div className="w-full h-28 rounded-lg bg-gradient-to-br from-[#1a1a0e] to-[#2a2a10] mb-3 overflow-hidden relative">
              <div className="absolute inset-0 flex items-end p-3">
                <div className="space-y-1.5 w-full">
                  <div className="w-3/4 h-2 rounded-full bg-[#d4ff3f]/50" />
                  <div className="w-1/2 h-1.5 rounded-full bg-white/20" />
                </div>
              </div>
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#d4ff3f]/20 border border-[#d4ff3f]/30" />
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-12 rounded-md" style={{ background: `hsl(${60 + i * 10}, 30%, ${12 + i * 2}%)` }} />
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              <div className="flex-1 h-7 rounded-lg bg-[#d4ff3f]/20 border border-[#d4ff3f]/30" />
              <div className="w-16 h-7 rounded-lg bg-white/5" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* Second floating card — analytics widget */
function AnalyticsCard() {
  return (
    <motion.div
      className="absolute left-[4%] bottom-[18%] hidden lg:block pointer-events-none"
      initial={{ opacity: 0, y: 30, rotate: -3 }}
      animate={{ opacity: 1, y: 0, rotate: -3 }}
      transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="w-52 rounded-2xl bg-[#111]/90 backdrop-blur border border-white/10 p-4 shadow-2xl">
          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-3">Monthly traffic</p>
          {/* Bar chart */}
          <div className="flex items-end gap-1 h-16 mb-3">
            {[40, 60, 45, 80, 55, 90, 70, 100, 75, 88, 65, 95].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm"
                style={{ height: `${h}%`, background: i === 11 ? '#d4ff3f' : 'rgba(255,255,255,0.12)' }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 1.6 + i * 0.05, duration: 0.4, ease: 'easeOut' }}
                style={{ height: `${h}%`, background: i === 11 ? '#d4ff3f' : 'rgba(255,255,255,0.12)', transformOrigin: 'bottom' }}
              />
            ))}
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-white font-semibold text-xl">+184%</span>
            <span className="text-[#d4ff3f] text-xs">↑ vs last year</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">
      <DotGrid />
      <FloatingShapes />

      {/* Central glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#d4ff3f]/5 blur-[140px] rounded-full pointer-events-none" />

      <MockCard />
      <AnalyticsCard />

      <motion.div
        style={{ y, opacity }}
        className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 max-w-6xl mx-auto w-full relative z-10"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="w-full">
          <motion.div variants={item} className="inline-flex items-center gap-2 text-xs text-white/40 tracking-widest uppercase mb-10 border border-white/10 px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff3f] animate-pulse" />
            Fitzrovia, London · Est. 2019
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[clamp(2.8rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white mb-6"
          >
            We make the{' '}
            <br />
            <span className="text-[#d4ff3f]">internet work</span>
            <br />
            for you.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-white/55 max-w-md mx-auto mb-12 leading-relaxed"
          >
            A boutique digital agency building high-performance websites,
            smart automations, and social strategies that actually move the needle.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[#d4ff3f] text-[#080808] font-semibold px-7 py-3.5 rounded-full hover:bg-white transition-colors duration-200 text-sm"
            >
              Start a project
              <ArrowDownRight size={15} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors border border-white/10 px-7 py-3.5 rounded-full hover:border-white/30"
            >
              See our work
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <Ticker />

      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}
