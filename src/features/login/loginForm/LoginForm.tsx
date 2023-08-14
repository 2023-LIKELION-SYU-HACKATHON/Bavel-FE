import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginInput } from '@/features/login';

interface LoginForm {
  id: string;
  password: string;
}
const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoginInput
        id="id"
        type="text"
        label="이메일"
        errors={errors}
        control={control}
      />
      <LoginInput
        id="password"
        type="password"
        label="비밀번호"
        errors={errors}
        control={control}
      />
      <button type="submit" className="btn">
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
