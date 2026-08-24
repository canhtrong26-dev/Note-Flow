type HeadingProps = {
  level: 1 | 2 | 3
  children: React.ReactNode
}

function Heading({ level, children }: HeadingProps) {
  if (level === 1) return <h1>{children}</h1>
  if (level === 2) return <h2>{children}</h2>
  return <h3>{children}</h3>
}

export default Heading