import { useState } from 'react';
import TrendButton from './TrendButton';

const TrendNavigation = () => {
  const [currentTrend, setCurrentTrend] = useState('실시간 인기');
  const trends = ['실시간 인기', '연예', '경제', '스포츠', 'IT・기술'];

  const changeCurrentTrend = (trend: string) => {
    setCurrentTrend(trend);
  };

  return (
    <>
      <section className="fixed z-50 flex items-center justify-between w-full h-10 gap-2 top-20 bg-bavel-orange px-4">
        {trends.map(trend => (
          <TrendButton
            key={trend}
            title={trend}
            currentTrend={currentTrend}
            onClick={changeCurrentTrend}
          />
        ))}
      </section>
      {/* 공간 가려짐 해결을 위한 Spacer */}
      <div className="h-10" />
    </>
  );
};

export default TrendNavigation;
