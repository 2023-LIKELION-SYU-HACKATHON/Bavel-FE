interface PostTitleProps {
    title: string,
    showTitle: true,
}

const PostTitle = ({title, showTitle}: PostTitleProps) => {
  return showTitle ? (
    <div className="m-2 ml-7 text-lg font-medium text-black">{title}</div>
  ) : null;
}

export default PostTitle;