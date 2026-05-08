import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '@/features/auth'
import { SiteDetailPage, SitesPage } from '@/features/sites'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { AppLayout } from '@/components/AppLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/sites" element={<SitesPage />}></Route>
            <Route path="/sites/:siteId" element={<SiteDetailPage />}></Route>
          </Route>
        </Route>

        <Route path="*" element={<Navigate to={'/login'} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
