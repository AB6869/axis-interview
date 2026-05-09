import { useDevices, DeviceCard } from '@/features/devices'
import { useParams, Link } from 'react-router-dom'
import { useSite } from './useSite'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { ErrorMessage } from '@/components/ErrorMessage'
import styles from './SitePage.module.css'

export function SiteDetailPage() {
  const { siteId } = useParams()
  const id = Number(siteId)

  const { data: site, isLoading: siteLoading, error: siteError } = useSite(id)
  const { data: devices, isLoading: devicesLoading, error: devicesError } = useDevices(id)

  const isLoading = siteLoading || devicesLoading
  const error = siteError || devicesError

  if (isLoading) return <LoadingSpinner label="Loading devices…" />
  if (error) return <ErrorMessage error={error} />

  return (
    <div>
      <Link to="/sites" className={styles.backLink}>
        ← Back to sites
      </Link>

      <h1 className={styles.heading}>{site?.title}</h1>

      {devices?.length ? (
        <div className={styles.list}>
          {devices.map((device) => (
            <DeviceCard key={device.id} device={device} />
          ))}
        </div>
      ) : (
        <p>No devices found for this site.</p>
      )}
    </div>
  )
}
