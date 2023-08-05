interface PostTitleProps {
  title: string;
}

const PostTitle = ({ title }: PostTitleProps) => {
  return <div className="text-lg font-medium text-black">{title}</div>;
};

export default PostTitle;
