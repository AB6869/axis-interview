import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { AuthUser } from '@/types'
import { login as apiLogin } from '@/api'
import { AuthContext } from './AuthContext'

const STORAGE_KEY = 'auth_user'

function readStoredUser(): AuthUser | null {
  const stored = sessionStorage.get(STORAGE_KEY)

  if (!stored) return null
  try {
    return JSON.parse(stored) as AuthUser
  } catch {
    sessionStorage.removeItem(STORAGE_KEY)
    return null
  }
}

interface AuthProviderProps {
  readonly children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(readStoredUser)

  async function login(username: string, password: string) {
    const authUser = await apiLogin(username, password)

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(authUser))
    setUser(authUser)
  }

  function logout() {
    sessionStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  const value = useMemo(() => ({ user, login, logout }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
