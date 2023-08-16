import SignUpForm from '@/features/signUp/signUpForm/SignUpForm';
import { Layout, SignUpPageHeader } from '@/ui';

const SignUpPage = () => {
  return (
    <Layout DisableHeader DisableFooter>
      <SignUpPageHeader />
      <SignUpForm />
    </Layout>
  );
};

export default SignUpPage;
