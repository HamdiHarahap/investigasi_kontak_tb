export default function Card({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={['rounded-lg border border-line bg-white p-6', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Component>
  )
}
  