import React, { useState } from 'react'
import Bp from './Bp'
import Ip from './Ip'
import Ll from './Ll'
import Cc from './Cc'
import Nda from './Nda'

export default function MainGenerator() {
    const [form,setform] = useState('')
    let buttons = [
        "Bisuness Parternship Agreement",
        "Intlectual Property Agreement",
        "Land Lease",
        "Criminal Case",
        "Non-Disclosure Act"
    ]
  return (
    <div className='mt-4'>
        <h2 className='text-center text-3xl'>Which document you want to generate today🤔???</h2>
      <div className='flex flex-col'>
        {buttons.map((e)=>{
            return <button className='m-2 bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-700' onClick={()=>{setform(e)}}>{e}</button>
        })}
      </div>
      {/* html forms will be appended here */}
      <div>
        {form==="Bisuness Parternship Agreement"?<Bp/>:""}
        {form==="Intlectual Property Agreement"?<Ip/>:""}
        {form==="Land Lease"?<Ll/>:""}
        {form==="Criminal Case"?<Cc/>:""}
        {form==="Non-Disclosure Act"?<Nda/>:""}
      </div>
    </div>
  )
}
