import { FiEdit } from 'react-icons/fi';

const NewPostButton = () => {
  const clickHandler = () => {};
  return (
    <button
      className="fixed bottom-24 right-4 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-bavel-orange drop-shadow-xl"
      onClick={clickHandler}
    >
      <FiEdit className="text-white " size={24} />
    </button>
  );
};

export default NewPostButton;
