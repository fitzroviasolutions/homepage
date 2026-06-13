import Section from './ui/Section'
import Heading from './ui/Heading'
import Text from './ui/Text'
import Badge from './ui/Badge'
import Icon from './ui/Icon'

const services = [
  {
    icon: 'code',
    title: 'Software Engineering',
    desc: 'Robust, scalable, and maintainable code tailored to solve your specific operational challenges.',
    tags: ['Architecture', 'APIs'],
  },
  {
    icon: 'web',
    title: 'Website Development',
    desc: 'High-performance, accessible, and conversion-optimized web experiences that represent your brand.',
    tags: ['Frontend', 'CMS'],
  },
  {
    icon: 'campaign',
    title: 'Brand Strategy',
    desc: 'Positioning your business clearly in the market with cohesive messaging and visual identity.',
    tags: ['Identity', 'Positioning'],
  },
  {
    icon: 'trending_up',
    title: 'Sales & Marketing',
    desc: 'Data-driven strategies to acquire, convert, and retain customers through pragmatic channels.',
    tags: ['Growth', 'Conversion'],
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
