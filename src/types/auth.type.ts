import { LanguageNames } from '@/constants/country';

export interface LoginRequest {
  userId: string;
  userPassword: string;
}

export interface LoginResponse {
  id: number;
  userId: string;
  userPassword: string;
  userNickname: string;
  language: LanguageNames;
  profile: string;
  memberJoinDate: string;
}
