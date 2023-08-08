import PostBoxSkeleton from './PostBoxSkeleton';

const PostBoxSkeletonList = () => {
  const skeletonLength = 6;
  const skeletonList = Array.from({ length: skeletonLength }).map(
    (_, index) => <PostBoxSkeleton key={index} />,
  );
  return <>{skeletonList}</>;
};

export default PostBoxSkeletonList;
