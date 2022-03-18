import type { AppProps } from 'next/app'
import { ThemeProvider } from '../src/ui/_context/ThemeContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
