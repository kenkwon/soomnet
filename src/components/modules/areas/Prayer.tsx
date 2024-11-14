import BookmarkIcon from '@/components/atoms/icons/BookmarkIcon';
import CommentIcon from '@/components/atoms/icons/CommentIcon';
import PrayerIcon from '@/components/atoms/icons/PrayerIcon';
import { Post } from '@/types/Post';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import React from 'react';
import styles from './Prayer.module.css';

type OwnProps = {
  post: Post;
  containerStyle?: React.CSSProperties;
};

const Prayer: React.FC<OwnProps> = ({ post, containerStyle }) => {
  const timeAgo = formatDistanceToNow(new Date((post.createdAt || 0) * 1000), {
    addSuffix: true,
    locale: ko,
  });

  return (
    <div key={post.id} className={styles.container} style={containerStyle}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{`${timeAgo} / ${post.region1depthName} ${post.region2depthName} ${post.region3depthName} / ${post.nickname}`}</p>
      <div className={styles.actions}>
        <PrayerIcon
          count={Number(post.prayedCnt)}
          containerStyle={{ marginRight: 10 }}
        />
        <CommentIcon
          count={Number(post.commentCnt)}
          containerStyle={{ marginRight: 10 }}
        />
        <BookmarkIcon count={Number(post.bookmarkCnt)} />
      </div>
    </div>
  );
};

export default Prayer;
