import { SubmitHandler, useForm } from 'react-hook-form';
import SignUpInput from '../signUpInput/SignUpInput';

interface SignUpForm {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<SignUpForm>();
  const onSubmit: SubmitHandler<SignUpForm> = data => console.log(data);

  const password = watch('password'); // Get the value of the 'password' field

  return (
    <form
      className="flex flex-col w-full gap-5 px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <SignUpInput
        id="id"
        type="text"
        label="Email"
        placeholder={'Enter your email'}
        errors={errors}
        control={control}
        pattern="^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
      />
      <SignUpInput
        id="password"
        type="password"
        label="Password"
        placeholder={'Enter your password'}
        errors={errors}
        control={control}
        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
      />
      <SignUpInput
        id="nickname"
        type="text"
        label="Nickname"
        placeholder={'Enter your nickname'}
        errors={errors}
        control={control}
      />
      <SignUpInput
        id="passwordConfirm"
        type="password"
        label="Confirm Password"
        placeholder="Confirm your password"
        errors={errors}
        control={control}
        validate={{
          previousPassword: (value: string) =>
            value === password || 'Passwords do not match', // Validation function to check if passwords match
        }}
      />
      <button
        type="submit"
        className="font-semibold text-white border-0 btn bg-black hover:bg-black"
      >
        SignUp
      </button>
    </form>
  );
};

export default SignUpForm;
