import { useNavigate } from "react-router";

export default function Navbar(){
    let tailwnd=""
    if(localStorage.getItem('theme')===undefined || localStorage.getItem('theme')==0){
        tailwnd = 'dark:bg-slate-800 dark:text-white dark:text-slate-400 w-[100%] h-14 border-b-[1px] fixed left-0 z-[40]'
    }
    else{
        tailwnd = "w-[100%] h-14 border-b-[1px]"
    }

    const navigate = useNavigate();

    return(
        <div className={tailwnd} onClick={() => {document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC"; location.pathname = "/"}}>
            <div className="float-right mr-20 flex mt-5 items-center cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                logout
            </div>
        </div>
    )
}