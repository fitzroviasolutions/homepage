import { useState, useEffect } from 'react'
import Section from './ui/Section'
import Heading from './ui/Heading'
import Text from './ui/Text'

export default function Way() {
  return (
    <Section id="way" theme="low" className="relative py-24 md:py-32 overflow-hidden bg-surface-container-low border-y border-outline-variant">
      {/* Background elements */}
      <div className="bg-grid-pattern opacity-60" />
      <div className="glow-spot glow-crimson bottom-0 right-1/4 w-[350px] h-[350px] opacity-30" />

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-xl items-center relative z-10 max-w-5xl mx-auto">
        {/* Left Side: Original Human-Centered Value Proposition */}
        <div className="flex flex-col items-start text-left">
          <div className="flex items-center gap-xs mb-base">
            <span className="w-6 h-[1px] bg-secondary/60" />
            <Text variant="label-sm" className="text-secondary tracking-widest block font-bold">
              THE W1W WAY
            </Text>
          </div>
          
          <Heading level={2} variant="lg" className="text-primary mb-md max-w-[500px] leading-tight">
            Simple systems work in any industry.
          </Heading>
          
          <Text variant="body-lg" className="text-on-surface-variant mb-md max-w-[580px] leading-relaxed">
            We prioritize pragmatism over complexity. We build simple, human-centered software and strategies that deliver results, stripping away unnecessary jargon and overhead.
          </Text>
          
          <Text variant="body-lg" className="text-on-surface-variant max-w-[580px] mb-lg leading-relaxed">
            From restaurants and pubs to architects and galleries, we help diverse businesses simplify their work. The core challenges are always the same: reducing friction and automating manual tasks. We take proven solutions from one discipline and apply them to another.
          </Text>

          {/* Philosophy mini steps */}
          <div className="grid grid-cols-3 gap-sm w-full pt-md border-t border-outline-variant/50">
            <div>
              <div className="font-display text-lg font-bold text-secondary">01</div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-primary">Simplify</div>
            </div>
            <div>
              <div className="font-display text-lg font-bold text-secondary">02</div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-primary">Automate</div>
            </div>
            <div>
              <div className="font-display text-lg font-bold text-secondary">03</div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-primary">Grow</div>
            </div>
          </div>
        </div>

        {/* Right Side: Editorial Bubble Sort Visual */}
        <div className="w-full flex flex-col items-center">
          <BubbleSortVisual />
        </div>
      </div>
    </Section>
  )
}

function BubbleSortVisual() {
  const [isSorted, setIsSorted] = useState(false)

  // Toggle every 5 seconds if not interacted with
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSorted((prev) => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full flex flex-col items-center">
      {/* Borderless abstract canvas */}
      <div className="relative w-full max-w-[420px] h-[360px] md:h-[400px] flex items-center justify-center">
        
        {/* Curving alignment guide vector (draws when sorted) */}
        <svg className="absolute inset-0 w-full h-full text-secondary pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M 40 320 Q 180 200 360 60" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="6 6"
            className={`transition-all duration-1000 ease-out ${isSorted ? 'opacity-30 stroke-[2px]' : 'opacity-0'}`} 
          />
        </svg>

        {/* Bubble 1: Restaurants */}
        <div 
          className={`absolute rounded-full flex flex-col items-center justify-center text-center p-4 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) z-20 ${
            isSorted 
              ? 'left-[5%] top-[62%] w-24 h-24 bg-white border border-outline-variant/30 text-primary shadow-xs' 
              : 'left-[10%] top-[40%] w-32 h-32 bg-white border border-outline-variant/60 text-primary shadow-md'
          }`}
        >
          <span className={`font-sans font-bold leading-tight ${isSorted ? 'text-[10px] sm:text-[11px]' : 'text-[12px] sm:text-[13px]'}`}>
            Restaurants
          </span>
          <span className={`font-sans text-on-surface-variant leading-tight mt-[2px] transition-all duration-500 opacity-80 ${isSorted ? 'text-[8px]' : 'text-[9px]'}`}>
            {isSorted ? 'Automated bookings' : 'Overlapping turns'}
          </span>
        </div>

        {/* Bubble 2: Invoicing */}
        <div 
          className={`absolute rounded-full flex flex-col items-center justify-center text-center p-4 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) z-10 ${
            isSorted 
              ? 'left-[26%] top-[42%] w-24 h-24 bg-white border border-outline-variant/30 text-primary shadow-xs' 
              : 'left-[42%] top-[12%] w-28 h-28 bg-[#eceef0]/80 border border-outline-variant/60 text-primary shadow-sm'
          }`}
        >
          <span className={`font-sans font-bold leading-tight ${isSorted ? 'text-[10px] sm:text-[11px]' : 'text-[12px] sm:text-[13px]'}`}>
            Invoicing
          </span>
          <span className={`font-sans text-on-surface-variant leading-tight mt-[2px] transition-all duration-500 opacity-80 ${isSorted ? 'text-[8px]' : 'text-[9px]'}`}>
            {isSorted ? 'One-click billing' : 'Manual invoices'}
          </span>
        </div>

        {/* Bubble 3: Architects */}
        <div 
          className={`absolute rounded-full flex flex-col items-center justify-center text-center p-4 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) z-30 ${
            isSorted 
              ? 'left-[48%] top-[22%] w-24 h-24 bg-white border border-outline-variant/30 text-primary shadow-xs' 
              : 'left-[15%] top-[5%] w-30 h-30 bg-[#e0e3e5]/70 border border-outline-variant/60 text-primary shadow-sm'
          }`}
        >
          <span className={`font-sans font-bold leading-tight ${isSorted ? 'text-[10px] sm:text-[11px]' : 'text-[12px] sm:text-[13px]'}`}>
            Architects
          </span>
          <span className={`font-sans text-on-surface-variant leading-tight mt-[2px] transition-all duration-500 opacity-80 ${isSorted ? 'text-[8px]' : 'text-[9px]'}`}>
            {isSorted ? 'Auto-intake portal' : 'Pipeline delay'}
          </span>
        </div>

        {/* Bubble 4: Galleries */}
        <div 
          className={`absolute rounded-full flex flex-col items-center justify-center text-center p-4 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) z-40 ${
            isSorted 
              ? 'left-[68%] top-[2%] w-28 h-28 bg-secondary border border-secondary text-white shadow-lg' 
              : 'left-[45%] top-[45%] w-36 h-36 bg-[#191c1e] text-white shadow-lg'
          }`}
        >
          <span className={`font-sans font-bold leading-tight ${isSorted ? 'text-[11px] sm:text-[12px]' : 'text-[13px] sm:text-[14px]'}`}>
            Galleries
          </span>
          <span className={`font-sans leading-tight mt-[2px] transition-all duration-500 opacity-80 ${isSorted ? 'text-[#ffdad6] text-[8px]' : 'text-surface-variant text-[9px]'}`}>
            {isSorted ? 'Clean viewings' : 'Catalog clutter'}
          </span>
        </div>
      </div>

      {/* Sleek Minimalist Controls */}
      <button 
        onClick={() => setIsSorted(!isSorted)}
        className="mt-8 inline-flex items-center justify-center bg-white hover:bg-surface-container border border-outline-variant/50 text-primary hover:border-secondary hover:text-secondary px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 shadow-sm cursor-pointer"
      >
        {isSorted ? 'Reset Demo' : 'Streamline Operations'}
      </button>

    </div>
  )
}
