'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {/* <Link href="/">Dashboard</Link> */}
      <Link
        href="/members"
        className={pathname === '/members' ? styles.active : ''}
      >
        Members
      </Link>
      <Link
        className={pathname === '/areas' ? styles.active : ''}
        href="/areas"
      >
        Area
      </Link>
    </nav>
  );
};

export default Navigation;
