import { screen } from '@testing-library/react'
import { Routes, Route } from 'react-router-dom'
import { renderWithProviders } from '@/test/renderWithProviders'
import { ProtectedRoute } from './ProtectedRoute'

const unauthenticated = {
  user: null,
  login: () => Promise.resolve(),
  logout: () => {},
} as const

describe('ProtectedRoute', () => {
  it('redirects to /login when user is not authenticated', () => {
    renderWithProviders(
      <Routes>
        <Route path="/login" element={<div>Login Page</div>} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<div>Protected Content</div>} />
        </Route>
      </Routes>,
      { authValue: unauthenticated, initialEntries: ['/'] },
    )

    expect(screen.getByText('Login Page')).toBeInTheDocument()
    expect(screen.queryByText('Protected Content')).not.toBeInTheDocument()
  })

  it('renders children when user is authenticated', () => {
    renderWithProviders(
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<div>Protected Content</div>} />
        </Route>
      </Routes>,
      { initialEntries: ['/'] },
    )

    expect(screen.getByText('Protected Content')).toBeInTheDocument()
  })
})
