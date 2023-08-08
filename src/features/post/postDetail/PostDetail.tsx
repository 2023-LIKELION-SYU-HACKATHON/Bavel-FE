import { PostBox } from '@/features/post';
import { useParams } from 'react-router-dom';
import { dummyPosts } from '@/mocks/post.mock';

const PostDetail = () => {
  const postId = Number(useParams().postId);
  return <>{postId && <PostBox {...dummyPosts[postId]} full />}</>;
};

export default PostDetail;
