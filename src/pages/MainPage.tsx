import { Header, Footer, } from '@/ui';
import PostContent from '@/ui/postContent/PostContent';
import PostStats from '@/ui/postStats/PostStats';
import PostTitle from '@/ui/postTitle/PostTitle';
import Profile from '@/ui/profile/Profile';
import { NewPostButton, TrendNavigation } from '@features';

const MainPage = () => {
  const dummyData = {
    title: "건강한 라이프스타일 어쩌구",
    content : "별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운 말 한 마디씩 불러 봅니다. 소학교 때 책상을 같이 했던 아이들의 이름과  나는 아무걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 딴은 밤을 세워 우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다. 별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운 말 한 마디씩 불러봅니다. 나는 별 하나에 나는 별 하나에 나는 별 하나에 나는 별 하나에 딴은 밤을 세워 우는 벌레는 부끄러운 이름을 슬퍼하는 까닭입니다. 별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에 동경과 별 하나에 시와 별 하나에 어머니, 어머니, 어머님, 나는 별 하나에 아름다운 말 한 마디씩 불러봅니다.",
  }

  return (
    <div>
      <Header />
      <TrendNavigation />
      <section className='bg-white'>
        <div className="border-b border-gray-300">
          <Profile />
          <PostTitle title={dummyData.title} showTitle={true} />
          <PostContent content={dummyData.content}/>
          <PostStats />

        </div>
        <div className="border-b border-gray-300">
          <Profile />
          <PostTitle title={dummyData.title} showTitle={true} />
          <PostContent content={dummyData.content}/>
          <PostStats />
        </div>
        <div className="border-b border-gray-300">
          <Profile />
          <PostTitle title={dummyData.title} showTitle={true} />
          <PostContent content={dummyData.content}/>
          <PostStats />
        </div>
      </section>
      <NewPostButton />
      <Footer />
    </div>
  );
};

export default MainPage;
