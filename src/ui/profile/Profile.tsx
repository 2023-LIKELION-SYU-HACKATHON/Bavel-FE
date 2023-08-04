import { FollowButton } from "@/features/followButton";
import { UserIcon } from "..";
import UserId from "../userId/UserId";
import UserCountry from "../userCountry/UserCountry";

const Profile = () => {
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
        <FollowButton title="팔로우" showButton={true} />
      </div>
    </div>
  );
};

export default Profile;
