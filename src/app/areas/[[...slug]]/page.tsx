import PrayersCard from '@/components/modules/areas/PrayersCard';
import MissionAreaCard from '@/components/modules/areas/MissionAreaCard';
import styles from './page.module.css';
import { getMissionAreaByMemberId } from '@/services/MemberService';

type OwnProps = {
  params: Promise<{ slug?: string[] }>;
};

const AreasPage: React.FC<OwnProps> = async ({ params }) => {
  const { slug } = await params;
  const target = await getMissionAreaByMemberId(915);

  console.log(slug);

  return (
    <article className={styles.container}>
      <MissionAreaCard area={target} containerStyle={{ minWidth: 370 }} />
      <PrayersCard containerStyle={{ flex: 1 }} />
    </article>
  );
};

export default AreasPage;
