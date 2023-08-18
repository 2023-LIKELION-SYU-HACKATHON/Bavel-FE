import { getKoPostPage, getEnPostPage, getJaPostPage } from '@/api/post.api';
import { PostBox, PostBoxSkeletonList } from '@/features/post';
import { PostPage } from '@/types/post.type';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';

const PostBoxList = () => {
  const { ref, inView } = useInView();
  const fetchPostPage = async ({ pageParam = 0 }) => {
    const userLanguage = sessionStorage.getItem('language');
    if (userLanguage === 'ko') {
      const response = await getKoPostPage(pageParam);
      return response;
    }
    if (userLanguage === 'en') {
      const response = await getEnPostPage(pageParam);
      return response;
    }
    if (userLanguage === 'ja') {
      const response = await getJaPostPage(pageParam);
      return response;
    }
  };

  const {
    data: postPage,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery<PostPage>(['posts'], fetchPostPage, {
    getNextPageParam: lastPage => {
      return lastPage.hasNext ? lastPage.pageId + 1 : undefined;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="bg-white">
      {postPage?.pages.map(page =>
        page.posts.map((post, index) => (
          <Link to={`/post/${post.id}`} key={index}>
            <PostBox {...post} />
          </Link>
        )),
      )}
      {isFetching && <PostBoxSkeletonList />}
      <div ref={ref} />
    </div>
  );
};

export default PostBoxList;
