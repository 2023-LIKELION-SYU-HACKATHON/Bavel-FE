import { FiThumbsUp, FiShare } from 'react-icons/fi';
import { FaRegComment, FaRegEye } from 'react-icons/fa6';
import PostStat from './PostStat';
import { Post } from '@/types/post.type';

const PostStatList = ({ likes, views, comments }: Post) => {
  return (
    <div className="flex justify-between px-4">
      <PostStat iconComponent={<FiThumbsUp />} stat={likes} />
      <PostStat iconComponent={<FaRegComment />} stat={comments.length} />
      <PostStat iconComponent={<FaRegEye />} stat={views} />
      <PostStat iconComponent={<FiShare />} />
    </div>
  );
};

export default PostStatList;
