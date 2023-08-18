import { Post, PostPage } from '@/types/post.type';
import {
  dummyKoUser1,
  dummyKoUser2,
  dummyKoUser3,
  dummyEnUser1,
  dummyEnUser2,
  dummyEnUser3,
  dummyJaUser1,
  dummyJaUser2,
  dummyJaUser3,
} from './user.mock';

// 더미 게시글 데이터
export const dummyKoreanPosts: Post[] = [
  {
    id: 1,
    author: dummyKoUser1,
    title: '꾸뻬 씨의 사랑 여행',
    content:
      '사랑이 없으면 사는 게 얼마나 밋밋하겠어요? 사랑은 우릴 흥분시키고 즐겁게 해주죠. 사랑을 하면 삶은 모험의 연속이 되고, 만남은 순간순간 아찔한 경이가 된답니다. 물론 늘 그런 건 아니지만요. 그래도 전 사랑이 현대 생활의 가장 큰 불행, 즉 권태로부터 우릴 지켜준다고 믿고 있습니다. 우리나라의 경우이긴 하지만 우린 지나칠 정도로 보호받으며 살고 있어요. 그런 우리에게 사랑은 마지막으로 남아 있는 모험이지요. 우릴 늘 젊게 만들어주는 사랑 만세예요.',
    summary: '사랑으로 인한 모험과 아찔한 순간을 믿는 긍정적인 시각',
    photos: [],
    views: 1000,
    likes: 50,
    comments: [
      {
        id: 1,
        author: dummyKoUser2,
        content: '잘 봤어요!',
        created_at: '2023-08-07',
      },
      {
        id: 2,
        author: dummyKoUser3,
        content: '정말 공감되는 글이에요',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-07',
    category: 'economy',
  },
  {
    id: 2,
    author: dummyKoUser2,
    title: '농담',
    content:
      '우리의 삶의 모든 중대한 순간들은 단 한번뿐, 다시 돌아오지 않는다. 이렇게 다시 돌아오지 못함을 와전히 알고 있어야만 인간은 인간일 수 있다. 속임수를 써서는 안 된다. 그런 것을 전혀 모르는 척해서도 안 된다. 현대인은 속임수를 쓴다. 그들은 다시 돌아오지 못할 중대한 순간들을 모루 교묘히 피해가려 하고, 그렇게 해서 아무것도 지불하지 않은 채 탄생의 순간에서부터 죽음까지 가려 한다.',
    summary:
      '소중한 순간을 속임수 없이 즐기고 인생의 중요성을 강조한 글입니다.',
    photos: [],
    views: 800,
    likes: 70,
    comments: [
      {
        id: 1,
        author: dummyKoUser1,
        content: '묵직한 메시지를 전달하는 글이군요!',
        created_at: '2023-08-07',
      },
      {
        id: 2,
        author: dummyKoUser3,
        content: '마음을 따뜻하게 녹이는 내용이네요.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-06',
    category: 'entertainments',
  },
  {
    id: 3,
    author: dummyKoUser3,
    title: '상실의 시대',
    content: `비스킷통에는 여러 가지 비스킷이 가득 들어 있고,
    거기엔 좋아하는 것과 그다지 좋아하지 않는게 있잖아?
    그래서 먼저 좋아하는 걸 자꾸 먹어 버리면,
    그 다음엔 그다지 좋아하지 않는 것만 남게 되거든.
    난 괴로운 일이 생기면 언제나 그렇게 생각해.
    지금 이걸 겪어두면 나중에 편해진다고.
    인생은 비스킷 통이라고.`,
    summary: '좋아하는 것을 먼저 즐기며 비유적으로 인생의 접근을 나타낸 글',
    photos: [],
    views: 500,
    likes: 30,
    comments: [
      {
        id: 1,
        author: dummyKoUser1,
        content: '작은 순간의 소중함을 느끼게 해주는 글이에요.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-05',
    category: 'economy',
  },
  {
    id: 4,
    author: dummyKoUser1,
    title: '빨간머리 앤',
    content:
      '행복한 나날이란 멋지고 놀라운 일들이 일어나는 날들이 아니라. 진주 알이 하나하나 한 줄로 꿰어지듯이 단순하게 작은 기쁨을 계속 가져다 주는 날들이다.',
    summary: '작은 기쁨이 행복한 나날을 만든다는 메시지를 담은 글 ',
    photos: [],
    views: 1200,
    likes: 80,
    comments: [
      {
        id: 1,
        author: dummyKoUser2,
        content: '긍정적인 에너지가 가득 담긴 글이네요.',
        created_at: '2023-08-07',
      },
      {
        id: 2,
        author: dummyKoUser3,
        content: '작은 행복을 잊지 말아야겠다는 생각이 드는 글이었어요.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-04',
    category: 'sports',
  },
  {
    id: 5,
    author: dummyKoUser2,
    title: '안네의 일기',
    content:
      '자기 안에 숨어 있는 행복을 다시 한 번 끌어내기 위해 노력하세요. 그리고 자기 주위에 아직 남아 있는 모든 아름다움을 생각하세요. 그러면 행복은 금방 당신 곁으로 찾아올 거예요.',
    summary:
      '내적 행복을 찾아 아름다움을 기억하며 행복을 찾아가는 방법을 제시한 글',
    photos: [],
    views: 900,
    likes: 40,
    comments: [
      {
        id: 1,
        author: dummyKoUser1,
        content: '묵직한 메시지를 전달하는 글이군요!',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-03',
    category: 'tech',
  },
];

export const dummyEnglishPosts: Post[] = [
  {
    id: 1,
    author: dummyEnUser1,
    title: "Mr. Kkubbe's Journey of Love",
    content: `How dull life would be without love! Love excites and brings joy to us. When we love, life becomes a series of adventures, and every moment of meeting becomes a thrilling wonder. Of course, it's not always like that, but I still believe that love protects us from the biggest unhappiness of modern life, which is ennui. In our country, even though it might not be to that extent, we are living under its protection. To us, love is the last remaining adventure. Long live love that keeps us forever young.`,
    summary:
      'A positive perspective that believes in adventure and thrilling moments brought by love.',
    photos: [],
    views: 1000,
    likes: 50,
    comments: [
      {
        id: 1,
        author: dummyEnUser2,
        content: 'Enjoyed reading this!',
        created_at: '2023-08-07',
      },
      {
        id: 2,
        author: dummyEnUser3,
        content: 'Really relatable content.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-07',
    category: 'economy',
  },
  {
    id: 2,
    author: dummyEnUser2,
    title: 'Joke',
    content:
      "All the significant moments in our lives happen only once, never to return. To truly be human, one must fully understand that these moments won't come back. We must not use deceit. We must not pretend to not know such things. Modern people employ deceit. They cleverly avoid the important moments that won't return and try to evade them, avoiding any payment from the moment of birth to death.",
    summary:
      'An article emphasizing enjoying precious moments without deceit and the importance of life.',
    photos: [],
    views: 800,
    likes: 70,
    comments: [
      {
        id: 1,
        author: dummyEnUser1,
        content: 'This conveys a powerful message!',
        created_at: '2023-08-07',
      },
      {
        id: 2,
        author: dummyEnUser3,
        content: 'This content warms the heart.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-06',
    category: 'entertainments',
  },
  {
    id: 3,
    author: dummyEnUser3,
    title: 'Era of Loss',
    content: `The biscuit tin is filled with various types of biscuits,
    Some you like and some you don't, right?
    So, if you keep eating what you like,
    Then eventually, only what you don't like will remain.
    Whenever something painful happens, I always think this way.
    If you go through this now, you'll be comfortable later.
    Life is like a biscuit tin.`,
    summary:
      'A metaphorical approach, suggesting embracing what you like first and illustrating an approach to life.',
    photos: [],
    views: 500,
    likes: 30,
    comments: [
      {
        id: 1,
        author: dummyEnUser1,
        content: 'This reminds us to cherish the value of small moments.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-05',
    category: 'economy',
  },
  {
    id: 4,
    author: dummyEnUser1,
    title: 'Anne of Green Gables',
    content:
      'Happy days are not the days of amazing and astonishing events. They are the days that bring simple joys, one after the other, like pearls threaded on a string.',
    summary: 'A message that small joys continuously contribute to happy days.',
    photos: [],
    views: 1200,
    likes: 80,
    comments: [
      {
        id: 1,
        author: dummyEnUser2,
        content: 'This radiates positive energy.',
        created_at: '2023-08-07',
      },
      {
        id: 2,
        author: dummyEnUser3,
        content: 'This reminds us not to forget the small happiness.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-04',
    category: 'sports',
  },
  {
    id: 5,
    author: dummyEnUser2,
    title: "Anne's Diary",
    content:
      'Make an effort to bring forth the happiness within yourself again. And think about all the beauty that still surrounds you. Then, happiness will quickly come to you.',
    summary:
      'Suggesting finding inner happiness, cherishing beauty around, and guiding the path to happiness.',
    photos: [],
    views: 900,
    likes: 40,
    comments: [
      {
        id: 1,
        author: dummyEnUser1,
        content: 'This conveys a powerful message!',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-03',
    category: 'tech',
  },
];

export const dummyJapanesePosts: Post[] = [
  {
    id: 1,
    author: dummyJaUser1,
    title: 'クッベさんの愛の旅',
    content:
      '愛がなければ、人生はどれほどつまらないだろうか。愛は私たちを興奮させ、楽しみをもたらす。愛すると、人生は冒険の連続となり、出会いの瞬間はアチチとした驚きとなる。もちろん、いつもそういうわけではないが、それでも私は愛が現代生活の最大の不幸、退屈から私たちを守ってくれると信じている。私たちの国の場合はそれほどではないかもしれないが、私たちはその保護の下で生きている。私たちにとって、愛は最後に残された冒険だ。永遠の若さを保ってくれる愛万歳だ。',
    summary: '愛による冒険とアチチな瞬間を信じる肯定的な視点。',
    photos: [],
    views: 1000,
    likes: 50,
    comments: [
      {
        id: 1,
        author: dummyJaUser2,
        content: '読んで楽しかったです！',
        created_at: '2023-08-07',
      },
      {
        id: 2,
        author: dummyJaUser3,
        content: '本当に共感できる内容です。',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-07',
    category: 'economy',
  },
  {
    id: 2,
    author: dummyJaUser2,
    title: 'ジョーク',
    content:
      '人生のすべての重要な瞬間はたった一度しか訪れず、二度と戻ってこない。人間であるためには、これらの瞬間が戻らないことを完全に理解する必要がある。欺瞞を使ってはならない。知らないふりをするべきではない。現代人は欺瞞を行使している。彼らは戻らない重要な瞬間を巧妙に避け、その結果、出生から死までの瞬間に対して何の支払いもせずに過ごそうとする。',
    summary: '欺瞞なしで貴重な瞬間を楽しむことと人生の重要性を強調する記事。',
    photos: [],
    views: 800,
    likes: 70,
    comments: [
      {
        id: 1,
        author: dummyJaUser1,
        content: 'この内容は強力なメッセージを伝えています！',
        created_at: '2023-08-07',
      },
      {
        id: 2,
        author: dummyJaUser3,
        content: 'この内容は心を温かくするものです。',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-06',
    category: 'entertainments',
  },
  {
    id: 3,
    author: dummyJaUser3,
    title: '喪失の時代',
    content: `ビスケットの缶にはさまざまな種類のビスケットが入っています。
    好きなものと好きでないものがあるでしょう？
    だから、好きなものを食べ続けると、
    結局、好きでないものだけが残ることになります。
    辛いことが起きるたびに、私はいつもこのように考えます。
    今これを経験しておくと、後で楽になるでしょう。
    人生はビスケットの缶のようです。`,
    summary:
      '好きなものを最初に楽しむことを提案し、比喩的なアプローチで人生のアプローチを示しています。',
    photos: [],
    views: 500,
    likes: 30,
    comments: [
      {
        id: 1,
        author: dummyJaUser1,
        content: 'これは小さな瞬間の価値を大切にすることを思い出させます。',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-05',
    category: 'economy',
  },
  {
    id: 4,
    author: dummyJaUser1,
    title: '赤毛のアン',
    content:
      '幸せな日々とは、驚くような出来事の日々ではない。それは真珠が一つずつ糸に通されるように、連続してやってくる小さな喜びの日々だ。',
    summary: '小さな喜びが幸せな日々に貢献することを伝えるメッセージ。',
    photos: [],
    views: 1200,
    likes: 80,
    comments: [
      {
        id: 1,
        author: dummyJaUser2,
        content: 'これからのポジティブなエネルギーが溢れています。',
        created_at: '2023-08-07',
      },
      {
        id: 2,
        author: dummyJaUser3,
        content: '小さな幸福を忘れないようにするための思い出です。',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-04',

    category: 'sports',
  },
  {
    id: 5,
    author: dummyJaUser2,
    title: 'アンの日記',
    content:
      'もう一度内なる幸福を引き出すために努力しましょう。そして、周囲にまだ残っている美を考えてみてください。そうすれば、幸福はすぐにあなたのもとに訪れるでしょう。',
    summary:
      '内なる幸福を見つけ、周りの美を大切にし、幸福への道を導くことを示唆する。',
    photos: [],
    views: 900,
    likes: 40,
    comments: [
      {
        id: 1,
        author: dummyJaUser1,
        content: 'この内容は強力なメッセージを伝えています！',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-03',
    category: 'tech',
  },
];

// 더미 페이지 데이터
export const dummyKoPage1: PostPage = {
  pageId: 0,
  hasNext: true,
  posts: dummyKoreanPosts,
};

export const dummyKoPage2: PostPage = {
  pageId: 1,
  hasNext: true,
  posts: dummyKoreanPosts,
};

export const dummyKoPage3: PostPage = {
  pageId: 2,
  hasNext: false,
  posts: dummyKoreanPosts,
};
// 더미 페이지 데이터
export const dummyEnPage1: PostPage = {
  pageId: 0,
  hasNext: true,
  posts: dummyEnglishPosts,
};

export const dummyEnPage2: PostPage = {
  pageId: 1,
  hasNext: true,
  posts: dummyEnglishPosts,
};

export const dummyEnPage3: PostPage = {
  pageId: 2,
  hasNext: false,
  posts: dummyEnglishPosts,
};
// 더미 페이지 데이터
export const dummyJaPage1: PostPage = {
  pageId: 0,
  hasNext: true,
  posts: dummyJapanesePosts,
};

export const dummyJaPage2: PostPage = {
  pageId: 1,
  hasNext: true,
  posts: dummyJapanesePosts,
};

export const dummyJaPage3: PostPage = {
  pageId: 2,
  hasNext: false,
  posts: dummyJapanesePosts,
};
