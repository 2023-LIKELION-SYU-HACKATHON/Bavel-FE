import { User } from '@/types/user.type';
import { AiOutlineUser } from 'react-icons/ai';

const UserIcon = ({ avatar }: Partial<User>) => {
  return (
    <div className="avatar">
      <div className="w-7 h-7 rounded-full ring-1 ring-gray-300 ring-offset-2">
        {avatar && <img alt="user-icon" src={avatar} />}
        {!avatar && <AiOutlineUser className="object-cover w-full h-full" />}
      </div>
    </div>
  );
};

export default UserIcon;
