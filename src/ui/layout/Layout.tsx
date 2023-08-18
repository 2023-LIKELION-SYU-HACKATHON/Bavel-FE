import { Header, Footer } from '@/ui';
import { twMerge } from 'tailwind-merge';

interface LayoutProps {
  children: React.ReactNode;
  DisableHeader?: boolean;
  DisableFooter?: boolean;
  className?: string;
}

const Layout = ({
  children,
  DisableHeader,
  DisableFooter,
  className,
}: LayoutProps) => {
  return (
    <main
      className={twMerge(
        'flex flex-col w-screen h-full min-h-screen bg-white',
        className,
      )}
    >
      {!DisableHeader && <Header />}
      {children}
      {/* {!DisableFooter && <Footer />} */}
    </main>
  );
};

export default Layout;
