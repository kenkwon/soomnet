import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import BellBadgeIcon from '@/components/atoms/icons/BellBadgeIcon';

export default function Header() {
  return (
    <header className={styles.container}>
      <h1>SooM</h1>
      <nav className={styles.nav}>
        <Link href="/">Dashboard</Link>
        <Link href="/members">Members</Link>
        <Link href="/areas">Area</Link>
      </nav>
      <div className={styles.blank}></div>
      <nav className={styles.nav}>
        <Link href="/login">
          <BellBadgeIcon count={1} />
        </Link>
        <Link href="/register">Register</Link>
      </nav>
    </header>
  );
}
