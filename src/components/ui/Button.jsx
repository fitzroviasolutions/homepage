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

  const baseStyles = `${hasDisplay ? '' : 'inline-flex'} items-center justify-center font-label-md text-label-md rounded font-medium transition-all`

  const variantStyles = {
    primary: 'bg-primary text-on-primary hover:opacity-90',
    outline: 'bg-transparent border border-secondary text-secondary hover:bg-secondary-fixed hover:text-on-secondary-fixed',
    text: 'text-primary dark:text-inverse-primary hover:text-secondary dark:hover:text-secondary-fixed-dim',
  }

  const sizeStyles = {
    sm: 'px-[16px] py-[8px]',
    md: 'px-md py-sm',
    lg: 'px-lg py-sm',
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
