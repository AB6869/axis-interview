import { useState, type SyntheticEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import { ApiError } from '@/api'
import styles from './LogingPage.module.css'

export function LoginPage() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (user) return <Navigate to="/sites" replace />

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      await login(username, password)
      navigate('/sites', { replace: true })
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message)
      } else {
        setError('An expected error occured.  Please try again')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <img src="/axis-logo.png" alt="Axis communication" className={styles.logo}></img>
        <h1 className={styles.title}>Sign in</h1>

        <form onSubmit={handleSubmit}>
          {error && (
            <div role="alert" className={styles.errror}>
              {error}
            </div>
          )}
          <div className={styles.field}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              required
              autoFocus
              value={username}
              className={styles.input}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              autoFocus
              required
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" disabled={isSubmitting} className={styles.button}>
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </main>
  )
}
