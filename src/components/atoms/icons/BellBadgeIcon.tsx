import React from 'react';
import { PiBell } from 'react-icons/pi';
import styles from './BellBadgeIcon.module.css';

type BellBadgeIconProps = {
  count?: number;
};

export default function BellBadgeIcon({ count }: BellBadgeIconProps) {
  return (
    <div className={styles.container}>
      <PiBell size={40} />
      {count && <span className={styles.badge}>{count}</span>}
    </div>
  );
}
