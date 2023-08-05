import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/post" element={<PostDetail />} />
      {/* 추후에 /post/:idx 사용하고 useParams 사용예정 */}
    </Routes>
  );
}

export default App;
