import styles from './LoadingSpinner.module.css'

interface LoadingSpinnerProps {
  readonly label?: string
}

export function LoadingSpinner({ label = 'Loading...' }: LoadingSpinnerProps) {
  return (
    <output className={styles.wrapper} aria-label={label}>
      <div className={styles.spinner} />
      <p className={styles.label}>{label}</p>
    </output>
  )
}
