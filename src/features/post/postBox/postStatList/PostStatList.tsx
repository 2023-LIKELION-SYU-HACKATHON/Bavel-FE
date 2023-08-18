import { FiThumbsUp, FiShare } from 'react-icons/fi';
import { FaRegComment, FaRegEye } from 'react-icons/fa6';
import PostStat from './PostStat';
import { Post } from '@/types/post.type';

const PostStatList = (post: Post) => {
  return (
    <div className="flex justify-between px-4">
      <PostStat iconComponent={<FiThumbsUp size={16} />} stat={post.likes} />
      {/* <PostStat
        iconComponent={<FaRegComment size={16} />}
        stat={post.c}
      /> */}
      <PostStat iconComponent={<FaRegEye size={16} />} stat={post.hit} />
      <PostStat iconComponent={<FiShare size={16} />} />
    </div>
  );
};

export default PostStatList;
