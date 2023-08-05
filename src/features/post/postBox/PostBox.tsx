import { FollowButton } from '@/features/followButton';
import {
  PostContent,
  PostStatList,
  PostTitle,
  PostUserInfo,
} from '@/features/post';

interface PostBoxProps {
  title: string;
  content: string;
}

const isTitleVisible = true;
const isFollowingButtonVisible = true;

const PostBox = ({ title, content }: PostBoxProps) => {
  return (
    <div>
      <div className="flex items-center gap-4 px-5 pt-5 pb-3">
        <PostUserInfo />
        <div className="ml-auto">
          {isFollowingButtonVisible && <FollowButton title="팔로우" />}
        </div>
      </div>
      {isTitleVisible && <PostTitle title={title} />}
      <PostContent content={content} />
      <PostStatList />
    </div>
  );
};

export default PostBox;
