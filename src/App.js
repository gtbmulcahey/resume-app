import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ExperiencesListPage from './pages/ExperiencesListPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element = {<AboutPage />} />
            <Route path="/experiences" element={<ExperiencesListPage />} />
            <Route path="/experiences/:experienceId" element={<ExperiencePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;