import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AboutPage from './pages/AboutPage';
import JobsListPage from './pages/JobsListPage';
import NotFoundPage from './pages/NotFoundPage';
import EducationPage from './pages/EducationPage';
import { TrainingPage } from './pages/AdditionalTrainingPage';
import ExpertisePage from './pages/ExpertisePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="outer-container">
        <NavBar />
        <div className="header">
          <h3>Gail Mulcahey</h3>
          <a href="https://www.linkedin.com/in/gail-mulcahey/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/gail-mulcahey/</a>
          <p>gtbmulcahey@gmail.com</p>
        </div>
        <div id="page-wrap">
          <Routes>
            <Route path="/" element={<JobsListPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
