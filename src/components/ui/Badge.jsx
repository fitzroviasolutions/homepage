export default function Badge({
  className = '',
  children,
  ...props
}) {
  return (
    <span
      className={`bg-surface-container-highest text-on-surface px-[16px] py-[8px] rounded font-label-sm text-label-sm inline-block ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
