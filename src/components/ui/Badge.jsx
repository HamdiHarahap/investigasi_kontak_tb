export default function Badge({ children, className = '' }) {
  return (
    <span
      className={[
        'inline-flex items-center text-xs font-semibold tracking-[0.14em] text-brand-700 uppercase',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
