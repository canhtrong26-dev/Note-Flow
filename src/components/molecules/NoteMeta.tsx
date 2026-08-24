import Tag from '../atoms/Tag'

type NoteMetaProps = {
  tags: string[]
  createdAt: string
}

function NoteMeta({ tags, createdAt }: NoteMetaProps) {
  return (
    <div>
      <div className="note-card__tags">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
      <span className="note-card__date">{createdAt}</span>
    </div>
  )
}

export default NoteMeta
