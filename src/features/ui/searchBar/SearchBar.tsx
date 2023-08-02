import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <div className="relative flex items-center w-full h-full ">
      <div className="absolute flex left-2 ">
        <AiOutlineSearch className="text-bavel-gray-deep" size={24} />
      </div>
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        className="w-full h-full pl-10 bg-bavel-gray-light input font-extralight text-bavel-gray-deep"
      />
    </div>
  );
};

export default SearchBar;
