import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={'/'}>
      <img alt="logo" src="/images/logo.png" className="h-4 max-w-none" />
    </Link>
  );
};

export default Logo;
