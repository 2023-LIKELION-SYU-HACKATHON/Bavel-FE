import { AiOutlineUser } from 'react-icons/ai';

const UserIcon = () => {
  return (
    <div className="avatar">
      <div className="w-6 h-6 rounded-full ring-2 ring-bavel-gray-deep ring-offset-2">
        {/* 유저 이미지가 이미지 파일일 때는 다음과 같이 사용합니다. */}
        {/* <img alt="user-icon" src="/images/logo.png" /> */}
        <AiOutlineUser className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default UserIcon;
