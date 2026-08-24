import { useReducer, useEffect } from 'react'
import { UIContext, uiReducer } from './UIContext'
import type { UIState } from './UIContext'
import useLocalStorageState from '../../hooks/useLocalStorageState'

type UIProviderProps = {
  children: React.ReactNode
}

function UIProvider({ children }: UIProviderProps) {
  const [savedTheme, setSavedTheme] = useLocalStorageState<UIState['theme']>(
    'noteflow-theme',
    'light'
  )

  const initialState: UIState = {
    theme: savedTheme,
    isSidebarOpen: true,
  }

  const [state, dispatch] = useReducer(uiReducer, initialState)

  useEffect(() => {
    setSavedTheme(state.theme)
  }, [state.theme, setSavedTheme])

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  )
}

export default UIProvider
