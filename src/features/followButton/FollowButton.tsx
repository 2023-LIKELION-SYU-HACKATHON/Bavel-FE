interface FollowButtonProps {
  title: string;
  showButton: boolean;
}

const FollowButton = ({ title, showButton }: FollowButtonProps) => {
  return showButton ? (
    <button className="p-1 pl-4 pr-4 rounded-lg bg-bavel-orang-light border border-bavel-orange text-bavel-orange">
      {title}
    </button>
  ) : null;
};

export default FollowButton;
