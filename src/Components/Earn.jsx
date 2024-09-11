/** @format */

import React from "react";
import background from "../images/green-custom-bg.jpg";


const Earn = () => {
  return (
    <div className="relative ">
      <img src={background}  alt="" className="w-full sm:h-[40rem] h-[15rem] object-cover" />
      <div className="md:flex max-w-[1550px] flex-col absolute space-y-4 inset-0 justify-center  sm:items-left    w-[95%] mx-auto  ">
      
      
          <h1
            className="text-white mt-[5rem] ] text-2xl sm:text-5xl sm:max-w-md md:max-w-xl md:text-6xl lg:text-6xl font-sans
           font-semibold sm:leading-[3.5rem] md:leading-[4rem] lg:leading-[4rem]"
          >
            Earn on your crypto & Stablecoins every{" "}
            <span className="text-green-300">24 hours </span>{" "}
          </h1>

          <button className="bg-[#DDF2E7] rounded-2xl py-2 font-semibold text-lg w-fit px-4">
            Start Renting
          </button>
       
       
      </div>
    </div>
  );
};

export default Earn;
