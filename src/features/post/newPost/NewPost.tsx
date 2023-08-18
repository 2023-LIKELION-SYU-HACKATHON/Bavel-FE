import { TitleInput, ContentInput } from '@/ui';
import { PostUserInfo } from '@/features/post';
import { dummyKoUser1 } from '@/mocks/user.mock';

const NewPost = () => {
  return (
    <article className="w-full grow flex flex-col gap-6 p-6 ">
      <PostUserInfo {...dummyKoUser1} />
      <TitleInput />
      <ContentInput />
    </article>
  );
};

export default NewPost;
