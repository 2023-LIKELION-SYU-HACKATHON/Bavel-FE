import SignUpForm from '@/features/signUp/signUpForm/SignUpForm';
import { Layout, SignUpPageHeader } from '@/ui';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  const userLanguage = sessionStorage.getItem('language');

  useEffect(() => {
    if (userLanguage) navigate('/');
  }, []);
  return (
    <Layout DisableHeader DisableFooter>
      <SignUpPageHeader />
      <SignUpForm />
    </Layout>
  );
};

export default SignUpPage;
