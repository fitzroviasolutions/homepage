import Section from './ui/Section'
import Heading from './ui/Heading'
import Text from './ui/Text'

export default function Way() {
  return (
    <Section id="way" theme="low">
      <div className="grid md:grid-cols-2 gap-xl items-center">
        <div>
          <Heading level={2} variant="lg" className="text-primary mb-md">
            The w1w Way
          </Heading>
          <Text variant="body-lg" className="text-on-surface-variant mb-md">
            We prioritize pragmatism over complexity. Our focus is on delivering human-centered results that actually move the needle for your business, rather than getting lost in unnecessary technical jargon or convoluted marketing speak.
          </Text>
          <Text variant="body-lg" className="text-on-surface-variant font-medium">
            Simplicity by design. Results by execution.
          </Text>
        </div>
        <div className="bg-white rounded-lg border border-surface-variant p-lg ambient-hover">
          <img
            alt="Team collaborating"
            className="w-full h-auto rounded object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsKq1JaklrzPp2bXvH-GJpVOHu-wHDde8gUfg4RzGBce2EhPw33jjIQdUq-WbL_GdiZosZSB-EyWrS1jULxm51NVqroJBjnpw4Ng7Agt9DlJtSCheDRdwzONhuDYLMM7BqLy1N45bgXQ9WpLEBzI9-nH5p2pNXULj1rx_EzZcn3PYcmI0V51Meq9sVlJW2eoCXHGVhf2NBOyPkpGhIoQxZhoDprSs_7Cox_z3Rq1o3JMiwLRdmNrCkcUyLrYwdrwfdApQh7AFlrbk"
          />
        </div>
      </div>
    </Section>
  )
}
