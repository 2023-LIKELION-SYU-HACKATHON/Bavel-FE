import { Header, Footer } from '@/ui';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
