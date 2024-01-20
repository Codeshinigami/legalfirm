import React, { useState } from 'react'

export default function Bubble() {
  const [isactive, setisactive] = useState(false)
  const [chat, setchat] = useState(['How may i help you today', 'sfs', 'sfwe'])
  const [options, setoptions] = useState(['who are we', 'what we do'])

  const bottom = document.querySelector("bottom");

  

  return (
    <>
      <button onClick={() => { setisactive(!isactive) }} className='fixed bottom-6 right-6 bg-transparent rounded-full h-20 w-20 text-white height-10'>
        <img width='100px' src="/cutebot_trans.png" alt="" className='rounded-full' />
      </button>
      {isactive ? <div style={{ height: '500px', width: '300px' }} className='fixed bottom-32 right-4 bg-transparent backdrop-filter backdrop-blur-md border border-gray-300  rounded text-white height-10 pt-2'>
        {chat.map((e, i) => {
          return <div className={i % 2 != 0 ? "flex justify-end" : ""} >
            <div className={i % 2 != 0 ? "p-1 pl-2 pr-2  m-1 mt-2 bg-red-800 inline rounded-full text-right" : "p-1 pl-2 pr-2  m-1 mt-2 bg-green-800 inline rounded-full text-right"}>
              {e}
            </div>
          </div>
        })}
        <div id='bottom'></div>
        <div className='absolute top-[85%] ml-8'>
          {options.map((e) => {
            return <button className='bg-blue-600 p-2 border-gray-300 m-1' onClick={() => { setchat([...chat, e]) }}>{e}</button>
          })}
        </div>
      </div> : ""}
    </>

  )
}
