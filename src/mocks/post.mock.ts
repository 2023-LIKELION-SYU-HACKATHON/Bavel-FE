import { Post, PostPage } from '@/types/post.type';
import { dummyUser1, dummyUser2, dummyUser3 } from './user.mock';

export const dummyPosts: Post[] = [
  {
    id: 1,
    author: dummyUser1,
    title: 'Long Post 1',
    content:
      'This is a long post about something. This is a long post about something.This is a long post about something.This is a long post about something.This is a long post about something.This is a long post about something.',
    summary: 'Summary of long post 1.',
    photos: [],
    views: 1000,
    likes: 50,
    comments: [
      {
        id: 1,
        author: dummyUser1,
        content: 'This is comment 1.',
        created_at: '2023-08-07',
      },
      {
        id: 2,
        author: dummyUser1,
        content: 'This is comment 2.',
        created_at: '2023-08-07',
      },
      {
        id: 3,
        author: dummyUser1,
        content: 'This is comment 3.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-07',
    category: 'economy',
  },
  {
    id: 2,
    author: dummyUser2,
    title: 'Entertainment Post 1',
    content: 'This is an entertainment post about something.',
    summary: 'Summary of entertainment post 1.',
    photos: [],
    views: 800,
    likes: 70,
    comments: [
      {
        id: 1,
        author: dummyUser1,
        content: 'This is comment 1.',
        created_at: '2023-08-07',
      },
      {
        id: 2,
        author: dummyUser1,
        content: 'This is comment 2.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-06',
    category: 'entertainments',
  },
  {
    id: 3,
    author: dummyUser3,
    title: 'Economy Post 1',
    content: 'This is an economy post about something.',
    summary: 'Summary of economy post 1.',
    photos: [],
    views: 500,
    likes: 30,
    comments: [
      {
        id: 1,
        author: dummyUser1,
        content: 'This is comment 1.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-05',
    category: 'economy',
  },
  {
    id: 4,
    author: dummyUser1,
    title: 'Sports Post 1',
    content: 'This is a sports post about something.',
    summary: 'Summary of sports post 1.',
    photos: [],
    views: 1200,
    likes: 80,
    comments: [
      {
        id: 1,
        author: dummyUser1,
        content: 'This is comment 1.',
        created_at: '2023-08-07',
      },
      {
        id: 2,
        author: dummyUser1,
        content: 'This is comment 2.',
        created_at: '2023-08-07',
      },
      {
        id: 3,
        author: dummyUser1,
        content: 'This is comment 3.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-04',
    category: 'sports',
  },
  {
    id: 5,
    author: dummyUser2,
    title: 'Tech Post 1',
    content: 'This is a tech post about something.',
    summary: 'Summary of tech post 1.',
    photos: [],
    views: 900,
    likes: 40,
    comments: [
      {
        id: 1,
        author: dummyUser1,
        content: 'This is comment 1.',
        created_at: '2023-08-07',
      },
      {
        id: 2,
        author: dummyUser1,
        content: 'This is comment 2.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-03',
    category: 'tech',
  },
  {
    id: 6,
    author: dummyUser3,
    title: 'Hot Post 2',
    content: 'This is a hot post about something else.',
    summary: 'Summary of hot post 2.',
    photos: [],
    views: 1500,
    likes: 120,
    comments: [
      {
        id: 1,
        author: dummyUser1,
        content: 'This is comment 1.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-02',
    category: 'economy',
  },
  {
    id: 7,
    author: dummyUser1,
    title: 'Entertainment Post 2',
    content: 'This is an entertainment post about something else.',
    summary: 'Summary of entertainment post 2.',
    photos: [],
    views: 1100,
    likes: 90,
    comments: [
      {
        id: 1,
        author: dummyUser1,
        content: 'This is comment 1.',
        created_at: '2023-08-07',
      },
      {
        id: 2,
        author: dummyUser1,
        content: 'This is comment 2.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-08-01',
    category: 'entertainments',
  },
  {
    id: 8,
    author: dummyUser2,
    title: 'Economy Post 2',
    content: 'This is an economy post about something else.',
    summary: 'Summary of economy post 2.',
    photos: [],
    views: 750,
    likes: 60,
    comments: [
      {
        id: 1,
        author: dummyUser1,
        content: 'This is comment 1.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-07-31',
    category: 'economy',
  },
  {
    id: 9,
    author: dummyUser3,
    title: 'Sports Post 2',
    content: 'This is a sports post about something else.',
    summary: 'Summary of sports post 2.',
    photos: [],
    views: 1000,
    likes: 70,
    comments: [
      {
        id: 1,
        author: dummyUser1,
        content: 'This is comment 1.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-07-30',
    category: 'sports',
  },
  {
    id: 10,
    author: dummyUser2,
    title: 'Tech Post 2',
    content: 'This is a tech post about something else.',

    summary: 'Summary of tech post 2.',
    photos: [],
    views: 800,
    likes: 50,
    comments: [
      {
        id: 1,
        author: dummyUser1,
        content: 'This is comment 1.',
        created_at: '2023-08-07',
      },
      {
        id: 2,
        author: dummyUser1,
        content: 'This is comment 2.',
        created_at: '2023-08-07',
      },
      {
        id: 3,
        author: dummyUser1,
        content: 'This is comment 3.',
        created_at: '2023-08-07',
      },
    ],
    created_at: '2023-07-29',
    category: 'tech',
  },
];

export const dummyPage1: PostPage = {
  pageId: 0,
  hasNext: true,
  posts: dummyPosts,
};

export const dummyPage2: PostPage = {
  pageId: 1,
  hasNext: true,
  posts: dummyPosts,
};

export const dummyPage3: PostPage = {
  pageId: 2,
  hasNext: false,
  posts: dummyPosts,
};
