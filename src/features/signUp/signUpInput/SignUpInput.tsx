import { Controller, FieldErrors, Control } from 'react-hook-form';

interface SignUpInputProps {
  id: string; // input id
  type: string; // input type
  label: string; // input 왼쪽 위 label
  errors: FieldErrors; // react-hook-form 에서 제공하는 error 객체
  placeholder?: string; //placeholder
  control: Control<any>; // react-hook-form 에서 제공하는 control 객체
  pattern?: string; // input의 정규식 패턴
  validate?: any;
}

const SignUpInput = ({
  id,
  type,
  label,
  errors,
  placeholder,
  control,
  pattern,
  validate,
}: SignUpInputProps) => {
  return (
    <div>
      <div className="relative w-full form-control ">
        <label className="label">
          <span className="label-text font-medium text-base">{label}</span>
        </label>
        <Controller
          defaultValue={''}
          control={control}
          name={id}
          rules={{
            required: true,
            pattern: pattern ? new RegExp(pattern) : undefined,
            validate: validate,
          }}
          render={({ field }) => (
            <>
              <input
                {...field}
                type={type}
                placeholder={placeholder}
                className="w-full p-2 border-2 rounded-lg"
              />
            </>
          )}
        />
      </div>
      {errors[id] && errors[id]?.type === 'required' && (
        <span className="text-base text-red-500">{`${label}는 필수 항목입니다.`}</span>
      )}
      {errors[id] && errors[id]?.type === 'pattern' && (
        <span className="text-base text-red-500">
          {label === 'Email'
            ? '이메일의 형식이 올바르지 않습니다.'
            : label === 'Password'
            ? '영문자, 숫자, 특수문자를 포함한 8자리 이상의 비밀번호로 설정해주세요.'
            : `${label} 형식이 올바르지 않습니다.`}
        </span>
      )}
      {errors[id] && label === 'Confirm Password' && (
        <span className="text-base text-red-500">
          비밀번호가 일치하지 않습니다
        </span>
      )}
    </div>
  );
};

export default SignUpInput;
