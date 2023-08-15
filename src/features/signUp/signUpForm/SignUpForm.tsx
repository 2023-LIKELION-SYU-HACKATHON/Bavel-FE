import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import SignUpInput from '../signUpInput/SignUpInput';
import SignUpButton from '../signUpButton.tsx/SignUpButton';

interface SignUpForm {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  language: string | string | string;
}

const SignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    register,
  } = useForm<SignUpForm>();
  const onSubmit: SubmitHandler<SignUpForm> = data => console.log(data);

  const password = watch('password'); // Get the value of the 'password' field
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

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
      <SignUpInput
        id="nickname"
        type="text"
        label="Nickname"
        placeholder={'Enter your nickname'}
        errors={errors}
        control={control}
      />
      <div className="pl-1 flex flex-col">
        <span className="label-text font-medium text-base">Language</span>
        <div className="flex flex-row gap-2 pt-3">
          <label
            htmlFor="language-kr"
            className={`p-2 px-3 rounded-lg cursor-pointer m-0 bg-gray-300 ${
              selectedLanguage === 'korea' ? 'bg-gray-500 text-white' : ''
            }`}
          >
            <input
              {...register('language')}
              type="radio"
              value="korea"
              id="language-kr"
              className="hidden"
              onChange={() => setSelectedLanguage('korea')}
            />
            Korea
          </label>
          <label
            htmlFor="language-un"
            className={`p-2 px-3 rounded-lg cursor-pointer m-0 bg-gray-300 ${
              selectedLanguage === 'united-states'
                ? 'bg-gray-500 text-white'
                : ''
            }`}
          >
            <input
              {...register('language')}
              type="radio"
              value="united-states"
              id="language-un"
              className="hidden"
              onChange={() => setSelectedLanguage('united-states')}
            />
            United States
          </label>
          <label
            htmlFor="language-jp"
            className={`p-2 px-3 rounded-lg cursor-pointer m-0 bg-gray-300 ${
              selectedLanguage === 'japan' ? 'bg-gray-500 text-white' : ''
            }`}
          >
            <input
              {...register('language')}
              type="radio"
              value="japan"
              id="language-jp"
              className="hidden"
              onChange={() => setSelectedLanguage('japan')}
            />
            Japan
          </label>
        </div>
      </div>
      <SignUpButton />
    </form>
  );
};

export default SignUpForm;
