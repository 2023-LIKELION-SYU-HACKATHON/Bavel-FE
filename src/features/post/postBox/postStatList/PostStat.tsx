interface PostStatProps {
  iconComponent: React.ReactNode;
  stat?: number;
}

const PostStat = ({ iconComponent, stat }: PostStatProps) => {
  return (
    <div className="flex flex-row items-center gap-2">
      {iconComponent}
      {stat && <span>{stat}</span>}
    </div>
  );
};

export default PostStat;
