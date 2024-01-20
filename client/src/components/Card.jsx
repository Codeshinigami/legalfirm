import React from 'react'

let tailwnd=""
    if(localStorage.getItem('theme')===undefined || localStorage.getItem('theme')==0){
        tailwnd = 'dark:bg-slate-800 dark:text-white dark:text-slate-400 max-w-sm bg-white rounded-lg shadow dark:bg-gray-100 rounded-xl  rounded-t-lg overflow-hidden'
    }
    else{
        tailwnd = "w-[350px] max-w-sm bg-white border border-gray-200 shadow rounded-xl rounded-t-lg overflow-hidden"
    }

export default function Card(props) {
    return (
        <>
            <div class={tailwnd}>
                <img height={'200px'} src={props.image} alt="" />
                <div class="p-5">
                    <h5 class="mb-2 text-xl font-semibold tracking-tight ">{props.title}</h5>
                    <p class="mb-3 h-[100px] font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                    <a href="https://www.indiatvnews.com/" target='_blank' class="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-semibold py-2 px-3 rounded inline-flex items-center float-end mb-5">
                        Read more
                        <svg class="rtl:rotate-180 w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}
