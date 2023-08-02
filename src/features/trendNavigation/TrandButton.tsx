interface TrandButtonProps {
  title: string;
}

const TrandButton = ({ title }: TrandButtonProps) => {
  return <button className="text-xs font-medium text-white ">{title}</button>;
};

export default TrandButton;
