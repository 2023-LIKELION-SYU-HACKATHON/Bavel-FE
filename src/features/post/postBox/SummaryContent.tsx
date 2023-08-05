interface SummaryContentProps {
  content: string;
  titleSummaryCount: number;
  contentSummaryCount: number;
}

const SummaryContent = ({
  content,
  titleSummaryCount,
  contentSummaryCount,
}: SummaryContentProps) => {
  return (
    <div className="mt-2 text-black">
      <div className=" text-bavel-orange mb-2">
        → 바벨이 {titleSummaryCount}개의 단어를 {contentSummaryCount}개로
        요약했어요
      </div>
      <div className="pl-5 font-normal">{content}</div>
    </div>
  );
};

export default SummaryContent;
