import { PostDetail } from '@/features/post';
import { Layout } from '@/ui';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PostDetailPage = () => {
  const navigate = useNavigate();
  const userLanguage = sessionStorage.getItem('language');

  useEffect(() => {
    if (!userLanguage) navigate('/login');
  }, []);
  return (
    <Layout>
      <PostDetail />
    </Layout>
  );
};

export default PostDetailPage;
