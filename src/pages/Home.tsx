import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

  return (
    <div className="h-full flex justify-center items-center gap-4">
        <button onClick={() => navigate('/projects')} className="bg-primary text-white rounded-sm px-4 py-2">Projects</button>
        <button onClick={() => navigate('/estimator')} className="bg-primary text-white rounded-sm px-4 py-2">Estimator</button>
        <button onClick={() => navigate('/administrations')} className="bg-primary text-white rounded-sm px-4 py-2">Administration</button>
        <button onClick={() => navigate('/a2')} className="bg-green-300 text-white rounded-sm px-4 py-2">A2</button>
    </div>
  )
}

export default Home