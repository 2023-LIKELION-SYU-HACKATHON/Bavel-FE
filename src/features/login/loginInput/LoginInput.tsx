import { Controller, FieldErrors, Control } from 'react-hook-form';

interface LoginInputProps {
  id: string; // input id
  type: string; // input type
  label: string; // input 왼쪽 위 label
  errors: FieldErrors; // react-hook-form 에서 제공하는 error 객체
  control: Control<any>; // react-hook-form 에서 제공하는 control 객체
  pattern?: string; // input의 정규식 패턴
}

// react-hook-form 의 Form에 사용되는 커스텀 Input 입니다.
const LoginInput = ({
  id,
  type,
  label,
  errors,
  control,
  pattern,
}: LoginInputProps) => {
  return (
    <div>
      <div className="relative w-full form-control ">
        <label className="label">
          <span className="label-text font-semibold">{label}</span>
        </label>
        <Controller
          defaultValue={''}
          control={control}
          name={id}
          rules={{
            required: true,
            pattern: pattern ? new RegExp(pattern) : undefined,
          }}
          render={({ field }) => (
            <>
              <input
                {...field}
                type={type}
                className="w-full input focus:outline-none peer"
              />
              <div className="absolute bottom-1 w-full h-[1px] bg-gray-400 peer-focus:bg-bavel-orange" />
            </>
          )}
        />
      </div>
      {errors[id] && errors[id]?.type === 'required' && (
        <span className="text-base text-red-500">{`${label}는 필수 항목입니다.`}</span>
      )}
      {errors[id] && errors[id]?.type === 'pattern' && (
        <span className="text-base text-red-500">{`${label} 형식이 올바르지 않습니다.`}</span>
      )}
    </div>
  );
};

export default LoginInput;
