import { UserIcon } from '@/ui';
import { UserCountry, UserId } from '@/ui/user';

const PostUserInfo = () => {
  return (
    <div className="flex flex-row items-center pl-5 pt-5 pb-3 gap-4">
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
