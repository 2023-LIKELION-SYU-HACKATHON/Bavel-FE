import axios from 'axios';
import { useState } from 'react';

interface NewCommentProps {
  postId: number;
}

const NewComment = ({ postId }: NewCommentProps) => {
  const [content, setContent] = useState<string>('');
  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const handleSubmitContent = (e: any) => {
    const submitData = {
      content: content,
    };

    e.preventDefault();
    axios
      .post(`http://175.45.194.125:8080/post/${postId}/comments`, submitData)
      .then(() => {
        setContent('');
      });
  };

  return (
    <div className="p-6">
      <div className=" border-2 rounded-lg border-bavel-orange p-3">
        <textarea
          value={content}
          onChange={handleContentChange}
          className="w-full rounded-md text-base bg-bavel-gray-light text-black break-words resize-none "
          placeholder="댓글을 작성해보세요."
        />
      </div>
      <div className="flex pt-3 justify-end" onClick={handleSubmitContent}>
        <button className="flex justify-end p-2 px-3 rounded-lg bg-bavel-apricot hover:bg-orange-300 text-orange-500 border border-orange-500">
          작성하기
        </button>
      </div>
    </div>
  );
};

export default NewComment;
