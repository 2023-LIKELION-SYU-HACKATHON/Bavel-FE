import { LoginForm } from '@/features/login';
import { Layout, Logo } from '@/ui';

const LoginPage = () => {
  return (
    <Layout DisableFooter DisableHeader>
      <div className="flex justify-center">
        <Logo large />
      </div>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
