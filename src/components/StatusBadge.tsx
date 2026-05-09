import styles from './StatusBadge.module.css'

interface StatusBadgeProps {
  readonly label: string
  readonly variant: 'success' | 'warning'
}
export function StatusBadge({ label, variant }: StatusBadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      <span className={styles.dot} aria-hidden="true" />
      {label}
    </span>
  )
}
