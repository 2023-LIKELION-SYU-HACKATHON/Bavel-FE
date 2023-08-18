interface NewPostCategoryProps {
  category: 'entertainment' | 'economy' | 'sports' | 'it';
  setCategory: (value: 'entertainment' | 'economy' | 'sports' | 'it') => void;
}

const NewPostCategory = ({ category, setCategory }: NewPostCategoryProps) => {
  const handleChangeCategory = (e: any) => {
    setCategory(e.target.value);
  };
  return (
    <div className="flex justify-center gap-5">
      <label
        className={`p-2 px-3 rounded-lg cursor-pointer m-0 bg-gray-300 ${
          category === 'it' ? 'bg-orange-500 text-white' : ''
        }`}
      >
        <input
          name="category"
          type="radio"
          value="it"
          onChange={handleChangeCategory}
          className="hidden"
        />
        IT
      </label>
      <label
        className={`p-2 px-3 rounded-lg cursor-pointer m-0 bg-gray-300 ${
          category === 'entertainment' ? 'bg-orange-500 text-white' : ''
        }`}
      >
        <input
          name="category"
          type="radio"
          value="entertainment"
          onChange={handleChangeCategory}
          className="hidden"
        />
        Entertainment
      </label>
      <label
        className={`p-2 px-3 rounded-lg cursor-pointer m-0 bg-gray-300 ${
          category === 'economy' ? 'bg-orange-500 text-white' : ''
        }`}
      >
        <input
          name="category"
          type="radio"
          value="economy"
          onChange={handleChangeCategory}
          className="hidden"
        />
        Economy
      </label>
      <label
        className={`p-2 px-3 rounded-lg cursor-pointer m-0 bg-gray-300 ${
          category === 'sports' ? 'bg-orange-500 text-white' : ''
        }`}
      >
        <input
          name="category"
          type="radio"
          value="sports"
          onChange={handleChangeCategory}
          className="hidden"
        />
        Sports
      </label>
    </div>
  );
};

export default NewPostCategory;
