import React from 'react'
import { color, GlobalStyles } from '../_styles'
import { ComicsList } from './ComicsList'
import { useTheme } from '../_context/ThemeContext'

export const Root = () => {
  const { darkMode } = useTheme()

  return (
    <div style={{ backgroundColor: darkMode ? color.black : color.white, height: '100%' }}>
      <GlobalStyles />
      <ComicsList />
    </div>
  )
}
