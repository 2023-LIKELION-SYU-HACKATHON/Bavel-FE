import { User } from './user.type';

//  연예, 경제, 스포츠, IT기술
type Category = 'entertainments' | 'economy' | 'sports' | 'tech';

export interface PostPage {
  pageId: number;
  hasNext: boolean;
  posts: Post[];
}
// 게시글
export interface Post {
  id: number;
  author: User;
  title: string;
  content: string;
  summary: string;
  photos: string[];
  views: number;
  likes: number;
  comments: Comment[];
  created_at: string;
  category: Category;
}

// 댓글
export interface Comment {
  id: number;
  author: User;
  content: string;
  created_at: string;
}
