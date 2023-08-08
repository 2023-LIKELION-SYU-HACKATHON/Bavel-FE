interface UserIdProps {
  nickname: string;
}

const UserId = ({ nickname }: UserIdProps) => {
  return (
    <div>
      <span className="text-base font-bold text-black">{nickname}</span>
      {/* <span className="ml-1 text-base text-gray-400">{userHandle}</span> */}
    </div>
  );
};

export default UserId;
