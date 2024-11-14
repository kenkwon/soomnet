import styles from './Header.module.css';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>SOOM</h1>

      <Navigation />

      <div className={styles.blank}></div>

      {/* <nav className={styles.nav}>
        <Link href="/notifications">
          <BellBadgeIcon count={1} />
        </Link>
        <Link href="/login">
          <MemberIcon />
        </Link>
      </nav> */}
    </header>
  );
}
