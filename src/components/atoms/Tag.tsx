type TagProps = {
  text: string
  color?: string
}

function Tag({ text, color }: TagProps) {
  return (
    <span style={{ color: color }}>
      {text}
    </span>
  )
}

export default Tag