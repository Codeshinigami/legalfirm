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
      name: "Business Partnership Agreement",
      image: "/BP.png", // Replace with the actual image URL for Business Partnership Agreement
    },
    {
      name: "Intellectual Property Agreement",
      image: "/IP.png", // Replace with the actual image URL for Intellectual Property Agreement
    },
    {
      name: "Land Lease",
      image: "/LL.png", // Replace with the actual image URL for Land Lease
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
    <div className='mt-4 justify-center'>
      <h2 className='text-center text-3xl mt-20'>Select from the below options the documents you want to generate!</h2>
      <div className='flex flex-wrap py-10 px-20'>
        {buttons.map((button, index) => (
          <div
            key={index}
            className='relative m-2 inline-flex justify-center text-white py-28 px-40 w-40 h-91 bg-cover rounded-md transition duration-300 ease-in-out opacity-80 border-2 border-black cursor-pointer group'
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
      <div>
        {form === "Business Partnership Agreement" ? <Bp /> : ""}
        {form === "Intellectual Property Agreement" ? <Ip /> : ""}
        {form === "Land Lease" ? <Ll /> : ""}
        {form === "Criminal Case" ? <Cc /> : ""}
        {form === "Non-Disclosure Act" ? <Nda /> : ""}
      </div>
    </div>
  );
}