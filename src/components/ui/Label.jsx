export default function Label({ htmlFor, children, className = '', required = false }) {
  return (
    <label
      htmlFor={htmlFor}
      className={['mb-1.5 block text-sm font-medium text-ink', className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
      {required && (
        <span className="ml-1 text-brand-600" aria-hidden="true">
          *
        </span>
      )}
    </label>
  )
}
