import { motion } from 'framer-motion'

export default function Nav() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 bg-black"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-serif font-black text-xl tracking-tight text-white">
          W1W
        </a>
        <a
          href="#contact"
          className="inline-flex items-center bg-[#d4ff3f] text-black text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-2.5 hover:bg-white transition-colors"
        >
          Contact us
        </a>
      </div>
    </motion.header>
  )
}
