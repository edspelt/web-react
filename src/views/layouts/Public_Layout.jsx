
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Public_Layout = () => {
  return (
    <div className="relative overflow-hidden bg-white">
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Public_Layout;