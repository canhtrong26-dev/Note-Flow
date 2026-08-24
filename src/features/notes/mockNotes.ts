import type Note from './Note'

const mockNotes: Note[] = [
  {
    id: '1',
    title: 'Học React',
    content: 'Học React + TypeScript + Sass',
    tags: ['#ideas'],
    createdAt: 'Jan 13, 2026',
    pinned: false,
    archived: false,
  },
  {
    id: '2',
    title: 'Mua đồ',
    content: 'Mua sách, bút, vở',
    tags: ['#todo'],
    createdAt: 'Jan 13, 2026',
    pinned: false,
    archived: false,
  },
  {
    id: '3',
    title: 'Công việc',
    content: 'Hoàn thành task LT11',
    tags: ['#work'],
    createdAt: 'Jan 13, 2026',
    pinned: true,
    archived: false,
  },
  {
    id: '4',
    title: 'Ý tưởng app',
    content: 'Tạo app quản lý chi tiêu',
    tags: ['#ideas'],
    createdAt: 'Jan 13, 2026',
    pinned: false,
    archived: false,
  },
  {
    id: '5',
    title: 'Lịch học',
    content: 'Thứ 2, 4, 6 học tiếng Anh',
    tags: ['#todo'],
    createdAt: 'Jan 13, 2026',
    pinned: false,
    archived: false,
  },
]

export default mockNotes