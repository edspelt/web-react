
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

const Public_Layout = () => {
  return (
    <div className="relative overflow-hidden bg-white">
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Public_Layout;