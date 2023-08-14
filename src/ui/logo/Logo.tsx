import { Link } from 'react-router-dom';

interface LogoProps {
  large?: boolean;
  to?: string;
}
const Logo = ({ large, to }: LogoProps) => {
  let logo = <img alt="logo" src="/bavel_svg.svg" className="w-12" />;
  if (large) {
    logo = <img alt="logo" src="/bavel_svg.svg" className=" w-32" />;
  }

  if (to) {
    return <Link to={to}>{logo}</Link>;
  }

  return logo;
};

export default Logo;
