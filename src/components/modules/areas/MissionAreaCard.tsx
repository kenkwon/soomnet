import MapSVG from '@/components/atoms/areas/MapSVG';
import React from 'react';
import styles from './MissionAreaCard.module.css';
import { MapSVGData } from '@/types/Map';

type OwnProps = {
  area: { id: number; name: string; mapData: MapSVGData[] };
  containerStyle?: React.CSSProperties;
};

const MissionAreaCard: React.FC<OwnProps> = async ({ area: { name, mapData }, containerStyle }) => {
  return (
    <section className={styles.container} style={containerStyle}>
      <div className={styles.header}>
        <h1>선교지역</h1>
        <p>{name}</p>
      </div>
      <div className={styles.content}>
        <MapSVG data={mapData} />
      </div>
    </section>
  );
};

export default MissionAreaCard;
