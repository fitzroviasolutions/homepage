import Section from './ui/Section'
import Heading from './ui/Heading'
import Text from './ui/Text'
import Icon from './ui/Icon'

const projects = [
  {
    title: 'Marylebone Deli',
    category: 'Web & E-Commerce Integration',
    desc: 'Bespoke web platform, real-time inventory management, and automated online ordering system.',
    metric: '3×',
    metricLabel: 'Order Uplift',
  },
  {
    title: 'Fitzrovia Property Group',
    category: 'Custom Web Portal & CRM Sync',
    desc: 'High-performance property platform with automated lead routing, reducing admin overhead by 60%.',
    metric: '-60%',
    metricLabel: 'Admin Workload',
  },
  {
    title: 'Mayfair Design Studio',
    category: 'Search & Pipeline Automation',
    desc: 'Search engine optimization and structured client discovery pipeline that grew inquiries by 150%.',
    metric: '+150%',
    metricLabel: 'Monthly Inquiries',
  },
  {
    title: 'Kingly Street Market',
    category: 'Brand Architecture & Design',
    desc: 'Complete brand relaunch and digital marketing strategy for a Carnaby Street retail collective.',
    metric: 'Launch',
    metricLabel: 'Brand Activation',
  },
]

export default function Work() {
  return (
    <Section id="work" theme="light" className="relative py-24 md:py-32 overflow-hidden border-t border-outline-variant/30 bg-surface-container-low/40">
      <div className="bg-grid-pattern opacity-30" />
      <div className="glow-spot glow-charcoal -bottom-20 -left-20 w-[450px] h-[450px] opacity-25" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-xl text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-xs mb-base">
            <span className="w-6 h-[1px] bg-secondary/60" />
            <Text variant="label-sm" className="text-secondary tracking-widest font-bold">
              PROVEN RESULTS
            </Text>
          </div>
          <Heading level={2} variant="lg" className="text-primary tracking-tight leading-tight">
            Real problems. <br/>Engineered solutions.
          </Heading>
        </div>

        <div className="grid md:grid-cols-2 gap-gutter">
          {projects.map((p) => (
            <div
              key={p.title}
              className="glass-panel rounded-3xl p-8 hover:bg-white/90 hover:scale-[1.01] hover:border-secondary/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[340px] group"
            >
              <div>
                {/* Huge KPI stats */}
                <div className="flex items-baseline gap-xs mb-md border-b border-outline-variant/30 pb-4">
                  <span className="font-display text-[48px] md:text-[56px] font-bold text-secondary tracking-tight leading-none">
                    {p.metric}
                  </span>
                  <span className="font-sans text-[12px] font-bold uppercase tracking-wider text-on-surface-variant leading-none">
                    {p.metricLabel}
                  </span>
                </div>

                <div className="flex justify-between items-start mb-sm">
                  <Text variant="label-sm" className="text-secondary tracking-wider uppercase font-bold text-[10px]">
                    {p.category}
                  </Text>
                </div>
                
                <Heading level={3} variant="md" className="text-primary mb-xs font-bold tracking-tight">
                  {p.title}
                </Heading>
                
                <Text variant="body-md" className="text-on-surface-variant leading-relaxed">
                  {p.desc}
                </Text>
              </div>

              <div className="mt-md pt-sm border-t border-outline-variant/10 flex justify-between items-center">
                <a
                  href="mailto:hello@w1w.agency"
                  className="text-secondary hover:text-primary transition-colors font-label-md text-label-md flex items-center gap-xs font-bold"
                >
                  Case details
                  <Icon name="arrow_forward" className="text-sm font-bold group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

