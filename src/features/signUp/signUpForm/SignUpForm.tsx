import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import SignUpInput from '../signUpInput/SignUpInput';
import SignUpButton from '../signUpButton.tsx/SignUpButton';

interface SignUpForm {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  language: 'ko' | 'en' | 'jp';
  profile: File;
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

  const password = watch('password');
  const [selectedLanguage, setSelectedLanguage] = useState<
    'ko' | 'en' | 'jp' | null
  >(null);
  const defaultProfileImage = 'src/assets/defaultProfile.jpg';

  const [selectedProfile, setSelectedProfile] = useState<File | null>(null);

  return (
    <form
      className="flex flex-col w-full gap-5 px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <SignUpInput
        id="userId"
        type="text"
        label="Email"
        placeholder={'Enter your email'}
        errors={errors}
        control={control}
        pattern="^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
      />
      <SignUpInput
        id="userPassword"
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
            value === password || 'Passwords do not match',
        }}
      />
      <SignUpInput
        id="userNickname"
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
            htmlFor="language-ko"
            className={`p-2 px-3 rounded-lg cursor-pointer m-0 bg-gray-300 ${
              selectedLanguage === 'ko' ? 'bg-gray-500 text-white' : ''
            }`}
          >
            <input
              {...register('language')}
              type="radio"
              value="ko"
              id="language-ko"
              className="hidden"
              onChange={() => setSelectedLanguage('ko')}
            />
            Korean
          </label>
          <label
            htmlFor="language-en"
            className={`p-2 px-3 rounded-lg cursor-pointer m-0 bg-gray-300 ${
              selectedLanguage === 'en' ? 'bg-gray-500 text-white' : ''
            }`}
          >
            <input
              {...register('language')}
              type="radio"
              value="en"
              id="language-en"
              className="hidden"
              onChange={() => setSelectedLanguage('en')}
            />
            English
          </label>
          <label
            htmlFor="language-jp"
            className={`p-2 px-3 rounded-lg cursor-pointer m-0 bg-gray-300 ${
              selectedLanguage === 'jp' ? 'bg-gray-500 text-white' : ''
            }`}
          >
            <input
              {...register('language')}
              type="radio"
              value="jp"
              id="language-jp"
              className="hidden"
              onChange={() => setSelectedLanguage('jp')}
            />
            Japanese
          </label>
        </div>
      </div>

      <div className="pl-1 flex flex-col">
        <span className="label-text font-medium text-base">
          Profile Picture
        </span>
        <div className="flex flex-row pt-3 items-center justify-start gap-3">
          {selectedProfile ? (
            <img
              src={URL.createObjectURL(selectedProfile)}
              alt="Selected profile"
              className="w-20 h-20 rounded-full border-2 border-gray-400"
            />
          ) : (
            <img
              src={defaultProfileImage}
              alt="Default profile"
              className="w-20 h-20 rounded-full border-2 border-gray-400"
            />
          )}
          <label className="p-2 px-3 rounded-lg cursor-pointer m-0 bg-gray-300 hover:bg-gray-500 hover:text-white">
            <input
              type="file"
              accept="image/*"
              onChange={e => {
                setSelectedProfile(e.target.files && e.target.files[0]);
                register('profile', { required: true });
              }}
              className=" hidden"
            />
            Upload
          </label>
        </div>
      </div>
      <SignUpButton />
    </form>
  );
};

export default SignUpForm;
