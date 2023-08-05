import { FollowButton } from '@/features/followButton';
import {
  PostContent,
  PostStatList,
  PostTitle,
  PostUserInfo,
} from '@/features/post';
import SummaryBox from './SummaryBox';

interface PostBoxProps {
  title: string;
  content: string;
}

const isTitleVisible = true;
const isFollowingButtonVisible = true;
const isSummaryBoxVisible = true;

const PostBox = ({ title, content }: PostBoxProps) => {
  return (
    <div>
      <div className="flex items-center">
        <PostUserInfo />
        <div className="ml-auto mr-5">
          {isFollowingButtonVisible && <FollowButton title="팔로우" />}
        </div>
      </div>
      {isTitleVisible && <PostTitle title={title} />}
      {isSummaryBoxVisible && (
        <SummaryBox
          content="안녕안녕"
          titleSummaryCount={15}
          contentSummaryCount={4}
        />
      )}
      <PostContent content={content} />
      <PostStatList />
    </div>
  );
};

export default PostBox;
