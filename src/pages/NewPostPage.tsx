import { Layout } from '@/ui';
import { NewPost } from '@/features';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPostPage = () => {
  const navigate = useNavigate();
  const userLanguage = sessionStorage.getItem('language');

  useEffect(() => {
    if (!userLanguage) navigate('/login');
  }, []);
  return (
    <Layout>
      <NewPost />
    </Layout>
  );
};

export default NewPostPage;
