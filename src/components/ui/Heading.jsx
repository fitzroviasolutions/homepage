export default function Heading({
  level = 2,
  variant = 'lg', // 'display' | 'lg' | 'md'
  className = '',
  children,
  ...props
}) {
  const Tag = `h${level}`

  const variantStyles = {
    display: 'font-display text-[38px] sm:text-[48px] md:text-display leading-[1.1] tracking-[-0.02em] font-bold',
    lg: 'font-headline-lg text-[28px] sm:text-headline-lg-mobile md:text-headline-lg leading-[1.2] tracking-[-0.01em] font-semibold',
    md: 'font-headline-md text-headline-md leading-[1.3] font-semibold',
  }

  return (
    <Tag
      className={`${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
