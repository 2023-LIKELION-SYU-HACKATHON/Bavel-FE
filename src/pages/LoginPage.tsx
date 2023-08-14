import { LoginForm, LoginSupport } from '@/features/login';
import { Layout, Logo } from '@/ui';

const LoginPage = () => {
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
