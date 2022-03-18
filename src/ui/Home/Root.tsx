import React from 'react'
import { color, GlobalStyles } from '../_styles'
import { ComicsList } from './ComicsList'

export const Root = () => {
  return (
    <div style={{ backgroundColor: color.white, height: '100%' }}>
      <GlobalStyles />
      <ComicsList />
    </div>
  )
}
