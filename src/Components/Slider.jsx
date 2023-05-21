import React from "react";
import Swipper from "./Swipper";



const Slider = () => {
  return (
    <div className="background2">
      <div className=" px-[1rem] pb-8 sm:mx-[3rem] md:w-100  md:px-[3rem] ">
        <h1 className="text-red-500 sm:text-green-500 md:text-black lg:text-orange-600 ">
          Testing
        </h1>

        <div className="flex justify-center flex-col space-y-10 items-center py-[5rem]">
          <div className="">
            <h1 className="md:text-5xl text-3xl sm:text-5xl max-w-md text-center md:leading-10 text-white font-bold">
              We have 4 renting programs
            </h1>
          </div>
          <div className="md:w-[35%] w-[100%] sm:w-[50%] h-16 bg-[#fefcf9] rounded-xl"></div>
        </div>

        <div className="">
          <Swipper />
        </div>
      </div>
    </div>
  );
};

export default Slider;
