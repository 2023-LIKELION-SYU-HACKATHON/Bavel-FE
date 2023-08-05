import { Logo, SearchBar, UserIcon } from '@/ui';
import OrangeBar from './OrangeBar';

const Header = () => {
  return (
    <>
      <header className="fixed flex items-center justify-between w-screen h-20 gap-4 p-4 z-50 bg-white">
        <Logo />
        <SearchBar />
        <UserIcon />
      </header>
      {/* 공간 가려짐 해결을 위한 Spacer */}
      <div className="h-20" />
      <OrangeBar />
    </>
  );
};

export default Header;
