type TagProps = {
  text: string
  color?: string
}

function Tag({ text, color }: TagProps) {
  return (
    <span className="note-card__tag" style={{ color: color }}>
      {text}
    </span>
  )
}

export default Tag
