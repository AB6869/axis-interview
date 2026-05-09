import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '@/features/auth/AuthContext'
import type { AuthContextValue } from '@/features/auth/AuthContext'

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,       // fail immediately in tests — no retries
        gcTime: Infinity,
      },
    },
  })
}

// Default: a logged-in demouser1
const defaultAuthValue: AuthContextValue = {
  user: { id: 1, username: 'demouser1' },
  login: () => Promise.resolve(),
  logout: () => {},
}

interface Options extends RenderOptions {
  authValue?: AuthContextValue
  initialEntries?: string[]
}

export function renderWithProviders(
  ui: ReactElement,
  { authValue = defaultAuthValue, initialEntries = ['/'], ...options }: Options = {},
) {
  return render(
    <QueryClientProvider client={createTestQueryClient()}>
      <AuthContext.Provider value={authValue}>
        <MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>
      </AuthContext.Provider>
    </QueryClientProvider>,
    options,
  )
}
