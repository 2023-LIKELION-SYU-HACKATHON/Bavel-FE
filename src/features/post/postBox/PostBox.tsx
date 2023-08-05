import { PostStatList } from './postStatList';
import PostContent from './PostContent';
import PostSummary from './PostSummary';
import PostTitle from './PostTitle';
import PostUserInfo from '../postUserInfo/PostUserInfo';

interface PostBoxProps {
  title: string;
  content: string;
}

const isTitleVisible = true;
const isSummaryBoxVisible = true;

const PostBox = ({ title, content }: PostBoxProps) => {
  return (
    <article className="flex flex-col gap-6 p-6">
      <PostUserInfo isShowFollowButton={true} />
      {isTitleVisible && <PostTitle title={title} />}
      {isSummaryBoxVisible && (
        <PostSummary
          content="안녕안녕"
          originalLength={content.length}
          summaryLength={content.length}
        />
      )}
      <PostContent content={content} />
      <PostStatList />
    </article>
  );
};

export default PostBox;
