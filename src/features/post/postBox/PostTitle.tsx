interface PostTitleProps {
  title: string;
}

const PostTitle = ({ title }: PostTitleProps) => {
  return <div className="m-2 ml-7 text-lg font-medium text-black">{title}</div>;
};

export default PostTitle;
