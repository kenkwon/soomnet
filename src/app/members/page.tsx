import React from 'react';
import styles from './page.module.css';
import Members from '@/components/modules/members/Members';

const MembersPage = () => {
  return (
    <article className={styles.container}>
      <Members />
    </article>
  );
};

export default MembersPage;
