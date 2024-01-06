import React from 'react';
import {styles} from '../styles'
const Hero = () => {
  return (
    <section className='relative w-full h-full mx-auto'>
      <div className=" flex-col flex h-full w-full justify-center items-center max-md:max-w-full max-md:px-5">
        <div className="content relative flex w-[942px] max-w-full flex-col items-stretch mt-36 mb-16 max-md:my-10 object-cover">
          <h1 className="text-white text-center text-5xl font-bold leading-9 max-md:max-w-full max-md:text-4xl">FEEL THE WEIGHT OF OUR EXPERIENCE!</h1>
          <p className="text-white text-center text-xl leading-9 self-center max-w-[573px] mt-16 max-md:max-w-full max-md:mt-10">Our expertise lies around providing legal solutions and top quality lawyers in this Country!</p>
          <button className="text-white text-center text-xl font-semibold whitespace-nowrap shadow-lg bg-violet-600 self-center justify-center items-stretch mt-9 px-14 py-5 rounded-[150px] max-md:px-5">Get your Quote!</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
