import FooterIcon from './FooterIcon';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex w-full h-20 bg-white border-t border-black items-center justify-between p-4">
      <FooterIcon title="홈" />
      <FooterIcon title="기능1" />
      <FooterIcon title="기능2" />
      <FooterIcon title="기능3" />
      <FooterIcon title="마이페이지" />
    </footer>
  );
};

export default Footer;
