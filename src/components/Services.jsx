import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pillars = [
  {
    label: 'Look the part',
    title: 'Web design and brand development that give people something to remember.',
    body:
      "We shape the visual side of the business so it feels considered from the first second. That can mean a sharper website, a clearer brand, or a full rethink of how everything presents itself online.",
  },
  {
    label: 'Run properly',
    title: 'Web development and website management that keep the whole thing steady.',
    body:
      "We build sites that are fast, flexible, and easy to live with. Then, if you want us to, we stay involved so updates get done, pages stay current, and your website doesn't quietly turn into another job on your list.",
  },
  {
    label: 'Think clearly',
    title: 'Business consultancy for the bits that sit behind the screen.',
    body:
      "Sometimes the real problem is not the homepage, it's the offer, the messaging, or the direction. We help you make practical decisions so the brand, the website, and the business all pull in the same direction.",
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
    <section id="services" ref={ref} className="relative border-y border-black/8 bg-[#f3f1ea]">
      <div className="absolute inset-x-0 top-0 h-px bg-black/5" />

      <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#d4ff3f]" />
              <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-black/45">
                Our services
              </p>
            </div>

            <h2 className="font-serif font-black text-[clamp(2.6rem,5vw,4.7rem)] leading-[1.04] tracking-tight text-black">
              The creative work, the technical work, and the grown-up business thinking in between.
            </h2>

            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-black/58">
              Some clients need a new website. Some need the existing one managed properly. Some need help making the
              whole brand feel more coherent. We do all of that, and we do it in a way that feels joined up rather than
              stitched together.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {listItems.map((item) => (
                <span
                  key={item}
                  className="border border-black/10 px-4 py-2 font-sans text-[10px] font-bold tracking-[0.14em] uppercase text-black/55"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group border border-black/10 bg-[#f9f7f1] p-8 md:p-10 transition-colors duration-300 hover:bg-[#fdfcf8]"
              >
                <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-black/35">
                  {pillar.label}
                </p>
                <h3 className="mt-4 max-w-2xl font-serif text-3xl leading-tight tracking-tight text-black md:text-[2.35rem]">
                  {pillar.title}
                </h3>
                <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-black/56 md:text-[1.05rem]">
                  {pillar.body}
                </p>
              </motion.article>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5 border-t border-black/10 pt-8 md:flex-row md:items-start md:justify-between"
            >
              <p className="max-w-xl font-sans text-base leading-relaxed text-black/52">
                In practice, that means one team can take care of the look, the build, the upkeep, and the business
                logic behind it.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center self-start border border-black bg-black px-6 py-3 font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-white transition-colors hover:bg-[#d4ff3f] hover:text-black"
              >
                Start a project
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
