import { Logo, SearchBar, UserIcon } from '@features/ui';

const Header = () => {
  return (
    <header>
      <div className="sticky flex items-center justify-between w-screen h-20 gap-8 p-4">
        <Logo />
        <SearchBar />
        <UserIcon />
      </div>
    </header>
  );
};

export default Header;
