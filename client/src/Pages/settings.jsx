import { LoginContext } from "../context/loginProvider"
import { useContext } from "react"
import React, { useState } from 'react'
export default function Settings() {

    const mode = useContext(LoginContext);
    console.log(mode)
    const saveMode = () =>{
        mode.setDarkmode(!mode.darkmode)
        if(localStorage.getItem('theme')===undefined || localStorage.getItem('theme')==="0"){
            localStorage.setItem('theme',1)
        }
        else{
            localStorage.setItem('theme',0)
        }
    }

    let tailwnd=""
    if(localStorage.getItem('theme')===undefined || localStorage.getItem('theme')==0){
        tailwnd = 'dark:bg-slate-800 dark:text-white dark:text-slate-400 '
    }
    return (
        <div style={{height:'100vh',paddingTop:'50px'}} className={tailwnd}>
            <label class=" relative inline-flex items-center cursor-pointer m-4">
                <input type="checkbox" value="" class="sr-only peer" onChange={()=>{saveMode()}} />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-700">Toggle me</span>
            </label>
        </div>
    )
}