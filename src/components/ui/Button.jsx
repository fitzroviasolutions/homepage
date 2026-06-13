export default function Button({
  variant = 'primary', // 'primary' | 'outline' | 'text'
  size = 'md', // 'sm' | 'md' | 'lg'
  as = 'a', // 'a' | 'button'
  className = '',
  children,
  ...props
}) {
  const Tag = as

  const hasDisplay = className.split(' ').some(c => 
    c.startsWith('hidden') || 
    c.startsWith('flex') || 
    c.startsWith('block') || 
    c.startsWith('inline') ||
    c.includes(':hidden') ||
    c.includes(':flex') ||
    c.includes(':block') ||
    c.includes(':inline')
  )

  const baseStyles = `${hasDisplay ? '' : 'inline-flex'} items-center justify-center font-label-md text-label-md rounded-full font-semibold transition-all duration-300 ease-out active:scale-[0.98]`

  const variantStyles = {
    primary: 'bg-on-background text-background hover:bg-secondary hover:text-on-secondary hover:shadow-[0_8px_24px_rgba(169,53,48,0.2)] hover:-translate-y-[1px]',
    outline: 'bg-transparent border border-outline text-on-background hover:border-secondary hover:text-secondary hover:bg-secondary-fixed/10 hover:-translate-y-[1px]',
    text: 'text-on-surface-variant hover:text-secondary relative py-1 px-2 hover:-translate-y-[1px]',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  }

  return (
    <Tag
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

