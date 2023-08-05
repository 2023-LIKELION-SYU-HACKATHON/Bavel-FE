import { TrendNavigation, NewPostButton } from '@/features/main';
import { PostBoxList } from '@/features/post';
import { Layout } from '@/ui';

const MainPage = () => {
  return (
    <Layout>
      <TrendNavigation />
      <PostBoxList />
      <NewPostButton />
    </Layout>
  );
};

export default MainPage;
