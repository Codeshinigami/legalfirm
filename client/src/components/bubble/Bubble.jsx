import React, { useState } from 'react'

export default function Bubble() {
    const [isactive,setisactive] = useState(false)
    const[chat,setchat] = useState(['How may i help you today','sfs','sfwe'])
  return (
    <>
    <button onClick={()=>{setisactive(!isactive)}} className='fixed bottom-4 right-4 bg-blue-500  rounded-full text-white height-10'>
      <img width='100px' src="/geekbot.svg" alt="" />
    </button>
    {isactive?<div style={{height:'500px',width:'300px'}} className='fixed bottom-32 right-4 bg-blue-500 rounded text-white height-10 pt-2'>
        {chat.map((e,i)=>{
            return <div className={i%2!=0?"flex justify-end":""} >
             <div className={i%2!=0?"p-1 pl-2 pr-2  m-1 mt-2 bg-red-800 inline rounded-full text-right":"p-1 pl-2 pr-2  m-1 mt-2 bg-green-800 inline rounded-full text-right"}>
                {e}
            </div>
            </div>
        })}
    </div>:""}
    </>

  )
}
