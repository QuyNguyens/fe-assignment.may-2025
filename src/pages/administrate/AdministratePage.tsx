import Header from "./Header"
import Info from "./Info"
import Navbar from "./Navbar"
import PDF from "./PDF"

const AdministratePage = () => {
  return (
    <div className="flex flex-col">
        <Header/>
        <div className="flex w-full min-h-screen">
            <Navbar/>
            <div className="flex-1 gap-5 lg:gap-0 grid grid-cols-1 lg:grid-cols-2">
              <Info/>
              <PDF/>
            </div>
        </div>
    </div>
  )
}

export default AdministratePage