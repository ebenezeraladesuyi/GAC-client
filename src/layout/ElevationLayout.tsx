import { Outlet } from "react-router-dom"
import { Header } from "../componets"


const ElevationLayout = () => {
  return (
    <div>
        
        <Header />
        <Outlet />

        
    </div>
  )
}

export default ElevationLayout