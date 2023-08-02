import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <div className=" relative flex w-full h-full items-center">
      <div className="flex absolute left-2 ">
        <AiOutlineSearch size={24} />
      </div>
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        className="input input-bordered w-full h-full pl-10"
      />
    </div>
  );
};

export default SearchBar;
