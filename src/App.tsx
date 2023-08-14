import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostDetailPage from './pages/PostDetailPage';
import NewPostPage from './pages/NewPostPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/post/:postId" element={<PostDetailPage />} />
      {/* 추후에 /post/:idx 사용하고 useParams 사용예정 */}
      <Route path="/post/new" element={<NewPostPage />} />
    </Routes>
  );
}

export default App;
