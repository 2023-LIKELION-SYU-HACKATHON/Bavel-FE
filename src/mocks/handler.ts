import { rest } from 'msw';

// Mock API를 정의합니다.
export const handlers = [
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(''));
  }),
];
