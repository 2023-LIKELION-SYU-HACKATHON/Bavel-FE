import { NewPostButton, TrendNavigation } from '@/features';
import { PostBoxList } from '@/features/post';
import { Footer, Header } from '@/ui';

const MainPage = () => {
  return (
    <div>
      <Header />
      <TrendNavigation />
      <PostBoxList />
      <NewPostButton />
      <Footer />
    </div>
  );
};

export default MainPage;
