import { UseMutationOptions, useMutation } from 'react-query';
import { userLogin } from '@/api/auth.api';
import { LoginRequest, LoginResponse } from '@/types/auth.type';

// userLogin api를 호출하는 useMutation 커스텀훅 입니다.
const useLogin = (
  options?: UseMutationOptions<LoginResponse, Error, LoginRequest>,
) => {
  return useMutation(userLogin, { ...options });
};

export default useLogin;
