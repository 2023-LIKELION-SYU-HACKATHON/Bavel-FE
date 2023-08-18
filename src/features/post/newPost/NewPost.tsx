import { TitleInput, ContentInput } from '@/ui';
import { PostUserInfo } from '@/features/post';
import { dummyUser1 } from '@/mocks/user.mock';
import { useState } from 'react';
import NewPostCategory from './NewPostCategory';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<
    'entertainment' | 'economy' | 'sports' | 'it'
  >('it');

  const handleSubmitPost = () => {
    const postData = {
      title: title,
      content: content,
      category: category,
    };

    axios
      .post('http://175.45.194.125:8080/members/signup', postData)
      .then(() => {
        navigate('/');
      });
  };

  return (
    <article className="w-full grow flex flex-col gap-6 p-6 ">
      <PostUserInfo {...dummyUser1} />
      <NewPostCategory category={category} setCategory={setCategory} />
      <TitleInput setTitle={setTitle} />
      <ContentInput setContent={setContent} />
      <div className="flex justify-end">
        <button
          className="btn bg-bavel-apricot border border-bavel-orange text-bavel-orange hover:border hover:border-bavel-orange hover:bg-orange-300"
          onClick={handleSubmitPost}
        >
          작성하기
        </button>
      </div>
    </article>
  );
};

export default NewPost;
