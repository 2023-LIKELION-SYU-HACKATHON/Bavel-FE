import PostBoxSkeleton from './PostBoxSkeleton';

// PostBoxSkeleton을 여러개 렌더링하는 컴포넌트입니다.
const PostBoxSkeletonList = () => {
  const skeletonLength = 6;
  const skeletonList = Array.from({ length: skeletonLength }).map(
    (_, index) => <PostBoxSkeleton key={index} />,
  );
  return <>{skeletonList}</>;
};

export default PostBoxSkeletonList;
