import React from "react";
import Swipper from "./Swipper";



const Slider = () => {
  return (
    <div className="background2">
      <div className="px-[3rem] ">
        {/* <h1 className="text-red-500 sm:text-green-500 md:text-black lg:text-orange-600 ">
          Testing
        </h1> */}

        <div className="flex justify-center flex-col space-y-10 items-center py-[5rem]">
          <div className="">
            <h1 className="text-5xl max-w-md text-center leading-10 text-white font-bold">
              We have 4 renting programs
            </h1>
          </div>
          <div className="w-[35%] h-16 bg-[#fefcf9] rounded-xl"></div>
        </div>

        <div className="">
          <Swipper />
        </div>
      </div>
    </div>
  );
};

export default Slider;
