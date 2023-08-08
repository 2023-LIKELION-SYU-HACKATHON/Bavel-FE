import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NewPostButton = () => {
  return (
    <Link
      to="/post/new"
      className="fixed bottom-24 right-4 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-bavel-orange drop-shadow-xl"
    >
      <FiEdit className="text-white" size={24} />
    </Link>
  );
};

export default NewPostButton;
