export default function Container({ children, className = '', as: Component = 'div' }) {
  return (
    <Component
      className={[
        'mx-auto w-full max-w-6xl px-8 max-[900px]:px-6 max-[520px]:px-4',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Component>
  )
}
