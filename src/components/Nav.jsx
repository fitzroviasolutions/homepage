import { useState, useEffect } from 'react'
import Heading from './ui/Heading'
import Button from './ui/Button'
import Icon from './ui/Icon'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-margin-mobile md:px-margin-desktop transition-all duration-300">
      <div 
        className={`w-full max-w-max-width mx-auto glass-panel rounded-full transition-all duration-300 ${
          scrolled ? 'py-3 bg-white/80 shadow-md border-white/50' : 'py-4 bg-white/60 border-white/30'
        } px-6 md:px-8 flex justify-between items-center`}
      >
        <Heading level={1} variant="md" className="font-bold tracking-tighter text-primary -ml-[3px]">
          <a href="#" className="flex items-center gap-[1px] group">
            <span>w1w</span>
            <span className="text-secondary group-hover:scale-125 transition-transform duration-300">.</span>
          </a>
        </Heading>

        <nav className="hidden md:flex items-center gap-8">
          <a className="text-on-surface-variant hover:text-secondary font-medium tracking-wide text-label-md transition-colors duration-200" href="#services">Services</a>
          <a className="text-on-surface-variant hover:text-secondary font-medium tracking-wide text-label-md transition-colors duration-200" href="#way">The Way</a>
          <a className="text-on-surface-variant hover:text-secondary font-medium tracking-wide text-label-md transition-colors duration-200" href="#work">Projects</a>
          <a className="text-on-surface-variant hover:text-secondary font-medium tracking-wide text-label-md transition-colors duration-200" href="#team">Collective</a>
        </nav>

        <div className="hidden md:flex items-center gap-xs">
          <Button href="mailto:hello@w1w.agency" variant="outline" size="sm">
            Contact
          </Button>
          <Button href="mailto:hello@w1w.agency" variant="primary" size="sm">
            Get in touch
          </Button>
        </div>

        <button 
          className="md:hidden text-primary flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>
      </div>

      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-black/10 backdrop-blur-xs z-30 md:hidden" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Dropdown panel */}
          <div className="absolute top-20 left-margin-mobile right-margin-mobile bg-white/95 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl py-6 px-6 flex flex-col gap-4 z-40 transition-all duration-300">
            <a 
              className="text-on-surface-variant font-medium text-body-md hover:text-secondary transition-colors duration-200 py-2 border-b border-outline-variant/20" 
              href="#services" 
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              className="text-on-surface-variant font-medium text-body-md hover:text-secondary transition-colors duration-200 py-2 border-b border-outline-variant/20" 
              href="#way" 
              onClick={() => setIsOpen(false)}
            >
              The Way
            </a>
            <a 
              className="text-on-surface-variant font-medium text-body-md hover:text-secondary transition-colors duration-200 py-2 border-b border-outline-variant/20" 
              href="#work" 
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a 
              className="text-on-surface-variant font-medium text-body-md hover:text-secondary transition-colors duration-200 py-2 border-b border-outline-variant/20" 
              href="#team" 
              onClick={() => setIsOpen(false)}
            >
              Collective
            </a>
            <div className="flex flex-col gap-2 mt-2">
              <Button 
                href="mailto:hello@w1w.agency" 
                variant="outline" 
                size="md" 
                className="w-full text-center py-3" 
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Button>
              <Button 
                href="mailto:hello@w1w.agency" 
                variant="primary" 
                size="md" 
                className="w-full text-center py-3" 
                onClick={() => setIsOpen(false)}
              >
                Get in touch
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

