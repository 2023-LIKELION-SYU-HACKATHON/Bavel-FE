import { Header, Footer } from '@features/ui';
import { TrandNavigation } from '@/features/trendNavigation';

const MainPage = () => {
  return (
    <div>
      <Header />
      <TrandNavigation />
      <section>
        <div className="h-screen">내용1</div>
        <div className="h-screen">내용2</div>
      </section>
      <Footer />
    </div>
  );
};

export default MainPage;
