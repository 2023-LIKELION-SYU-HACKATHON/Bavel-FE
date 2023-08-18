import { HOST } from '@/constants/host';
import axios from 'axios';

// 해당 pageNumber의 게시글 페이지를 받아옵니다.
export const getKoPostPage = async (pageNumber: number) => {
  const response = await axios.get(`/ko_post?page=${pageNumber}`);
  console.log(response.data);
  return response.data;
};
// 해당 pageNumber의 게시글 페이지를 받아옵니다.
export const getEnPostPage = async (pageNumber: number) => {
  const response = await axios.get(`/en_post?page=${pageNumber}`);
  console.log(response.data);
  return response.data;
};
// 해당 pageNumber의 게시글 페이지를 받아옵니다.
export const getJaPostPage = async (pageNumber: number) => {
  const response = await axios.get(`/ja_post?page=${pageNumber}`);
  console.log(response.data);
  return response.data;
};
