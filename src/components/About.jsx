import Section from './ui/Section'
import Heading from './ui/Heading'
import Text from './ui/Text'
import Icon from './ui/Icon'

export default function About() {
  return (
    <Section id="collective" theme="primary">
      <div className="grid md:grid-cols-2 gap-xl">
        <div>
          <Heading level={2} variant="lg" className="mb-md text-white">
            A Collective of Experts
          </Heading>
          <Text variant="body-lg" className="text-[#bec6e0] mb-md">
            We are not a traditional agency. We are a deliberate mix of engineers and marketers who speak both code and conversion.
          </Text>
          <Text variant="body-lg" className="text-[#bec6e0]">
            By stripping away the layers of account management, you work directly with the experts building your solutions. This ensures clear communication, faster iteration, and honest advice.
          </Text>
        </div>

        <div className="grid grid-cols-2 gap-gutter">
          <div className="bg-[#131b2e] p-md rounded border border-surface-tint/20 flex flex-col justify-start">
            <Icon name="engineering" className="text-[#bec6e0] mb-sm text-3xl" />
            <Heading level={4} variant="md" className="font-bold mb-xs text-white">
              Engineers
            </Heading>
            <Text variant="label-sm" className="text-[#bec6e0] normal-case font-normal leading-relaxed">
              Focusing on performance, security, and scalable architecture.
            </Text>
          </div>

          <div className="bg-[#131b2e] p-md rounded border border-surface-tint/20 flex flex-col justify-start">
            <Icon name="lightbulb" className="text-[#bec6e0] mb-sm text-3xl" />
            <Heading level={4} variant="md" className="font-bold mb-xs text-white">
              Strategists
            </Heading>
            <Text variant="label-sm" className="text-[#bec6e0] normal-case font-normal leading-relaxed">
              Focusing on market positioning, user experience, and growth.
            </Text>
          </div>
        </div>
      </div>
    </Section>
  )
}
