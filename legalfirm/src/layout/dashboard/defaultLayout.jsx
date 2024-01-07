import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function LayoutDashboard(){
    return(
        <>
            <Navbar/>
            <Sidebar/>
            <Outlet/>
        </>
    )
}