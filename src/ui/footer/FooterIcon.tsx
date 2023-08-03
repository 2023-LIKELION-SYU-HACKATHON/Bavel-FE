import { AiOutlineHome } from 'react-icons/ai';

interface FooterIconProps {
  title: string;
}
const FooterIcon = ({ title }: FooterIconProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <AiOutlineHome size={24} />
      <p className="text-xs font-bold  text-bavel-gray-dark">{title}</p>
    </div>
  );
};

export default FooterIcon;
