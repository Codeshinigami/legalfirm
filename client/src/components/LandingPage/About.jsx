import React from 'react';
import { law1, law2, law3 } from '../../assets';
import {motion} from 'framer-motion';
const About = () => {
  return (
    <div id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-base font-semibold leading-7 text-violet-600 text-[27px]">
          ABOUT US
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Achievments
        </p>
      </div>
      <p className="relative flex text-[#1e1e1e] text-[20px] text-center tracking-[0] leading-[31.4px] m-10 mt-7 pl-20 pr-20">
      Established in 2012, our law firm has proudly served over 2,500 clients, specializing in a diverse range of legal disputes. With a dedicated team of experienced lawyers, we excel in handling complex issues and high-conflict situations. Our client-centric approach prioritizes personalized strategies, clear communication, and proven success. Whether you're an individual, small business, or corporation, we are committed to being your trusted legal partner. Choose us for tailored solutions, a track record of excellence, and unwavering dedication to achieving the best outcomes for our clients.
      </p>
      <div className="flex items-center justify-center gap-[30px] relative flex-[0_0_auto] mt-10">
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 , delay: 1.5}}
          className="relative w-[446.6px] h-[293px] shadow-lg shadow-black"
          alt="Element"
          src={law1}
        />
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="relative w-[446.6px] h-[293px] shadow-lg shadow-black"
          alt="Element"
          src={law2}
        />
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="relative w-[446.6px] h-[293px] shadow-lg shadow-black"
          alt="Element"
          src={law3}
        />
      </div>
    </div>
  );
};

export default About;
