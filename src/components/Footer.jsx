import Heading from './ui/Heading'
import Text from './ui/Text'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-surface-container-low/60 text-on-surface border-t border-outline-variant/30 py-16 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="bg-grid-pattern opacity-10" />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-gutter">
        <div className="flex flex-col gap-sm">
          <Heading level={4} variant="md" className="font-bold tracking-tighter text-primary -ml-[3px]">
            w1w<span className="text-secondary">.</span>
          </Heading>
          <Text variant="body-md" className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
            © {currentYear} w1w. Pragmatic solutions for human problems.
          </Text>

        </div>

        <div className="flex flex-col md:items-end gap-sm">
          <nav className="flex flex-wrap gap-x-md gap-y-sm">
            {['Services', 'Way', 'Work', 'Team'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-on-surface-variant hover:text-secondary transition-colors font-medium text-xs uppercase tracking-wider"
              >
                {label}
              </a>
            ))}
          </nav>
          <a 
            href="mailto:hello@w1w.agency" 
            className="text-secondary hover:text-primary transition-colors font-bold text-sm mt-xs md:mt-0"
          >
            hello@w1w.agency
          </a>
        </div>

      </div>
    </footer>
  )
}

