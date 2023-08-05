interface TrendButtonProps {
  title: string;
}

const TrendButton = ({ title }: TrendButtonProps) => {
  return <button className="text-xs font-medium text-white ">{title}</button>;
};

export default TrendButton;
