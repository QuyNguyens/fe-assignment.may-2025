import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectPage from './pages/project/ProjectPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProjectPage />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
