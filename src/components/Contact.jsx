import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  return (
    <section id="contact" ref={ref} className="bg-black py-24 relative overflow-hidden">
      {/* Angled accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#d4ff3f]/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="font-serif font-black text-5xl md:text-7xl text-white tracking-tight leading-tight mb-6">
            Ready for a real<br />conversation?
          </h2>
          <p className="font-sans text-zinc-400 text-lg max-w-lg leading-relaxed">
            Tell us about your business and what you need. Fill in the form and we&apos;ll get back to you the same day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form
              action="https://formspree.io/f/meevrjap"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_subject" value={`New enquiry from ${form.name || 'Website contact form'}`} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-zinc-500 mb-2">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-sans text-sm placeholder-zinc-600 focus:outline-none focus:border-[#d4ff3f]/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-zinc-500 mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-sans text-sm placeholder-zinc-600 focus:outline-none focus:border-[#d4ff3f]/50 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-zinc-500 mb-2">What do you need?</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white font-sans text-sm placeholder-zinc-600 focus:outline-none focus:border-[#d4ff3f]/50 transition-colors resize-none"
                  placeholder="Tell us what you&apos;re working on..."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-[#d4ff3f] text-black font-sans font-bold text-[11px] tracking-[0.15em] uppercase px-10 py-5 transition-colors hover:bg-white"
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
                <p className="font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-zinc-500 mb-1">Email</p>
                <a href="mailto:hello@w1w.agency" className="font-sans text-white hover:text-[#d4ff3f] transition-colors">hello@w1w.agency</a>
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-zinc-500 mb-1">Based</p>
                <p className="font-sans text-white">Great Titchfield Street<br />Fitzrovia, London W1W</p>
              </div>
            </div>
            <p className="font-handwritten text-3xl text-[#d4ff3f]/50 mt-12 hidden lg:block">
              See you in Fitzrovia!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
