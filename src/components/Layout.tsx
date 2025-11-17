import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Menu from "./Menu";


function Layout () {
    return (
        <div className="min-h-screen bg-gray-800 text-amber-50">
            <Navbar />
            <div className="flex">
                <div className="main w-[250px] px-5 py-[5px] border-r-2 border-r-gray-400">
                    <Menu />
                </div>
                <div className="container w-full px-5 py-[5px]">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;