export default function Container({ children, className = '', as: Component = 'div' }) {
  return (
    <Component
      className={['mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Component>
  )
}
