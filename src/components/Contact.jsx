import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-black py-24">
      <div className="absolute top-0 right-0 h-full w-1/3 translate-x-1/2 -skew-x-12 bg-[#d4ff3f]/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-2 w-2 rounded-full bg-[#d4ff3f]" />
            <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-white/45">
              Contact
            </p>
          </div>
          <h2 className="font-serif font-black text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.05] tracking-tight text-white">
            Ready for a real conversation?
          </h2>
          <p className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-zinc-400">
            Tell us what you need and we will come back to you the same day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form action="https://formspree.io/f/meevrjap" method="POST" className="space-y-5">
              <input type="hidden" name="_subject" value={`New enquiry from ${form.name || 'Website contact form'}`} />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-zinc-500">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-white/10 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 transition-colors focus:border-[#d4ff3f]/50 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-zinc-500">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-white/10 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 transition-colors focus:border-[#d4ff3f]/50 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-zinc-500">
                  What do you need?
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none border border-white/10 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder-zinc-600 transition-colors focus:border-[#d4ff3f]/50 focus:outline-none"
                  placeholder="Tell us what you are working on..."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-[#d4ff3f] px-10 py-5 font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-black transition-colors hover:bg-white"
              >
                Send message
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <p className="mb-1 font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-zinc-500">Email</p>
                <a href="mailto:hello@w1w.agency" className="font-sans text-white transition-colors hover:text-[#d4ff3f]">
                  hello@w1w.agency
                </a>
              </div>
              <div>
                <p className="mb-1 font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-zinc-500">Based</p>
                <p className="font-sans text-white">
                  Great Titchfield Street
                  <br />
                  Fitzrovia, London W1W
                </p>
              </div>
            </div>
            <p className="mt-12 hidden font-handwritten text-3xl text-[#d4ff3f]/50 lg:block">
              See you in Fitzrovia!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
