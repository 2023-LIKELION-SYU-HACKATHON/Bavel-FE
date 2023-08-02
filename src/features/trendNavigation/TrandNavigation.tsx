import TrandButton from './TrandButton';

const TrandNavigation = () => {
  const trends = ['실시간 인기', '연예', '정치', '경제', '스포츠', 'IT・기술'];
  return (
    <>
      <section className="fixed top-20 flex items-center justify-between w-full h-10 gap-2 p-4 bg-bavel-orange">
        {trends.map(trend => (
          <TrandButton key={trend} title={trend} />
        ))}
      </section>
      {/* 공간 가려짐 해결을 위한 Spacer */}
      <div className="h-10" />
    </>
  );
};

export default TrandNavigation;
