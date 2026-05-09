import { screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from '@/test/renderWithProviders'
import { SitesPage } from './SitesPage'

describe('SitesPage', () => {
  it('shows a loading indicator on first render', () => {
    renderWithProviders(<SitesPage />)

    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('renders a card for each site after loading', async () => {
    renderWithProviders(<SitesPage />)

    await waitFor(() => {
      expect(screen.getByText('Demo site 1')).toBeInTheDocument()
      expect(screen.getByText('Demo site 2')).toBeInTheDocument()
    })
  })

  it('shows an empty message when the user has no sites', async () => {
    renderWithProviders(<SitesPage />, {
      authValue: {
        user: { id: 2, username: 'userWithNoSites' },
        login: () => Promise.resolve(),
        logout: () => {},
      },
    })

    await waitFor(() => {
      expect(screen.getByText(/no sites available/i)).toBeInTheDocument()
    })
  })
})