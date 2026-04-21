export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black px-8 py-14">
      <div className="max-w-7xl mx-auto flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div>
          <div className="mb-4 font-serif text-xl font-black text-white">W1W</div>
          <p className="max-w-xs font-sans text-[10px] font-bold tracking-[0.18em] uppercase leading-relaxed text-zinc-500">
            Rooted in Fitzrovia. Websites, brand development, and consultancy for London businesses.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 md:items-end">
          <div className="flex gap-8">
            {['Instagram', 'LinkedIn', 'Privacy'].map((label) => (
              <a
                key={label}
                href="#"
                className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-500 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
          <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-[#d4ff3f]">
            © {new Date().getFullYear()} W1W Agency Ltd · Built in Fitzrovia
          </p>
        </div>
      </div>
    </footer>
  )
}
