import { Outlet, Link } from 'react-router-dom'

function NotesLayout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>

      <aside style={{
        width: '200px',
        backgroundColor: '#1e1e2e',
        color: '#fff',
        padding: '20px',
      }}>
        <h3>NoteFlow</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
          <Link to="/notes" style={{ color: '#fff', textDecoration: 'none' }}>📋 All</Link>
          <Link to="/notes/pinned" style={{ color: '#fff', textDecoration: 'none' }}>📌 Pinned</Link>
          <Link to="/notes/archived" style={{ color: '#fff', textDecoration: 'none' }}>📦 Archived</Link>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>

    </div>
  )
}

export default NotesLayout