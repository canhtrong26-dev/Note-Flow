import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useUI from '../context/ui/useUI'
import type { RootState } from '../store/store'
import { searchTextChanged, viewModeChanged } from '../features/filters/filtersSlice'

type AppLayoutProps = {
  children: React.ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
  const { state, dispatch } = useUI()
  const reduxDispatch = useDispatch()
  const searchText = useSelector((s: RootState) => s.filters.searchText)
  const viewMode = useSelector((s: RootState) => s.filters.viewMode)

  return (
    <div data-theme={state.theme} className="app-layout">
      <aside className={state.isSidebarOpen ? 'sidebar' : 'sidebar sidebar--closed'}>
        <div className="sidebar__logo">NoteFlow</div>
        <nav className="sidebar__nav">
          <NavLink to="/notes" end className="sidebar__link">
            <span>📋</span> All Notes
          </NavLink>
          <NavLink to="/notes/pinned" className="sidebar__link">
            <span>📌</span> Pinned
          </NavLink>
          <NavLink to="/notes/archived" className="sidebar__link">
            <span>📦</span> Archived
          </NavLink>
        </nav>
      </aside>

      <div className="app-layout__main">
        <header className="header">
          <button
            className="icon-button"
            title="Toggle sidebar"
            onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
          >
            ☰
          </button>

          <div className="header__search">
            <span className="header__search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search notes..."
              value={searchText}
              onChange={(e) => reduxDispatch(searchTextChanged(e.target.value))}
            />
          </div>

          <div className="header__actions">
            <button
              className="icon-button"
              title={viewMode === 'grid' ? 'Switch to list view' : 'Switch to grid view'}
              onClick={() =>
                reduxDispatch(viewModeChanged(viewMode === 'grid' ? 'list' : 'grid'))
              }
            >
              {viewMode === 'grid' ? '▦' : '▤'}
            </button>
            <button
              className="icon-button"
              title="Toggle theme"
              onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
            >
              {state.theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </header>

        <main className="content">{children}</main>
      </div>
    </div>
  )
}

export default AppLayout
