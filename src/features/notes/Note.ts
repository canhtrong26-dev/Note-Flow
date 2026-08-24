
type Note = {
  id: string
  title: string
  content: string
  tags: string[]
  createdAt: string
  pinned: boolean
  archived: boolean
}

export type { Note }
export type { Note as default }