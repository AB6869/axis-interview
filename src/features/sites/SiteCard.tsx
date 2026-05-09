import type { Site } from '@/types/site'
import { Link } from 'react-router-dom'
import styles from './SitePage.module.css'

interface SiteCardProps {
  readonly site: Site
}
export function SiteCard({ site }: SiteCardProps) {
  return (
    <Link to={`/sites/${site.id}`} className={styles.card}>
      <div className={styles.iconWrapper}>
        <img src="/site.svg" alt="Site icon" />
      </div>
      <h2 className={styles.title}>{site.title}</h2>
      <p className={styles.cta}>View devices →</p>
    </Link>
  )
}
