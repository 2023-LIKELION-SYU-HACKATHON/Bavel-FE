import { PostStatList } from './postStatList';
import PostContent from './PostContent';
import PostSummary from './PostSummary';
import PostTitle from './PostTitle';
import PostUserInfo from '../postUserInfo/PostUserInfo';
import { Post } from '@/types/post.type';
import { twJoin } from 'tailwind-merge';
import PostImageSwiper from '../postImageSwiper/PostImageSwiper';

interface PostBoxProps extends Post {
  full?: boolean; // full이 true면 PostSummary를 표시합니다.
}

const PostBox = (post: PostBoxProps) => {
  return (
    <article
      className={twJoin(
        'flex flex-col gap-6 p-6',
        !post.full && 'border-b border-gray-300',
      )}
    >
      <PostUserInfo {...post.author} />
      {post.title && <PostTitle title={post.title} />}

      {/* <PostImageSwiper /> */}
      {post.full && (
        <PostSummary
          content={post.summary}
          originalLength={post.content.length}
          summaryLength={post.summary.length}
        />
      )}
      <PostContent content={post.content} />
      <PostStatList {...post} />
    </article>
  );
};

export default PostBox;
