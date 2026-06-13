export default function Text({
  variant = 'body-md', // 'body-lg' | 'body-md' | 'label-md' | 'label-sm'
  as = 'p',
  className = '',
  children,
  ...props
}) {
  const Tag = as

  const variantStyles = {
    'body-lg': 'font-body-lg text-body-lg leading-[1.6] font-normal text-on-surface-variant',
    'body-md': 'font-body-md text-body-md leading-[1.5] font-normal text-on-surface-variant',
    'label-md': 'font-label-md text-label-md leading-[1.4] tracking-[0.02em] font-medium',
    'label-sm': 'font-label-sm text-label-sm leading-[1.2] font-semibold tracking-wider uppercase',
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
