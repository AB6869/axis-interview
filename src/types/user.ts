export interface User {
  id: number
  username: string
  password: string
}

/**
 * The shape held in app state after login.
 * Never keep the passowrd in memory beyond the auth check
 */
export type AuthUser = Omit<User, 'password'>
