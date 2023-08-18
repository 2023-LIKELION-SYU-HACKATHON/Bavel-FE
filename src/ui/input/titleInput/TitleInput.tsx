interface TitleInputProps {
  setTitle: (value: string) => void;
}

const TitleInput = ({ setTitle }: TitleInputProps) => {
  const handleChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };
  return (
    <input
      type="text"
      onChange={handleChangeTitle}
      className="bg-white text-lg w-full text-black"
      placeholder="제목을 적는 칸입니다."
    ></input>
  );
};

export default TitleInput;
