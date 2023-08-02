import { AiOutlineUser } from 'react-icons/ai';

const Header = () => {
  return (
    <header>
      <div className="flex w-screen h-20 justify-between items-center p-4 gap-8">
        <img alt="logo" src="/images/logo.png" className=" h-6" />
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          className="input input-bordered w-full h-full"
        />
        <div className="avatar">
          <div className="w-8 h-8 rounded-full ring-2 ring-bavel-gray-deep ring-offset-2">
            {/* 유저 이미지가 이미지 파일일 때는 다음과 같이 사용합니다. */}
            {/* <img alt="user-icon" src="/images/logo.png" />  */}
            <AiOutlineUser size={32} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
