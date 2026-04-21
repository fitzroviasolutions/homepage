import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Mail, Phone } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e) {
    e.preventDefault()
    // Mailto fallback for static hosting
    const subject = encodeURIComponent(`New enquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:hello@w1w.agency?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" ref={ref} className="py-28 px-6 max-w-7xl mx-auto w-full">
      <div className="relative rounded-3xl overflow-hidden bg-[#0d0d0d] border border-white/5 p-10 md:p-16">
        {/* Background glow */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#d4ff3f]/8 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs text-[#d4ff3f] tracking-[0.2em] uppercase mb-4">Get in touch</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
              Ready to start something?
            </h2>
            <p className="text-white/40 leading-relaxed mb-10 max-w-sm">
              Tell us about your project and we'll get back to you within one business day. No sales pitches, just a real conversation.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:hello@w1w.agency"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm"
              >
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail size={14} />
                </div>
                hello@w1w.agency
              </a>
              <a
                href="tel:+442071234567"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm"
              >
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone size={14} />
                </div>
                +44 20 7123 4567
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-10">
                <div className="w-14 h-14 rounded-full bg-[#d4ff3f]/10 flex items-center justify-center">
                  <Mail size={22} className="text-[#d4ff3f]" />
                </div>
                <p className="text-white font-semibold text-xl">Opening your email client…</p>
                <p className="text-white/40 text-sm">We'll reply within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/30 mb-2 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#d4ff3f]/40 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/30 mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#d4ff3f]/40 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/30 mb-2 uppercase tracking-wider">Tell us about your project</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#d4ff3f]/40 transition-colors resize-none"
                    placeholder="What are you building? What's your timeline?"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full bg-[#d4ff3f] text-[#080808] font-semibold py-3.5 rounded-xl text-sm hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  Send message
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
