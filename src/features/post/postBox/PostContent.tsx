interface PostContentProps {
  content: string;
}

const PostContent = ({ content }: PostContentProps) => {
  return (
    <p className="pb-10 pl-7 pr-7 text-medium font-light text-black">
      {content}
    </p>
  );
};

export default PostContent;
