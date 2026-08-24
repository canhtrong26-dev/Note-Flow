import { useContext } from 'react'
import { UIContext } from './UIContext'

function useUI() {
  const context = useContext(UIContext)

  if (context === null) {
    throw new Error('useUI phải được dùng bên trong UIProvider')
  }

  return context
}

export default useUI
