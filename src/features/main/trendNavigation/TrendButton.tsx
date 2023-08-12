import { motion, AnimatePresence } from 'framer-motion';

interface TrendButtonProps {
  title: string;
  currentTrend: string;
  onClick: (trend: string) => void;
}

const TrendButton = ({ title, currentTrend, onClick }: TrendButtonProps) => {
  const onClickHandler = () => {
    onClick(title);
  };

  return (
    <button
      onClick={onClickHandler}
      className="relative w-full h-full text-xs font-medium text-white"
    >
      {title}
      <AnimatePresence>
        {currentTrend === title && (
          <motion.div
            layoutId="currentTrend"
            className="w-full bottom-0 absolute h-1 bg-bavel-apricot"
          />
        )}
      </AnimatePresence>
    </button>
  );
};

export default TrendButton;
