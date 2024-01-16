import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function LayoutDashboard() {
    return (
        <>
            <div className="w-[100%] flex ">
                <div className="w-[16.6%]">
                    <Sidebar />
                </div>
                <div className="w-[83.4%]">
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </>
    )
}