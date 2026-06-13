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
    <Section id="services" theme="light" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Visual background details */}
      <div className="glow-spot glow-crimson top-0 right-1/4 w-[400px] h-[400px] opacity-25" />
      <div className="bg-grid-pattern opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-xl text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-md">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-xs mb-base">
              <span className="w-6 h-[1px] bg-secondary/60" />
              <Text variant="label-sm" className="text-secondary tracking-widest font-bold">
                WHAT WE DO
              </Text>
            </div>
            <Heading level={2} variant="lg" className="text-primary tracking-tight leading-tight">
              Simplicity by design. <br/>Results by execution.
            </Heading>
          </div>
          <Text variant="body-lg" className="text-on-surface-variant max-w-[420px] text-center md:text-left">
            We replace bloated software, manual overhead, and operations confusion with clean, lightweight solutions that scale.
          </Text>
        </div>

        <div className="grid md:grid-cols-2 gap-gutter">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-panel rounded-3xl p-8 hover:bg-white/90 hover:scale-[1.01] hover:border-secondary/20 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-secondary-fixed/40 text-secondary flex items-center justify-center mb-6 group-hover:bg-[#191c1e] group-hover:text-white transition-all duration-300">
                  <Icon name={s.icon} className="text-xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <Heading level={3} variant="md" className="text-primary mb-sm font-bold tracking-tight">
                  {s.title}
                </Heading>
                <Text variant="body-md" className="text-on-surface-variant mb-md leading-relaxed">
                  {s.desc}
                </Text>
              </div>
              <div className="mt-md flex gap-xs flex-wrap">
                {s.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

