import React, { useState } from 'react';
import Bp from './Bp';
import Ip from './Ip';
import Ll from './Ll';
import Cc from './Cc';
import Nda from './Nda';

export default function MainGenerator() {
  const [form, setForm] = useState('');

  const buttons = [
    {
      name: "Land Lease",
      image: "/LL.png",
       // Replace with the actual image URL for Business Partnership Agreement
    },
    {
      name: "Intellectual Property Agreement",
      image: "/IP.png", // Replace with the actual image URL for Intellectual Property Agreement
    },
    {
      name: "Business Partnership Agreement",
      image: "/BP.png", // Replace with the actual image URL for Land Lease
    },
    {
      name: "Criminal Case",
      image: "/CC.png", // Replace with the actual image URL for Criminal Case
    },
    {
      name: "Non-Disclosure Act",
      image: "/documentpanel.png", // Replace with the actual image URL for Non-Disclosure Act
    },
  ];

  return (
    <div className={`pt-4 justify-center h-[100] ${localStorage.getItem('theme')=='0'?"dark:bg-slate-800 dark:text-white dark:text-slate-400":""}`}>
      <h2 className='text-center text-2xl font-bold text-violet-600 mt-20'>Select from the below options the document you want to generate!</h2>
      <div className='flex flex-wrap justify-center py-10 w-[100%] '>
        {buttons.map((button, index) => (
          <div
            key={index}
            className='relative m-2 mx-5 inline-flex shadow-lg justify-center text-white py-28 px-40 w-40 h-91 bg-cover rounded-md transition duration-300 ease-in-out opacity-80 border-t-2 border-l-2 border-r-4 border-b-4 border-black cursor-pointer group'
            style={{ backgroundImage: `url("${button.image}")` }}
            onClick={() => { setForm(button.name) }}
          >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              {button.name}
            </div>
          </div>
        ))}
      </div>
      <hr className="my-4 w-full border-t-2 border-gray-500" />
      {/* html forms will be appended here */}
      < div className='flex justify-center'>
        {form === "Business Partnership Agreement" ? <Bp /> : ""}
        {form === "Intellectual Property Agreement" ? <Ip /> : ""}
        {form === "Land Lease" ? <Ll /> : ""}
        {form === "Criminal Case" ? <Cc /> : ""}
        {form === "Non-Disclosure Act" ? <Nda /> : ""}
      </div>
    </div>
  );
}