import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.blank}></div>
      <div className={styles.copyright}>© 2024 KenSoft</div>
    </footer>
  );
}
