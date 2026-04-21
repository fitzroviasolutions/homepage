import { motion } from 'framer-motion'

const links = {
  Services: ['Web Design', 'Automation', 'Social Media', 'Branding', 'SEO'],
  Company: ['About', 'Work', 'Process', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-16 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
        <div>
          <div className="text-2xl font-semibold text-white mb-3">
            <span className="text-[#d4ff3f]">W</span>1W
          </div>
          <p className="text-white/45 text-sm leading-relaxed max-w-xs">
            A boutique digital agency in Fitzrovia, London. We build websites, automations, and social strategies.
          </p>
        </div>

        {Object.entries(links).map(([group, items]) => (
          <div key={group}>
            <p className="text-xs text-white/20 uppercase tracking-widest mb-5">{group}</p>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/5">
        <p className="text-xs text-white/35">
          © {new Date().getFullYear()} W1W Agency Ltd · Fitzrovia, London
        </p>
        <p className="text-xs text-white/35">
          Company No. 12345678 · Registered in England & Wales
        </p>
      </div>
    </footer>
  )
}
