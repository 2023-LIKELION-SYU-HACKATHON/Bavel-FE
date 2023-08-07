import { rest } from 'msw';
import { dummyPage1, dummyPage2, dummyPage3 } from './post.mock';

// 명시적으로 딜레이를 주는 함수입니다.
async function sleep(timeout: number) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

// Mock API를 정의합니다.
export const handlers = [
  rest.get(`/post`, async (req, res, ctx) => {
    const pageNumber = req.url.searchParams.get('page');
    await sleep(1000);
    if (pageNumber === '0') return res(ctx.status(200), ctx.json(dummyPage1));
    if (pageNumber === '1') return res(ctx.status(200), ctx.json(dummyPage2));
    if (pageNumber === '2') return res(ctx.status(200), ctx.json(dummyPage3));
  }),
];
