// 유저
import { LanguageNames } from '@/constants/country';

export interface User {
  id: number;
  nickname: string;
  language: LanguageNames;
  avatar: string;
  followers?: number;
}
