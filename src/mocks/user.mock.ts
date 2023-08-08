import { User } from '@/types/user.type';

// 더미 유저 데이터
export const dummyUser1: User = {
  id: 1,
  nickname: '일론 머스크',
  country: 'korea',
  avatar:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/225px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
  followers: 100,
};

export const dummyUser2: User = {
  id: 2,
  nickname: '마크 저커버그',
  country: 'japan',
  avatar:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/255px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
  followers: 50,
};

export const dummyUser3: User = {
  id: 3,
  nickname: '이재용',
  country: 'united states',
  avatar:
    'https://i.namu.wiki/i/72wQVmBqzX6o6ifnMa3NX8_RpUd5pgtgr4-NzS3JPl5_rONzaLN1i7DdvbLgQWDE4ShzXV66OIWXChK-VVEQxg.webp',
  followers: 200,
};
