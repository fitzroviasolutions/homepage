import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BriefcaseBusiness, Palette, Monitor } from 'lucide-react'

const groups = [
  {
    icon: Monitor,
    eyebrow: 'Websites',
    title: 'Design, build, and management.',
    body: 'From a full new site to steady ongoing updates.',
    items: ['Web design', 'Web development', 'Website management'],
  },
  {
    icon: Palette,
    eyebrow: 'Brand',
    title: 'Brand development.',
    body: 'A clearer look, voice, and overall feel.',
    items: ['Brand development'],
  },
  {
    icon: BriefcaseBusiness,
    eyebrow: 'Consultancy',
    title: 'Practical business input.',
    body: 'Help with the offer, the messaging, and what comes next.',
    items: ['Business consultancy'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-12%' })

  return (
    <section id="services" ref={ref} className="border-y border-black/8 bg-[#f6f4ee]">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-2 w-2 rounded-full bg-[#d4ff3f]" />
            <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-black/42">
              Our services
            </p>
          </div>
          <h2 className="font-serif font-black text-[clamp(2.4rem,4.8vw,4.6rem)] leading-[1.05] tracking-tight text-black">
            Websites, brands, and the thinking around them.
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-black/56">
            We design, build, manage, and help shape what sits behind it.
          </p>
        </motion.div>

        <div className="border-y border-black/10">
          {groups.map((group, index) => (
            <motion.article
              key={group.eyebrow}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-5 border-b border-black/10 py-8 last:border-b-0 md:grid-cols-[140px_minmax(0,1fr)] md:gap-8"
            >
              <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black">
                  <group.icon size={16} strokeWidth={2} />
                </span>
                <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-black/38">
                  {group.eyebrow}
                </p>
              </div>

              <div>
                <h3 className="font-sans text-[1.45rem] font-bold leading-tight text-black">
                  {group.title}
                </h3>
                <p className="mt-3 max-w-xl font-sans text-base leading-relaxed text-black/58">
                  {group.body}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex rounded-full border border-black/10 bg-white px-3 py-1.5 font-sans text-[12px] text-black/62"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
        >
          <p className="max-w-xl font-sans text-base leading-relaxed text-black/56">
            If it affects how the business shows up online, we can probably help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center self-start bg-black px-10 py-5 font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-white transition-colors hover:bg-[#d4ff3f] hover:text-black"
          >
            Contact us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
