import { CountryNames } from '../constants/country';
import { country, countryFlag } from '../constants/country';

export const getCountry = (
  language: CountryNames,
  userCountry: CountryNames,
): string => {
  return country[language][userCountry] + ' ' + countryFlag[userCountry];
};
