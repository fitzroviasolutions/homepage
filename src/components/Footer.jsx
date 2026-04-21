export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/8 px-8 py-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
        <div>
          <div className="font-serif font-black text-xl text-white mb-4">W1W</div>
          <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-500 max-w-xs leading-relaxed">
            Rooted in Fitzrovia. Websites, automations and social media for London businesses.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-start md:items-end">
          <div className="flex gap-8">
            {['Instagram', 'LinkedIn', 'Privacy'].map((l) => (
              <a key={l} href="#" className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-500 hover:text-white transition-colors">
                {l}
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
