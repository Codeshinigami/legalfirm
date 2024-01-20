import React from 'react'

// let tailwnd=""
//     if(localStorage.getItem('theme')===undefined || localStorage.getItem('theme')==0){
//         tailwnd = 'dark:bg-slate-800 dark:text-white dark:text-slate-400 flex w-[100%] justify-between items-center pl-10 pr-10 align-middle mt-16'
//     }
//     else{
//         tailwnd = "flex w-[100%] justify-between items-center pl-10 pr-10 align-middle mt-16"
//     }

export default function Card(props) {
    return (
        <>
            <div class="dark:bg-slate-800 dark:text-white dark:text-slate-400 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700">
                <img height={'200px'} class="rounded-t-lg" src={props.image} alt="" />
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{props.title}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                    <a href="https://www.indiatvnews.com/" target='_blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-between">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}
