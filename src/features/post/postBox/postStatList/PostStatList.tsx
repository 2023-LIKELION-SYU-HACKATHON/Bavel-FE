import { FiThumbsUp, FiShare } from 'react-icons/fi';
import { FaRegComment, FaRegEye } from 'react-icons/fa6';
import PostStat from './PostStat';
import { Post } from '@/types/post.type';

const PostStatList = ({ likes, views, comments }: Post) => {
  return (
    <div className="flex justify-between px-4">
      <PostStat iconComponent={<FiThumbsUp size={16} />} stat={likes} />
      <PostStat
        iconComponent={<FaRegComment size={16} />}
        stat={comments.length}
      />
      <PostStat iconComponent={<FaRegEye size={16} />} stat={views} />
      <PostStat iconComponent={<FiShare size={16} />} />
    </div>
  );
};

export default PostStatList;
