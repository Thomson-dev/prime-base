/** @format */

import React from "react";
import earn from "../images/green-custom-bg@2x.a83366619412aab1d914-scaled.webp";

const Earn = () => {
  return (
    <div className=" background ">
      <div className="md:flex lg:px-[4rem] md:px-[2rem] px-[1rem] ">
        <div className="md:w-1/2 md:py-[4rem] sm:py-[4rem] py-[3rem] space-y-5 font-semibold lg:py-[6rem] sm:space-y-5  md:space-y-4 lg:space-y-8 ">
      
          <h1
            className="text-white text-2xl sm:text-5xl sm:max-w-md md:max-w-xl md:text-6xl lg:text-6xl font-sans
           font-semibold sm:leading-[3.5rem] md:leading-[4rem] lg:leading-[4rem]"
          >
            Earn on your crypto & Stablecoins every{" "}
            <span className="text-green-300">24 hours </span>{" "}
          </h1>

          <button className="bg-[#DDF2E7] rounded-2xl py-2 font-semibold text-lg px-5">
            Start Renting
          </button>
        </div>
        <div className="md:w-1/2   "></div>
      </div>
    </div>
  );
};

export default Earn;
