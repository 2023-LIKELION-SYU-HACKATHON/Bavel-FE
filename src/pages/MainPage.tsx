
import PostBox from '@/features/post/postBox/PostBox';
import PostBoxList from '@/features/post/postBoxList/PostBoxList';
import { Header, Footer, } from '@/ui';
import { NewPostButton, TrendNavigation } from '@features';

const MainPage = () => {
  return (
    <div>
      <Header />
      <TrendNavigation />
      <section className='bg-white'>
         <PostBoxList />
      </section>
      <NewPostButton />
      <Footer />
    </div>
  );
};

export default MainPage;
