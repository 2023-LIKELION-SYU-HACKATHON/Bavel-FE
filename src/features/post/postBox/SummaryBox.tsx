import SummaryContent from './SummaryContent';

interface SummaryBoxProps {
  content: string;
  titleSummaryCount: number;
  contentSummaryCount: number;
}

const SummaryBox = ({
  content,
  titleSummaryCount,
  contentSummaryCount,
}: SummaryBoxProps) => {
  return (
    <div className="m-7 ml mb-5 p-3 h-auto rounded-md bg-bavel-gray-light">
      {/* <SummaryTitle titleSummaryCount={titleSummaryCount} /> */}
      <SummaryContent
        content={content}
        titleSummaryCount={titleSummaryCount}
        contentSummaryCount={contentSummaryCount}
      />
    </div>
  );
};

export default SummaryBox;
