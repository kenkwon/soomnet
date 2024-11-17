'use client';

import EChartsReact from 'echarts-for-react';
import { useEffect, useState } from 'react';

type OwnProps = {
  dates: string[];
  counts: number[];
};

const MemberCountChart: React.FC<OwnProps> = ({ dates, counts }) => {
  const [options, setoptions] = useState({});

  useEffect(() => {
    setoptions({
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
    });
  }, [dates, counts]);

  return (
    <EChartsReact
      option={options}
      opts={{ renderer: 'svg', width: 'auto', height: 'auto' }}
    />
  );
};

export default MemberCountChart;
