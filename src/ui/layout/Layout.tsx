import { Header, Footer } from '@/ui';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-white w-screen h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
