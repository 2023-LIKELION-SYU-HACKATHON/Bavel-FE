import { LoginForm, LoginSupport } from '@/features/login';
import { Layout, Logo } from '@/ui';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const userLanguage = sessionStorage.getItem('language');

  useEffect(() => {
    if (userLanguage) navigate('/');
  }, []);
  return (
    <Layout DisableFooter DisableHeader className="gap-5">
      <div className="flex items-center justify-center w-full h-52">
        <Logo large />
      </div>
      <LoginForm />
      <LoginSupport />
    </Layout>
  );
};

export default LoginPage;
