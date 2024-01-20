import React, { useEffect } from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto m-0 prevent-select">
      <div className="bg-[#060c2a80] flex-col flex h-full w-full justify-center items-center max-md:max-w-full max-md:px-5">
        <div className="content relative flex w-[942px] max-w-full flex-col items-stretch mt-36 mb-16 max-md:my-10 object-cover">
          <div className="text-white border-[#9ca3af72] rounded-full px-10 ml-auto mr-auto py-1 w-max border-[1px] mb-7 cursor-pointer hover:border-[#9ca3afd1]">
            <p className="flex text-[#9CA3AF]">
              Try Legalsage ai now.&nbsp;&nbsp;
              <span className="flex font-semibold text-white">
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </p>
          </div>
          <h1 className="text-white text-center text-6xl font-bold leading-[65px] max-md:max-w-full max-md:text-4xl">
            Feel the weight of our experience!
          </h1>
          <p className="text-[#D1D5DB] text-center text-xl leading-9 self-center max-w-[700px] mt-6 max-md:max-w-full max-md:mt-10">
            Our expertise lies around providing legal solutions and top quality
            lawyers in this Country!
          </p>
          <button className="text-white text-center text-lg font-semibold whitespace-nowrap shadow-lg bg-violet-600 self-center justify-center items-stretch mt-9 px-10 py-3 rounded-[150px] max-md:px-5">
            Get Started.
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
