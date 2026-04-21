import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin } from 'lucide-react'

const stats = [
  { value: '50+', label: 'Projects shipped' },
  { value: '6', label: 'Years in business' },
  { value: '40+', label: 'Happy clients' },
  { value: '100%', label: 'Based in London' },
]

/* Stylised Fitzrovia street-map fragment */
function FitzroviaMap() {
  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0">
      {/* Glow behind the map */}
      <div className="absolute inset-0 rounded-3xl bg-[#d4ff3f]/4 blur-[60px]" />

      <svg
        viewBox="0 0 400 400"
        className="relative w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Block fills — city blocks */}
        {[
          { x: 40,  y: 50,  w: 80,  h: 60  },
          { x: 140, y: 50,  w: 100, h: 60  },
          { x: 260, y: 50,  w: 90,  h: 60  },
          { x: 40,  y: 135, w: 80,  h: 70  },
          { x: 140, y: 135, w: 100, h: 70  },
          { x: 260, y: 135, w: 90,  h: 70  },
          { x: 40,  y: 230, w: 80,  h: 65  },
          { x: 140, y: 230, w: 100, h: 65  },
          { x: 260, y: 230, w: 90,  h: 65  },
          { x: 40,  y: 315, w: 80,  h: 60  },
          { x: 140, y: 315, w: 100, h: 60  },
          { x: 260, y: 315, w: 90,  h: 60  },
        ].map((b, i) => (
          <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        ))}

        {/* Streets — horizontal */}
        <line x1="20" y1="125" x2="380" y2="125" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        <line x1="20" y1="220" x2="380" y2="220" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
        <line x1="20" y1="310" x2="380" y2="310" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
        {/* Main road — wider */}
        <line x1="20" y1="50"  x2="380" y2="50"  stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" />
        <line x1="20" y1="380" x2="380" y2="380" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />

        {/* Streets — vertical */}
        <line x1="130" y1="20" x2="130" y2="390" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        <line x1="250" y1="20" x2="250" y2="390" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
        <line x1="355" y1="20" x2="355" y2="390" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
        {/* Main road — wider */}
        <line x1="40"  y1="20" x2="40"  y2="390" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" />

        {/* Street labels */}
        <text x="55" y="44" fontSize="7" fill="rgba(255,255,255,0.25)" fontFamily="Inter, sans-serif" letterSpacing="0.05em">TOTTENHAM COURT RD</text>
        <text x="145" y="44" fontSize="7" fill="rgba(255,255,255,0.20)" fontFamily="Inter, sans-serif">MORTIMER ST</text>
        <text x="48" y="120" fontSize="6" fill="rgba(255,255,255,0.18)" fontFamily="Inter, sans-serif" transform="rotate(-90,48,120)">CHARLOTTE ST</text>
        <text x="48" y="215" fontSize="6" fill="rgba(255,255,255,0.18)" fontFamily="Inter, sans-serif" transform="rotate(-90,48,215)">NEWMAN ST</text>

        {/* Location pin — our office */}
        <circle cx="195" cy="182" r="18" fill="rgba(212,255,63,0.12)" />
        <circle cx="195" cy="182" r="10" fill="rgba(212,255,63,0.20)" />
        <circle cx="195" cy="182" r="4"  fill="#d4ff3f" />

        {/* Pulse ring */}
        <circle cx="195" cy="182" r="22" fill="none" stroke="#d4ff3f" strokeWidth="1" opacity="0.25">
          <animate attributeName="r" from="10" to="30" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.5" to="0" dur="2.5s" repeatCount="indefinite" />
        </circle>

        {/* Label */}
        <rect x="208" y="172" width="68" height="18" rx="4" fill="rgba(0,0,0,0.7)" />
        <text x="213" y="184" fontSize="8" fill="#d4ff3f" fontFamily="Inter, sans-serif" fontWeight="600">W1W Agency</text>

        {/* Tube symbol */}
        <circle cx="130" cy="50" r="7" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <text x="127" y="54" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="Arial" fontWeight="bold">U</text>

        {/* North indicator */}
        <text x="365" y="38" fontSize="9" fill="rgba(255,255,255,0.2)" fontFamily="Inter, sans-serif" fontWeight="600">N</text>
        <line x1="370" y1="40" x2="370" y2="25" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <polygon points="370,20 366,30 374,30" fill="rgba(255,255,255,0.2)" />
      </svg>

      {/* Corner label */}
      <div className="absolute bottom-4 left-4 text-[10px] text-white/20 tracking-widest uppercase font-mono">
        Fitzrovia · W1W
      </div>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="about" ref={ref} className="py-28 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs text-[#d4ff3f] tracking-[0.2em] uppercase mb-4">About us</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
            Small team.{' '}
            <br />
            <span className="text-white/30">Big ambitions.</span>
          </h2>
          <div className="space-y-4 text-white/60 text-base leading-relaxed">
            <p>
              We're a tight-knit team of designers, developers, and strategists based in the heart of Fitzrovia.
              We work with ambitious businesses — from independents to scale-ups — who want their digital presence to do real work.
            </p>
            <p>
              No bloated retainers, no account managers you never meet, no outsourcing to people who don't care.
              Just smart, crafted work from people who are invested in your success.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-8 mb-10 text-white/30 text-sm">
            <MapPin size={14} className="text-[#d4ff3f]" />
            Fitzrovia, London W1
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="bg-[#0c0c0c] border border-white/5 rounded-2xl p-5 flex flex-col gap-1"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              >
                <span className="text-3xl font-semibold text-white tracking-tight">{s.value}</span>
                <span className="text-white/30 text-xs">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-white/8 bg-[#0c0c0c] p-2">
            <FitzroviaMap />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
