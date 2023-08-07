import { rest } from 'msw';
import { dummyPage1, dummyPage2, dummyPage3 } from './post.mock';

// Mock API를 정의합니다.
export const handlers = [
  rest.get(`/post`, async (req, res, ctx) => {
    const pageNumber = req.url.searchParams.get('page');
    if (pageNumber === '0') return res(ctx.status(200), ctx.json(dummyPage1));
    if (pageNumber === '1') return res(ctx.status(200), ctx.json(dummyPage2));
    if (pageNumber === '2') return res(ctx.status(200), ctx.json(dummyPage3));
  }),
];
