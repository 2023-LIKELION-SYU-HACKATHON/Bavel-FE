import { PostStatList } from './postStatList';
import PostContent from './PostContent';
import PostSummary from './PostSummary';
import PostTitle from './PostTitle';
import PostUserInfo from '../postUserInfo/PostUserInfo';
import { Post } from '@/types/post.type';
import { twJoin } from 'tailwind-merge';

interface PostBoxProps extends Post {
  full?: boolean;
}

const PostBox = (post: PostBoxProps) => {
  const { title, content, full } = post;
  return (
    <article
      className={twJoin(
        'flex flex-col gap-6 p-6',
        !full && 'border-b border-gray-300',
      )}
    >
      <PostUserInfo {...post.author} />
      {title && <PostTitle title={title} />}
      {full && (
        <PostSummary
          content="안녕안녕"
          originalLength={content.length}
          summaryLength={content.length}
        />
      )}
      <PostContent content={content} />
      <PostStatList {...post} />
    </article>
  );
};

export default PostBox;
