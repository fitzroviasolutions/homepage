import Section from './ui/Section'
import Heading from './ui/Heading'
import Text from './ui/Text'
import Badge from './ui/Badge'
import Icon from './ui/Icon'

const services = [
  {
    icon: 'code',
    title: 'Software & App Solutions',
    desc: 'We build custom software, tools, and application solutions designed to solve real operational problems and drive business growth.',
    tags: ['Custom Apps', 'Integrations'],
  },
  {
    icon: 'web',
    title: 'Digital Platforms',
    desc: 'High-performance websites and online systems that simplify administration, automate leads, and showcase your brand.',
    tags: ['Web Platforms', 'E-Commerce'],
  },
  {
    icon: 'campaign',
    title: 'Brand Strategy',
    desc: 'Cohesive brand identity and market positioning that makes your business stand out from the noise and speaks to your users.',
    tags: ['Identity', 'Positioning'],
  },
  {
    icon: 'trending_up',
    title: 'Sales & Growth',
    desc: 'Data-driven marketing and conversion-rate optimization strategies focused on acquiring and retaining customers.',
    tags: ['Marketing', 'Conversion'],
  },
]

export default function Services() {
  return (
    <Section id="services" theme="light">
      <div className="mb-xl">
        <Text variant="label-sm" className="text-secondary mb-base block">
          What we do
        </Text>
        <Heading level={2} variant="lg" className="text-primary">
          Simplicity by Design
        </Heading>
      </div>

      <div className="grid md:grid-cols-2 gap-gutter">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-surface rounded border border-surface-variant p-lg ambient-hover transition-all"
          >
            <div className="w-12 h-12 bg-primary-container rounded flex items-center justify-center mb-md text-on-primary-container">
              <Icon name={s.icon} className="text-2xl" />
            </div>
            <Heading level={3} variant="md" className="text-primary mb-sm">
              {s.title}
            </Heading>
            <Text variant="body-md" className="text-on-surface-variant">
              {s.desc}
            </Text>
            <div className="mt-md flex gap-xs flex-wrap">
              {s.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
