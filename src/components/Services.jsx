import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pillars = [
  {
    label: 'Design and brand',
    title: 'We can design the site, shape the brand, or help tidy both up.',
    body:
      'If things feel a bit all over the place, we help bring it together so it looks clear and feels more like your business.',
  },
  {
    label: 'Build and manage',
    title: 'We build websites and keep them looked after.',
    body:
      'That might mean starting from scratch, improving what you already have, or keeping things updated once the site is live.',
  },
  {
    label: 'Talk it through',
    title: 'And if you need help figuring things out, we do that too.',
    body:
      'Sometimes it is not really a website problem at all. We can help with the offer, the messaging, and the decisions around it.',
  },
]

const listItems = [
  'Web design',
  'Website management',
  'Web development',
  'Brand development',
  'Business consultancy',
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-12%' })

  return (
    <section id="services" ref={ref} className="border-y border-black/8 bg-[#f3f1ea]">
      <div className="max-w-6xl mx-auto px-8 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-black/45">
            Our services
          </p>
          <h2 className="mt-4 font-serif font-bold text-[clamp(2.2rem,4.5vw,3.9rem)] leading-[1.08] tracking-tight text-black">
            We can help with the website, the brand, and the bits around it.
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-black/58">
            Some people come to us for a new site. Some need help keeping things updated. Some just want a second
            brain on the brand. We are happy doing all of it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid gap-8 border-t border-black/10 pt-10 md:grid-cols-3"
        >
          {pillars.map((pillar) => (
            <article key={pillar.title} className="space-y-3">
              <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-black/35">
                {pillar.label}
              </p>
              <h3 className="font-serif text-2xl leading-tight tracking-tight text-black">
                {pillar.title}
              </h3>
              <p className="font-sans text-base leading-relaxed text-black/56">
                {pillar.body}
              </p>
            </article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col gap-6 border-t border-black/10 pt-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {listItems.map((item) => (
              <span key={item} className="font-sans text-[11px] text-black/48">
                {item}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center self-start border border-black bg-black px-6 py-3 font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-white transition-colors hover:bg-[#d4ff3f] hover:text-black"
          >
            Start a project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
