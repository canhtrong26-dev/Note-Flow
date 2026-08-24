import { createContext } from 'react'

type UIState = {
  theme: 'light' | 'dark'
  isSidebarOpen: boolean
}

type UIAction =
  | { type: 'TOGGLE_THEME' }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'OPEN_SIDEBAR' }
  | { type: 'CLOSE_SIDEBAR' }

type UIContextType = {
  state: UIState
  dispatch: React.Dispatch<UIAction>
}

function uiReducer(state: UIState, action: UIAction): UIState {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    case 'TOGGLE_SIDEBAR':
      return { ...state, isSidebarOpen: !state.isSidebarOpen }
    case 'OPEN_SIDEBAR':
      return { ...state, isSidebarOpen: true }
    case 'CLOSE_SIDEBAR':
      return { ...state, isSidebarOpen: false }
    default:
      return state
  }
}

const UIContext = createContext<UIContextType | null>(null)

export { UIContext, uiReducer }
export type { UIState, UIAction, UIContextType }