import { getMembersCount } from '@/services/MemberService';
import MemberCountChart from './MemberCountChart';
import styles from './Members.module.css';

export const revalidate = 3;

const Members = async () => {
  const members = await getMembersCount();

  // 데이터를 차트에 맞게 변환합니다.
  const total = members.reduce((acc, cur) => acc + cur.count, 0);
  const dates = members.map((member) => member.created);
  const counts = members.map((member) => member.count);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>전체 회원({total}명)</h1>
        <p></p>
      </div>
      <div className={styles.content}>
        {dates && counts && <MemberCountChart dates={dates} counts={counts} />}
      </div>
    </section>
  );
};

export default Members;
