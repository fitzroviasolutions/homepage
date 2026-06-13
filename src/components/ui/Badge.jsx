export default function Badge({
  className = '',
  children,
  ...props
}) {
  return (
    <span
      className={`bg-white/80 border border-outline-variant/40 text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-[10px] tracking-wider uppercase inline-block font-bold transition-all hover:bg-secondary-fixed hover:border-secondary/20 hover:text-on-secondary-fixed ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

