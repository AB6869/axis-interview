import { LoadingSpinner } from '@/components/LoadingSpinner'
import { useSites } from './useSites'
import { ErrorMessage } from '@/components/ErrorMessage'
import { SiteCard } from './SiteCard'
import styles from './SitePage.module.css'

export function SitesPage() {
  const { data: sites, isLoading, error } = useSites()

  if (isLoading) return <LoadingSpinner label="Loading sites..." />
  if (error) return <ErrorMessage error={error} />

  return (
    <main>
      <h1>Sites</h1>

      {sites?.length ? (
        <div className={styles.grid}>
          {sites.map((site) => (
            <SiteCard key={site.id} site={site} />
          ))}
        </div>
      ) : (
        <p>No sites available for your account</p>
      )}
    </main>
  )
}
