import Section from './ui/Section'
import Heading from './ui/Heading'
import Text from './ui/Text'

const team = [
  { 
    name: 'Alex Chen', 
    role: 'Senior Software Engineer', 
    initials: 'AC', 
    gradient: 'from-secondary to-[#191c1e]',
    specialty: 'Custom web applications, automation tools, and data flows.' 
  },
  { 
    name: 'Sarah Miller', 
    role: 'Brand Strategist', 
    initials: 'SM', 
    gradient: 'from-[#191c1e] to-secondary',
    specialty: 'Visual identity, user positioning, and market audits.' 
  },
  { 
    name: 'Marcus Thorne', 
    role: 'Sales Director', 
    initials: 'MT', 
    gradient: 'from-secondary/80 to-[#191c1e]/90',
    specialty: 'Growth strategy, campaign optimization, and lead acquisition.' 
  },
  { 
    name: 'Elena Rodriguez', 
    role: 'Full Stack Developer', 
    initials: 'ER', 
    gradient: 'from-[#191c1e]/80 to-secondary/80',
    specialty: 'Web platforms, CRM integrations, and online ordering systems.' 
  },
]


export default function People() {
  return (
    <Section id="team" theme="light" className="relative py-24 md:py-32 overflow-hidden border-t border-outline-variant/30 bg-background">
      <div className="bg-grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="mb-xl text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-xs mb-base">
            <span className="w-6 h-[1px] bg-secondary/60" />
            <Text variant="label-sm" className="text-secondary tracking-widest font-bold">
              THE EXPERTISE
            </Text>
          </div>
          <Heading level={2} variant="lg" className="text-primary tracking-tight leading-tight">
            The Collective.
          </Heading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter">
          {team.map((m) => (
            <div 
              key={m.name} 
              className="flex flex-col items-center md:items-start text-center md:text-left glass-panel rounded-3xl p-6 hover:bg-white/80 hover:scale-[1.01] hover:border-secondary/20 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Monogram circular avatar with HSL gradient */}
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md border-2 border-white shadow-md relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${m.gradient} transition-transform duration-500 group-hover:rotate-45`} />
                <span className="relative font-display text-[22px] font-bold text-white tracking-tighter">
                  {m.initials}
                </span>
              </div>

              <Heading level={3} variant="md" className="text-primary mb-[2px] font-bold tracking-tight">
                {m.name}
              </Heading>
              
              <Text variant="label-sm" className="text-secondary mb-md font-bold text-[10px] tracking-wider uppercase">
                {m.role}
              </Text>
              
              <Text variant="body-md" className="text-on-surface-variant text-[13px] leading-relaxed">
                {m.specialty}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

