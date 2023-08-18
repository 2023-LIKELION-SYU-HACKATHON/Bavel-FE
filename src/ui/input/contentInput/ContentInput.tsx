interface ContentInputProps {
  setContent: (value: string) => void;
}

const ContentInput = ({ setContent }: ContentInputProps) => {
  const handleChangeContent = (e: any) => {
    setContent(e.target.value);
  };
  return (
    <textarea
      className="w-full grow text-base text-black break-words bg-white resize-none "
      placeholder="내용을 입력할 수 있어요."
      onChange={handleChangeContent}
    />
  );
};

export default ContentInput;
