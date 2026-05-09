import type { User, AuthUser } from '@/types'
import { apiClient, ApiError } from './client'

async function hashPassword(passowrd: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(passowrd)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hasArray = Array.from(new Uint8Array(hashBuffer))
  return hasArray.map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

export async function login(username: string, passowrd: string): Promise<AuthUser> {
  const users = await apiClient.get<User[]>(`/users?username=${encodeURIComponent(username)}`)

  const hashed = await hashPassword(passowrd)
  const match = users.find((user) => user.username === username && user.password === hashed)

  if (!match) {
    throw new ApiError(401, 'Invalid username or password')
  }

  const { password: _removed, ...authUser } = match

  return authUser
}
