import { useState } from 'react'
import type NoteInput from '../../features/notes/NoteInput'

type NoteFormProps = {
  onSubmit: (data: NoteInput) => void
  initialNote?: NoteInput
}

function NoteForm({ onSubmit, initialNote }: NoteFormProps) {
  const [formData, setFormData] = useState<NoteInput>(
    initialNote ?? {
      title: '',
      content: '',
      tags: [],
      pinned: false,
      archived: false,
    }
  )

  function handleSubmit() {
    if (formData.title === '') {
      alert('Title không được để trống!')
      return
    }
    onSubmit(formData)
  }

  return (
    <div>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={formData.title}
          placeholder="Enter note title..."
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={formData.content}
          placeholder="Write your thoughts here..."
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        />
      </div>
      <div>
        <label>Tags</label>
        <input
          type="text"
          value={formData.tags.join(', ')}
          placeholder="work, ideas, todo (comma separated)"
          onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(', ') })}
        />
      </div>
      <button onClick={handleSubmit}>Save</button>
    </div>
  )
}

export default NoteForm