import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostDetail from './pages/PostDetail';
import WritePost from './pages/WritePost';

// msw Mock 서버를 실행합니다.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/post" element={<PostDetail />} />
      {/* 추후에 /post/:idx 사용하고 useParams 사용예정 */}
      <Route path="/write" element={<WritePost />} />
    </Routes>
  );
}

export default App;
