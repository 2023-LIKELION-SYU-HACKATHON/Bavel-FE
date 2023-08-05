interface SummaryTitleProps {
  titleSummaryCount: number;
}

const SummaryTitle = ({ titleSummaryCount }: SummaryTitleProps) => {
  return (
    <div className="cursor-pointer text-bavel-orange">
      → <span className="underline">{titleSummaryCount}개의 단어 요약하기</span>
    </div>
  );
};

export default SummaryTitle;
