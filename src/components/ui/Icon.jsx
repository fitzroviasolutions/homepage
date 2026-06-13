export default function Icon({
  name,
  className = '',
  ...props
}) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      data-icon={name}
      {...props}
    >
      {name}
    </span>
  )
}
