import Section from './ui/Section'
import Heading from './ui/Heading'
import Text from './ui/Text'
import Button from './ui/Button'

export default function Hero() {
  return (
    <Section id="hero" theme="light">
      <div className="max-w-4xl">
        <Heading level={1} variant="display" className="text-primary mb-md">
          Pragmatic solutions for human problems.
        </Heading>
        <Text variant="body-lg" className="text-on-surface-variant mb-xl max-w-2xl">
          We are a collective of engineers, sales experts, and brand strategists helping local businesses grow through simple, effective software and marketing.
        </Text>
        <div className="flex flex-col sm:flex-row gap-sm">
          <Button href="mailto:hello@w1w.agency" variant="primary" size="lg">
            Let's talk.
          </Button>
          <Button href="#services" variant="outline" size="lg">
            Explore services
          </Button>
        </div>
      </div>
    </Section>
  )
}
