import { TrendNavigation, NewPostButton } from '@/features/main';
import { PostBoxList } from '@/features/post';
import { Layout } from '@/ui';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const userLanguage = sessionStorage.getItem('language');

  useEffect(() => {
    if (!userLanguage) navigate('/login');
  }, []);
  return (
    <Layout>
      <TrendNavigation />
      <PostBoxList />
      <NewPostButton />
    </Layout>
  );
};

export default MainPage;
