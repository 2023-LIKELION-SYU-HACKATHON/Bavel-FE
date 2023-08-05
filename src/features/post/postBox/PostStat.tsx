interface PostStatProps {
  iconComponent: React.ReactNode;
  stat?: number;
}

const PostStat = ({ iconComponent, stat }: PostStatProps) => {
  return (
    <div className="flex flex-row items-center px-5 gap-2">
      {iconComponent}
      {stat && <span>{stat}</span>}
    </div>
  );
};

export default PostStat;
