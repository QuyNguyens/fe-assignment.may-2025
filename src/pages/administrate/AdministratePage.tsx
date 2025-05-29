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
            <Info/>
            <PDF/>
        </div>
    </div>
  )
}

export default AdministratePage