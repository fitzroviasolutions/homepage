import Section from './ui/Section'
import Heading from './ui/Heading'
import Text from './ui/Text'
import Icon from './ui/Icon'

const projects = [
  {
    title: 'Marylebone Deli',
    category: 'Web & E-Commerce',
    desc: 'Full rebrand and e-commerce platform for a local deli, resulting in a 3x increase in online orders.',
    metric: '3× Order Uplift',
  },
  {
    title: 'Fitzrovia Property Group',
    category: 'Custom Web Portal',
    desc: 'High-performance property portal with automated lead routing and CRM sync, reducing admin overhead by 60%.',
    metric: '60% Admin Saved',
  },
  {
    title: 'Mayfair Design Studio',
    category: 'SEO & Growth',
    desc: 'Strategic search engine optimization and digital campaign that grew monthly inquiries by 150%.',
    metric: '+150% Inquiries',
  },
  {
    title: 'Kingly Street Market',
    category: 'Brand Identity',
    desc: 'Complete visual identity and digital brand launch for a Carnaby Street retailer collective.',
    metric: 'Brand Launch',
  },
]

export default function Work() {
  return (
    <Section id="work" theme="light" className="border-t border-outline-variant">
      <div className="mb-xl">
        <Text variant="label-sm" className="text-secondary mb-base block">
          Our Projects
        </Text>
        <Heading level={2} variant="lg" className="text-primary">
          Real Problems, Real Solutions
        </Heading>
      </div>

      <div className="grid md:grid-cols-2 gap-gutter">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-surface rounded border border-surface-variant p-lg ambient-hover transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-md">
                <span className="bg-secondary-fixed text-on-secondary-fixed px-sm py-[4px] rounded font-label-sm text-label-sm font-semibold">
                  {p.metric}
                </span>
                <Text variant="label-sm" className="text-on-surface-variant tracking-wider uppercase font-semibold">
                  {p.category}
                </Text>
              </div>
              <Heading level={3} variant="md" className="text-primary mb-sm">
                {p.title}
              </Heading>
              <Text variant="body-md" className="text-on-surface-variant mb-md">
                {p.desc}
              </Text>
            </div>
            <div className="mt-auto pt-sm border-t border-outline-variant/10 flex justify-between items-center">
              <a
                href="mailto:hello@w1w.agency"
                className="text-secondary hover:text-primary transition-colors font-label-md text-label-md flex items-center gap-xs font-semibold"
              >
                Case details
                <Icon name="arrow_forward" className="text-sm font-bold" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
