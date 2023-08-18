import { PostBox, CommentBoxList } from '@/features/post';
import { useParams } from 'react-router-dom';
import {
  dummyKoreanPosts,
  dummyEnglishPosts,
  dummyJapanesePosts,
} from '@/mocks/post.mock';
import { NewComment } from '../newComment';

const PostDetail = () => {
  const userLanguage = sessionStorage.getItem('language');
  const postId = Number(useParams().postId);

  let dummyPosts = dummyKoreanPosts.filter(post => post.id === postId)[0];

  if (userLanguage === 'ko') {
    dummyPosts = dummyKoreanPosts.filter(post => post.id === postId)[0];
  }
  if (userLanguage === 'en') {
    dummyPosts = dummyEnglishPosts.filter(post => post.id === postId)[0];
  }
  if (userLanguage === 'ja') {
    dummyPosts = dummyJapanesePosts.filter(post => post.id === postId)[0];
  }

  return (
    <>
      <PostBox {...dummyPosts} full />
      <NewComment postId={postId} />
      <CommentBoxList comments={dummyPosts.comments} />
    </>
  );
};

export default PostDetail;
