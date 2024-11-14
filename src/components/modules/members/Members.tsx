'use client';

import { getMembersCount } from '@/services/MemberService';
import EChartsReact from 'echarts-for-react';
import styles from './Members.module.css';

export const revalidate = 3;

const Members = async () => {
  const members = await getMembersCount();

  // 데이터를 차트에 맞게 변환합니다.
  const dates = members.map((member) => member.created);
  const counts = members.map((member) => member.count);

  const options = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: dates,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '회원 수',
        type: 'bar',
        data: counts,
      },
    ],
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>전체 회원</h1>
        <p></p>
      </div>
      <div className={styles.content}>
        {members && (
          <EChartsReact
            option={options}
            opts={{ renderer: 'svg', width: 'auto', height: 'auto' }}
          />
        )}
      </div>
    </section>
  );
};

export default Members;
