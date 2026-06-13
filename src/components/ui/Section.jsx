export default function Section({
  id,
  theme = 'light', // 'light' | 'primary' | 'low' | 'custom'
  wrapper = true,
  containerClassName = '',
  className = '',
  children,
  ...props
}) {
  const themeStyles = {
    light: 'py-xl md:py-32 px-margin-mobile md:px-margin-desktop',
    primary: 'py-xl bg-primary text-on-primary px-margin-mobile md:px-margin-desktop',
    low: 'bg-surface-container-low py-xl px-margin-mobile md:px-margin-desktop border-y border-outline-variant',
    custom: '',
  }

  return (
    <section
      id={id}
      className={`${themeStyles[theme]} ${className}`}
      {...props}
    >
      {wrapper ? (
        <div className={`max-w-max-width mx-auto ${containerClassName}`}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}
