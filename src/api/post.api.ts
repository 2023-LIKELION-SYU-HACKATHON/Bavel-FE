import axios from 'axios';

export const getPostPage = async (pageNumber: number) => {
  const response = await axios.get(`/post?page=${pageNumber}`);
  return response.data;
};
