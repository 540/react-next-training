import React, { useContext } from 'react'

interface Props {
  children: React.ReactNode
}

const ThemeContext = React.createContext({
  darkMode: false,
  toggleDarkMode: () => {}
})

export const ThemeProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = React.useState(false)

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
