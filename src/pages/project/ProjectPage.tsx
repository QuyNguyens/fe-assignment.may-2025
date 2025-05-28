import Sidebar from "../../components/Sidebar"
import Header from "./Header"
import ProjectDetail from "./ProjectDetail"

const ProjectPage = () => {
  return (
    <div className="flex min-h-screen gap-4">
        <Sidebar width="w-[242px]" isSmall={false}/>
        <div className="flex flex-col flex-1">
            <Header/>
            <ProjectDetail/>
        </div>
    </div>
  )
}

export default ProjectPage