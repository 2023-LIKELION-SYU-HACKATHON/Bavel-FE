import InputContentBox from '@/features/post/postBox/InputContentBox';
import InputTitleBox from '@/features/post/postBox/InputTitleBox';
import { Header, PostUserInfo } from '@/ui';

const WritePost = () => {
  return (
    <div className="bg-white h-screen">
      <Header />
      <PostUserInfo />
      <InputTitleBox />
      <InputContentBox />
    </div>
  );
};

export default WritePost;
