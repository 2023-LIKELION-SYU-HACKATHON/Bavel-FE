import { FollowButton } from "@/features/followButton";
import { UserIcon } from "..";
import UserCountry from "../user/userCountry/UserCountry";
import UserId from "../user/userId/UserId";


const Profile = () => {
  const isFollowingButtonVisible = true;
  return (
    <div className="flex items-center gap-4 px-5 pt-5 pb-3">
      <div className="ml-4">
        <UserIcon />
      </div>
      <div className="flex flex-col p-2">
        <UserId nickname="닉네임" userHandle="@nickname" />
        <UserCountry country={"대한민국 Republic Of Korea 🇰🇷"} />
      </div>
      <div className="ml-auto mr-4">
        {isFollowingButtonVisible && <FollowButton title="팔로우"/>}
      </div>
    </div>
  );
};

export default Profile;
