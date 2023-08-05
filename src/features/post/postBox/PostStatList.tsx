import { FiThumbsUp, FiShare } from 'react-icons/fi';
import { FaRegComment, FaRegEye } from 'react-icons/fa6';
import PostStat from './PostStat';

const PostStatList = () => {
  const dummyPostStat = {
    likes: 1234,
    comments: 567,
    views: 890,
  };

  const handleShare = () => {};
  
  return (
    <div className="flex justify-between mx-7 mb-5">
      <PostStat iconComponent={<FiThumbsUp />} stat={dummyPostStat.likes} />
      <PostStat
        iconComponent={<FaRegComment />}
        stat={dummyPostStat.comments}
      />
      <PostStat iconComponent={<FaRegEye />} stat={dummyPostStat.views} />
      <PostStat iconComponent={<FiShare />}/>
    </div>
  );
};

export default PostStatList;
