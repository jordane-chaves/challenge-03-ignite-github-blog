import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { PostsContextProvider } from './contexts/posts'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { queryClient } from './lib/react-query'
import { Router } from './router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <QueryClientProvider client={queryClient}>
        <PostsContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </PostsContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
