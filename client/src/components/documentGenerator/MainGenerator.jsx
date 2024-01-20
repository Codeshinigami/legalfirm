import React, { useState } from 'react'
import Bp from './Bp'
import Ip from './Ip'
import Ll from './Ll'
import Cc from './Cc'
import Nda from './Nda'

export default function MainGenerator() {
    const [form,setform] = useState('')
    let buttons = [
        "Business Parternship Agreement",
        "Intellectual Property Agreement",
        "Land Lease",
        "Criminal Case",
        "Non-Disclosure Act"
    ]
  return (
    <div className='mt-4 justify-center'>
        <h2 className='text-center text-3xl'>Select from the below options the documents you want to generate!</h2>
      <div className='flex flex-col'>
        {buttons.map((e)=>{
            return <button className='m-2 inline-flex justify-center  bg-violet-500 text-white py-2 px-30 rounded-md transition duration-300 ease-in-out hover:bg-blue-700' onClick={()=>{setform(e)}}>{e}</button>
        })}
      </div>
      {/* html forms will be appended here */}
      <div>
        {form==="Business Parternship Agreement"?<Bp/>:""}
        {form==="Intellectual Property Agreement"?<Ip/>:""}
        {form==="Land Lease"?<Ll/>:""}
        {form==="Criminal Case"?<Cc/>:""}
        {form==="Non-Disclosure Act"?<Nda/>:""}
      </div>
    </div>
  )
}
