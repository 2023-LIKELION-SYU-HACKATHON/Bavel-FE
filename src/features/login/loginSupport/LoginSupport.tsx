import { Link } from 'react-router-dom';

const LoginSupport = () => {
  return (
    <div className="px-8 flex w-full gap-2 justify-between text-gray-400 text-sm font-medium">
      <button>아이디 찾기</button>
      <div>|</div>
      <button>비밀번호 찾기</button>
      <div>|</div>
      <Link to="/signup">
        <button>회원가입</button>
      </Link>
    </div>
  );
};

export default LoginSupport;
