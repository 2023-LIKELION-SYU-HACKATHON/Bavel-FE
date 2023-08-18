import { PostBox, CommentBoxList } from '@/features/post';
import { useParams } from 'react-router-dom';
import { dummyPosts } from '@/mocks/post.mock';
import { NewComment } from '../newComment';

const PostDetail = () => {
  const postId = Number(useParams().postId);
  const dummyPost = dummyPosts.filter(post => post.id === postId)[0];
  return (
    <>
      <PostBox {...dummyPost} full />
      <NewComment postId={postId} />
      <CommentBoxList comments={dummyPost.comments} />
    </>
  );
};

export default PostDetail;
