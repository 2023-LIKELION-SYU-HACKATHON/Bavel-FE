import { User } from './user.type';

//  연예, 경제, 스포츠, IT기술
type Category = 'entertainments' | 'economy' | 'sports' | 'tech';

export interface PostPage {
  pageNumber: number;
  hasNextNumber: boolean;
  list: Post[];
}
// 게시글
export interface Post {
  id: number;
  member_nickName: string;
  category_name: string;
  title: string;
  content: string;
  summary: string;
  date: string[];
  hit: number;
  likes: number;
}
// export interface Post {
//   id: number;
//   author: User;
//   title: string;
//   content: string;
//   summary: string;
//   photos: string[];
//   views: number;
//   likes: number;
//   comments: Comment[];
//   created_at: string;
//   category: Category;
// }

// 댓글
export interface Comment {
  id: number;
  author: User;
  content: string;
  created_at: string;
}
