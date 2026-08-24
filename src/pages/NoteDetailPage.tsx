import { useParams, Link } from 'react-router-dom'
import type Note from '../features/notes/Note'

type NoteDetailPageProps = {
  notes: Note[]
}

function NoteDetailPage({ notes }: NoteDetailPageProps) {
  const { id } = useParams()

  const note = notes.find((n) => n.id === id)

  if (!note) {
    return (
      <div>
        <h2>Note không tồn tại</h2>
        <Link to="/notes">← Quay lại</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/notes">← Back to notes</Link>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <div>
        {note.tags.map((tag) => (
          <span key={tag}>{tag} </span>
        ))}
      </div>
      <p>Ngày tạo: {note.createdAt}</p>
      <p>{note.pinned ? '📌 Đã ghim' : ''}</p>
      <p>{note.archived ? '📦 Đã lưu trữ' : ''}</p>
    </div>
  )
}

export default NoteDetailPage