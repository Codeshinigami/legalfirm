import { LoginContext } from "../context/loginProvider"
import { useContext } from "react"
import React, { useState } from 'react'
export default function Settings() {

    const mode = useContext(LoginContext);

    const saveMode = () => {
        mode.setDarkmode(!mode.darkmode)
        if (localStorage.getItem('theme') == 0 && mode.darkmode) {
            localStorage.setItem('theme', 1)
        }
        else {
            localStorage.setItem('theme', 0)
        }
    }

    let tailwnd = ""
    if (localStorage.getItem('theme') === undefined || localStorage.getItem('theme') == 0) {
        tailwnd = 'dark:bg-slate-800 dark:text-white dark:text-slate-400 '
    }
    return (
        <div style={{ height: '100vh', paddingLeft: '50px', paddingTop: '150px' }} className={tailwnd}>
            <div className="mr-auto ml-auto w-[30%]">
                <div className="flex items-center justify-center border-slate-400 border-2 p-4 rounded-2xl hover:ease-in-out hover:scale-[1.01] hover:transition-all">
                    <p className="mr-32">Change Theme </p>
                    <input
                        className="cursor-pointer relative w-10 h-5 transition-all duration-200 ease-in-out bg-gray-400 rounded-full shadow-inner outline-none appearance-none"
                        type="checkbox"
                        onChange={saveMode}
                        checked={mode.darkmode ? true : false}
                    />
                </div>
            </div>
        </div>
    )
}