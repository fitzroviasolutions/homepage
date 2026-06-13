import Heading from './ui/Heading'
import Text from './ui/Text'

export default function Footer() {
  return (
    <footer className="bg-surface-container-low text-on-surface border-t border-outline-variant py-xl px-margin-mobile md:px-margin-desktop">
      <div className="max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-start gap-gutter">
        <div className="flex flex-col gap-sm">
          <Heading level={4} variant="md" className="font-bold tracking-tighter text-primary -ml-[3px]">
            w1w
          </Heading>
          <Text variant="body-md" className="text-on-surface-variant text-sm">
            © 2024 w1w. Pragmatic solutions for human problems.
          </Text>
        </div>

        <nav className="flex flex-wrap gap-x-md gap-y-sm">
          {['Services', 'Collective', 'Work', 'Contact', 'Privacy', 'Terms'].map((label) => (
            <a
              key={label}
              href={label === 'Contact' ? 'mailto:hello@w1w.agency' : `#${label.toLowerCase()}`}
              className="text-on-surface-variant hover:underline transition-all font-body-md text-sm"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
