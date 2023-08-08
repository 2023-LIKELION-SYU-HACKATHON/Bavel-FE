export type CountryNames = 'korea' | 'united states' | 'japan';

export const country: Record<CountryNames, Record<CountryNames, string>> = {
  korea: {
    korea: '대한민국',
    'united states': '미국',
    japan: '일본',
  },
  'united states': {
    korea: 'korea',
    'united states': 'united states',
    japan: 'japan',
  },
  japan: {
    korea: '韓国',
    'united states': 'アメリカ',
    japan: '日本',
  },
};

export const countryFlag: Record<CountryNames, string> = {
  korea: '🇰🇷',
  'united states': '🇺🇸',
  japan: '🇯🇵',
};
