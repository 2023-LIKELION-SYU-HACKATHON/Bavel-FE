import { PostBox } from '@/features/post';
import { getPostPage } from '@/api/post.api';
import { useInfiniteQuery } from 'react-query';
import { PostPage } from '@/types/post.type';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const PostBoxList = () => {
  const { ref, inView } = useInView();
  const fetchPostPage = async ({ pageParam = 0 }) => {
    console.log('fetch', pageParam);
    const response = await getPostPage(pageParam);
    return response;
  };

  const {
    data: postPage,
    fetchNextPage,
    hasNextPage,
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
          <div key={index} className="border-b border-gray-300">
            <PostBox title={post.title} content={post.content} />
          </div>
        )),
      )}
      <div ref={ref} />
    </div>
  );
};

export default PostBoxList;
