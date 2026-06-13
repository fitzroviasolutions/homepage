import { useState } from 'react'
import Heading from './ui/Heading'
import Button from './ui/Button'
import Icon from './ui/Icon'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-background text-primary font-label-md text-label-md border-b border-outline-variant sticky top-0 z-50">
      <div className="flex justify-between items-center h-20 w-full px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <Heading level={1} variant="md" className="font-bold tracking-tighter text-primary -ml-[3px]">
          <a href="#">w1w</a>
        </Heading>

        <nav className="hidden md:flex items-center gap-gutter">
          <a className="text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#services">Services</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#collective">Collective</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#team">The Collective</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors duration-200" href="mailto:hello@w1w.agency">Contact</a>
        </nav>

        <Button as="a" href="mailto:hello@w1w.agency" variant="primary" size="md" className="hidden md:inline-flex">
          Get in touch
        </Button>

        <button className="md:hidden text-primary flex items-center" onClick={() => setIsOpen(!isOpen)}>
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>
      </div>

      {isOpen && (
        <>
          {/* Backdrop overlay to dim the background */}
          <div 
            className="fixed inset-0 top-20 bg-black/10 backdrop-blur-[2px] z-30 md:hidden" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Dropdown panel */}
          <div className="absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-outline-variant shadow-xl py-6 px-margin-mobile flex flex-col gap-4 z-40 transition-all duration-200">
            <a 
              className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors duration-200 py-2 border-b border-outline-variant/10" 
              href="#services" 
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors duration-200 py-2 border-b border-outline-variant/10" 
              href="#collective" 
              onClick={() => setIsOpen(false)}
            >
              Collective
            </a>
            <a 
              className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors duration-200 py-2 border-b border-outline-variant/10" 
              href="#team" 
              onClick={() => setIsOpen(false)}
            >
              The Collective
            </a>
            <a 
              className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors duration-200 py-2 border-b border-outline-variant/10" 
              href="mailto:hello@w1w.agency" 
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button 
              as="a" 
              href="mailto:hello@w1w.agency" 
              variant="primary" 
              size="md" 
              className="w-full text-center mt-2 py-3" 
              onClick={() => setIsOpen(false)}
            >
              Get in touch
            </Button>
          </div>
        </>
      )}
    </header>
  )
}
