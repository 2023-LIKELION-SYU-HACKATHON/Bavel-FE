import { TitleInput, ContentInput } from '@/ui';
import { PostUserInfo } from '@/features/post';

const NewPost = () => {
  return (
    <article className="w-full h-full flex flex-col gap-6 p-6 ">
      <PostUserInfo />
      <TitleInput />
      <ContentInput />
    </article>
  );
};

export default NewPost;
