import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '@/features/auth'
import styles from './AppLayout.module.css'

export function AppLayout() {
  const { user, logout } = useAuth()

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link to={'/sites'} className={styles.link}>
          <img src="/axis-logo.png" alt="Axis communications" className={styles.logo}></img>
        </Link>

        <nav className={styles.nav}>
          <span>{user?.username}</span>
          <button onClick={logout} className={styles.logoutButton}>Sign out</button>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
