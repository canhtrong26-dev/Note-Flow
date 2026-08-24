import Tag from '../atoms/Tag'

type NoteMetaProps = {
  tags: string[]
  createdAt: string
  pinned: boolean
}

function NoteMeta({ tags, createdAt, pinned }: NoteMetaProps) {
  return (
    <div>
      <div className="note-card__tags">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
      <span className="note-card__date">{createdAt}</span>
      {pinned && <span className="note-card__date"> · 📌</span>}
    </div>
  )
}

export default NoteMeta
