import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { setActiveItem } from "../features/users/sidebarSlice";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleActiveSidebar = (name: string) => {
      dispatch(setActiveItem(name));
      navigate(`/${name}`);
    }
  return (
    <div className="h-full flex justify-center items-center gap-4">
        <button onClick={() => handleActiveSidebar('projects')} className="bg-primary text-white rounded-sm px-4 py-2">Projects</button>
        <button onClick={() => handleActiveSidebar('estimator')} className="bg-primary text-white rounded-sm px-4 py-2">Estimator</button>
        <button onClick={() => handleActiveSidebar('administrations')} className="bg-primary text-white rounded-sm px-4 py-2">Administration</button>
        <button onClick={() => navigate('/a2')} className="bg-green-300 text-white rounded-sm px-4 py-2">A2</button>
    </div>
  )
}

export default Home