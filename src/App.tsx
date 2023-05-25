import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CenterInfoPage from './pages/CenterInfoPage/CenterInfoPage';
import CounselingInfoPage from './pages/CounselingInfoPage/CounselingInfoPage';
import ProgramInfoPage from './pages/ProgramInfoPage/ProgramInfoPage';
import NoticePage from './pages/NoticePage/NoticePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<CenterInfoPage />} path="/CenterInfo/:id" />
        <Route element={<CounselingInfoPage />} path="/CounselingInfo/:id" />
        <Route element={<ProgramInfoPage />} path="/ProgramInfo/:id" />
        <Route element={<NoticePage />} path="/Notice/:id" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
