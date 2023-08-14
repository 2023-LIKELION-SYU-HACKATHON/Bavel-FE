import { Link } from 'react-router-dom';

interface LogoProps {
  large?: boolean;
}
const Logo = ({ large }: LogoProps) => {
  if (large) {
    return <img alt="logo" src="/bavel_svg.svg" className=" w-32" />;
  }
  if (!large) {
    return (
      <Link to={'/'}>
        <img alt="logo" src="/bavel_svg.svg" className="h-4 max-w-none" />
      </Link>
    );
  }
};

export default Logo;
