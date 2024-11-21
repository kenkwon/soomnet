import { getPosts } from '@/services/PostService';
import styles from './PrayersCard.module.css';
import Prayer from './Prayer';

type OwnProps = {
  containerStyle?: React.CSSProperties;
};

const PrayersCard: React.FC<OwnProps> = async ({ containerStyle }) => {
  const posts = await getPosts();

  return (
    <section className={styles.container} style={containerStyle}>
      <div className={styles.header}>
        <h1>기도글</h1>
        <p>울산지역</p>
      </div>
      <div className={styles.content}>{posts && posts.map((post) => <Prayer key={post.id} post={post} />)}</div>
    </section>
  );
};

export default PrayersCard;
