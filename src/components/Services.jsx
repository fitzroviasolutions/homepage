import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Zap, BarChart3, Megaphone, Palette, Search } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Design & Build',
    desc: 'Bespoke websites that load fast, look stunning, and convert. From landing pages to full e-commerce.',
    tags: ['React', 'Next.js', 'Webflow'],
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    desc: 'Stop doing things manually. We connect your tools and automate the repetitive so you can focus on what matters.',
    tags: ['Zapier', 'Make', 'n8n'],
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    desc: 'Content strategy, community management, and paid social that grows real audiences and drives revenue.',
    tags: ['Instagram', 'LinkedIn', 'TikTok'],
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'Logos, visual systems, and guidelines that make your brand impossible to ignore.',
    tags: ['Strategy', 'Visual ID', 'Guidelines'],
  },
  {
    icon: Search,
    title: 'SEO & Content',
    desc: 'Get found. We craft content and technical SEO strategies that rank and actually bring in customers.',
    tags: ['Technical', 'Content', 'Local SEO'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Growth',
    desc: 'Data dashboards, conversion optimisation, and A/B testing to continuously improve your performance.',
    tags: ['GA4', 'Hotjar', 'CRO'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="services" ref={ref} className="bg-[#f7f7f5] py-28">
      <div className="px-6 max-w-7xl mx-auto w-full">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff3f] border border-black/20 inline-block" />
            <p className="text-xs text-black/40 tracking-[0.2em] uppercase">What we do</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0a0a0a] tracking-tight leading-tight max-w-lg">
            Everything your digital presence needs.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                className="bg-white rounded-2xl p-8 flex flex-col gap-4 group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-black/5"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] flex items-center justify-center group-hover:bg-[#d4ff3f] transition-colors duration-300">
                  <Icon size={18} className="text-white group-hover:text-[#0a0a0a] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-[#0a0a0a] font-semibold mb-2 text-lg">{s.title}</h3>
                  <p className="text-black/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[10px] text-black/35 border border-black/10 px-2 py-0.5 rounded-full tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
