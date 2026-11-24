const variants = {
  primary: 'bg-brand-700 text-white hover:bg-brand-800',
  secondary: 'bg-white text-brand-800 hover:bg-brand-50 border border-line',
  outline: 'bg-transparent text-white border border-white/60 hover:bg-white/10',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  as = 'button',
  href,
  ...props
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200',
    'disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (as === 'a' || href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  )
}
