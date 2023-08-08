import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

import { worker } from './mocks/worker';

// msw Mock 서버를 실행합니다.
if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>,
);
