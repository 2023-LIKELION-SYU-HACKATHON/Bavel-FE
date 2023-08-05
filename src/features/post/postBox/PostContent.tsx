interface PostContentProps {
  content: string;
}

const PostContent = ({ content }: PostContentProps) => {
  return <p className="font-light text-black text-medium">{content}</p>;
};

export default PostContent;
