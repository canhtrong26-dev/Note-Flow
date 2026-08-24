import Tag from '../atoms/Tag'


type NoteMetaProps = {
  tags: string[]
  createdAt: string
  pinned: boolean
}
function NoteMeta({ tags, createdAt, pinned }: NoteMetaProps) {
  return (
    <div>
      {tags.map((tag) => (
        <Tag key={tag} text={tag} />
      ))}
      <span>{createdAt}</span>
      {pinned && <span>Pinned</span>}
    </div>
  )
}

export default NoteMeta