import { NewPostButton, TrendNavigation } from "@/features";
import { PostBoxList } from "@/features/post";
import { Footer, Header } from "@/ui";


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
