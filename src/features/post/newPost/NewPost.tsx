import { TitleInput, ContentInput } from '@/ui';
import { PostUserInfo } from '@/features/post';
import { dummyUser1 } from '@/mocks/user.mock';

const NewPost = () => {
  return (
    <article className="w-full grow flex flex-col gap-6 p-6 ">
      <PostUserInfo {...dummyUser1} />
      <TitleInput />
      <ContentInput />
    </article>
  );
};

export default NewPost;
