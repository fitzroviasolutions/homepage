import Section from './ui/Section'
import Heading from './ui/Heading'
import Text from './ui/Text'
import Icon from './ui/Icon'

const team = [
  { name: 'Alex Chen', role: 'Senior Software Engineer' },
  { name: 'Sarah Miller', role: 'Brand Strategist' },
  { name: 'Marcus Thorne', role: 'Sales Director' },
  { name: 'Elena Rodriguez', role: 'Full Stack Developer' },
]

export default function People() {
  return (
    <Section id="team" theme="light">
      <div className="mb-xl">
        <Text variant="label-sm" className="text-secondary mb-base block">
          Our People
        </Text>
        <Heading level={2} variant="lg" className="text-primary">
          The Collective
        </Heading>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {team.map((m) => (
          <div key={m.name} className="flex flex-col items-start">
            <div className="w-full aspect-square bg-surface-container-highest rounded-lg flex items-center justify-center mb-md border border-surface-variant">
              <Icon name="person" className="text-[64px] text-on-surface-variant opacity-20" />
            </div>
            <Heading level={3} variant="md" className="text-primary">
              {m.name}
            </Heading>
            <Text variant="body-md" className="text-on-surface-variant">
              {m.role}
            </Text>
          </div>
        ))}
      </div>
    </Section>
  )
}
