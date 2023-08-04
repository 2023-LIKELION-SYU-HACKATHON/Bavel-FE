import { FiThumbsUp, FiShare } from "react-icons/fi";
import {FaRegComment, FaRegEye} from "react-icons/fa6";

const PostStats = () => {
  const handleShare = () => {};
  return (
    <div className="flex justify-between mx-7 mb-5">
      <div className="flex flex-row items-center text-bavel-orange px-5">
        <FiThumbsUp />
        <span>1234</span>
      </div>
      <div className="flex flex-row items-center px-5">
        <FaRegComment />
        <span>1234</span>
      </div>
      <div className="flex flex-row items-center px-5">
        <FaRegEye />
        <span>1234</span>
      </div>
      <div className="px-7 cursor-pointer" onClick={handleShare}>
        <FiShare />
      </div>
    </div>
  );
};

export default PostStats;
