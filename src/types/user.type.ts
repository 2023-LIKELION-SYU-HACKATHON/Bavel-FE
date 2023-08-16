// 유저
import { CountryNames } from '@/constants/country';

export interface User {
  id: number;
  nickname: string;
  country?: CountryNames;
  avatar: string;
  followers?: number;
}
