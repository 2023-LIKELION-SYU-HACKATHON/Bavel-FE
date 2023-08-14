import { Header, Footer } from '@/ui';

interface LayoutProps {
  children: React.ReactNode;
  DisableHeader?: boolean;
  DisableFooter?: boolean;
}

const Layout = ({ children, DisableHeader, DisableFooter }: LayoutProps) => {
  return (
    <main className="flex flex-col w-screen h-full min-h-screen bg-white">
      {!DisableHeader && <Header />}
      {children}
      {!DisableFooter && <Footer />}
    </main>
  );
};

export default Layout;
