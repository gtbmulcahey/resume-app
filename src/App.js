import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AboutPage from './pages/AboutPage';
import JobsListPage from './pages/JobsListPage';
import NotFoundPage from './pages/NotFoundPage';
import EducationPage from './pages/EducationPage';
import { TrainingPage } from './pages/AdditionalTrainingPage';
import ExpertisePage from './pages/ExpertisePage';
import { ImageDisplay } from "./ImageDisplay";

function App() {
  return (
    <BrowserRouter>
      <div className="App" id="outer-container">
        <NavBar />
        <div className="header">
          <h3>Gail Mulcahey</h3>
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
        <div className="footer">
          <p>
          <span>gtbmulcahey@gmail.com</span>
          <span>
            <a href="https://www.linkedin.com/in/gail-mulcahey/" target="_blank" rel="noopener noreferrer"><ImageDisplay height="25" width="25" alt="linkedin" imageName="In-Blue-26.png" /></a>
          </span>
          </p>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
