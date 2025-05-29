import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectPage from './pages/project/ProjectPage';
import EstimatorPage from './pages/estimator/EstimatorPage';
import AdministratePage from './pages/administrate/AdministratePage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/estimator" element={<EstimatorPage/>}/>
          <Route path="/administrations" element={<AdministratePage/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
