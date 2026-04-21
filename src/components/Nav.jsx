import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/5' : ''
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#" className="text-white font-semibold tracking-tight text-lg">
            <span className="text-[#d4ff3f]">W</span>1W
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/65 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#d4ff3f] text-[#080808] text-sm font-semibold px-4 py-2 rounded-full hover:bg-white transition-colors duration-200"
            >
              Get in touch
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white/70 hover:text-white"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 bg-[#080808] flex flex-col pt-20 px-6 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-6 mt-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-semibold text-white/80 hover:text-[#d4ff3f] transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-fit items-center bg-[#d4ff3f] text-[#080808] font-semibold px-6 py-3 rounded-full text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.07 }}
              >
                Get in touch
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
