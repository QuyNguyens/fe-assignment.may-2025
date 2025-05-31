import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectPage from './pages/project/ProjectPage';
import EstimatorPage from './pages/estimator/EstimatorPage';
import AdministratePage from './pages/administrate/AdministratePage';
import Home from './pages/Home';
import JsonFormRenderer from './pages/JsonFromRenderer';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a2" element={<JsonFormRenderer />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/estimator" element={<EstimatorPage/>}/>
          <Route path="/administrations" element={<AdministratePage/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default App
