import { UserCountry, UserId, UserIcon, FollowButton } from '@/ui';

interface PostUserInfoProps {
  isShowFollowButton?: boolean;
}

const PostUserInfo = ({ isShowFollowButton }: PostUserInfoProps) => {
  return (
    <div className="flex flex-row items-center justify-between w-full gap-4">
      <div className="flex items-center gap-4">
        <UserIcon />
        <div className="flex flex-col">
          <UserId nickname="닉네임" userHandle="@nickname" />
          <UserCountry country={'대한민국 Republic Of Korea 🇰🇷'} />
        </div>
      </div>
      {isShowFollowButton && <FollowButton title="팔로우" />}
    </div>
  );
};

export default PostUserInfo;
