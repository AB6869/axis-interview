import { ApiError } from '@/api'
import styles from './ErrorMessage.module.css'

interface ErrorMessageProps {
  readonly error: unknown
}
export function ErrorMessage({ error }: ErrorMessageProps) {
  const message =
    error instanceof ApiError ? error.message : 'An unexpected error occured. Please try again'

  return (
    <div className={styles.wrapper} role="alert">
      <p>{message}</p>
    </div>
  )
}
