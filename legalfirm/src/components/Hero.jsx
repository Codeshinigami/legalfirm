import React from 'react';
import { herobg } from '../assets';
const Hero = () => {
    return (
        <div className="bg-black flex flex-col justify-center items-stretch">
      <header className="header justify-center items-stretch bg-white flex w-full flex-col max-md:max-w-full">
        <div className="container flex-col overflow-hidden relative flex min-h-[592px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
          <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cf050307d8938b840e9d1f2ee3e94982d2c328c98443a105b48c89b7ed3477dd?apiKey=99e76be7cb8344d1ac83bc7ece206d98&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf050307d8938b840e9d1f2ee3e94982d2c328c98443a105b48c89b7ed3477dd?apiKey=99e76be7cb8344d1ac83bc7ece206d98&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf050307d8938b840e9d1f2ee3e94982d2c328c98443a105b48c89b7ed3477dd?apiKey=99e76be7cb8344d1ac83bc7ece206d98&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf050307d8938b840e9d1f2ee3e94982d2c328c98443a105b48c89b7ed3477dd?apiKey=99e76be7cb8344d1ac83bc7ece206d98&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf050307d8938b840e9d1f2ee3e94982d2c328c98443a105b48c89b7ed3477dd?apiKey=99e76be7cb8344d1ac83bc7ece206d98&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf050307d8938b840e9d1f2ee3e94982d2c328c98443a105b48c89b7ed3477dd?apiKey=99e76be7cb8344d1ac83bc7ece206d98&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf050307d8938b840e9d1f2ee3e94982d2c328c98443a105b48c89b7ed3477dd?apiKey=99e76be7cb8344d1ac83bc7ece206d98&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf050307d8938b840e9d1f2ee3e94982d2c328c98443a105b48c89b7ed3477dd?apiKey=99e76be7cb8344d1ac83bc7ece206d98&"className="absolute h-full w-full object-cover object-center inset-0" alt="Description of image" />
          <div className="content relative flex w-[942px] max-w-full flex-col items-stretch mt-36 mb-16 max-md:my-10 object-cover">
            <h1 className="text-white text-center text-5xl font-bold leading-9 max-md:max-w-full max-md:text-4xl">FEEL THE WEIGHT OF OUR EXPERIENCE!</h1>
            <p className="text-white text-center text-xl leading-9 self-center max-w-[573px] mt-16 max-md:max-w-full max-md:mt-10">Our expertise lies around providing legal solutions and top quality lawyers in this Country!</p>
            <button className="text-white text-center text-xl font-semibold whitespace-nowrap shadow-lg bg-violet-600 self-center justify-center items-stretch mt-9 px-14 py-5 rounded-[150px] max-md:px-5">Get your Quote!</button>
          </div>
        </div>
      </header>
    </div>
    );
};

export default Hero;
