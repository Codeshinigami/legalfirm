import React from 'react'

let tailwnd=""
    if(localStorage.getItem('theme')===undefined || localStorage.getItem('theme')==0){
        tailwnd = 'dark:bg-slate-800 dark:text-white dark:text-slate-400 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700'
    }
    else{
        tailwnd = " max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700"
    }

export default function Card(props) {
    return (
        <>
            <div class={tailwnd}>
                <img height={'200px'} class="rounded-t-lg" src={props.image} alt="" />
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">{props.title}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                    <a href="https://www.indiatvnews.com/" target='_blank' class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
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
