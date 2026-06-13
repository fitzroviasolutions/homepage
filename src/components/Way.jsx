import Section from './ui/Section'
import Heading from './ui/Heading'
import Text from './ui/Text'
import Icon from './ui/Icon'

const industries = [
  {
    icon: 'restaurant',
    title: 'Restaurants & Pubs',
    desc: 'Optimizing booking flows, staff administration, and online ordering to keep service smooth.',
    lesson: 'Real-time sync',
  },
  {
    icon: 'architecture',
    title: 'Architects & Studios',
    desc: 'Designing fast portfolio showcases and managing incoming client discovery pipelines.',
    lesson: 'Asset automation',
  },
  {
    icon: 'palette',
    title: 'Galleries & Curators',
    desc: 'Creating clean digital viewing experiences and robust, secure systems for managing artwork catalogs.',
    lesson: 'Secure pipelines',
  },
]

export default function Way() {
  return (
    <Section id="way" theme="low">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-xl items-center">
        <div>
          <div className="flex items-center gap-xs mb-base">
            <span className="w-6 h-[1px] bg-secondary/50" />
            <Text variant="label-sm" className="text-secondary tracking-widest block">
              The w1w Way
            </Text>
          </div>
          <Heading level={2} variant="lg" className="text-primary mb-md max-w-[480px]">
            We believe process improvement is universal.
          </Heading>
          <Text variant="body-lg" className="text-on-surface-variant mb-md max-w-[576px]">
            We prioritize pragmatism over complexity. We build simple, human-centered software and strategies that deliver results, stripping away unnecessary jargon and overhead.
          </Text>
          <Text variant="body-lg" className="text-on-surface-variant max-w-[576px]">
            From restaurants and pubs to architects and galleries, we\'ve helped diverse businesses simplify their work. Process improvement is universal: we take proven systems from one discipline to solve the bottlenecks of another.
          </Text>
        </div>

        {/* Premium Timeline Visual Flow */}
        <div className="relative space-y-lg py-xs pl-0 ml-4 sm:ml-8">
          {/* Exact Center-aligned Gradient Line */}
          <div className="absolute left-[15px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-secondary via-outline-variant/40 to-transparent pointer-events-none" />

          {industries.map((ind) => (
            <div key={ind.title} className="relative group pl-10">
              {/* Center-aligned Interactive Bullet Node */}
              <div className="absolute left-0 top-[6px] w-8 h-8 rounded-full bg-white border border-outline-variant flex items-center justify-center text-on-surface-variant shadow-xs transition-all duration-300 group-hover:border-secondary group-hover:scale-110 group-hover:shadow-md z-10">
                <Icon name={ind.icon} className="text-sm group-hover:text-secondary transition-colors" />
              </div>
              
              {/* Card content with subtle elevation */}
              <div className="bg-white rounded border border-outline-variant/50 p-md shadow-xs hover:-translate-y-[2px] hover:shadow-lg hover:border-secondary/20 transition-all duration-300 ease-out">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-xs mb-sm">
                  <Heading level={3} variant="md" className="text-primary text-[16px] font-bold">
                    {ind.title}
                  </Heading>
                  <span className="text-[9px] font-sans font-bold tracking-widest uppercase text-secondary bg-secondary-fixed/50 px-2.5 py-1 rounded-full">
                    {ind.lesson}
                  </span>
                </div>
                <Text variant="body-md" className="text-on-surface-variant text-sm leading-relaxed">
                  {ind.desc}
                </Text>
              </div>
            </div>
          ))}

          {/* Final Connection Node */}
          <div className="relative group pl-10">
            <div className="absolute left-0 top-[6px] w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shadow-md shadow-secondary/25 z-10 transition-all duration-300 group-hover:scale-110">
              <Icon name="arrow_downward" className="text-base" />
            </div>
            <div className="bg-[#191c1e] rounded border border-outline/20 p-md shadow-md hover:-translate-y-[2px] hover:shadow-xl transition-all duration-300 ease-out">
              <Heading level={3} variant="md" className="text-white text-[16px] font-bold mb-xs flex items-center gap-xs">
                Your Business Next
                <span className="relative flex h-2 w-2 ml-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
              </Heading>
              <Text variant="body-md" className="text-[#bec6e0] text-sm leading-relaxed">
                We bring these cross-industry process improvements directly to solve your operational bottlenecks.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
