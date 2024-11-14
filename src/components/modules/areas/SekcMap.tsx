import React from 'react';
import { Region } from './Region';
import styles from './SekcMap.module.css';

type OwnProps = {
  containerStyle?: React.CSSProperties;
};

const SekcMap: React.FC<OwnProps> = ({ containerStyle }) => {
  return (
    <section className={styles.container} style={containerStyle}>
      <div className={styles.header}>
        <h1>선교지역</h1>
        <p>동해안</p>
      </div>
      <div className={styles.content}>
        <Region openRegion="동해안" />
      </div>
    </section>
  );
};

export default SekcMap;
