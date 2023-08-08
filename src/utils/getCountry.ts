import { CountryNames } from '../constants/country';
import { country, countryFlag } from '../constants/country';

// 현재 사용자의 language와 , 유저의 country를 받아
// 해당 국가의 이름을 language 언어 기준으로 반환합니다.
export const getCountry = (
  language: CountryNames,
  userCountry: CountryNames,
): string => {
  return country[language][userCountry] + ' ' + countryFlag[userCountry];
};
