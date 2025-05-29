import Sidebar from "../../components/Sidebar"
import Header from "./Header"
import WorkPackage from "./WorkPackage"

const EstimatorPage = () => {
  return (
    <div className="min-h-screen flex gap-4">
        <Sidebar width="w-20" isSmall={true}/>
        <div className="w-full flex-1 flex flex-col">
            <Header/>
            <WorkPackage/>
        </div>
    </div>
  )
}

export default EstimatorPage