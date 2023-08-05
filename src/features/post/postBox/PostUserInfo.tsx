import { UserIcon } from '@/ui';
import { UserCountry, UserId } from '@/ui/user';

const PostUserInfo = () => {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="ml-4">
        <UserIcon />
      </div>
      <div className="flex flex-col p-2">
        <UserId nickname="닉네임" userHandle="@nickname" />
        <UserCountry country={'대한민국 Republic Of Korea 🇰🇷'} />
      </div>
    </div>
  );
};

export default PostUserInfo;
