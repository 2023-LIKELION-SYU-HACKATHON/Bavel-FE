import { Controller, FieldErrors } from 'react-hook-form';

interface LoginInputProps {
  id: string;
  type: string;
  label: string;
  errors: FieldErrors;
  control: any;
}

// react-hook-form 의 Form에 사용되는 커스텀 Input 입니다.
const LoginInput = ({ id, type, label, errors, control }: LoginInputProps) => {
  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <Controller
          defaultValue={''}
          control={control}
          name={id}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              {...field}
              type={type}
              className="input input-bordered w-full max-w-xs"
            />
          )}
        />
        {errors[id] && (
          <span className="text-base text-red-500">{`${label}는 필수 항목입니다.`}</span>
        )}
      </div>
    </div>
  );
};

export default LoginInput;
