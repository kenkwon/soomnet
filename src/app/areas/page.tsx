import Prayers from '@/components/modules/areas/Prayers';
import SekcMap from '@/components/modules/areas/SekcMap';
import styles from './page.module.css';

export default function AreasPage() {
  return (
    <article className={styles.container}>
      <SekcMap containerStyle={{ flex: '0 0 35%' }} />
      <Prayers containerStyle={{ flex: 1 }} />
    </article>
  );
}
