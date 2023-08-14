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
    <form
      className="flex flex-col w-full gap-5 px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <LoginInput
        id="id"
        type="text"
        label="아이디"
        errors={errors}
        control={control}
        pattern="^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
      />
      <LoginInput
        id="password"
        type="password"
        label="비밀번호"
        errors={errors}
        control={control}
      />
      <button
        type="submit"
        className="font-semibold text-white border-0 btn bg-bavel-orange hover:bg-bavel-orange"
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
