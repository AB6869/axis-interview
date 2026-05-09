import type { Device } from '@/types'
import { StatusBadge } from '@/components/StatusBadge'
import styles from './DeviceCard.module.css'

interface DeviceCardProps {
  readonly device: Device
}

export function DeviceCard({ device }: DeviceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>{device.title}</h2>
          <p className={styles.description}>{device.description}</p>
        </div>

        <div className={styles.badges}>
          <StatusBadge
            label={device.enabled ? 'Enabled' : 'Disabled'}
            variant={device.enabled ? 'success' : 'warning'}
          />
          <StatusBadge
            label={device.connected ? 'Connected' : 'Disconnected'}
            variant={device.connected ? 'success' : 'warning'}
          />
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Model</span>
          <span className={styles.metaValue}>{device.model}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Firmware</span>
          <span className={styles.metaValue}>{device.version}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Timezone</span>
          <span className={styles.metaValue}>{device.timezone}</span>
        </div>
      </div>

      {device.storages.length > 0 && (
        <>
          <hr className={styles.divider} />
          <div>
            <p className={styles.storageHeading}>Storage</p>
            <ul className={styles.storageList}>
              {device.storages.map((storage) => (
                <li key={storage.id} className={styles.storageItem}>
                  <span
                    className={`${styles.storageDot} ${styles[storage.state]}`}
                    aria-hidden="true"
                  />
                  <span className={styles.storageId}>{storage.id}</span>
                  <span className={styles.storageState}>{storage.state}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </article>
  )
}
