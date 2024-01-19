import React, { useState } from 'react'
import Bp from './Bp'

export default function MainGenerator() {
    const [form,setform] = useState('')
    let buttons = [
        "Bisuness Parternship Agreement",
        "Intlectual Property Agreement",
        "Land Lease",
        "Criminal Case",
    ]
  return (
    <div className='mt-4'>
        <h2 className='text-center text-3xl'>Which document you want to generate today🤔???</h2>
      <div className='flex flex-wrap'>
        {buttons.map((e)=>{
            return <button className='m-2 bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-700' onClick={()=>{setform(e)}}>{e}</button>
        })}
      </div>
      {/* html forms will be appended here */}
      <div>
        {form}
        {form==="Bisuness Parternship Agreement"?<Bp/>:""}
      </div>
    </div>
  )
}
