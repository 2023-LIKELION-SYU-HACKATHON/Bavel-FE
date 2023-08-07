import { PostBox } from '@/features/post';
import { getPostPage } from '@/api/post.api';
import { useInfiniteQuery } from 'react-query';
import { PostPage } from '@/types/post.type';

const PostBoxList = () => {
  const fetchPostPage = async ({ pageParam = 0 }) => {
    const response = await getPostPage(pageParam);
    return response;
  };

  const { data: postPage, fetchNextPage } = useInfiniteQuery<PostPage>(
    ['posts'],
    fetchPostPage,
    {
      getNextPageParam: lastPage => {
        return lastPage.hasNext ? lastPage.pageId + 1 : undefined;
      },
    },
  );

  return (
    <div className="bg-white">
      <button onClick={() => fetchNextPage()}>fetch!</button>
      {postPage?.pages.map(page =>
        page.posts.map((post, index) => (
          <div key={index} className="border-b border-gray-300">
            <PostBox title={post.title} content={post.content} />
          </div>
        )),
      )}
    </div>
  );
};

export default PostBoxList;
