import { HOST } from '@/constants/host';
import axios from 'axios';
import { LoginRequest } from '@/types/auth.type';

// 로그인을 시도합니다.
export const userLogin = async (body: LoginRequest) => {
  const response = await axios.post(`http://${HOST}/members/login`, body);
  return response.data;
};
