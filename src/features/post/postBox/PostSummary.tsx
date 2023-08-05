interface PostSummaryProps {
  originalLength: number;
  summaryLength: number;
  content: string;
}

const PostSummary = ({
  originalLength,
  summaryLength,
  content,
}: PostSummaryProps) => {
  return (
    <div className="p-3 rounded-md bg-bavel-gray-light">
      {/* <SummaryTitle titleSummaryCount={titleSummaryCount} /> */}
      <div className="mt-2 text-black">
        <div className="mb-2  text-bavel-orange">
          → 바벨이 {originalLength}개의 단어를 {summaryLength}개로 요약했어요
        </div>
        <div className="pl-5 font-normal">{content}</div>
      </div>
    </div>
  );
};

export default PostSummary;
