export default function Textarea({
  id,
  rows = 4,
  className = '',
  error = false,
  ...props
}) {
  return (
    <textarea
      id={id}
      rows={rows}
      className={[
        'w-full resize-y rounded-md border bg-white px-4 py-2.5 text-sm text-ink transition-colors',
        'placeholder:text-muted/60',
        'focus:border-brand-500 focus:ring-2 focus:ring-brand-100 focus:outline-none',
        error ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-line',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}
