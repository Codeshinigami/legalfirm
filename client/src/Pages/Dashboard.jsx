import React, { useState } from 'react'
import newsdata from '../constants/newsdata'
import Card from '../components/Card'
// import Link

let tailwnd=""
    if(localStorage.getItem('theme')===undefined || localStorage.getItem('theme')==0){
        tailwnd = 'dark:bg-slate-800 dark:text-white dark:text-slate-400 px-20 pt-10 w-[100%]'
    }
    else{
        tailwnd = "px-20 pt-10 w-[100%]"
    }

export default function Dashboard() {
    const [newscount, setnewscount] = useState(4)
    return (
        <div className={tailwnd}>
            <div className="w-full  overflow-hidden h-[200px] flex justify-center relative prevent-select rounded-xl">
                <img className="w-[100%] object-cover" src="https://blog.ipleaders.in/wp-content/uploads/2021/08/law-firm-1-800x534.jpg" alt="" />
                <h2 className="absolute top-[43%] text-white text-2xl font-semibold">Hey this is a banner</h2>
            </div>
            {/* <div className="grid grid-cols-3 grid-rows-1 gap-10 mt-5">
                <div className="bg-blue-600 w-full h-[180px] rounded-lg"></div>
                <div className="bg-blue-600 w-full h-[180px] rounded-lg"></div>
                <div className="bg-blue-600 w-full h-[180px] rounded-lg"></div>
            </div> */}

            {/* Div to show news */}
            <div className='newscards'>
                <h2 className='text-center mt-10 text-3xl'>Today's Legal News</h2>
                <div className='grid grid-cols-3 gap-4 mt-8 mb-8'>
                    {newsdata.news.slice(1, newscount).map((e) => {
                        return <Card image={e.image} source={e.source} title={e.title} description={e.content.slice(1,100)+'...'} author={e.author} />
                    })}
                </div>
                <div className='w-full text-center mt-8 pb-8'>
                    <button className='bg-blue-500 text-white py-2 px-4 rounded-md' onClick={() => { setnewscount(newscount + 3) }}>{newscount<=12?"Load More":"You Are Done For The Day 😓"}</button>
                </div>
            </div>


        </div>
    )
}