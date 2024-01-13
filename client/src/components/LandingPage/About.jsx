import React from 'react';
import { law1,law2,law3 } from '../../assets';
const About = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600 text-[27px]">
          ABOUT US
        </h2>
      </div>
      <p className="relative flex [font-family:'Inter-Bold',Helvetica] font-bold text-[#1e1e1e] text-[25px] text-center tracking-[0] leading-[34.4px] m-10">
        Since 2012, our Firm has served over 2,500+ clients with various law disputes. Our lawyers represent a wide
        range of clients, but clients with complex legal issues and/or high conflict situations will benefit most from
        our law firm.
      </p>
      <div className="flex items-center justify-center gap-[30px] relative flex-[0_0_auto] mt-10">
        <img className="relative w-[446.6px] h-[293px]" alt="Element" src={law1} />
        <img className="relative w-[446.6px] h-[293px]" alt="Element" src={law2} />
        <img className="relative w-[446.6px] h-[293px]" alt="Element" src={law3} />
      </div>
    </div>
    );
};

export default About;