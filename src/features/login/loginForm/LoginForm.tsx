import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginInput } from '@/features/login';
import useLogin from '@/hooks/useLogin';
import { LoginRequest } from '@/types/auth.type';

const LoginForm = () => {
  const loginMutation = useLogin();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginRequest>();
  const onSubmit: SubmitHandler<LoginRequest> = data =>
    loginMutation.mutate(data, {
      onSuccess(data, variables, context) {
        console.log(data);
        console.log(variables);
        console.log(context);
      },
    });

  return (
    <form
      className="flex flex-col w-full gap-5 px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <LoginInput
        id="userId"
        type="text"
        label="아이디"
        errors={errors}
        control={control}
        pattern="^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
      />
      <LoginInput
        id="userPassword"
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
