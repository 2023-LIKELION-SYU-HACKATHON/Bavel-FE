import { Link } from 'react-router-dom';

interface LogoProps {
  large?: boolean;
}
const Logo = ({ large }: LogoProps) => {
  if (large) {
    return <img alt="logo" src="/images/logo.png" className=" w-28" />;
  }
  if (!large) {
    return (
      <Link to={'/'}>
        <img alt="logo" src="/images/logo.png" className="h-4 max-w-none" />
      </Link>
    );
  }
};

export default Logo;
