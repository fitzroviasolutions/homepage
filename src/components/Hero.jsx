import Section from './ui/Section'
import Heading from './ui/Heading'
import Text from './ui/Text'
import Button from './ui/Button'
import Icon from './ui/Icon'

export default function Hero() {
  return (
    <Section id="hero" theme="light" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial glow spots */}
      <div className="glow-spot glow-crimson -top-20 -left-20 w-[400px] h-[400px]" />
      <div className="glow-spot glow-charcoal top-1/2 right-0 w-[500px] h-[500px]" />
      <div className="bg-grid-pattern" />

      <div className="grid lg:grid-cols-12 gap-xl items-center relative z-10 max-w-5xl mx-auto">
        {/* Left Side: Copy */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed mb-md font-semibold text-xs tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            w1w // London
          </div>
          
          <Heading level={1} variant="display" className="text-primary mb-md tracking-tight leading-[1.05]">
            Pragmatic solutions for <span className="text-secondary">human problems.</span>
          </Heading>
          
          <Text variant="body-lg" className="text-on-surface-variant mb-xl max-w-[580px] leading-relaxed">
            We are a collective of engineers, sales experts, and brand strategists helping local businesses grow through simple, effective software and marketing.
          </Text>
          
          <div className="flex flex-col sm:flex-row gap-sm w-full sm:w-auto">
            <Button href="mailto:hello@w1w.agency" variant="primary" size="lg" className="shadow-md">
              Let's talk
            </Button>
            <Button href="#services" variant="outline" size="lg">
              Explore services
            </Button>
          </div>
        </div>

        {/* Right Side: Floating Client Work Collage (Non-techy) */}
        <div className="lg:col-span-5 w-full mt-xl lg:mt-0 relative h-[400px] flex items-center justify-center">
          
          {/* Card 1: Restaurant Booking Mockup */}
          <div 
            className="absolute left-[5%] top-[10%] w-[210px] glass-panel rounded-2xl p-4 shadow-md rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-all duration-500 z-20 cursor-pointer"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            <div className="flex items-center gap-sm mb-xs">
              <div className="w-8 h-8 rounded-lg bg-secondary-fixed/50 text-secondary flex items-center justify-center">
                <Icon name="restaurant" className="text-base" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-primary leading-tight">Marylebone Deli</span>
                <span className="text-[9px] text-on-surface-variant font-medium tracking-wide uppercase">Table reservation</span>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-outline-variant/30 flex justify-between items-center text-[10px]">
              <span className="text-on-surface-variant font-medium">Today, 19:30</span>
              <span className="text-[#27c93f] font-bold uppercase tracking-wider text-[8px] bg-[#27c93f]/10 px-1.5 py-0.5 rounded-full">Sync'd</span>
            </div>
          </div>

          {/* Card 2: Gallery Art Catalog Mockup */}
          <div 
            className="absolute right-[5%] top-[18%] w-[230px] glass-panel rounded-2xl p-3.5 shadow-lg rotate-[2deg] hover:rotate-0 hover:scale-105 transition-all duration-500 z-10 cursor-pointer"
            style={{ animation: 'float 7.5s ease-in-out infinite 0.5s' }}
          >
            {/* Mock Painting */}
            <div className="w-full h-24 rounded-lg bg-gradient-to-br from-[#191c1e] to-secondary relative overflow-hidden mb-2">
              <div className="absolute inset-0 bg-grid-pattern opacity-25" />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white animate-ping" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-bold text-primary">Mayfair Curators</span>
              <span className="text-[9px] text-on-surface-variant font-medium tracking-wide uppercase">Exhibit 12 • Digital Catalog</span>
            </div>
          </div>

          {/* Card 3: Architect Pipeline Portal */}
          <div 
            className="absolute left-[12%] bottom-[8%] w-[200px] glass-panel rounded-2xl p-4 shadow-lg rotate-[4deg] hover:rotate-0 hover:scale-105 transition-all duration-500 z-20 cursor-pointer"
            style={{ animation: 'float 6.8s ease-in-out infinite 1s' }}
          >
            <div className="flex items-center gap-xs text-[10px] text-secondary font-bold uppercase tracking-wider mb-2">
              <Icon name="architecture" className="text-sm" />
              <span>Fitzrovia Studios</span>
            </div>
            <div className="text-[11px] font-bold text-primary mb-1">Discovery & Blueprint</div>
            <div className="w-full h-1.5 rounded-full bg-outline-variant/30 overflow-hidden">
              <div className="h-full bg-secondary w-3/4 rounded-full" />
            </div>
            <div className="text-[8px] text-on-surface-variant mt-1.5 font-medium uppercase tracking-wide">Stage 3 of 4: Completed</div>
          </div>


          {/* Card 4: Metrics/Sales Growth Callout */}
          <div 
            className="absolute right-[12%] bottom-[14%] w-[160px] bg-secondary text-white rounded-2xl p-4 shadow-xl rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-500 z-30 cursor-pointer"
            style={{ animation: 'float 5.2s ease-in-out infinite 0.2s' }}
          >
            <div className="text-[32px] font-display font-bold leading-none tracking-tight">+150%</div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-[#ffdad6] mt-[1px]">Inquiries Grown</div>
            
            {/* Sparkline growth chart */}
            <div className="mt-3 h-6 w-full opacity-80">
              <svg className="w-full h-full text-white" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 25 Q 20 18 40 22 T 80 5 T 100 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M 0 25 Q 20 18 40 22 T 80 5 T 100 2 L 100 30 L 0 30 Z" fill="url(#gradient-metric)" opacity="0.15" />
                <defs>
                  <linearGradient id="gradient-metric" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}


